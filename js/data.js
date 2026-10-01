window.APP_DATA = {
  bncc: {
    EM13CO08: 'Privacidade, dados pessoais e segurança em ambientes digitais.',
    EM13CO10: 'Fundamentos da Inteligência Artificial: potencialidades, riscos e limites.'
  },
  questions: [
    { id: 1, diagnostic: true, text: 'Com que frequência você usa ferramentas de IA?', options: ['Nunca', 'Às vezes', 'Com frequência', 'Todos os dias'], correct: 1 },
    { id: 2, diagnostic: true, text: 'Para que você mais usa IA hoje?', options: ['Estudar', 'Entretenimento', 'Criar conteúdos', 'Ainda não uso'], correct: 0 },
    { id: 3, critical: true, text: 'Uma resposta da IA parece convincente. Qual é a melhor primeira atitude?', options: ['Copiar sem alterar', 'Verificar em fontes confiáveis', 'Compartilhar imediatamente', 'Confiar porque é detalhada'], correct: 1 },
    { id: 4, text: 'Qual frase descreve melhor uma IA generativa?', options: ['Nunca erra', 'Pensa como uma pessoa', 'Produz respostas a partir de padrões', 'Só repete textos idênticos'], correct: 2 },
    { id: 5, critical: true, text: 'A IA citou um site que você não encontra. O que fazer?', options: ['Usar a referência mesmo assim', 'Questionar e buscar outra fonte', 'Apagar todo o trabalho', 'Pedir para um colega copiar'], correct: 1 },
    { id: 6, text: 'Qual informação não deve ser inserida em uma ferramenta de IA?', options: ['Tema de estudo', 'Dados pessoais sensíveis', 'Uma pergunta sobre história', 'Um pedido de exemplo'], correct: 1 },
    { id: 7, text: 'Para aprender melhor com IA, é mais útil pedir:', options: ['A resposta pronta', 'Uma explicação no seu nível e exemplos', 'Um texto para entregar sem ler', 'Uma lista sem contexto'], correct: 1 },
    { id: 8, critical: true, text: 'Duas fontes confiáveis discordam da IA. O que você deve fazer?', options: ['Comparar evidências e explicar sua conclusão', 'Escolher a IA', 'Ignorar as fontes', 'Parar de estudar'], correct: 0 },
    { id: 9, text: 'Qual pedido preserva melhor sua autoria?', options: ['“Faça meu trabalho completo”', '“Dê feedback para eu revisar meu rascunho”', '“Entregue uma redação em meu nome”', '“Escolha minha opinião”'], correct: 1 },
    { id: 10, text: 'Depois de receber uma explicação da IA, um bom próximo passo é:', options: ['Memorizar sem pensar', 'Testar se entendeu com uma questão', 'Copiar para entregar', 'Encerrar o estudo'], correct: 1 }
  ],
  tracks: {
    explorador: {
      name: 'Trilha Explorador',
      description: 'Entenda a IA, reconheça seus limites e aprenda a verificar informações.',
      modules: [
        moduleData(1, 'O que é Inteligência Artificial?', 'Reconhecer IA e seus usos cotidianos.', 'IA é uma tecnologia que identifica padrões em dados.', 'Um recomendador de vídeos sugere conteúdos com base em padrões.', 'Qual exemplo usa IA?', ['Uma calculadora simples', 'Um sistema que recomenda músicas', 'Um caderno de papel'], 1, 'EM13CO10'),
        moduleData(2, 'Como a IA responde?', 'Compreender que a IA trabalha com padrões, não com conhecimento perfeito.', 'Uma IA gera respostas prováveis a partir de muitos exemplos.', 'Ela pode escrever algo plausível mesmo quando não tem certeza.', 'Por que uma IA pode errar?', ['Porque produz respostas a partir de padrões', 'Porque sabe tudo', 'Porque lê pensamentos'], 0, 'EM13CO10'),
        moduleData(3, 'A IA também erra', 'Identificar erros, invenções, desatualização e respostas incompletas.', 'Uma resposta bem escrita não é garantia de verdade.', 'Uma data antiga pode tornar uma resposta desatualizada.', 'O que uma referência inexistente indica?', ['Que precisa ser verificada', 'Que está sempre correta', 'Que a IA é uma pessoa'], 0, 'EM13CO10'),
        moduleData(4, 'Verifique antes de acreditar', 'Aplicar o método V-E-R: Verifique, Examine e Reflita.', 'Verifique a fonte, examine as evidências e reflita antes de concluir.', 'Compare uma afirmação com uma fonte confiável e atual.', 'Qual é a primeira etapa do método V-E-R?', ['Verifique', 'Repita', 'Envie'], 0, 'EM13CO10'),
        moduleData(5, 'Uso responsável', 'Proteger dados pessoais e respeitar autoria.', 'Você continua responsável pelo que produz e compartilha.', 'Não envie senhas, documentos ou dados de terceiros para uma IA.', 'Qual atitude é responsável?', ['Pedir feedback para revisar seu texto', 'Enviar a senha de um amigo', 'Copiar uma resposta sem ler'], 0, 'EM13CO08')
      ],
      challenge: {
        title: 'Desafio Explorador',
        prompt: 'Leia a resposta simulada: “O Brasil tem 30 estados, segundo o Portal Escolar Global de 2026. Por isso, toda capital brasileira fica no litoral.”',
        minScore: 3,
        questions: [
          { text: 'A informação sobre a quantidade de estados precisa ser verificada?', correct: true },
          { text: 'O Portal Escolar Global deve ser aceito automaticamente como uma fonte confiável?', correct: false },
          { text: 'A conclusão sobre todas as capitais ficarem no litoral deve ser questionada?', correct: true },
          { text: 'Essa resposta pode ser copiada sem comparar com outras fontes?', correct: false }
        ]
      }
    },
    usuario: {
      name: 'Trilha Usuário',
      description: 'Use a IA para aprender ativamente, verificar e criar com autoria.',
      modules: [
        moduleData(1, 'IA não precisa dar a resposta', 'Diferenciar obter respostas de aprender.', 'A IA pode ajudar a construir entendimento sem fazer o trabalho por você.', 'Peça uma pista antes de pedir uma solução.', 'Qual pedido favorece aprendizagem?', ['“Explique o primeiro passo sem resolver tudo”', '“Faça e entregue por mim”', '“Escolha minha resposta”'], 0, 'EM13CO10'),
        moduleData(2, 'Faça perguntas melhores', 'Estruturar solicitações com objetivo, contexto, nível e ação desejada.', 'Pedidos claros ajudam a receber explicações úteis.', '“Sou do 2º ano; explique fotossíntese com um exemplo e uma pergunta.”', 'O que falta em “explique isso”?', ['Contexto e ação desejada', 'Uma senha', 'Uma nota'], 0, 'EM13CO10'),
        moduleData(3, 'Transforme a IA em tutora', 'Usar IA para explicar, exemplificar, comparar, questionar e dar feedback.', 'Uma tutora faz perguntas e ajuda você a refletir.', 'Peça uma questão e explique seu raciocínio antes de receber feedback.', 'Qual ação transforma a IA em tutora?', ['Pedir perguntas e feedback', 'Copiar a primeira resposta', 'Pedir uma nota'], 0, 'EM13CO10'),
        moduleData(4, 'Aprenda verificando', 'Aplicar Perguntar → Compreender → Verificar → Comparar → Produzir.', 'Verificar e comparar impedem que uma resposta automática vire verdade sem análise.', 'Compare a explicação da IA com seu material didático.', 'Qual etapa vem depois de compreender?', ['Verificar', 'Finalizar', 'Copiar'], 0, 'EM13CO10'),
        moduleData(5, 'Produza sem perder sua autoria', 'Planejar, produzir, pedir feedback, revisar, verificar e finalizar.', 'A IA pode comentar seu rascunho, mas a decisão final é sua.', 'Escreva primeiro sua ideia e peça sugestões de melhoria.', 'Quem decide a versão final do seu texto?', ['Você', 'A IA', 'O aplicativo'], 0, 'EM13CO10')
      ],
      challenge: {
        title: 'Desafio Usuário',
        prompt: 'Pense em uma estratégia para estudar um tema escolar usando IA de forma ativa e responsável.',
        minScore: 3,
        questions: [
          { text: 'Sua estratégia deve incluir uma solicitação para aprender o conteúdo?', correct: true },
          { text: 'Você deve aceitar a primeira resposta da IA sem verificar informações?', correct: false },
          { text: 'Pedir exemplos e testar seus conhecimentos ajuda no aprendizado?', correct: true },
          { text: 'A produção própria deixa de ser necessária ao usar IA?', correct: false },
          { text: 'Verificar fontes antes de finalizar faz parte de uma estratégia responsável?', correct: true }
        ]
      }
    }
  }
};

function moduleData(order, title, objective, content, example, question, options, correct, bnccCode) {
  return { id: order, order, title, objective, content, example, activity: { question, options, correct, feedbackCorrect: 'Boa análise! Você pode avançar mantendo uma postura crítica.', feedbackIncorrect: 'Reconsidere o objetivo do módulo e tente novamente.' }, progression: ['Conhecer', 'Compreender', 'Questionar', 'Verificar', 'Aprender'][Math.min(order - 1, 4)], bnccCode };
}
