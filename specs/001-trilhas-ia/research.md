# Pesquisa de Decisões: Trilhas de Aprendizagem com IA

## Hospedagem e navegação

**Decisão**: Usar páginas HTML independentes e links, estilos e scripts com caminhos relativos
explícitos, como `./nivelamento.html` e `./css/style.css`.

**Justificativa**: O GitHub Pages pode publicar o projeto em um subdiretório. Caminhos iniciados por
`/` falhariam nesse cenário; páginas independentes dispensam roteador e configuração de servidor.

**Alternativas consideradas**: Caminhos absolutos de raiz, SPA com roteador e backend foram rejeitados
por quebrar em páginas de projeto, acrescentar complexidade ou estar fora do escopo.

## Estado local e privacidade

**Decisão**: Centralizar o estado em uma única chave `localStorage` versionada, por exemplo
`ia-para-aprender:estado:v1`, contendo somente perfil, respostas por ID, módulos concluídos, etapa
atual e resultados necessários. Validar o formato ao ler e usar estado inicial seguro se estiver
ausente ou corrompido.

**Justificativa**: Permite retomar o percurso após recarregar, sem conta, servidor ou dados pessoais.
Uma única chave reduz inconsistências e a versão permite evolução futura.

**Alternativas consideradas**: Estado apenas em memória perde progresso; `sessionStorage` perde o
estado ao fechar a sessão; cookies e backend não atendem ao escopo simples e estático.

## Conteúdo, pontuação e progressão

**Decisão**: Manter questões, módulos, atividades, respostas corretas, feedback e metadados
pedagógicos em `data.js`, todos identificados por IDs estáveis. Manter pontuação, navegação e
classificação em `nivelamento.js`; módulos e atividades em `trilhas.js`.

**Justificativa**: O conteúdo pode mudar sem alterar a lógica. IDs estáveis preservam respostas e
progresso mesmo se a apresentação for reorganizada. O algoritmo usa somente as oito questões
pontuáveis e as três críticas: `score >= 5 && criticalScore >= 2` resulta em Usuário.

**Alternativas consideradas**: Dados embutidos no HTML dificultam manutenção e testes; conteúdo remoto
adiciona dependência de rede e servidor.

## Integridade do percurso

**Decisão**: Derivar os módulos liberados a partir do módulo atual e dos módulos concluídos, e
revalidar a permissão ao carregar cada página. Marcar a trilha como iniciada ao primeiro acesso
deliberado; depois disso, bloquear novo nivelamento e reinício da trilha.

**Justificativa**: Impede que URL direta ou estado desatualizado ignore a progressão sequencial e
preserva as regras pedagógicas já esclarecidas.

**Alternativas consideradas**: Desabilitar apenas botões não impede acesso por URL; permitir reset
livre contradiz a especificação.

## Acessibilidade e feedback

**Decisão**: Usar elementos semânticos, `fieldset` e `legend` para alternativas, controles nativos
de rádio, botões para ações, links para páginas e foco visível. A barra de progresso terá rótulo e
valores acessíveis; alterações de questão e página moverão o foco para o título principal. Feedback
será uma caixa persistente, textual e anunciada de forma não intrusiva.

**Justificativa**: Controles nativos atendem teclado e leitores de tela com menos risco que componentes
customizados. Texto, ícone e estrutura evitam depender exclusivamente de cor.

**Alternativas consideradas**: `div`s clicáveis, cartões sem semântica, avisos temporários e modais
obrigatórios foram rejeitados por piorarem teclado, foco ou compreensão.

## Validação

**Decisão**: Usar testes manuais de jornadas no navegador e quatro vetores de classificação:
`5/2 → Usuário`, `5/1 → Explorador`, `4/3 → Explorador` e `8/3 → Usuário`; as duas questões
diagnósticas não alteram os totais.

**Justificativa**: Cobre os limites dos dois critérios de classificação e os comportamentos de
navegação, persistência, acessibilidade e GitHub Pages sem introduzir dependências externas.

**Alternativas consideradas**: Apenas inspeção visual não verifica estado ou teclado; automação E2E
fica para evolução posterior, pois não é necessária ao MVP estático.
