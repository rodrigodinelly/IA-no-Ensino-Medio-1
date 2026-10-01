# Plano de Implementação: Trilhas de Aprendizagem com IA

**Ramo**: `001-trilhas-ia` | **Data**: 2026-10-01 | **Especificação**: [spec.md](./spec.md)

**Entrada**: Especificação de funcionalidade em `specs/001-trilhas-ia/spec.md` e diretrizes técnicas
para uma aplicação estática compatível com GitHub Pages.

## Resumo

Construir uma aplicação educacional estática para nivelamento e trilhas de aprendizagem sobre uso
crítico, ativo e responsável de IA. O site usará HTML5, CSS3 e JavaScript puro; todo conteúdo ficará
em dados locais e o estado mínimo de progresso ficará em `localStorage`, sem dados pessoais. Cinco
páginas HTML independentes, interligadas por caminhos relativos, atendem ao GitHub Pages sem roteador
nem servidor.

## Contexto Técnico

**Linguagem/Versão**: HTML5, CSS3 e JavaScript ECMAScript suportado pelos navegadores modernos.

**Dependências principais**: Nenhuma; somente APIs nativas do navegador.

**Armazenamento**: `localStorage` opcional, em uma chave versionada, para estado e progresso locais;
sem dados pessoais.

**Testes**: Cenários manuais documentados em [quickstart.md](./quickstart.md), incluindo vetores de
classificação, navegação, persistência, responsividade e teclado.

**Plataforma-alvo**: Navegadores modernos em celular e desktop, publicados como site estático no
GitHub Pages.

**Tipo de projeto**: Aplicação web estática de múltiplas páginas.

**Metas de desempenho**: Trocas de questão, feedback, progresso e navegação percebidos em até 1
segundo em dispositivo e navegador compatíveis; nivelamento concluível em até 12 minutos sem ajuda.

**Restrições**: Sem backend, autenticação, roteador de servidor, dependências externas ou caminhos
iniciados por `/`; feedback do nivelamento somente após a décima resposta; dados locais mínimos.

**Escala/Escopo**: Uma experiência individual por navegador, cinco páginas, 10 questões de
nivelamento, duas trilhas de cinco módulos e dois desafios finais.

## Verificação da Constituição

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

**Resultado inicial: APROVADO.**

- Aprendizagem, pensamento crítico, autonomia e autoria: o conteúdo será separado da lógica e cada
  módulo terá objetivo, exemplo, atividade e feedback formativo; não haverá conversa livre com IA
  nem respostas geradas automaticamente.
- Progressão pedagógica: módulos serão liberados em sequência, com revisão dos concluídos; a trilha
  Explorador precede a Usuário quando aplicável.
- Clareza, prática e feedback: uma questão ou atividade por vez, instruções curtas, feedback textual
  persistente e nova tentativa sem nota ou punição.
- Segurança e privacidade: nenhum dado pessoal será solicitado; o estado local só armazena progresso,
  respostas e resultados necessários, com opção de limpeza.
- BNCC Computação: os metadados de cada módulo e atividade incluirão objetivo, etapa pedagógica e
  habilidade BNCC previamente definida e aprovada pelo projeto antes da inclusão de conteúdo; essa
  aprovação é um bloqueio para o cadastro de atividades.

**Revisão após o design: APROVADO.** Os contratos de interface, o modelo de dados e o guia de validação
preservam os mesmos controles, sem complexidade adicional ou conflito com a constituição.

## Estrutura do Projeto

### Documentação desta funcionalidade

```text
specs/001-trilhas-ia/
├── plan.md              # Este arquivo
├── research.md          # Pesquisa de decisões
├── data-model.md        # Modelo de dados
├── quickstart.md        # Guia de validação
├── contracts/           # Contratos de interface
└── tasks.md             # Saída posterior de $speckit-tasks; não criado nesta etapa
```

### Código-fonte (raiz do repositório)

```text
index.html
nivelamento.html
explorador.html
usuario.html
conclusao.html
css/
└── style.css
js/
├── data.js
├── nivelamento.js
├── trilhas.js
└── storage.js
assets/
└── images/
specs/
└── 001-trilhas-ia/
    ├── contracts/
    ├── data-model.md
    ├── plan.md
    ├── quickstart.md
    ├── research.md
    └── spec.md
```

**Decisão de estrutura**: Aplicação web estática de múltiplas páginas. `data.js` contém somente
conteúdo e metadados; `nivelamento.js` controla questões, respostas e classificação; `trilhas.js`
controla módulos, atividades, feedback e transições; `storage.js` isola validação e persistência do
estado. O CSS compartilhado garante uma única identidade visual.

## Registro de Complexidade

Nenhuma violação da constituição exige justificativa.
