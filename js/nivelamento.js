(function () {
  const data = window.APP_DATA;
  const store = window.AppStorage;
  const app = document.querySelector('[data-leveling-app]');
  if (!app) return;
  store.load();
  const notice = document.querySelector('#storage-notice');
  if (!store.isPersistent()) notice.hidden = false;

  function focusTitle() { document.querySelector('h1').focus(); }
  function render() {
    const state = store.get();
    const d = state.diagnostic;
    if (d.finished) return renderResult();
    const q = data.questions[d.index];
    const answer = d.answers[q.id];
    app.innerHTML = `<p class="eyebrow">Nivelamento</p><div class="progress-text">Questão ${d.index + 1} de ${data.questions.length}</div><div class="progress" role="progressbar" aria-label="Progresso do nivelamento" aria-valuemin="1" aria-valuemax="10" aria-valuenow="${d.index + 1}"><span style="width:${(d.index + 1) * 10}%"></span></div><form id="question-form"><fieldset><legend>${q.text}</legend>${q.options.map((o, i) => `<label class="option"><input type="radio" name="answer" value="${i}" ${answer === i ? 'checked' : ''}> <span>${o}</span></label>`).join('')}</fieldset><p id="form-error" class="message error" role="alert" hidden>Escolha uma alternativa antes de avançar.</p><div class="actions"><button type="button" id="back" class="secondary" ${d.index === 0 ? 'disabled' : ''}>Voltar</button><button type="submit">${d.index === data.questions.length - 1 ? 'Finalizar nivelamento' : 'Avançar'}</button></div></form>`;
    document.querySelector('#back').addEventListener('click', () => { store.update(s => s.diagnostic.index -= 1); render(); focusTitle(); });
    document.querySelector('#question-form').addEventListener('submit', event => {
      event.preventDefault(); const checked = document.querySelector('input[name="answer"]:checked');
      if (!checked) { document.querySelector('#form-error').hidden = false; return; }
      store.update(s => { s.diagnostic.answers[q.id] = Number(checked.value); if (s.diagnostic.index < data.questions.length - 1) s.diagnostic.index += 1; else finalize(s); });
      render(); focusTitle();
    });
  }
  function finalize(state) {
    let score = 0, criticalScore = 0;
    data.questions.forEach(q => { if (!q.diagnostic && state.diagnostic.answers[q.id] === q.correct) score += 1; if (q.critical && state.diagnostic.answers[q.id] === q.correct) criticalScore += 1; });
    state.diagnostic.score = score; state.diagnostic.criticalScore = criticalScore; state.diagnostic.finished = true;
    state.profile = score >= 5 && criticalScore >= 2 ? 'usuario' : 'explorador'; state.currentTrack = state.profile;
  }
  function renderResult() {
    const state = store.get(); const profileName = state.profile === 'usuario' ? 'Usuário' : 'Explorador';
    const canRestart = !state.tracks[state.profile].started;
    app.innerHTML = `<p class="eyebrow">Resultado do nivelamento</p><h2 tabindex="-1">Seu perfil: ${profileName}</h2><p>${state.profile === 'usuario' ? 'Você já demonstra uma base crítica. Vamos aprender a usar IA como apoio ativo.' : 'Você vai fortalecer conceitos, verificação e uso responsável antes de avançar.'}</p><p class="score">Pontuação: ${state.diagnostic.score}/8 · Pensamento crítico: ${state.diagnostic.criticalScore}/3</p><ol class="result-list">${data.questions.map(q => `<li>${q.text}<strong>${state.diagnostic.answers[q.id] === q.correct ? 'Correta' : 'Precisa ser reconsiderada'}</strong></li>`).join('')}</ol><div class="actions"><a class="button" href="./${state.profile}.html" id="start-track">Iniciar ${data.tracks[state.profile].name}</a>${canRestart ? '<button class="secondary" id="restart">Refazer nivelamento</button>' : '<p class="message">O nivelamento não pode ser refeito após o início da trilha.</p>'}</div>`;
    const restart = document.querySelector('#restart'); if (restart) restart.addEventListener('click', () => { if (confirm('Refazer o nivelamento? O resultado atual será substituído.')) { store.resetDiagnostic(); render(); focusTitle(); } });
  }
  render();
})();
