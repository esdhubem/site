export interface EnciclowikiReference {
  author: string;
  title: string;
  source: string;
  year: string;
  doiOrUrl?: string;
}

export interface EnciclowikiVerbete {
  id: string; // slug único
  termo: string;
  letraInicial: string;
  categoriaId: 'saude-integrativa' | 'desenvolvimento-humano' | 'ciencia-cidada' | 'tecnologia-escrever' | 'bem-estar-social';
  categoriaNome: string;
  resumoDireto: string; // 40-60 palavras para resposta rápida
  etimologiaOuOrigem?: string;
  tags: string[];
  autor: string;
  dataPublicacao: string;
  dataAtualizacao: string;
  tempoLeitura: string;
  nivel: 'Fundamental' | 'Intermediário' | 'Avançado';
  destaque?: boolean;
  conteudo: {
    definicao: string;
    historico: string;
    principios: string[];
    impactoBiopsicossocial: string;
    aplicacoes: string[];
    pontosAtencao?: string;
  };
  citacaoAbnt: string;
  verbetesRelacionados: Array<{ id: string; termo: string; categoriaNome: string }>;
  referencias: EnciclowikiReference[];
}

export interface EnciclowikiCategoria {
  id: 'saude-integrativa' | 'desenvolvimento-humano' | 'ciencia-cidada' | 'tecnologia-escrever' | 'bem-estar-social';
  nome: string;
  descricao: string;
  icone: string;
  corBadge: string;
}

export const ENCICLOWIKI_CATEGORIAS: EnciclowikiCategoria[] = [
  {
    id: 'saude-integrativa',
    nome: 'Saúde & Práticas Integrativas',
    descricao: 'Abordagens biopsicossociais, PICS, fitoterapia e equilíbrio do organismo humano.',
    icone: 'HeartPulse',
    corBadge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
  },
  {
    id: 'desenvolvimento-humano',
    nome: 'Desenvolvimento Humano & Existencial',
    descricao: 'Autoconhecimento, inteligência emocional, psicologia positiva e construção de propósito.',
    icone: 'Compass',
    corBadge: 'bg-blue-500/15 text-blue-300 border-blue-500/30'
  },
  {
    id: 'ciencia-cidada',
    nome: 'Ciência Cidadã & Investigação Aberta',
    descricao: 'Pesquisa com rigor acessível, dados abertos (OSF), revisão ética e integridade investigativa.',
    icone: 'Microscope',
    corBadge: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30'
  },
  {
    id: 'tecnologia-escrever',
    nome: 'Tecnologia do Escrever & Mapeamento',
    descricao: 'Mapas mentais, cartografia conceitual, escrita reflexiva e produção autoral sem bloqueios.',
    icone: 'Network',
    corBadge: 'bg-amber-500/15 text-amber-300 border-amber-500/30'
  },
  {
    id: 'bem-estar-social',
    nome: 'Bem-Estar Social & Liderança Humanizada',
    descricao: 'Cultura ética, segurança psicológica, relações comunitárias e impacto coletivo.',
    icone: 'Users',
    corBadge: 'bg-rose-500/15 text-rose-300 border-rose-500/30'
  }
];

export const ENCICLOWIKI_VERBETES: EnciclowikiVerbete[] = [
  // 1. MAPA MENTAL
  {
    id: 'mapa-mental',
    termo: 'Mapa Mental (Pensamento Radial)',
    letraInicial: 'M',
    categoriaId: 'tecnologia-escrever',
    categoriaNome: 'Tecnologia do Escrever & Mapeamento',
    resumoDireto: 'Instrumento cognitivo visual e radial que estrutura ideias a partir de um núcleo central irradiando ramificações orgânicas por meio de palavras-chave, cores e conexões sinápticas. Simula a organização cerebral integrando ambos os hemisférios para potencializar memória, síntese e produção intelectual.',
    etimologiaOuOrigem: 'Do inglês "Mind Map", popularizado pelo psicólogo e pesquisador britânico Tony Buzan na década de 1970 com base em pesquisas neuroanatômicas.',
    tags: ['Pensamento Radial', 'Aprendizagem Ativa', 'Síntese Visual', 'Neurociência', 'Autoria'],
    autor: 'Coordenação Pedagógica ESDHUBEM (Prof.ª Silviane Silvério)',
    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '5 minutos',
    nivel: 'Fundamental',
    destaque: true,
    conteudo: {
      definicao: 'O Mapa Mental é um dispositivo de cartografia do pensamento que rompe com o modelo sequencial e horizontal das anotações lineares. Ele organiza conceitos de maneira centrífuga e hierárquica, utilizando núcleos imagéticos e ramos orgânicos que refletem a morfologia dos neurônios e suas sinapses dendríticas.',
      historico: 'Embora o uso de diagramas radiais remonte a filósofos da Antiguidade como Porfírio de Tiro no século III, o termo e a metodologia científica moderna foram codificados por Tony Buzan nos anos 1970, demonstrando que a mente humana assimila dados por associação não-linear e ressonância visual.',
      principios: [
        'Núcleo Central Único: ponto de ancoragem temático no centro da folha ou tela.',
        'Ramificação Hierárquica: troncos primários grossos que se subdividem em galhos secundários e terciários.',
        'Economia Verbal: priorização de substantivos e verbos nucleares em detrimento de parágrafos extensos.',
        'Diferenciação Cromática: cores específicas para cada grande eixo, ativando a retenção visual fotográfica.',
        'Símbolos e Conexões Cruzadas: setas relacionais interligando ramos complementares para incentivar o pensamento sistêmico.'
      ],
      impactoBiopsicossocial: 'Reduz substancialmente a sobrecarga cognitiva e a fadiga atencional durante sessões de estudo ou planejamento estratégico. Promove o "Efeito de Superioridade da Imagem", permitindo que o indivíduo processe e recupere informações até 60.000 vezes mais rápido do que texto monocromático.',
      aplicacoes: [
        'Planejamento de artigos científicos, monografias e capítulos de livros autorais.',
        'Revisão espaçada de conteúdos densos em concursos e pós-graduações.',
        'Estruturação de palestras, reuniões estratégicas e diagnósticos biopsicossociais.',
        'Tomada de decisões complexas com múltiplos fatores concorrentes.'
      ],
      pontosAtencao: 'Não deve ser confundido com o mapa conceitual, que exige proposições gramaticais explícitas entre os nós. O excesso de texto dentro dos nós anula a agilidade visual e a assimilação do mapa mental.'
    },
    citacaoAbnt: 'SILVÉRIO, Silviane. Mapa Mental (Pensamento Radial). In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=mapa-mental>. Acesso em: 20 out. 2026.',
    verbetesRelacionados: [
      { id: 'tecnologia-do-escrever-e-mapear', termo: 'Tecnologia do Escrever e do Mapear', categoriaNome: 'Tecnologia do Escrever & Mapeamento' },
      { id: 'autoria-consciente', termo: 'Autoria Consciente & Integridade Investigativa', categoriaNome: 'Ciência Cidadã & Investigação Aberta' },
      { id: 'ciencia-cidada', termo: 'Ciência Cidadã', categoriaNome: 'Ciência Cidadã & Investigação Aberta' }
    ],
    referencias: [
      {
        author: 'BUZAN, Tony; BUZAN, Barry',
        title: 'The Mind Map Book: How to Use Radiant Thinking to Maximize Your Brain\'s Untapped Potential',
        source: 'London: BBC Books',
        year: '1993'
      },
      {
        author: 'SWELLER, John',
        title: 'Cognitive Load Theory and the Format of Instruction',
        source: 'Cognition and Instruction, v. 5, n. 4, p. 257-285',
        year: '1988',
        doiOrUrl: 'https://doi.org/10.1207/s1532690xci0504_2'
      }
    ]
  },

  // 2. PRÁTICAS INTEGRATIVAS E COMPLEMENTARES EM SAÚDE (PICS)
  {
    id: 'praticas-integrativas-complementares',
    termo: 'Práticas Integrativas e Complementares em Saúde (PICS)',
    letraInicial: 'P',
    categoriaId: 'saude-integrativa',
    categoriaNome: 'Saúde & Práticas Integrativas',
    resumoDireto: 'Conjunto de abordagens terapêuticas fundamentadas em sistemas médicos tradicionais e conhecimentos baseados em evidências que visam à prevenção de agravos, à promoção do autocuidado e à restauração do equilíbrio biopsicossocial do ser humano de forma holística e interdisciplinar.',
    etimologiaOuOrigem: 'Terminologia oficial adotada pela Organização Mundial da Saúde (OMS) como Medicina Tradicional, Complementar e Integrativa (MTCI) e institucionalizada no Brasil pelo SUS pela Portaria MS nº 971/2006.',
    tags: ['PICS', 'Saúde Holística', 'Biopsicossocial', 'Autocuidado', 'Fitoterapia', 'SUS'],
    autor: 'Prof.ª Silviane Silvério (Biomédica Integrativa)',
    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '6 minutos',
    nivel: 'Fundamental',
    destaque: true,
    conteudo: {
      definicao: 'As Práticas Integrativas e Complementares em Saúde (PICS) são recursos terapêuticos que consideram a pessoa em sua totalidade multidimensional — física, emocional, mental, relacional e existencial —, não atuando apenas no silenciamento do sintoma isolado, mas na regulação das causas profundas do desequilíbrio.',
      historico: 'Com o reconhecimento global da OMS da importância de valorizar tradições médicas milenares consagradas pela fitoterapia, medicina tradicional chinesa e práticas corporais, o Ministério da Saúde brasileiro oficializou a Política Nacional de Práticas Integrativas e Complementares (PNPIC) em 2006, hoje contando com 29 práticas regulamentadas no Sistema Único de Saúde.',
      principios: [
        'Visão Integral: o indivíduo compreendido como um ecossistema biopsicossocial vivo.',
        'Promoção da Saúde e Prevenção: foco na conservação da vitalidade e na resiliência biológica antes do adoecimento crônico.',
        'Relação Terapêutica Empática: escuta qualificada e protagonismo ativo do sujeito em seu processo de recuperação.',
        'Estímulo dos Mecanismos Naturais de Autorregulação: fomento à homeostase e à salutogênese do organismo.'
      ],
      impactoBiopsicossocial: 'Favorece o decréscimo do uso indiscriminado de fármacos sintéticos para queixas leves e moderadas, diminui índices de ansiedade crônica e estresse somatizado, e resgata o senso de pertencimento e autonomia corporal da pessoa atendida.',
      aplicacoes: [
        'Atendimento clínico individualizado em fitoterapia, aromaterapia e biofísica aplicada.',
        'Oficinas comunitárias de saúde integrativa e rodas de conversa em saúde preventiva.',
        'Gestão de estresse e suporte à saúde mental em ambientes corporativos e educacionais.',
        'Pesquisa científica observacional sobre desfechos clínicos e qualidade de vida.'
      ],
      pontosAtencao: 'As PICS são complementares e não devem substituir tratamentos médicos de emergência ou prescrições farmacológicas para patologias graves já diagnosticadas sem avaliação médica prévia.'
    },
    citacaoAbnt: 'SILVÉRIO, Silviane. Práticas Integrativas e Complementares em Saúde (PICS). In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=praticas-integrativas-complementares>. Acesso em: 20 out. 2026.',
    verbetesRelacionados: [
      { id: 'saude-biopsicossocial', termo: 'Saúde Biopsicossocial', categoriaNome: 'Saúde & Práticas Integrativas' },
      { id: 'bem-estar-social', termo: 'Bem-Estar Social & Dimensão Relacional', categoriaNome: 'Bem-Estar Social & Liderança Humanizada' },
      { id: 'ciencia-cidada', termo: 'Ciência Cidadã', categoriaNome: 'Ciência Cidadã & Investigação Aberta' }
    ],
    referencias: [
      {
        author: 'BRASIL. Ministério da Saúde',
        title: 'Política Nacional de Práticas Integrativas e Complementares no SUS: atitude de ampliação de acesso',
        source: 'Brasília: Ministério da Saúde, 2. ed.',
        year: '2015'
      },
      {
        author: 'WORLD HEALTH ORGANIZATION (WHO)',
        title: 'WHO traditional medicine strategy: 2014-2023',
        source: 'Geneva: World Health Organization',
        year: '2013',
        doiOrUrl: 'https://www.who.int/publications/i/item/9789241506096'
      }
    ]
  },

  // 3. CIÊNCIA CIDADÃ
  {
    id: 'ciencia-cidada',
    termo: 'Ciência Cidadã (Citizen Science)',
    letraInicial: 'C',
    categoriaId: 'ciencia-cidada',
    categoriaNome: 'Ciência Cidadã & Investigação Aberta',
    resumoDireto: 'Metodologia participativa e emancipatória de pesquisa na qual cidadãos, pesquisadores independentes e comunidades cooperam ativamente nas etapas de coleta de dados, formulação de hipóteses e difusão do conhecimento, democratizando a produção científica com rigor e transparência.',
    etimologiaOuOrigem: 'Conceito consolidado na década de 1990 pelo sociólogo Alan Irwin (Reino Unido) e pelo ornitólogo Rick Bonney (Estados Unidos) para definir a colaboração social com a ciência formal.',
    tags: ['Ciência Aberta', 'Pesquisa Participativa', 'Rigor Acadêmico', 'OSF', 'Transparência'],
    autor: 'Coordenação de Pesquisa ESDHUBEM',
    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '6 minutos',
    nivel: 'Intermediário',
    destaque: true,
    conteudo: {
      definicao: 'A Ciência Cidadã é um paradigma investigativo que quebra o monopólio corporativo e burocrático sobre a produção do saber. Ela capacita pessoas comuns e profissionais de diferentes áreas a atuarem como coinvestigadores rigorosos, submetendo seus métodos à validação pública por pares e à transparência documental irrestrita.',
      historico: 'Historicamente, grandes marcos da humanidade foram erguidos por pesquisadores independentes (como Gregor Mendel na genética e Charles Darwin na biologia evolutiva). No século XXI, impulsionada por redes digitais e repositórios de dados abertos como o Open Science Framework (OSF), a ciência cidadã ganhou escala global.',
      principios: [
        'Transparência Metodológica Total: divulgação clara das etapas, critérios amostrais e limitações de cada estudo.',
        'Reprodutibilidade dos Dados: disponibilização aberta dos achados para que qualquer pesquisador possa replicá-los.',
        'Ética e Não-Exploração: respeito aos colaboradores e proteção à integridade autoral de quem gera o conhecimento.',
        'Impacto Social Real: orientação da pesquisa para a resolução de dores e demandas autênticas da comunidade.'
      ],
      impactoBiopsicossocial: 'Desmistifica a linguagem hermética da academia, promove o pensamento crítico contra desinformações e fortalece o sentimento de agência, autoeficácia e utilidade pública dos participantes.',
      aplicacoes: [
        'Mapeamento comunitário de indicadores de saúde mental e hábitos alimentares.',
        'Estudos de campo sobre biodiversidade, plantas medicinais e botânica local.',
        'Desenvolvimento de trabalhos de conclusão e manuscritos independentes com registro em DOI e OSF.',
        'Monitoramento de condições ambientais e sociais em bairros e cidades.'
      ],
      pontosAtencao: 'A pesquisa cidadã não dispensa o rigor metodológico. É obrigatório seguir protocolos de ética em pesquisa, consentimento livre e esclarecido e verificação de inconsistências amostrais.'
    },
    citacaoAbnt: 'ESDHUBEM. Ciência Cidadã (Citizen Science). In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=ciencia-cidada>. Acesso em: 20 out. 2026.',
    verbetesRelacionados: [
      { id: 'autoria-consciente', termo: 'Autoria Consciente & Integridade Investigativa', categoriaNome: 'Ciência Cidadã & Investigação Aberta' },
      { id: 'tecnologia-do-escrever-e-mapear', termo: 'Tecnologia do Escrever e do Mapear', categoriaNome: 'Tecnologia do Escrever & Mapeamento' },
      { id: 'saude-biopsicossocial', termo: 'Saúde Biopsicossocial', categoriaNome: 'Saúde & Práticas Integrativas' }
    ],
    referencias: [
      {
        author: 'IRWIN, Alan',
        title: 'Citizen Science: A Study of People, Expertise and Sustainable Development',
        source: 'London: Routledge',
        year: '1995'
      },
      {
        author: 'EUROPEAN CITIZEN SCIENCE ASSOCIATION (ECSA)',
        title: 'Ten Principles of Citizen Science',
        source: 'Berlin: ECSA',
        year: '2015',
        doiOrUrl: 'https://doi.org/10.17605/OSF.IO/XPR2N'
      }
    ]
  },

  // 4. TECNOLOGIA DO ESCREVER E DO MAPEAR
  {
    id: 'tecnologia-do-escrever-e-mapear',
    termo: 'Tecnologia do Escrever e do Mapear',
    letraInicial: 'T',
    categoriaId: 'tecnologia-escrever',
    categoriaNome: 'Tecnologia do Escrever & Mapeamento',
    resumoDireto: 'Metodologia autoral desenvolvida no âmbito da ESDHUBEM que articula o pensamento radial, a escrita reflexiva estruturada e a cartografia conceitual para destravar o processo criativo, superar o bloqueio da página em branco e transmutar o estudo passivo em produção intelectual autêntica.',
    etimologiaOuOrigem: 'Metodologia formulada pela pesquisadora e educadora Silviane Silvério, integrando neurociência da aprendizagem, psicologia cognitiva e práticas investigativas.',
    tags: ['Metodologia Autoral', 'Escrita Reflexiva', 'Cartografia Conceitual', 'Destravar Escrita', 'ESDHUBEM'],
    autor: 'Prof.ª Silviane Silvério',
    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '5 minutos',
    nivel: 'Intermediário',
    destaque: true,
    conteudo: {
      definicao: 'A Tecnologia do Escrever e do Mapear é uma prática pedagógica e mental em que a escrita não é tratada como um ato mecânico final, mas como um ecossistema progressivo de investigação. O método prevê a transição fluida do pensamento caótico para a ancoragem em mapas mentais e a posterior redação fundamentada com voz autoral própria.',
      historico: 'Criada para combater a síndrome do "conhecimento de gaveta" — em que pessoas estudam centenas de horas mas nunca conseguem materializar o aprendizado em artigos, livros ou ensaios —, a metodologia foi estruturada como pilar transversal de todas as formações da ESDHUBEM.',
      principios: [
        'Mapear Antes de Redigir: clarificar a arquitetura relacional das ideias no mapa mental antes de redigir o primeiro parágrafo.',
        'Autoria Consciente: substituir a paráfrase vazia e a cópia passiva por reflexões próprias embasadas em evidências.',
        'Fracionamento Operacional: dividir teses densas em micromódulos conceituais para evitar paralisia decisória.',
        'Iteração Sem Punição: o rascunho como território de teste seguro e aprimoramento contínuo.'
      ],
      impactoBiopsicossocial: 'Promove a redução da ansiedade do estudante/pesquisador diante de prazos e bancas, eleva a autoconfiança intelectual e restaura o prazer pessoal na criação escrita.',
      aplicacoes: [
        'Concepção e redação de artigos acadêmicos, TCCs e ensaios investigativos.',
        'Estruturação de livros, e-books e apostilas didáticas de professores e terapeutas.',
        'Elaboração de planos de ação corporativos e sínteses de relatórios de gestão.',
        'Desenvolvimento de projetos de vida e registros de diários reflexivos existenciais.'
      ],
      pontosAtencao: 'Não se trata de uma fórmula algorítmica ou gerador automático de texto, mas de um processo de disciplina intelectual e reflexão ativa exigente de esforço cognitivo genuíno.'
    },
    citacaoAbnt: 'SILVÉRIO, Silviane. Tecnologia do Escrever e do Mapear. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=tecnologia-do-escrever-e-mapear>. Acesso em: 20 out. 2026.',
    verbetesRelacionados: [
      { id: 'mapa-mental', termo: 'Mapa Mental (Pensamento Radial)', categoriaNome: 'Tecnologia do Escrever & Mapeamento' },
      { id: 'autoria-consciente', termo: 'Autoria Consciente & Integridade Investigativa', categoriaNome: 'Ciência Cidadã & Investigação Aberta' },
      { id: 'desenvolvimento-humano-existencial', termo: 'Desenvolvimento Humano & Existencial', categoriaNome: 'Desenvolvimento Humano & Existencial' }
    ],
    referencias: [
      {
        author: 'SILVÉRIO, Silviane',
        title: 'Tecnologia do Escrever e do Mapear: Manual Prático de Autoria e Construção Conceitual',
        source: 'Curitiba: Editora ESDHUBEM',
        year: '2026'
      },
      {
        author: 'GRAFF, Gerald; BIRKENSTEIN, Cathy',
        title: 'They Say / I Say: The Moves That Matter in Academic Writing',
        source: 'New York: W. W. Norton & Company, 4. ed.',
        year: '2018'
      }
    ]
  },

  // 5. AUTORIA CONSCIENTE & INTEGRIDADE INVESTIGATIVA
  {
    id: 'autoria-consciente',
    termo: 'Autoria Consciente & Integridade Investigativa',
    letraInicial: 'A',
    categoriaId: 'ciencia-cidada',
    categoriaNome: 'Ciência Cidadã & Investigação Aberta',
    resumoDireto: 'Postura ética e intelectual em que o produtor de conteúdo assume a responsabilidade direta sobre suas ideias, dados e argumentos, repudiando o plágio, a cópia acrítica de modelos artificiais e a simulação de autoridade, com valorização da transparência de fontes e do mérito formativo real.',
    etimologiaOuOrigem: 'Desenvolvida como diretriz deontológica da ESDHUBEM em consonância com as normas internacionais de ética em pesquisa (COPE - Committee on Publication Ethics).',
    tags: ['Ética', 'Integridade', 'Combate ao Plágio', 'COPE', 'Meritocracia', 'Autoria'],
    autor: 'Comitê de Ética e Publicações ESDHUBEM',
    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '5 minutos',
    nivel: 'Intermediário',
    destaque: false,
    conteudo: {
      definicao: 'A Autoria Consciente é o compromisso inegociável do autor com a veracidade das fontes, a originalidade da reflexão e o respeito aos direitos de terceiros. Em uma era de geração massiva de textos sintéticos por inteligência artificial, a autoria consciente distingue a produção genuína de valor da reciclagem oca de palavras.',
      historico: 'Historicamente fundamentada no direito moral do autor e no rigor dos comitês científicos internacionais, essa diretriz foi redefinida pela ESDHUBEM para responder aos desafios da era da desinformação algorítmica, estabelecendo critérios claros para a validação meritória de certificações.',
      principios: [
        'Transparência de Atribuição: citar fielmente todos os autores que inspiraram os conceitos discutidos.',
        'Rigor Contra o Plágio: repúdio absoluto à cópia literal ou disfarçada sem as devidas aspas e fontes.',
        'Uso Ético da Tecnologia: ferramentas digitais e IAs devem servir como coadjuvantes de organização, nunca substituindo o raciocínio autônomo do pesquisador.',
        'Avaliação Meritória Formativa: foco no avanço real da compreensão do aluno em vez de notas punitivas.'
      ],
      impactoBiopsicossocial: 'Cria um ambiente acadêmico e formativo baseado na confiança mútua, desfaz a ansiedade da impostura e confere relevância pública duradoura aos trabalhos apresentados pelos alunos.',
      aplicacoes: [
        'Submissão de manuscritos para a Escala de Autoria e Selos de Mérito da ESDHUBEM.',
        'Produção de conteúdos digitais educativos com respaldo e credibilidade.',
        'Estruturação de comitês de integridade e boas práticas editoriais.',
        'Desenvolvimento de postura crítica na leitura de notícias e artigos científicos.'
      ],
      pontosAtencao: 'A autoria não exige que a pessoa crie algo sem precedentes na história humana, mas que sua conexão de ideias seja honesta, transparente e traga seu olhar reflexivo autêntico.'
    },
    citacaoAbnt: 'ESDHUBEM. Autoria Consciente & Integridade Investigativa. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=autoria-consciente>. Acesso em: 20 out. 2026.',
    verbetesRelacionados: [
      { id: 'ciencia-cidada', termo: 'Ciência Cidadã', categoriaNome: 'Ciência Cidadã & Investigação Aberta' },
      { id: 'tecnologia-do-escrever-e-mapear', termo: 'Tecnologia do Escrever e do Mapear', categoriaNome: 'Tecnologia do Escrever & Mapeamento' },
      { id: 'mapa-mental', termo: 'Mapa Mental (Pensamento Radial)', categoriaNome: 'Tecnologia do Escrever & Mapeamento' }
    ],
    referencias: [
      {
        author: 'COMMITTEE ON PUBLICATION ETHICS (COPE)',
        title: 'Core Practices and Guidelines on Authorship and Contributorship',
        source: 'London: COPE',
        year: '2021',
        doiOrUrl: 'https://publicationethics.org/core-practices'
      },
      {
        author: 'ESDHUBEM',
        title: 'Diretrizes de Proteção à Autoria e Normas de Publicação',
        source: 'Curitiba: Conselho Editorial ESDHUBEM',
        year: '2026'
      }
    ]
  },

  // 6. SAÚDE BIOPSICOSSOCIAL
  {
    id: 'saude-biopsicossocial',
    termo: 'Saúde Biopsicossocial',
    letraInicial: 'S',
    categoriaId: 'saude-integrativa',
    categoriaNome: 'Saúde & Práticas Integrativas',
    resumoDireto: 'Modelo compreensivo de saúde que entende o bem-estar e o adoecimento humano como a resultante complexa da interação dinâmica entre fatores biológicos (genética, bioquímica, fisiologia), psicológicos (pensamentos, emoções, memórias) e socioculturais (família, trabalho, economia, ambiente).',
    etimologiaOuOrigem: 'Modelo proposto formalmente em 1977 pelo médico e psiquiatra norte-americano George L. Engel na revista Science, em contraposição ao modelo biomédico reducionista.',
    tags: ['George Engel', 'Holismo', 'Salutogênese', 'Saúde Mental', 'Multidisciplinaridade'],
    autor: 'Prof.ª Silviane Silvério (Biomédica Integrativa)',
    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '5 minutos',
    nivel: 'Fundamental',
    destaque: false,
    conteudo: {
      definicao: 'A Saúde Biopsicossocial supera a visão cartesiana do corpo como uma máquina puramente biológica dividida em órgãos isolados. Ela estabelece que o sistema imune, o sistema nervoso central e a estabilidade emocional de uma pessoa são diretamente influenciados por seus vínculos afetivos, condições habitacionais e crenças existenciais.',
      historico: 'Proposto por George Engel no artigo histórico "The Need for a New Medical Model: A Challenge for Biomedicine", o modelo influenciou a redefinição de saúde da OMS como "um estado de completo bem-estar físico, mental e social, e não meramente a ausência de doença ou enfermidade".',
      principios: [
        'Interdependência Sistêmica: nenhum sintoma corporal ocorre no vazio relacional ou psicológico.',
        'Salutogênese: investigação dos fatores que geram vitalidade e resiliência, e não apenas dos agentes patogênicos.',
        'Interdisciplinaridade: colaboração entre medicina, biomedicina, psicologia, nutrição e assistência social.',
        'Escuta da Narrativa do Sujeito: a biografia do paciente tem peso diagnóstico fundamental na sua recuperação.'
      ],
      impactoBiopsicossocial: 'Proporciona intervenções clínicas com muito maior índice de adesão e eficácia no tratamento de dores crônicas, distúrbios digestivos funcionais e desequilíbrios metabólicos relacionados ao estresse oxidativo prolongado.',
      aplicacoes: [
        'Consultoria e planos de cuidado em práticas integrativas e saúde comunitária.',
        'Programas de medicina do trabalho focados em qualidade de vida e prevenção de burnout.',
        'Projetos educacionais de alfabetização emocional em escolas e universidades.',
        'Políticas públicas de acolhimento em unidades básicas de saúde.'
      ],
      pontosAtencao: 'Não se deve confundir a dimensão psicossocial com "culpabilização do paciente" por sua enfermidade; fatores genéticos e ambientais tóxicos continuam tendo peso real.'
    },
    citacaoAbnt: 'SILVÉRIO, Silviane. Saúde Biopsicossocial. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=saude-biopsicossocial>. Acesso em: 20 out. 2026.',
    verbetesRelacionados: [
      { id: 'praticas-integrativas-complementares', termo: 'Práticas Integrativas e Complementares em Saúde (PICS)', categoriaNome: 'Saúde & Práticas Integrativas' },
      { id: 'bem-estar-social', termo: 'Bem-Estar Social & Dimensão Relacional', categoriaNome: 'Bem-Estar Social & Liderança Humanizada' },
      { id: 'desenvolvimento-humano-existencial', termo: 'Desenvolvimento Humano & Existencial', categoriaNome: 'Desenvolvimento Humano & Existencial' }
    ],
    referencias: [
      {
        author: 'ENGEL, George L.',
        title: 'The Need for a New Medical Model: A Challenge for Biomedicine',
        source: 'Science, v. 196, n. 4286, p. 129-136',
        year: '1977',
        doiOrUrl: 'https://doi.org/10.1126/science.847460'
      },
      {
        author: 'ANTONOVSKY, Aaron',
        title: 'Unraveling the Mystery of Health: How People Manage Stress and Stay Well',
        source: 'San Francisco: Jossey-Bass',
        year: '1987'
      }
    ]
  },

  // 7. DESENVOLVIMENTO HUMANO & EXISTENCIAL
  {
    id: 'desenvolvimento-humano-existencial',
    termo: 'Desenvolvimento Humano & Existencial',
    letraInicial: 'D',
    categoriaId: 'desenvolvimento-humano',
    categoriaNome: 'Desenvolvimento Humano & Existencial',
    resumoDireto: 'Processo contínuo de amadurecimento cognitivo, afetivo e ético pelo qual o indivíduo constrói significado para a sua vida, aprimora suas competências relacionais e harmoniza suas escolhas práticas com valores existenciais profundos e senso de utilidade social.',
    etimologiaOuOrigem: 'Fundamentado na interseção entre a Logoterapia de Viktor Frankl, a Psicologia Humanista de Carl Rogers e os relatórios de desenvolvimento humano da UNESCO.',
    tags: ['Propósito', 'Viktor Frankl', 'Sentido da Vida', 'Maturidade Emocional', 'Existencialismo'],
    autor: 'Coordenação Pedagógica ESDHUBEM',
    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '6 minutos',
    nivel: 'Fundamental',
    destaque: true,
    conteudo: {
      definicao: 'O Desenvolvimento Humano e Existencial compreende que o ser humano não busca apenas a satisfação biológica de impulsos ou o acúmulo de bens materiais, mas a realização de sentido e a autotranscendência — a capacidade de dedicar a sua vida a causas, pessoas ou criações que ultrapassam o próprio ego.',
      historico: 'Após as rupturas éticas do século XX, pensadores como Viktor Frankl demonstraram que a maior necessidade humana diante do sofrimento inevitável é a "Vontade de Sentido". No contexto do século XXI, diante do vazio existencial digital e da sobrecarga de estímulos rasos, a busca por fundamentos existenciais tornou-se imperativo de saúde pública.',
      principios: [
        'Vontade de Sentido: o ser humano é motivado primariamente pela busca de um propósito pessoal significativo.',
        'Liberdade de Escolha: mesmo sob severas limitações externas, a pessoa preserva a liberdade íntima de escolher sua atitude diante da vida.',
        'Autotranscendência: a realização pessoal acontece como consequência da dedicação a algo maior que si mesmo.',
        'Integração Mente-Ação: valores e convicções morais precisam se converter em hábitos cotidianos concretos.'
      ],
      impactoBiopsicossocial: 'Atua como fator protetivo primordial contra quadros depressivos reativos, previne a desesperança crônica e oferece âncoras emocionais sólidas para a superação de transições de carreira, lutos e crises existenciais.',
      aplicacoes: [
        'Mentorias de autogestão existencial e planejamento de carreira com propósito.',
        'Mediação de conflitos interpessoais e processos de conciliação familiar.',
        'Desenvolvimento de projetos sociais e iniciativas comunitárias com valor humanitário.',
        'Formações e cursos livres voltados à expansão de consciência e autoria de vida.'
      ],
      pontosAtencao: 'Não deve ser reduzido a fórmulas fáceis de autoajuda ou positividade tóxica que ignoram as dores reais da existência e as desigualdades estruturais da sociedade.'
    },
    citacaoAbnt: 'ESDHUBEM. Desenvolvimento Humano & Existencial. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=desenvolvimento-humano-existencial>. Acesso em: 20 out. 2026.',
    verbetesRelacionados: [
      { id: 'bem-estar-social', termo: 'Bem-Estar Social & Dimensão Relacional', categoriaNome: 'Bem-Estar Social & Liderança Humanizada' },
      { id: 'tecnologia-do-escrever-e-mapear', termo: 'Tecnologia do Escrever e do Mapear', categoriaNome: 'Tecnologia do Escrever & Mapeamento' },
      { id: 'saude-biopsicossocial', termo: 'Saúde Biopsicossocial', categoriaNome: 'Saúde & Práticas Integrativas' }
    ],
    referencias: [
      {
        author: 'FRANKL, Viktor E.',
        title: 'Man\'s Search for Meaning: An Introduction to Logotherapy',
        source: 'Boston: Beacon Press',
        year: '2006'
      },
      {
        author: 'ROGERS, Carl R.',
        title: 'On Becoming a Person: A Therapist\'s View of Psychotherapy',
        source: 'Boston: Houghton Mifflin',
        year: '1961'
      }
    ]
  },

  // 8. BEM-ESTAR SOCIAL & DIMENSÃO RELACIONAL
  {
    id: 'bem-estar-social',
    termo: 'Bem-Estar Social & Dimensão Relacional',
    letraInicial: 'B',
    categoriaId: 'bem-estar-social',
    categoriaNome: 'Bem-Estar Social & Liderança Humanizada',
    resumoDireto: 'Condição dinâmica de harmonia, dignidade e cooperação comunitária na qual as pessoas têm acesso a oportunidades formativas, redes de apoio afetivo, segurança psicológica e ambientes éticos, permitindo o florescimento mútuo e a convivência cidadã solidária.',
    etimologiaOuOrigem: 'Evolução conceitual das Ciências Sociais e das teorias de Capital Social de Robert Putnam e Amartya Sen.',
    tags: ['Comunidade', 'Cooperação', 'Capital Social', 'Liderança Ética', 'Empatia', 'Amartya Sen'],
    autor: 'Coordenação de Impacto Comunitário ESDHUBEM',
    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '5 minutos',
    nivel: 'Fundamental',
    destaque: false,
    conteudo: {
      definicao: 'O Bem-Estar Social vai além de meros índices econômicos de renda per capita. Ele mede a qualidade do tecido relacional que une uma comunidade, a densidade de confiança mútua, a segurança psicológica em grupos de trabalho e o compromisso ético de acolhimento aos mais vulneráveis.',
      historico: 'O economista indiano e Prêmio Nobel Amartya Sen redefiniu o desenvolvimento social não como acúmulo de riqueza material, mas como "expansão das liberdades reais que as pessoas desfrutam para levar a vida que têm razão para valorizar" (Abordagem das Capacitações).',
      principios: [
        'Confiança e Cooperação: redes sociais saudáveis fundadas na reciprocidade e na solidariedade ativa.',
        'Segurança Psicológica: ambientes onde a divergência respeitosa e a vulnerabilidade são acolhidas sem punição.',
        'Acesso Democrático ao Saber: quebra de barreiras financeiras e elitistas na transmissão do conhecimento relevante.',
        'Liderança Humanizada: exercício do poder como serviço à coletividade e promoção do bem comum.'
      ],
      impactoBiopsicossocial: 'Comunidades e empresas com alto bem-estar social apresentam índices drasticamente menores de adoecimento psíquico, menor evasão escolar, maior inovação colaborativa e maior expectativa de vida saudável.',
      aplicacoes: [
        'Criação de comitês de bem-estar social e saúde mental em instituições de ensino.',
        'Desenvolvimento de projetos comunitários de capacitação e geração de renda ética.',
        'Programas corporativos de liderança empática e combate ao assédio moral.',
        'Formações e oficinas de comunicação não-violenta e mediação de conflitos.'
      ],
      pontosAtencao: 'O bem-estar social não se sustenta apenas com boas intenções discursivas; exige práticas concretas, políticas transparentes e consistência ética diária.'
    },
    citacaoAbnt: 'ESDHUBEM. Bem-Estar Social & Dimensão Relacional. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=bem-estar-social>. Acesso em: 20 out. 2026.',
    verbetesRelacionados: [
      { id: 'desenvolvimento-humano-existencial', termo: 'Desenvolvimento Humano & Existencial', categoriaNome: 'Desenvolvimento Humano & Existencial' },
      { id: 'saude-biopsicossocial', termo: 'Saúde Biopsicossocial', categoriaNome: 'Saúde & Práticas Integrativas' },
      { id: 'ciencia-cidada', termo: 'Ciência Cidadã', categoriaNome: 'Ciência Cidadã & Investigação Aberta' }
    ],
    referencias: [
      {
        author: 'SEN, Amartya',
        title: 'Development as Freedom',
        source: 'New York: Anchor Books',
        year: '1999'
      },
      {
        author: 'PUTNAM, Robert D.',
        title: 'Bowling Alone: The Collapse and Revival of American Community',
        source: 'New York: Simon & Schuster',
        year: '2000'
      }
    ]
  }
];
