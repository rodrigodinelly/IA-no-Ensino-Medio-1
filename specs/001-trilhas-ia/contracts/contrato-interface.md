# Contrato da Interface Estática

## Páginas e entradas

| Página | Entrada permitida | Resultado esperado |
|---|---|---|
| `index.html` | Qualquer visitante | Explica a proposta e liga para `./nivelamento.html`. |
| `nivelamento.html` | Estudante sem trilha iniciada | Mostra ou retoma o nivelamento; após finalização, apresenta resultado antes da trilha. |
| `explorador.html` | Perfil Explorador ou Explorador em andamento | Mostra somente módulo atual ou concluído; ao concluir desafio, liga para `./usuario.html`. |
| `usuario.html` | Perfil Usuário, ou Explorador concluído | Mostra somente módulo atual ou concluído; ao concluir desafio, liga para `./conclusao.html`. |
| `conclusao.html` | Trilha Usuário concluída | Mostra conclusão do percurso. |

Páginas acessadas sem estado permitido não devem expor conteúdo bloqueado: devem orientar o estudante
para a etapa válida por meio de caminho relativo.

## Contrato do nivelamento

- Exibe uma questão por vez, com posição textual e barra de progresso acessível.
- Não permite avançar ou finalizar sem alternativa marcada; mostra mensagem textual associada à questão.
- Permite voltar e alterar respostas até a finalização; somente a resposta atual de cada ID é usada.
- Não revela acerto ou erro durante o preenchimento.
- Após a décima resposta, calcula `score` e `criticalScore`; classifica Usuário somente com `score >= 5`
  e `criticalScore >= 2`.
- Antes de iniciar a trilha recomendada, pode ser refeito; depois de iniciada, essa ação fica bloqueada.

## Contrato das trilhas e do feedback

- Cada trilha oferece cinco módulos em sequência; módulos concluídos ficam disponíveis para revisão.
- Cada módulo contém título, objetivo, conteúdo curto, exemplo, atividade, feedback e ação de avanço.
- Feedback de atividade usa texto e estrutura, não somente cor. Erro explica o ponto a revisar e permite
  nova tentativa; acerto explica o motivo, registra a conclusão e libera o próximo módulo.
- A trilha não pode ser reiniciada após ser iniciada. Seus desafios só liberam após os cinco módulos.

## Contrato de acessibilidade

- Alternativas usam controles nativos agrupados por `fieldset` e `legend`.
- Ações usam botões; mudanças de página usam links com texto claro.
- Todas as páginas usam `header` e `main`, hierarquia de títulos, foco visível e contraste adequado.
- Texto e controles atendem ao nível AA das WCAG; alvos de toque e clique medem ao menos 44 × 44 px.
- A interface permanece utilizável com zoom de até 200%, sem perda de conteúdo ou funcionalidade.
- Após mudança dinâmica de questão ou página, o foco vai para o título principal; resultados e feedback
  são anunciados de modo não intrusivo e não dependem só de cor.

## Contrato de persistência

- A única persistência é uma chave local versionada do projeto, sem dados pessoais.
- O estado é validado antes de uso. Estado inválido, ausente ou `localStorage` indisponível inicia uma
  sessão segura em memória e avisa sobre a possível perda de progresso.
- A limpeza de progresso exige confirmação e afeta somente o estado local deste projeto.
