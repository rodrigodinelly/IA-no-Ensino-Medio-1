(function () {
  const store = window.AppStorage; const data = window.APP_DATA; const page = document.body.dataset.track; const app = document.querySelector('[data-track-app]');
  if (!page || !app) return; store.load();
  const state = store.get();
  function redirect(path) { window.location.href = path; }
  if (!state.profile) return redirect('./nivelamento.html');
  if (page === 'explorador' && state.profile !== 'explorador' && !state.tracks.explorador.completedTrack) return redirect('./usuario.html');
  if (page === 'usuario' && state.profile !== 'usuario' && !state.tracks.explorador.completedTrack) return redirect('./explorador.html');
  const track = data.tracks[page]; const t = state.tracks[page];
  store.update(s => { s.currentTrack = page; s.tracks[page].started = true; });
  function focusTitle() { document.querySelector('h1').focus(); }
  function progress() { const done = t.completed.length; return `<div class="progress-text">${track.name}: ${done} de 5 módulos concluídos</div><div class="progress" role="progressbar" aria-label="Progresso da trilha" aria-valuemin="0" aria-valuemax="5" aria-valuenow="${done}"><span style="width:${done * 20}%"></span></div>`; }
  function render(moduleId) {
    const id = moduleId || t.currentModule; if (t.challengeDone) return renderChallenge();
    if (id > t.currentModule || id < 1) return redirect(`./${page}.html`);
    const module = track.modules[id - 1]; const isDone = t.completed.includes(id);
    app.innerHTML = `<p class="eyebrow">${track.name}</p>${progress()}<article class="card"><p class="tag">${module.progression} · ${module.bnccCode}</p><h2 tabindex="-1">Módulo ${module.order}: ${module.title}</h2><h3>Objetivo</h3><p>${module.objective}</p><h3>Conteúdo</h3><p>${module.content}</p><h3>Exemplo</h3><p>${module.example}</p></article><form id="activity" class="card"><fieldset><legend>${module.activity.question}</legend>${module.activity.options.map((o, i) => `<label class="option"><input type="radio" name="activity" value="${i}" ${isDone ? 'disabled' : ''}> <span>${o}</span></label>`).join('')}</fieldset><p id="activity-error" class="message error" role="alert" hidden>Escolha uma alternativa.</p><div id="feedback" class="feedback" aria-live="polite" hidden></div>${isDone ? `<div class="actions"><button type="button" id="review-next">${id < 5 ? 'Ver próximo módulo' : 'Ir ao desafio'}</button></div>` : '<div class="actions"><button type="submit">Responder atividade</button></div>'}</form><nav class="module-nav" aria-label="Módulos">${track.modules.map(m => `<button type="button" data-module="${m.id}" ${m.id > t.currentModule ? 'disabled' : ''} class="${m.id === id ? 'active' : ''}">Módulo ${m.id}${t.completed.includes(m.id) ? ' ✓' : ''}</button>`).join('')}</nav>`;
    document.querySelectorAll('[data-module]').forEach(button => button.addEventListener('click', () => { render(Number(button.dataset.module)); focusTitle(); }));
    const next = document.querySelector('#review-next'); if (next) next.addEventListener('click', () => { if (id < 5) render(id + 1); else renderChallenge(); focusTitle(); });
    const form = document.querySelector('#activity'); if (!isDone) form.addEventListener('submit', e => { e.preventDefault(); const chosen = form.querySelector('input:checked'); if (!chosen) return form.querySelector('#activity-error').hidden = false; const correct = Number(chosen.value) === module.activity.correct; const feedback = form.querySelector('#feedback'); feedback.hidden = false; feedback.innerHTML = `<strong>${correct ? 'Você acertou!' : 'Vamos tentar novamente.'}</strong><p>${correct ? module.activity.feedbackCorrect : module.activity.feedbackIncorrect}</p>`; if (correct) { store.update(s => { const st = s.tracks[page]; if (!st.completed.includes(id)) st.completed.push(id); st.currentModule = Math.min(id + 1, 5); }); setTimeout(() => { window.location.reload(); }, 700); } });
  }
  function renderChallenge() {
    const isExplorer = page === 'explorador';
    const feedbackText = isExplorer
      ? 'Você concluiu a análise. Ao usar IA, continue verificando fontes, examinando evidências e questionando conclusões apressadas.'
      : 'Você montou uma estratégia de estudo. Antes de finalizar, confirme que as decisões e a produção continuam sendo suas.';
    app.innerHTML = `<p class="eyebrow">${track.name}</p>${progress()}<article class="card"><h2 tabindex="-1">${track.challenge.title}</h2><p>${track.challenge.prompt}</p><p>Responda às perguntas. Você precisa acertar pelo menos ${track.challenge.minScore} para concluir.</p><form id="challenge">${track.challenge.questions.map((question, i) => `<fieldset><legend>${i + 1}. ${question.text}</legend><label class="option"><input type="radio" name="challenge-${i}" value="true" required> <span>Sim</span></label><label class="option"><input type="radio" name="challenge-${i}" value="false"> <span>Não</span></label></fieldset>`).join('')}<div class="actions"><button>Enviar respostas</button></div></form><section id="challenge-feedback" class="feedback" aria-live="polite" hidden></section></article>`;
    document.querySelector('#challenge').addEventListener('submit', e => {
      e.preventDefault();
      const form = e.currentTarget;
      const results = track.challenge.questions.map((question, i) => {
        const answer = form.querySelector(`input[name="challenge-${i}"]:checked`).value === 'true';
        return { question, correct: answer === question.correct };
      });
      const score = results.filter(result => result.correct).length;
      const passed = score >= track.challenge.minScore;
      const feedback = document.querySelector('#challenge-feedback');
      feedback.hidden = false;
      const summary = `<ul class="challenge-results">${results.map((result, i) => `<li><strong>${result.correct ? '✓ Acerto' : '✗ Erro'}:</strong> Questão ${i + 1}. ${result.correct ? 'Boa decisão.' : `Resposta esperada: ${result.question.correct ? 'Sim' : 'Não'}.`}</li>`).join('')}</ul>`;
      if (!passed) {
        feedback.innerHTML = `<strong>Você acertou ${score} de ${results.length}.</strong><p>São necessários pelo menos ${track.challenge.minScore} acertos para concluir. Revise o feedback e tente novamente.</p>${summary}<div class="actions"><button type="button" id="challenge-retry">Tentar novamente</button></div>`;
        document.querySelector('#challenge-retry').focus();
        document.querySelector('#challenge-retry').addEventListener('click', () => { form.reset(); feedback.hidden = true; form.hidden = false; form.querySelector('input').focus(); });
        return;
      }
      form.hidden = true;
      store.update(s => { const st = s.tracks[page]; st.challengeDone = true; st.completedTrack = true; });
      feedback.innerHTML = isExplorer
        ? `<strong>Desafio concluído! Você acertou ${score} de ${results.length}.</strong><p>${feedbackText}</p>${summary}<p>Deseja iniciar agora a próxima trilha, <strong>Usuário</strong>?</p><div class="actions"><button type="button" id="start-next-track">Sim, iniciar trilha Usuário</button><a class="button secondary" href="./index.html">Não, voltar ao início</a></div>`
        : `<strong>Desafio concluído! Você acertou ${score} de ${results.length}.</strong><p>${feedbackText}</p>${summary}<button type="button" id="challenge-continue">Ver conclusão</button>`;
      const nextButton = document.querySelector('#start-next-track') || document.querySelector('#challenge-continue');
      nextButton.focus();
      nextButton.addEventListener('click', () => redirect(isExplorer ? './usuario.html' : './conclusao.html'));
    });
  }
  render();
})();
