# Especificação da Funcionalidade: Trilhas de Aprendizagem com IA

**Ramo da Funcionalidade**: `001-trilhas-ia`

**Criado em**: 2026-10-01

**Status**: Rascunho

**Entrada**: Descrição do usuário: "Plataforma educacional de IA crítica e responsável para estudantes do Ensino Médio, com nivelamento, trilhas Explorador e Usuário, atividades e desafios."

## Esclarecimentos

### Sessão 2026-10-01

- P: Durante o nivelamento, o estudante pode voltar a questões já respondidas e alterar a resposta antes de finalizar? → R: Pode avançar e voltar livremente; respostas anteriores podem ser alteradas até a finalização.
- P: Quando o estudante responde a uma questão do nivelamento, ele deve receber indicação de acerto ou erro antes de concluir as 10 questões? → R: Mostrar somente ao final quais respostas estavam corretas ou incorretas, além do perfil.
- P: Ao escolher refazer o nivelamento, como o sistema deve tratar a tentativa atual e o progresso já concluído nas trilhas? → R: Permitir refazer apenas antes de iniciar a trilha recomendada.
- P: Dentro de cada trilha, quando o estudante deve poder acessar os módulos seguintes? → R: Acessa o módulo atual e os já concluídos; o próximo libera após concluir o módulo atual.
- P: Depois de iniciar uma trilha, o estudante deve poder reiniciá-la do começo? → R: Não reinicia a trilha; pode revisar módulos concluídos sem perder progresso.

## Cenários de Usuário e Testes *(obrigatório)*

### História de Usuário 1 - Realizar nivelamento e receber uma trilha (Prioridade: P1)

Como estudante do Ensino Médio, quero responder a um diagnóstico inicial para receber uma trilha
adequada ao meu nível de uso crítico da IA e entender o motivo dessa recomendação.

**Por que esta prioridade**: O nivelamento determina o percurso do estudante e permite que a experiência
comece no ponto pedagógico adequado.

**Teste independente**: Um estudante responde às dez questões, recebe o perfil calculado e consegue
ler a explicação da trilha recomendada.

**Cenários de aceitação**:

1. **Given** um estudante no início do percurso, **When** inicia o nivelamento, **Then** vê 10
   questões apresentadas uma por vez e sabe sua posição no diagnóstico.
2. **Given** um estudante que respondeu às 10 questões, **When** conclui o nivelamento, **Then** o
   sistema registra as respostas, calcula a classificação e apresenta o perfil e sua explicação.
3. **Given** um estudante com pelo menos 5 pontos nas 8 questões pontuáveis e ao menos 2 acertos
   nas 3 questões de pensamento crítico, **When** o resultado é calculado, **Then** recebe o perfil
   Usuário e a trilha Usuário é recomendada.
4. **Given** um estudante que não satisfaz ambos os critérios do perfil Usuário, **When** o resultado
   é calculado, **Then** recebe o perfil Explorador e a trilha Explorador é recomendada.
5. **Given** um estudante que ainda não finalizou o nivelamento, **When** volta a uma questão já
   respondida, altera sua resposta e retorna à questão atual, **Then** o sistema preserva a alteração
   e usa a resposta mais recente no cálculo final.
6. **Given** um estudante que está respondendo ao nivelamento, **When** envia uma resposta antes da
   finalização, **Then** não recebe indicação de acerto ou erro para essa questão.
7. **Given** um estudante que finalizou as 10 questões, **When** recebe o resultado, **Then** vê seu
   perfil, a explicação da recomendação e a indicação de quais respostas estavam corretas ou incorretas.

---

### História de Usuário 2 - Aprender criticamente na trilha Explorador (Prioridade: P1)

Como estudante Explorador, quero completar uma trilha introdutória com atividades práticas para
entender como a IA funciona, reconhecer seus limites, verificar informações e usá-la com
responsabilidade.

**Por que esta prioridade**: A trilha estabelece a base de pensamento crítico necessária antes do uso da
IA como apoio ativo aos estudos.

**Teste independente**: Um estudante Explorador percorre os cinco módulos, realiza ao menos uma
atividade por módulo, recebe feedback e conclui o desafio de análise de uma resposta simulada.

**Cenários de aceitação**:

1. **Given** um estudante classificado como Explorador, **When** entra em sua trilha, **Then** vê os
   cinco módulos, o objetivo de cada módulo, a etapa atual e seu progresso.
2. **Given** uma atividade de módulo, **When** o estudante envia uma resposta correta, **Then** recebe
   uma explicação breve do motivo do acerto.
3. **Given** uma atividade de módulo, **When** o estudante envia uma resposta incorreta, **Then**
   recebe indicação do ponto a reconsiderar, explicação breve e oportunidade de tentar novamente.
4. **Given** um estudante que completou os módulos Explorador, **When** realiza o desafio final,
   **Then** identifica informação confiável, ponto a verificar, referência suspeita e conclusão a
   questionar em uma resposta simulada de IA.

---

### História de Usuário 3 - Usar IA como apoio ativo de aprendizagem (Prioridade: P1)

Como estudante Usuário, quero praticar como formular solicitações, verificar respostas e produzir
com autoria para usar a IA como ferramenta de aprendizagem, e não apenas para obter respostas.

**Por que esta prioridade**: Esta é a mudança de comportamento educacional central: aprender, questionar,
verificar e criar mantendo a autoria.

**Teste independente**: Um estudante da trilha Usuário completa seus cinco módulos e elabora uma
estratégia de estudo para um tema escolar que contém todos os elementos do desafio final.

**Cenários de aceitação**:

1. **Given** um estudante direcionado à trilha Usuário, **When** inicia a trilha, **Then** pode
   acessar cinco módulos sobre aprendizado ativo, solicitações, tutoria, verificação e autoria.
2. **Given** um estudante no módulo de solicitações, **When** realiza a atividade, **Then** pratica
   uma solicitação que explicita objetivo, contexto, nível e ação desejada.
3. **Given** um estudante no desafio Usuário, **When** conclui sua estratégia de aprendizagem,
   **Then** ela inclui uma solicitação para aprender, uma para exemplos, uma para testar conhecimento,
   uma estratégia de verificação e uma produção própria.

---

### História de Usuário 4 - Progredir e concluir o percurso (Prioridade: P2)

Como estudante, quero acompanhar onde estou e avançar de modo claro entre módulos, desafios e
conclusão para compreender meu percurso sem competir com outros estudantes.

**Por que esta prioridade**: Visibilidade de progresso sustenta autonomia e evita confusão na transição
entre etapas.

**Teste independente**: Um estudante conclui uma trilha; se for Explorador, é direcionado à Usuário;
se for Usuário, vê a conclusão do percurso.

**Cenários de aceitação**:

1. **Given** um Explorador que concluiu seu desafio, **When** recebe o resultado do desafio, **Then**
   é encaminhado à trilha Usuário.
2. **Given** um Usuário que concluiu seu desafio, **When** finaliza a etapa, **Then** recebe a tela de
   conclusão do percurso.
3. **Given** um estudante em qualquer ponto do percurso, **When** consulta o progresso, **Then** vê
   a etapa atual, módulos concluídos e próximo passo, sem ranking ou comparação com outros estudantes.
4. **Given** um estudante que recebeu uma recomendação, mas ainda não iniciou a trilha recomendada,
   **When** escolhe refazer o nivelamento, **Then** pode iniciar um novo diagnóstico e receber uma
   nova recomendação.
5. **Given** um estudante que já iniciou a trilha recomendada, **When** tenta refazer o nivelamento,
   **Then** o sistema informa que o reinício não está disponível após o início da trilha.
6. **Given** um estudante em uma trilha, **When** conclui o módulo atual, **Then** o próximo módulo é
   liberado e os módulos concluídos permanecem disponíveis para revisão.
7. **Given** um estudante que já iniciou uma trilha, **When** tenta reiniciá-la, **Then** o sistema
   mantém seu progresso, informa que a trilha não pode ser reiniciada e permite revisar os módulos
   já concluídos.

### Casos extremos

- O estudante interrompe o nivelamento antes de responder às dez questões: as respostas já dadas são
  preservadas e ele pode retomar da próxima questão não respondida.
- O estudante tenta concluir o nivelamento com questão sem resposta: o sistema informa qual questão
  precisa ser respondida e não classifica o perfil.
- Uma atividade é respondida incorretamente repetidas vezes: o sistema mantém tom formativo, explica
  o conceito e permite nova tentativa sem penalidade ou nota.
- O estudante conclui os módulos, mas não atende aos itens obrigatórios do desafio: o sistema aponta
  os elementos ausentes e permite revisar a entrega.
- O estudante tenta refazer o nivelamento após iniciar a trilha: o sistema preserva o progresso e
  informa que o reinício do diagnóstico não está disponível nessa etapa.

## Requisitos *(obrigatório)*

### Requisitos funcionais

- **FR-001**: O sistema MUST permitir que estudantes iniciem o nivelamento e o refaçam somente após
  receberem a recomendação e antes de iniciarem a trilha recomendada.
- **FR-002**: O sistema MUST apresentar um nivelamento com exatamente 10 questões, uma por vez.
- **FR-003**: O sistema MUST identificar as duas primeiras questões como diagnósticas e excluí-las da
  pontuação de classificação.
- **FR-004**: O sistema MUST registrar as respostas do nivelamento, permitir retomá-lo após
  interrupção e permitir ao estudante avançar e voltar livremente entre questões já respondidas.
- **FR-004a**: Até a finalização do nivelamento, o sistema MUST permitir alterar qualquer resposta
  registrada e MUST usar apenas a versão mais recente de cada resposta no cálculo da classificação.
- **FR-005**: O sistema MUST calcular uma pontuação de 0 a 8 usando as oito questões pontuáveis.
- **FR-006**: O sistema MUST avaliar três questões específicas de pensamento crítico.
- **FR-007**: O sistema MUST classificar o estudante como Usuário somente se obtiver pelo menos 5
  pontos e ao menos 2 acertos nas questões de pensamento crítico; nos demais casos, MUST classificá-lo
  como Explorador.
- **FR-008**: O sistema MUST apresentar o perfil obtido, uma explicação compreensível da recomendação,
  a trilha correspondente e a indicação de quais respostas do nivelamento estavam corretas ou incorretas.
- **FR-008a**: Antes da finalização das 10 questões, o sistema MUST não indicar acerto ou erro das
  respostas do nivelamento.
- **FR-009**: O sistema MUST organizar as trilhas Explorador e Usuário em exatamente cinco módulos
  cada, com objetivo de aprendizagem explícito para cada módulo.
- **FR-010**: A trilha Explorador MUST abranger conceito e exemplos de IA, geração por padrões,
  limitações e erros, verificação pelo método V-E-R e uso responsável.
- **FR-011**: A trilha Usuário MUST abranger uso da IA para aprender, formulação de solicitações,
  IA como tutora, verificação e produção com autoria.
- **FR-012**: O sistema MUST oferecer ao menos uma atividade em cada módulo e apresentar uma atividade
  por vez.
- **FR-013**: As atividades MUST priorizar situações-problema, tomada de decisão, comparação,
  identificação de erros, reflexão ou aplicação prática; não podem se basear exclusivamente em
  memorização.
- **FR-014**: Toda atividade MUST apresentar feedback imediato e formativo para respostas corretas e
  incorretas, incluindo oportunidade de nova tentativa após erro.
- **FR-015**: O sistema MUST incluir um desafio final na trilha Explorador que avalie a análise crítica
  de uma resposta simulada de IA.
- **FR-016**: O sistema MUST incluir um desafio final na trilha Usuário que exija uma estratégia de
  estudo com solicitação para aprender, exemplos, teste de conhecimentos, verificação e produção própria.
- **FR-017**: O sistema MUST direcionar Exploradores que concluírem seu desafio à trilha Usuário.
- **FR-018**: O sistema MUST apresentar a conclusão do percurso após o desafio da trilha Usuário.
- **FR-019**: O sistema MUST mostrar, em todas as etapas, progresso, etapa atual, objetivo do módulo
  e próximo passo.
- **FR-019a**: Em cada trilha, o sistema MUST liberar o próximo módulo somente após a conclusão do
  módulo atual e MUST manter os módulos concluídos disponíveis para revisão.
- **FR-019b**: Após iniciada, uma trilha MUST não poder ser reiniciada e o progresso do estudante
  MUST ser preservado.
- **FR-020**: O sistema MUST deixar claro que IA não é fonte automaticamente confiável e incorporar
  práticas de verificação nas duas trilhas.
- **FR-021**: O sistema MUST incentivar privacidade, cuidado com dados pessoais, responsabilidade e
  respeito à autoria, sem solicitar dados pessoais não necessários à experiência.
- **FR-022**: O sistema MUST alinhar cada atividade a um objetivo de aprendizagem, a uma etapa da
  progressão pedagógica e a uma habilidade da BNCC Computação previamente definida e aprovada para o
  projeto; conteúdo sem essa identificação não pode ser incluído na trilha.
- **FR-023**: O sistema MUST evitar IA conversacional para estudantes, correção automática por IA,
  atribuição de notas, avaliações formais, rankings e comparação entre estudantes nesta versão.

### Entidades principais *(incluir se a funcionalidade envolver dados)*

- **Estudante**: Pessoa do Ensino Médio que realiza o percurso; mantém seu estado de nivelamento,
  progresso, respostas e conclusões.
- **Questão de nivelamento**: Item do diagnóstico com indicação de ser diagnóstico ou pontuável e,
  quando aplicável, de avaliar pensamento crítico.
- **Resultado de nivelamento**: Pontuação, acertos de pensamento crítico, perfil classificado e
  recomendação explicada.
- **Trilha**: Percurso pedagógico associado a um perfil, composto por cinco módulos e um desafio final.
- **Módulo**: Unidade de aprendizagem com objetivo, conteúdo e ao menos uma atividade.
- **Atividade**: Situação de prática com resposta do estudante, feedback formativo e novas tentativas.
- **Desafio final**: Aplicação integradora que evidencia as aprendizagens de uma trilha.

## Critérios de sucesso *(obrigatório)*

### Resultados mensuráveis

- **SC-001**: Pelo menos 90% dos estudantes de teste conseguem iniciar, responder e concluir as 10
  questões do nivelamento sem ajuda externa em até 12 minutos.
- **SC-002**: Em testes com casos de respostas predeterminados, 100% das classificações aplicam
  corretamente os dois critérios: mínimo de 5 pontos e mínimo de 2 acertos críticos.
- **SC-003**: Pelo menos 85% dos estudantes de teste identificam, ao final da trilha Explorador, ao
  menos três dos quatro elementos solicitados na análise da resposta simulada de IA.
- **SC-004**: Pelo menos 80% dos estudantes de teste que concluem a trilha Usuário entregam uma
  estratégia contendo os cinco elementos obrigatórios do desafio, após no máximo uma revisão guiada.
- **SC-005**: Pelo menos 90% dos estudantes de teste conseguem informar sua etapa atual e o próximo
  passo ao serem consultados durante qualquer módulo.
- **SC-006**: Nenhuma tela da versão inicial exibe notas, rankings, comparações entre estudantes ou
  funcionalidade de conversa livre com IA.

## Premissas

- O percurso é destinado a estudantes do Ensino Médio que podem ler instruções curtas em português.
- Esta especificação considera uma experiência individual; papéis de docente, responsáveis e
  administração não fazem parte desta versão.
- As habilidades específicas da BNCC Computação serão definidas pelo projeto antes da produção de cada
  atividade, sem alterar os objetivos pedagógicos estabelecidos aqui. A definição e a aprovação dessas
  habilidades são uma condição de início para o cadastro de conteúdo pedagógico.
- O estudante tem acesso contínuo à experiência durante o percurso para retomar o nivelamento e
  avançar entre módulos.
- A versão inicial usa conteúdo e respostas simuladas de IA para aprendizagem; não oferece conversa
  livre nem usa IA para corrigir automaticamente produções estudantis.
