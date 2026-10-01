# Guia de Validação Rápida

## Pré-requisitos

- Navegador moderno em desktop ou celular.
- Arquivos do projeto disponíveis localmente ou publicados no GitHub Pages.
- Para teste local, servir a pasta do projeto por um servidor HTTP estático simples; não há dependências
  de aplicação para instalar.

## Cenário 1: Navegação inicial e GitHub Pages

1. Abra `index.html` e selecione o início do nivelamento.
2. Confirme que o destino é `./nivelamento.html` e que CSS e JavaScript carregam.
3. Publique em um subdiretório de teste do GitHub Pages ou simule-o no servidor estático.
4. Confirme que nenhum link depende de caminho iniciado por `/`.

**Resultado esperado**: Todas as cinco páginas abrem e os links entre elas funcionam após recarga.

## Cenário 2: Nivelamento e limites de classificação

1. Confirme que há 10 questões, uma por vez, com barra e texto de progresso.
2. Tente avançar sem responder; confirme mensagem textual e permanência na questão.
3. Responda, avance, volte e altere uma resposta; confirme que a resposta mais recente é preservada.
4. Antes da questão 10, confirme que não há indicação de acerto ou erro.
5. Execute estes vetores usando dados de teste: `5/2 → Usuário`, `5/1 → Explorador`, `4/3 → Explorador`
   e `8/3 → Usuário`.
6. Em todos os vetores, altere respostas das duas questões diagnósticas e confirme que os totais não
   mudam.

**Resultado esperado**: A regra `score >= 5 && criticalScore >= 2` é respeitada e o resultado mostra
perfil, recomendação e situação de cada resposta somente ao final.

## Cenário 3: Reinício e persistência

1. Após receber a recomendação, mas antes de abrir a trilha, refaça o nivelamento e confirme a nova
   recomendação.
2. Abra a trilha recomendada, recarregue a página e confirme o retorno ao mesmo estado.
3. Tente refazer o nivelamento depois de iniciar a trilha; confirme que a ação é bloqueada.
4. Desative ou torne indisponível o `localStorage`, quando possível, e confirme o aviso de que o
   progresso pode não persistir.
5. Use a ação de limpeza, confirme a confirmação explícita e verifique que somente o estado do projeto
   foi removido.

**Resultado esperado**: Não há perda silenciosa de progresso, nem armazenamento de dados pessoais.

## Cenário 4: Trilhas, atividades e conclusão

1. Confirme que cada trilha possui cinco módulos e que somente o módulo atual fica disponível.
2. Responda incorretamente uma atividade; confirme explicação, feedback não baseado apenas em cor e
   nova tentativa.
3. Responda corretamente; confirme explicação, conclusão do módulo e liberação do próximo.
4. Revise um módulo concluído; confirme que o progresso é preservado.
5. Tente reiniciar a trilha; confirme que não é permitido.
6. Conclua o desafio Explorador e confirme o encaminhamento à trilha Usuário.
7. Conclua o desafio Usuário e confirme o encaminhamento a `./conclusao.html`.

**Resultado esperado**: A sequência Explorador → Usuário → Conclusão só ocorre após as respectivas
conclusões e não há notas, ranking, comparação ou conversa livre com IA.

## Cenário 5: Acessibilidade e responsividade

1. Execute o percurso apenas com teclado: Tab, Shift+Tab, Espaço e Enter.
2. Confirme foco visível, ordem de foco coerente, alternativas agrupadas e botões/link com textos claros.
3. Em mudanças de questão e página, confirme foco no título e anúncio compreensível do progresso e
   feedback em leitor de tela, quando disponível.
4. Teste em largura de 320 px e em desktop; confirme que texto, alternativas, barra e botões permanecem
   utilizáveis sem perda de conteúdo.
5. Confirme contraste de nível AA, alvos de toque e clique de pelo menos 44 × 44 px e zoom de até 200%
   sem perda de conteúdo ou funcionalidade.

**Resultado esperado**: A experiência permanece navegável e compreensível em teclado, leitor de tela,
celular e desktop.

## Cenário 6: Tempo de resposta percebido

1. Em navegador compatível, registre o tempo percebido para mudar questão, enviar atividade, exibir
   feedback e avançar módulo.
2. Repita cada interação ao menos três vezes após o carregamento inicial.

**Resultado esperado**: Cada interação é percebida em até 1 segundo; registre qualquer exceção e o
contexto do dispositivo e navegador usados.
