# Tarefas: Trilhas de Aprendizagem com IA

**Entrada**: Documentos de design em `specs/001-trilhas-ia/`.

**Pré-requisitos**: `plan.md`, `spec.md`, `research.md`, `data-model.md`, `contracts/` e `quickstart.md`.

**Testes**: Não foram solicitados testes automatizados. A validação manual obrigatória está na fase final, conforme `quickstart.md`.

## Formato: `[ID] [P?] [História] Descrição`

- **[P]**: Tarefa paralelizável em arquivo distinto, sem dependência pendente.
- **[US#]**: História de usuário à qual a tarefa pertence.

## Fase 1: Configuração

**Objetivo**: Criar a estrutura estática e a identidade visual compartilhada.

- [X] T001 Criar `index.html`, `nivelamento.html`, `explorador.html`, `usuario.html`, `conclusao.html`, `css/style.css`, `js/data.js`, `js/nivelamento.js`, `js/trilhas.js`, `js/storage.js` e `assets/images/.gitkeep` conforme `specs/001-trilhas-ia/plan.md`.
- [X] T002 [P] Criar a estrutura semântica comum (`header`, `main`, título principal e navegação) e caminhos relativos em `index.html`.
- [X] T003 [P] Criar em `css/style.css` os estilos-base de tokens visuais, cartões, botões, alternativas, feedback, foco visível, layout de 320 px e desktop e preferência de movimento reduzido.
- [X] T004 [P] Definir em `js/data.js` o esquema de conteúdo e metadados pedagógicos com IDs estáveis, objetivo, etapa da progressão e habilidade BNCC por módulo e atividade.
- [X] T004a Definir e aprovar em `specs/001-trilhas-ia/data-model.md` as habilidades específicas da BNCC Computação para cada módulo e atividade antes de cadastrar conteúdo pedagógico em `js/data.js`.

---

## Fase 2: Fundamentos compartilhados

**Objetivo**: Implementar estado local seguro, proteção de páginas e componentes acessíveis reutilizáveis.

**⚠️ CRÍTICO**: Esta fase bloqueia a conclusão de todas as histórias de usuário.

- [X] T005 Implementar em `js/storage.js` estado versionado contendo somente perfil, respostas por ID, resultado, trilha atual e estados das trilhas; validar “score inteiro de 0 a 8”, “criticalScore inteiro de 0 a 3” e módulos concluídos sem duplicados entre 1 e 5.
- [X] T006 Implementar em `js/storage.js` recuperação para estado ausente, inválido, incompatível ou `localStorage` indisponível, com sessão segura em memória, aviso de não persistência e limpeza confirmada apenas da chave do projeto.
- [X] T007 Implementar em `js/trilhas.js` funções de guarda de etapa, cálculo de módulo liberado, registro de conclusão e redirecionamento relativo para a etapa permitida.
- [X] T008 [P] Criar em `css/style.css` utilitários para mensagem textual de erro, barra de progresso rotulada, região de feedback e foco após mudança dinâmica.

**Ponto de controle**: Estado local, recuperação, proteção de etapa e base acessível disponíveis.

---

## Fase 3: História de Usuário 1 — Realizar nivelamento e receber uma trilha (Prioridade: P1) 🎯 MVP

**Objetivo**: Permitir diagnóstico de 10 questões com classificação correta e resultado sem feedback antecipado.

**Teste independente**: Em `nivelamento.html`, responder, voltar e alterar respostas; validar os vetores `5/2`, `5/1`, `4/3` e `8/3`; conferir resultado apenas ao final.

- [X] T009 [US1] Criar em `js/data.js` exatamente 10 questões com ID, enunciado, alternativas, resposta correta, indicação diagnóstica e crítica; marcar duas diagnósticas, oito pontuáveis e três de pensamento crítico.
- [X] T010 [US1] Criar em `nivelamento.html` formulário semântico de uma questão por vez, com `fieldset`, `legend`, alternativas nativas, posição textual, barra de progresso acessível e controles Voltar, Avançar e Finalizar.
- [X] T011 [US1] Implementar em `js/nivelamento.js` carregamento, salvamento por ID, avanço bloqueado sem resposta, retorno livre e substituição de respostas até a finalização; mover foco ao título após trocar de questão.
- [X] T012 [US1] Implementar em `js/nivelamento.js` cálculo que exclui as duas diagnósticas, calcula `score` e `criticalScore` e classifica Usuário somente com `score >= 5 && criticalScore >= 2`.
- [X] T013 [US1] Implementar em `nivelamento.html` e `js/nivelamento.js` resultado com perfil, explicação, indicação de acerto ou erro por questão e caminho relativo para a trilha, sem revelar correção antes da décima resposta.
- [X] T014 [US1] Implementar em `nivelamento.html`, `js/nivelamento.js` e `js/storage.js` o reinício permitido somente entre o resultado e o primeiro acesso à trilha recomendada; depois disso, informar bloqueio sem apagar progresso.

**Ponto de controle**: Nivelamento funcional e classificações corretas, sem trilha implementada.

---

## Fase 4: História de Usuário 2 — Aprender criticamente na trilha Explorador (Prioridade: P1)

**Objetivo**: Oferecer cinco módulos Explorador sequenciais, feedback formativo e desafio de análise crítica.

**Teste independente**: Com perfil Explorador pré-configurado, abrir `explorador.html`, concluir cinco módulos e desafio e confirmar liberação de `usuario.html`.

- [X] T015 [US2] Adicionar em `js/data.js` os cinco módulos Explorador — conceito de IA, padrões de resposta, erros, método V-E-R e uso responsável — com título, objetivo, conteúdo curto, exemplo, atividade, feedback e metadados pedagógicos.
- [X] T016 [US2] Criar em `explorador.html` página semântica da trilha com objetivo, progresso, região de módulo, atividade, feedback e controles de avanço relativos.
- [X] T017 [US2] Implementar em `js/trilhas.js` renderização sequencial Explorador, permitindo módulo atual e concluídos para revisão e registrando `iniciada`, `moduloAtual` e `modulosConcluidos`.
- [X] T018 [US2] Implementar em `js/trilhas.js` feedback persistente: erro aponta o ponto a reconsiderar e permite nova tentativa; acerto explica, conclui módulo e libera o seguinte.
- [X] T019 [US2] Adicionar em `js/data.js` e implementar em `js/trilhas.js` o desafio Explorador com os quatro itens obrigatórios e encaminhamento para `./usuario.html` após conclusão.

**Ponto de controle**: Explorador completo encaminha à próxima etapa sem notas ou conversa livre com IA.

---

## Fase 5: História de Usuário 3 — Usar IA como apoio ativo de aprendizagem (Prioridade: P1)

**Objetivo**: Oferecer cinco módulos Usuário de aprendizagem ativa, verificação e autoria, com desafio de estratégia de estudo.

**Teste independente**: Com perfil Usuário ou Explorador concluído, abrir `usuario.html`, concluir módulos e entregar os cinco elementos obrigatórios do desafio.

- [X] T020 [US3] Adicionar em `js/data.js` os cinco módulos Usuário — aprender sem resposta pronta, formular solicitações, tutoria, verificação e autoria — com conteúdo, exemplo, atividade, feedback e metadados pedagógicos.
- [X] T021 [US3] Criar em `usuario.html` página semântica com objetivo, progresso, módulo atual, atividade, feedback e controles acessíveis de avanço e revisão.
- [X] T022 [US3] Estender em `js/trilhas.js` a renderização e progressão sequencial da trilha Usuário, preservando bloqueios, revisão de concluídos e proibição de reinício; em erro, explicar o ponto a reconsiderar e permitir nova tentativa; em acerto, explicar o motivo, concluir o módulo e liberar o próximo.
- [X] T023 [US3] Adicionar em `js/data.js` e implementar em `js/trilhas.js` desafio Usuário com solicitação para aprender, exemplos, teste de conhecimentos, estratégia de verificação e produção própria antes de liberar `./conclusao.html`.

**Ponto de controle**: Usuário concluída sem substituir autoria e libera conclusão somente após desafio completo.

---

## Fase 6: História de Usuário 4 — Progredir e concluir o percurso (Prioridade: P2)

**Objetivo**: Exibir progresso claro e conclusão do percurso sem ranking ou comparação entre estudantes.

**Teste independente**: Partindo de qualquer estado válido, verificar etapa atual, módulos concluídos e próximo passo; concluir Usuário e abrir a conclusão.

- [X] T024 [US4] Estender em `js/trilhas.js` resumo de progresso para informar etapa atual, módulos concluídos e próximo passo com texto acessível além da barra visual.
- [X] T025 [US4] Criar em `conclusao.html` a conclusão com síntese do aprendizado, autonomia, autoria, verificação e uso responsável, sem notas, ranking ou comparação.
- [X] T026 [US4] Atualizar `index.html` com propósito, privacidade, ausência de conversa livre com IA e chamada clara para `./nivelamento.html`; revisar navegação relativa das cinco páginas.
- [X] T027 [US4] Implementar em `js/trilhas.js` guardas de URL direta para `explorador.html`, `usuario.html` e `conclusao.html`, redirecionando para etapa válida sem expor conteúdo bloqueado.

**Ponto de controle**: O estudante entende seu lugar no percurso e alcança páginas apenas pelo fluxo pedagógico permitido.

---

## Fase 7: Polimento e validação transversal

**Objetivo**: Validar jornadas, responsividade, acessibilidade e publicação estática.

- [X] T028 [P] Revisar e ajustar em `css/style.css`, após as jornadas prontas, contraste nível AA, foco visível, alvos de toque e clique de no mínimo 44 × 44 px, zoom de 200%, layout de 320 px e desktop, feedback não baseado só em cor e movimento reduzido.
- [ ] T029 Executar e registrar em `specs/001-trilhas-ia/quickstart.md` cenários de GitHub Pages, vetores de classificação, persistência, retomada, bloqueios de reinício, trilhas, teclado, leitor de tela quando disponível e responsividade.
- [X] T030 Revisar em `index.html`, `nivelamento.html`, `explorador.html`, `usuario.html`, `conclusao.html`, `css/style.css` e `js/*.js` caminhos relativos, ausência de dependências externas, dados pessoais, correção automática por IA, notas, rankings e comparações.
- [ ] T031 Publicar o diretório raiz no GitHub Pages e validar as cinco páginas após recarga em subdiretório de publicação, registrando o resultado em `specs/001-trilhas-ia/quickstart.md`.

---

## Dependências e ordem de execução

- Configuração → Fundamentos → US1 (MVP) → US2 e US3 → US4 → Polimento.
- US2 pode ser validada com perfil Explorador pré-configurado; no percurso real depende do resultado de US1.
- US3 pode ser validada com perfil Usuário pré-configurado; no percurso real depende de US1 ou da conclusão de US2.
- US4 integra as transições de US1, US2 e US3.

## Oportunidades de paralelismo

- T002, T003 e T004 podem começar após T001.
- T006 e T008 podem ocorrer em paralelo após T005.
- T015 e T016 podem ocorrer em paralelo; T020 e T021 também podem ocorrer em paralelo.
- T028 pode ocorrer em paralelo com ajustes finais antes de T029.

## Estratégia de implementação

### MVP primeiro

1. Concluir Fases 1 e 2.
2. Concluir Fase 3 (US1).
3. Validar vetores de classificação e navegação do nivelamento.
4. Demonstrar o nivelamento antes de implementar as trilhas.

### Entrega incremental

1. Base segura e acessível.
2. Nivelamento funcional.
3. Percurso Explorador.
4. Percurso completo até conclusão.
5. Validação e publicação.

## Observações

- `[P]` indica arquivos distintos sem dependência pendente.
- A checklist `checklists/pedagogia-acessibilidade.md` deve ser revisada pelo responsável antes da implementação; seus marcadores não são alterados por estas tarefas.
