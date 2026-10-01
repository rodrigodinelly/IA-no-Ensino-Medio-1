# Checklist de Requisitos Pedagógicos e Acessibilidade: Trilhas de Aprendizagem com IA

**Objetivo**: Revisar se os requisitos pedagógicos, de navegação e de acessibilidade estão completos,
claros, consistentes e mensuráveis antes da implementação.
**Criado em**: 2026-10-01
**Funcionalidade**: [spec.md](../spec.md)

**Nota**: Esta checklist avalia a qualidade dos requisitos, não a implementação.
**Responsabilidade da revisão**: Este é um artefato de revisão da qualidade dos requisitos. Marque um
item como `[x]` somente após o revisor concluir que o critério está atendido.
**Significado dos marcadores**: `[x]` indica que o requisito foi revisado e está satisfatório quanto à
qualidade; não indica que o trabalho de implementação foi concluído.

## Completude pedagógica

- [X] CHK001 Os objetivos de aprendizagem, a etapa da progressão pedagógica e a habilidade BNCC estão especificados para cada módulo e atividade, não apenas como obrigação geral? [Completude, Spec §FR-022]
- [X] CHK002 Os requisitos definem critérios de conteúdo suficientes para que cada um dos cinco módulos Explorador cubra conceito, padrões, limites, V-E-R e uso responsável sem sobreposição ambígua? [Clareza, Spec §FR-010]
- [X] CHK003 Os requisitos definem critérios de conteúdo suficientes para que cada um dos cinco módulos Usuário cubra aprendizagem ativa, solicitações, tutoria, verificação e autoria? [Clareza, Spec §FR-011]
- [X] CHK004 As atividades práticas previstas deixam explícito como evitam uma abordagem baseada exclusivamente em memorização? [Completude, Spec §FR-013]
- [X] CHK005 Os critérios do desafio Explorador definem o que caracteriza cada um dos quatro elementos de análise solicitados? [Clareza, Spec §FR-015]
- [X] CHK006 Os critérios do desafio Usuário definem o nível mínimo de qualidade esperado para cada um dos cinco elementos obrigatórios? [Clareza, Spec §FR-016]

## Clareza e consistência da navegação

- [X] CHK007 A especificação define de forma consistente o que constitui “iniciar a trilha” para bloquear o reinício do nivelamento? [Consistência, Spec §FR-001; Contrato §Páginas e entradas]
- [X] CHK008 As regras para voltar, editar respostas e usar somente a versão mais recente estão completas para todas as dez questões, inclusive após recarregamento? [Completude, Spec §FR-004 e §FR-004a]
- [X] CHK009 A proibição de feedback durante o nivelamento e a apresentação final de acertos e erros estão especificadas sem conflito com o feedback formativo das atividades? [Consistência, Spec §FR-008, §FR-008a e §FR-014]
- [X] CHK010 Os requisitos definem claramente quais condições tornam um módulo concluído e liberam o próximo módulo? [Clareza, Spec §FR-019a; Modelo de Dados §Estado da trilha]
- [X] CHK011 As regras de revisão de módulos concluídos, bloqueio de módulos futuros e proibição de reinício da trilha estão completas para Explorador e Usuário? [Cobertura, Spec §FR-019a e §FR-019b]
- [X] CHK012 A transição Explorador → Usuário e a transição Usuário → Conclusão têm critérios de conclusão de desafio claros e consistentes? [Consistência, Spec §FR-017, §FR-018; Contrato §Trilhas e feedback]

## Qualidade do feedback e das respostas

- [X] CHK013 Os requisitos distinguem de forma objetiva o feedback exigido para resposta correta, incorreta e tentativa repetida? [Clareza, Spec §FR-014; Casos extremos]
- [X] CHK014 A expressão “explicação breve” possui limite ou critério editorial suficiente para manter linguagem adequada ao Ensino Médio? [Ambiguidade, Spec §FR-008 e §FR-014]
- [X] CHK015 Os requisitos definem como o estudante é orientado quando deixa uma questão sem resposta, sem depender apenas de uma mensagem genérica? [Completude, Casos extremos; Contrato §Nivelamento]
- [X] CHK016 O resultado final do nivelamento especifica se a indicação de acerto ou erro também precisa explicar as questões erradas? [Lacuna, Spec §FR-008]

## Acessibilidade e experiência responsiva

- [X] CHK017 Os requisitos de teclado definem a ordem de foco e o destino do foco para todas as mudanças de questão, resultado, feedback e página? [Completude, Contrato §Acessibilidade]
- [X] CHK018 Os requisitos definem uma forma textual e acessível de comunicar progresso, bloqueio de avanço e feedback, sem depender exclusivamente de cor ou elementos visuais? [Cobertura, Spec §FR-019; Contrato §Acessibilidade]
- [X] CHK019 O requisito de “contraste adequado” está quantificado por uma referência ou critério verificável? [Ambiguidade, Contrato §Acessibilidade]
- [X] CHK020 Os requisitos definem tamanhos mínimos de toque, comportamento de zoom e critérios de adaptação entre 320 px e desktop? [Lacuna, Plano §Contexto Técnico; Quickstart §Cenário 5]
- [X] CHK021 Os requisitos especificam como imagens e exemplos visuais devem ter alternativa textual ou tratamento quando ausentes? [Lacuna, Plano §Estrutura do Projeto]

## Cenários excepcionais e recuperação

- [X] CHK022 Os requisitos de retomada do nivelamento definem o comportamento quando o estado salvo está incompleto, inválido ou incompatível? [Cobertura, Spec §FR-004; Modelo de Dados §Recuperação e limpeza]
- [X] CHK023 A indisponibilidade de armazenamento local possui requisito de mensagem compreensível e de continuidade em memória, sem expor dados pessoais? [Completude, Contrato §Persistência]
- [X] CHK024 A limpeza de progresso define com clareza seu texto de confirmação, seu escopo e o estado apresentado após a confirmação? [Clareza, Modelo de Dados §Recuperação e limpeza]

## Notas

- Marque itens como `[x]` somente após a revisão confirmar a qualidade dos requisitos.
- Mantenha itens desmarcados quando ainda exigirem esclarecimento, correção ou decisão de revisão.
- `$speckit-implement` pode ler o estado da checklist como gate, mas não deve alterar seus marcadores.
- [requirements.md](./requirements.md) possui ciclo de vida separado, mantido por `$speckit-specify` e `$speckit-clarify`.
- Inclua observações ou descobertas junto ao item correspondente durante a revisão.
