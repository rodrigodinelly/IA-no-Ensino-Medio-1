# Modelo de Dados

## Estado do estudante

Representa somente o percurso no navegador atual; não contém nome, e-mail, identificador pessoal ou
telemetria.

| Campo | Tipo | Regra de validação |
|---|---|---|
| `versao` | número | Deve corresponder ao esquema local atual. |
| `perfil` | `explorador` \| `usuario` \| nulo | Definido somente após finalizar o nivelamento. |
| `nivelamento.respostas` | mapa de ID para alternativa | Aceita somente IDs das 10 questões e alternativas válidas. |
| `nivelamento.finalizado` | booleano | Verdadeiro somente com 10 respostas válidas. |
| `nivelamento.score` | número | Inteiro de 0 a 8. |
| `nivelamento.criticalScore` | número | Inteiro de 0 a 3. |
| `trilhaAtual` | `explorador` \| `usuario` \| nulo | Deve respeitar o perfil e as transições permitidas. |
| `trilhas.explorador` | estado de trilha | Ver definição abaixo. |
| `trilhas.usuario` | estado de trilha | Ver definição abaixo. |

## Estado da trilha

| Campo | Tipo | Regra de validação |
|---|---|---|
| `iniciada` | booleano | Torna-se verdadeira no primeiro acesso deliberado à trilha. |
| `moduloAtual` | número | Inteiro entre 1 e 5 enquanto a trilha está em andamento. |
| `modulosConcluidos` | lista de números | Sem duplicados; valores de 1 a 5; deve manter ordem sequencial. |
| `desafioConcluido` | booleano | Só pode ser verdadeiro após os cinco módulos concluídos. |
| `concluida` | booleano | Explorador concluída libera Usuário; Usuário concluída libera conclusão. |

## Conteúdo pedagógico

| Entidade | Campos essenciais | Relações e regras |
|---|---|---|
| Questão de nivelamento | ID, enunciado, alternativas, resposta correta, diagnóstica, crítica | Há exatamente 10; as duas primeiras são diagnósticas; oito são pontuáveis e três avaliam pensamento crítico. |
| Módulo | ID, trilha, ordem, título, objetivo, conteúdo, exemplo, etapa pedagógica, habilidade BNCC | Há cinco por trilha; o próximo só libera após o atual ser concluído. |
| Atividade | ID, módulo, enunciado, alternativas ou resposta esperada, feedback de acerto e erro | Ao menos uma por módulo; erro permite nova tentativa; acerto conclui o módulo. |
| Desafio final | ID, trilha, instrução, critérios obrigatórios, feedback | Só fica disponível após os cinco módulos; explora análise crítica ou estratégia de estudo conforme a trilha. |

## Mapeamento BNCC Computação aprovado para esta versão

| Conteúdo | Habilidade | Justificativa pedagógica |
|---|---|---|
| Nivelamento e módulos Explorador 1 a 4 | `EM13CO10` | Fundamentos de IA, comparação com inteligência humana, potencialidades, riscos e limites. |
| Módulo Explorador 5 | `EM13CO08` | Privacidade e proteção de dados pessoais no uso de tecnologias. |
| Módulos Usuário 1 a 5 e desafio final | `EM13CO10` | Uso crítico da IA, verificação de respostas, análise de limites e autoria no processo de aprendizagem. |

As habilidades foram selecionadas para este projeto a partir do Complemento à BNCC Computação para o
Ensino Médio. Cada item cadastrado em `js/data.js` deve manter o respectivo código no campo
`bnccCode`; alterações de conteúdo exigem revisão desse mapeamento.

## Transições de estado

1. Sem nivelamento → respondendo ao nivelamento → nivelamento finalizado → perfil definido.
2. Perfil Explorador → Explorador iniciada → módulos 1 a 5 concluídos → desafio Explorador → Usuário
   liberada.
3. Perfil Usuário ou Explorador concluído → Usuário iniciada → módulos 1 a 5 concluídos → desafio
   Usuário → conclusão do percurso.
4. Antes de iniciar a trilha recomendada, o estudante pode refazer o nivelamento; depois de iniciá-la,
   não pode. Trilhas iniciadas não podem ser reiniciadas, mas módulos concluídos podem ser revisados.

## Recuperação e limpeza

Ao encontrar estado ausente, inválido, incompatível ou armazenamento indisponível, a aplicação inicia
um estado seguro em memória e informa que o progresso pode não persistir. A ação de limpar progresso
exige confirmação e remove somente a chave do projeto neste navegador.
