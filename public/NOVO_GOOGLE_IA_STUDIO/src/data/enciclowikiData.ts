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
  resumoDireto: string; // 40-60 palavras para resposta rápida (snippet)
  etimologiaOuOrigem?: string;
  tags: string[];
  
  // Identificação do Aluno / Autor
  autorNome: string;
  autorProfissao: string;
  autorSelo: 'Bronze' | 'Prata' | 'Ouro' | 'Diamante' | 'Coordenação';
  autorPerfilUrl?: string;

  dataPublicacao: string;
  dataAtualizacao: string;
  tempoLeitura: string;
  nivel: 'Fundamental' | 'Intermediário' | 'Avançado';
  destaque?: boolean;

  // Enquadramento Filosófico (Kant e os 3 Verbos)
  filosofia: {
    questaoKant: string; // "O que posso saber?", "O que devo fazer?", "O que posso esperar?", "O que é o homem?"
    pilarDisciplinar: string; // "Epistemologia", "Metafísica", "Ética", "Estética", "Antropologia"
    essencia: string; // O que é?
    causa: string;    // Por que é?
    estrutura: string; // Como é?
  };

  // Texto Fluido Estilo Wikipedia (500 a 800 palavras)
  textoWikiHtml: string;

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
    resumoDireto: 'O mapa mental é uma ferramenta visual de estruturação cognitiva que organiza conceitos a partir de um núcleo central, irradiando ramificações por meio de palavras-chave, cores e conexões sinápticas. Simula a organização cerebral integrando razão e criatividade para acelerar a síntese e a retenção mnêmica.',
    etimologiaOuOrigem: 'Do inglês "Mind Map", popularizado pelo pesquisador e psicólogo britânico Tony Buzan na década de 1970.',
    tags: ['Pensamento Radial', 'Síntese Visual', 'Epistemologia', 'Aprendizagem Ativa', 'Cognição'],
    
    autorNome: 'Silviane Silvério',
    autorProfissao: 'Biomédica Integrativa & Pesquisadora Educacional',
    autorSelo: 'Bronze',
    autorPerfilUrl: 'https://esdhubem.github.io/esdhubem/?page=corpo-docente',

    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '4 minutos',
    nivel: 'Fundamental',
    destaque: true,

    filosofia: {
      questaoKant: 'O que posso saber? (Epistemologia)',
      pilarDisciplinar: 'Epistemologia & Teoria Cognitiva',
      essencia: 'Dispositivo representacional não-linear da cognição humana.',
      causa: 'Inadequação da escrita estritamente horizontal para processar pensamentos em rede.',
      estrutura: 'Núcleo central único com irradiação centrífuga e hierarquizada de ramos conceituais.'
    },

    textoWikiHtml: `
      <p class="leading-relaxed mb-4 text-justify">
        O <strong>mapa mental</strong> (em inglês, <em>mind map</em>) é uma ferramenta gráfica e cognitiva projetada para organizar pensamentos, estruturar informações complexas e potencializar a aprendizagem ativa através do chamado <strong>pensamento radial</strong>. Diferente das anotações lineares tradicionais — que forçam a mente a seguir um fluxo rígido de sentenças horizontais —, o mapa mental estrutura-se a partir de um núcleo temático central, do qual irradiam ramificações orgânicas compostas por palavras-chave, contrastes cromáticos, ícones e conexões conceituais cruzadas.
      </p>

      <h2 id="origem-fundamentacao" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        1. Origem e Fundamentação Teórica
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        Embora a representação visual de redes de ideias remonte a filósofos helenísticos como Porfírio de Tiro (século III d.C.), a codificação contemporânea do método foi desenvolvida na década de 1970 pelo psicólogo e divulgador britânico <strong>Tony Buzan</strong>. Buzan partiu de pesquisas neurobiológicas sobre a especialização hemisférica do córtex cerebral, defendendo que o cérebro opera com maior eficácia quando recruta em sincronia o hemisfério esquerdo (responsável pela lógica, pelas palavras e pelas listas) e o hemisfério direito (associado a cores, ritmos, formas espaciais e dimensões visuais).
      </p>
      <p class="leading-relaxed mb-4 text-justify">
        Sob a ótica da psicologia cognitiva contemporânea, a eficácia do mapeamento mental encontra respaldo na <em>Teoria da Carga Cognitiva</em> (Sweller, 1988) e no <em>Efeito de Superioridade da Imagem</em>. Ao sintetizar blocos conceituais inteiros em palavras nucleares ancoradas visualmente por cores distintas, o mapa mental reduz a sobrecarga da memória de trabalho, liberando recursos atencionais para a compreensão profunda e a resolução de problemas.
      </p>

      <h2 id="principios-estruturais" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        2. Princípios Estruturais (Como se Constrói)
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        Para que conserve sua utilidade analítica e não degenere em um diagrama confuso, a literatura canônica estabelece cinco regras constitutivas:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-800">
        <li><strong>Núcleo Central:</strong> o tema primordial localiza-se no centro geométrico da superfície de trabalho, preferencialmente acompanhado de um elemento imagético.</li>
        <li><strong>Ramos Primários e Secundários:</strong> do centro emergem ramificações curvas e espessas (as macro-categorias), das quais brotam galhos mais delgados com desdobramentos específicos.</li>
        <li><strong>Economia Verbal:</strong> preconiza-se o emprego de uma única palavra-chave (substantivo ou verbo forte) por ramificação, evitando sentenças extensas que induzem à leitura passiva.</li>
        <li><strong>Codificação Cromática:</strong> cada eixo temático primário recebe uma cor exclusiva, funcionando como gatilho mnemônico instantâneo para a memória fotográfica.</li>
        <li><strong>Interconexões Sistêmicas:</strong> setas e linhas pontilhadas unem ramos distintos quando há relação de interdependência, estimulando a visão integrada do todo.</li>
      </ul>

      <h2 id="dimensao-etica-pratica" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        3. Dimensão Ética e Aplicação no Cotidiano
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        No campo do desenvolvimento humano e da prática investigativa, o mapa mental atua como anteparo contra o estresse intelectual e o bloqueio criativo. Ele permite ao estudante ou pesquisador encarar o projeto não como uma massa amorfa e assustadora de obrigações, mas como uma cartografia ordenada de etapas passíveis de resolução. A ferramenta é amplamente empregada no planejamento de monografias, na revisão de editais de concursos, na facilitação de reuniões interdisciplinares e no mapeamento de metas existenciais conscientes.
      </p>
    `,

    citacaoAbnt: 'SILVÉRIO, Silviane. Mapa Mental (Pensamento Radial). In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=mapa-mental>. Acesso em: 20 out. 2026.',
    
    verbetesRelacionados: [
      { id: 'tecnologia-do-escrever-e-mapear', termo: 'Tecnologia do Escrever e do Mapear', categoriaNome: 'Tecnologia do Escrever & Mapeamento' },
      { id: 'autoria-consciente', termo: 'Autoria Consciente & Integridade Investigativa', categoriaNome: 'Ciência Cidadã & Investigação Aberta' },
      { id: 'ciencia-cidada', termo: 'Ciência Cidadã (Citizen Science)', categoriaNome: 'Ciência Cidadã & Investigação Aberta' }
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
    resumoDireto: 'Abordagens terapêuticas orientadas pela integralidade do cuidado humano que utilizam recursos naturais, fitoterápicos e sistemas tradicionais para estimular os mecanismos de autorregulação biológica e promoção da saúde biopsicossocial.',
    etimologiaOuOrigem: 'Termo oficial regulamentado no Brasil pela Portaria MS nº 971/2006 (PNPIC) e chancelado pela Organização Mundial da Saúde (OMS) como Medicina Tradicional, Complementar e Integrativa (MTCI).',
    tags: ['PICS', 'Saúde Biopsicossocial', 'Ética', 'SUS', 'Fitoterapia', 'Autocuidado'],
    
    autorNome: 'Silviane Silvério',
    autorProfissao: 'Biomédica Integrativa & Escritora Independente',
    autorSelo: 'Bronze',
    autorPerfilUrl: 'https://esdhubem.github.io/esdhubem/?page=corpo-docente',

    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '4 minutos',
    nivel: 'Fundamental',
    destaque: true,

    filosofia: {
      questaoKant: 'O que devo fazer? (Ética & Prática em Saúde)',
      pilarDisciplinar: 'Ética & Epistemologia em Saúde',
      essencia: 'Cuidado em saúde centrado na totalidade vital do sujeito.',
      causa: 'Limitações do reducionismo sintomático puramente medicamentoso.',
      estrutura: 'Recursos terapêuticos integrativos baseados em evidências e escuta humanizada.'
    },

    textoWikiHtml: `
      <p class="leading-relaxed mb-4 text-justify">
        As <strong>Práticas Integrativas e Complementares em Saúde (PICS)</strong> configuram um conjunto de abordagens terapêuticas e sistemas de cuidado fundamentados no paradigma biopsicossocial, que buscam a prevenção de enfermidades, a restauração da homeostase e a promoção ativa da vitalidade do indivíduo. Em contraste com modelos estritamente biomédicos centrados na patologia e na supressão medicamentosa isolada do sintoma, as práticas integrativas enxergam a pessoa humana em sua totalidade indissociável — englobando dimensões fisiológicas, afetivas, relacionais e ambientais.
      </p>

      <h2 id="institucionalizacao-origem" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        1. Contexto Histórico e Institucionalização
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        Reconhecidas mundialmente pela <strong>Organização Mundial da Saúde (OMS)</strong> sob a rubrica de Medicinas Tradicionais, Complementares e Integrativas (MTCI), as PICS tiveram sua validação institucional no Brasil com a publicação da <em>Política Nacional de Práticas Integrativas e Complementares (PNPIC)</em>, mediante a Portaria Ministerial nº 971, de 3 de maio de 2006. Atualmente, o Sistema Único de Saúde (SUS) reconhece 29 modalidades oficiais, incluindo a fitoterapia clínica, a acupuntura, a aromaterapia, a meditação e a terapia comunitária integrativa.
      </p>
      <p class="leading-relaxed mb-4 text-justify">
        A emergência contemporânea desse modelo responde à necessidade de resgatar práticas milenares sustentadas por evidências científicas crescentes, oferecendo alternativas terapêuticas de baixo custo, alta resolutividade preventiva e mínimo potencial iatrogênico.
      </p>

      <h2 id="fundamentos-operacionais" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        2. Princípios e Salutogênese
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        A fundamentação das práticas integrativas apoia-se no conceito de <em>salutogênese</em>, introduzido pelo sociólogo Aaron Antonovsky, que investiga as origens da saúde e as forças que preservam o equilíbrio orgânico mesmo sob condições de severo estresse ambiental. Seus pilares essenciais compreendem:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-800">
        <li><strong>Integralidade do Sujeito:</strong> consideração simultânea das queixas corporais e do contexto existencial do indivíduo.</li>
        <li><strong>Estímulo da Autorregulação:</strong> o organismo é compreendido como um sistema dinâmico inteligente, capaz de regenerar-se quando fornecidos os estímulos biológicos e ambientais adequados.</li>
        <li><strong>Relação Terapêutica Horizontada:</strong> a escuta qualificada e o vínculo afetivo substituem a passividade do paciente pelo protagonismo consciente no autocuidado.</li>
      </ul>

      <h2 id="etica-responsabilidade" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        3. Dimensão Ética e Responsabilidade Clínica
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        O termo "complementar" encerra uma diretriz ética basilar: as práticas integrativas não se propõem a substituir tratamentos médicos emergenciais ou cirúrgicos para quadros agudos graves, mas a atuar em cooperação sinérgica com a medicina convencional, mitigando efeitos colaterais e restaurando a qualidade de vida duradoura.
      </p>
    `,

    citacaoAbnt: 'SILVÉRIO, Silviane. Práticas Integrativas e Complementares em Saúde (PICS). In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=praticas-integrativas-complementares>. Acesso em: 20 out. 2026.',
    
    verbetesRelacionados: [
      { id: 'saude-biopsicossocial', termo: 'Saúde Biopsicossocial', categoriaNome: 'Saúde & Práticas Integrativas' },
      { id: 'bem-estar-social', termo: 'Bem-Estar Social & Dimensão Relacional', categoriaNome: 'Bem-Estar Social & Liderança Humanizada' },
      { id: 'ciencia-cidada', termo: 'Ciência Cidadã (Citizen Science)', categoriaNome: 'Ciência Cidadã & Investigação Aberta' }
    ],

    referencias: [
      {
        author: 'BRASIL. Ministério da Saúde',
        title: 'Política Nacional de Práticas Integrativas e Complementares no SUS: atitude de ampliação de acesso',
        source: 'Brasília: Ministério da Saúde, 2. ed.',
        year: '2015'
      },
      {
        author: 'ANTONOVSKY, Aaron',
        title: 'Unraveling the Mystery of Health: How People Manage Stress and Stay Well',
        source: 'San Francisco: Jossey-Bass',
        year: '1987'
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
    resumoDireto: 'Prática de pesquisa participativa e democrática na qual cidadãos e pesquisadores independentes colaboram ativamente em etapas investigativas, formulação de hipóteses e difusão de dados sob protocolos éticos rigorosos e acesso aberto.',
    etimologiaOuOrigem: 'Conceito consolidado na década de 1990 pelo sociólogo britânico Alan Irwin e pelo ornitólogo norte-americano Rick Bonney.',
    tags: ['Ciência Cidadã', 'Ciência Aberta', 'Epistemologia', 'OSF', 'Rigor Metodológico'],
    
    autorNome: 'Henrique Vivian',
    autorProfissao: 'Pesquisador em Educação & Ciência Cidadã',
    autorSelo: 'Bronze',
    autorPerfilUrl: 'https://esdhubem.github.io/esdhubem/?page=corpo-docente',

    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '4 minutos',
    nivel: 'Intermediário',
    destaque: true,

    filosofia: {
      questaoKant: 'O que posso saber? & O que devo fazer?',
      pilarDisciplinar: 'Epistemologia & Ética Social',
      essencia: 'Democratização participativa da investigação do real.',
      causa: 'Necessidade de quebrar monopólios corporativos na validação do saber.',
      estrutura: 'Coleta aberta de dados, métodos transparentes e revisão pública por pares.'
    },

    textoWikiHtml: `
      <p class="leading-relaxed mb-4 text-justify">
        A <strong>ciência cidadã</strong> (em inglês, <em>citizen science</em>) designa o envolvimento ativo e voluntário de cidadãos, pesquisadores independentes e comunidades na condução de investigações científicas de relevância pública. Longe de representar uma simplificação do método acadêmico, o paradigma da ciência cidadã combina o rigor dos protocolos metodológicos com a capilaridade da inteligência coletiva, expandindo os horizontes da coleta de dados, da verificação experimental e da interpretação de fenômenos sociais e ambientais.
      </p>

      <h2 id="desenvolvimento-historico" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        1. Desenvolvimento Histórico e Redefinição
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        Historicamente, figuras inaugurais das ciências naturais — a exemplo de Gregor Mendel na genética vegetal e Charles Darwin na teoria evolutiva — atuaram como pesquisadores independentes fora dos muros corporativos de universidades modernas. No final do século XX, o sociólogo <strong>Alan Irwin</strong> (no Reino Unido) conceituou a ciência cidadã como a necessidade urgente de a ciência responder às necessidades reais dos cidadãos, ao passo que <strong>Rick Bonney</strong> (nos Estados Unidos) enfatizou o potencial de observadores voluntários na coleta massiva de dados ornitológicos e climáticos.
      </p>

      <h2 id="pilares-metodologicos" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        2. Pilares Metodológicos e Transparência
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        A Associação Europeia de Ciência Cidadã (ECSA) estabeleceu princípios éticos que balizam a legitimidade dessa produção:
      </p>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-800">
        <li><strong>Acesso Aberto (Open Science):</strong> os dados coligidos e os relatórios analíticos devem ser disponibilizados publicamente em repositórios abertos (como o <em>Open Science Framework - OSF</em>).</li>
        <li><strong>Benefício Mútuo:</strong> tanto os cientistas profissionais quanto os voluntários adquirem conhecimento novo, satisfação intelectual e reconhecimento autoral explícito.</li>
        <li><strong>Validação e Integridade:</strong> os achados submetem-se ao mesmo escrutínio crítico e teste de reprodutibilidade exigido em periódicos internacionais indexados.</li>
      </ul>

      <h2 id="impacto-emancipatorio" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        3. Impacto Emancipatório na Sociedade
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        Ao transformar o cidadão comum de mero consumidor passivo em coprodutor de verdades fundamentadas, a ciência cidadã atua como poderosa blindagem civilizatória contra o obscurantismo e a proliferação de notícias falsas. Ela reconecta a sociedade à prática do questionamento racional e construtivo.
      </p>
    `,

    citacaoAbnt: 'VIVIAN, Henrique. Ciência Cidadã (Citizen Science). In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=ciencia-cidada>. Acesso em: 20 out. 2026.',
    
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
    resumoDireto: 'Metodologia autoral e reflexiva desenvolvida pela ESDHUBEM que integra cartografia mental e produção escrita para destravar o processo criativo e converter o estudo passivo em produção intelectual fundamentada.',
    etimologiaOuOrigem: 'Metodologia pedagógica e epistemológica formulada por Silviane Silvério no âmbito da ESDHUBEM.',
    tags: ['Escrita Reflexiva', 'Cartografia Conceitual', 'Autoria', 'ESDHUBEM', 'Metodologia'],
    
    autorNome: 'Silviane Silvério',
    autorProfissao: 'Biomédica Integrativa & Educadora',
    autorSelo: 'Bronze',
    autorPerfilUrl: 'https://esdhubem.github.io/esdhubem/?page=corpo-docente',

    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '4 minutos',
    nivel: 'Intermediário',
    destaque: true,

    filosofia: {
      questaoKant: 'O que é o homem? & O que posso saber?',
      pilarDisciplinar: 'Epistemologia & Estética da Escrita',
      essencia: 'Cartografia relacional do pensamento antes da linearização textual.',
      causa: 'Bloqueio criativo e paralisia diante da página em branco.',
      estrutura: 'Ciclo ternário: Mapear (estrutura) -> Escrever (reflexão) -> Lapidar (autoria).'
    },

    textoWikiHtml: `
      <p class="leading-relaxed mb-4 text-justify">
        A <strong>Tecnologia do Escrever e do Mapear</strong> é uma prática epistemológica e pedagógica criada para superar a fragmentação do raciocínio e o clássico bloqueio diante da página em branco. Fundamentada na premissa de que a escrita autêntica não é um ato de reprodução mecânica de teses alheias, mas uma investigação ativa de sentido, a metodologia estabelece um itinerário estruturado que parte da cartografia de nós conceituais para a redação fluida de manuscritos, livros e ensaios.
      </p>

      <h2 id="antidoto-gaveta" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        1. O Antídoto ao "Conhecimento de Gaveta"
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        Milhares de estudantes e profissionais acumulam anos de leitura e dezenas de certificados sem jamais sintetizarem suas reflexões em produções públicas assinadas. A metodologia da ESDHUBEM diagnostica esse fenômeno como resultado do ensino escolar tradicional, que enfatiza a memorização passiva e a paráfrase vazia. Ao introduzir o mapeamento preliminar obrigatório, o autor visualiza a arquitetura lógica do seu tema antes de redigir a primeira sentença, eliminando a angústia da dispersão temática.
      </p>

      <h2 id="etapas-operacionais" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        2. As Três Etapas do Itinerário
      </h2>
      <ul class="list-disc list-inside space-y-2 mb-4 text-slate-800">
        <li><strong>Fase I - Cartografia Radial (Mapear):</strong> identificação das categorias axiais, definição das âncoras temáticas e eliminação de redundâncias conceituais no papel ou tela digital.</li>
        <li><strong>Fase II - Escrita Reflexiva Fluida (Escrever):</strong> redação contínua guiada pelos galhos do mapa, priorizando a voz autoral, a clareza argumentativa e o vínculo com a experiência prática.</li>
        <li><strong>Fase III - Lapidação Hermenêutica (Lapidar):</strong> revisão crítica com suporte em referenciais científicos e conferência das normas éticas de citação.</li>
      </ul>
    `,

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
    resumoDireto: 'Compromisso ético, epistêmico e moral do autor com a verdade das fontes, a originalidade da argumentação e a transparência metodológica, repudiando o plágio, a cópia acrítica e a simulação de autoridade.',
    etimologiaOuOrigem: 'Fundamentada nas diretrizes do Committee on Publication Ethics (COPE) e na deontologia formativa da ESDHUBEM.',
    tags: ['Ética', 'Integridade Acadêmica', 'COPE', 'Combate ao Plágio', 'Meritocracia'],
    
    autorNome: 'Comitê Editorial ESDHUBEM',
    autorProfissao: 'Conselho Pedagógico & Ético',
    autorSelo: 'Bronze',
    autorPerfilUrl: 'https://esdhubem.github.io/esdhubem/?page=diretrizes-protecao-autoria',

    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '4 minutos',
    nivel: 'Intermediário',
    destaque: false,

    filosofia: {
      questaoKant: 'O que devo fazer? (Ética Deontológica)',
      pilarDisciplinar: 'Ética & Metafísica da Responsabilidade',
      essencia: 'Assunção integral da autoria moral e intelectual do texto.',
      causa: 'Proliferação do plágio sintético e da superficialidade informacional.',
      estrutura: 'Atribuição correta de fontes, autenticidade investigativa e validação meritória.'
    },

    textoWikiHtml: `
      <p class="leading-relaxed mb-4 text-justify">
        A <strong>autoria consciente</strong> é a assunção pública e responsável da paternidade intelectual de uma obra, estudo ou verbete enciclopédico. Em um ecossistema digital marcado pela reprodução em massa de textos gerados sinteticamente por algoritmos preditivos, a autoria consciente resgata a dignidade do trabalho reflexivo humano: o texto deixa de ser uma montagem de retalhos descontextualizados e passa a ser uma contribuição ética, original e verificável para a sociedade.
      </p>

      <h2 id="combate-plagio" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        1. Repúdio ao Plágio e Rigor de Atribuição
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        A apropriação indevida de ideias, formulações verbais ou estruturas alheias sem a devida referência constitui grave violação ética e jurídica. As diretrizes da ESDHUBEM alinham-se aos parâmetros internacionais do <em>Committee on Publication Ethics (COPE)</em>, estabelecendo que todo conceito derivado de leituras anteriores deve ser creditado com precisão bibliográfica, ao mesmo tempo em que o autor deve demonstrar seu próprio esforço de análise e articulação crítica.
      </p>
    `,

    citacaoAbnt: 'ESDHUBEM. Autoria Consciente & Integridade Investigativa. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=autoria-consciente>. Acesso em: 20 out. 2026.',
    
    verbetesRelacionados: [
      { id: 'ciencia-cidada', termo: 'Ciência Cidadã (Citizen Science)', categoriaNome: 'Ciência Cidadã & Investigação Aberta' },
      { id: 'tecnologia-do-escrever-e-mapear', termo: 'Tecnologia do Escrever e do Mapear', categoriaNome: 'Tecnologia do Escrever & Mapeamento' }
    ],

    referencias: [
      {
        author: 'COMMITTEE ON PUBLICATION ETHICS (COPE)',
        title: 'Core Practices and Guidelines on Authorship',
        source: 'London: COPE',
        year: '2021',
        doiOrUrl: 'https://publicationethics.org/core-practices'
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
    resumoDireto: 'Paradigma integral de saúde que reconhece o bem-estar e o adoecimento humano como o resultado interativo entre determinantes biológicos, psicológicos e socioculturais dinâmicos.',
    etimologiaOuOrigem: 'Formulado em 1977 pelo médico e psiquiatra norte-americano George L. Engel no periódico Science.',
    tags: ['George Engel', 'Saúde Integral', 'Salutogênese', 'Epistemologia Médica'],
    
    autorNome: 'Silviane Silvério',
    autorProfissao: 'Biomédica Integrativa',
    autorSelo: 'Bronze',
    autorPerfilUrl: 'https://esdhubem.github.io/esdhubem/?page=corpo-docente',

    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '4 minutos',
    nivel: 'Fundamental',
    destaque: false,

    filosofia: {
      questaoKant: 'O que é o homem? & O que devo fazer?',
      pilarDisciplinar: 'Antropologia Médica & Epistemologia',
      essencia: 'Ser humano como totalidade biopsicossocial indissociável.',
      causa: 'Insuficiência do reducionismo cartesiano diante de desordens multifatoriais.',
      estrutura: 'Matriz interativa entre fisiologia, subjetividade psíquica e meio social.'
    },

    textoWikiHtml: `
      <p class="leading-relaxed mb-4 text-justify">
        O modelo de <strong>saúde biopsicossocial</strong> constitui uma profunda revolução paradigmática na medicina e nas ciências da vida, postulando que a saúde e o adoecimento não podem ser adequadamente explicados exclusivamente por mecanismos moleculares ou disfunções orgânicas isoladas. Apresentado formalmente em 1977 pelo psiquiatra norte-americano <strong>George L. Engel</strong>, o modelo argumenta que cada manifestação clínica reflete a conjugação recíproca entre a bagagem biológica (genética, bioquímica e celular), as variáveis psicológicas (crenças, emoções, traumas e resiliência) e o ecossistema sociocultural (vínculos familiares, condições de trabalho, renda e meio ambiente).
      </p>

      <h2 id="ruptura-biomedica" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        1. A Ruptura com o Reducionismo Mecanicista
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        O modelo biomédico tradicional, herdado da física newtoniana e da filosofia mecanicista de Descartes, operava tratando o corpo como uma engrenagem que requer conserto mecânico. Embora esse prisma tenha obtido triunfos históricos no controle de doenças infecciosas e traumas agudos, mostrou-se incapaz de lidar satisfatoriamente com as epidemias do século XXI: dores crônicas, síndromes metabólicas, esgotamento profissional (burnout) e distúrbios da ansiedade, cujas raízes são predominantemente relacionais e existenciais.
      </p>
    `,

    citacaoAbnt: 'SILVÉRIO, Silviane. Saúde Biopsicossocial. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=saude-biopsicossocial>. Acesso em: 20 out. 2026.',
    
    verbetesRelacionados: [
      { id: 'praticas-integrativas-complementares', termo: 'Práticas Integrativas e Complementares em Saúde (PICS)', categoriaNome: 'Saúde & Práticas Integrativas' },
      { id: 'bem-estar-social', termo: 'Bem-Estar Social & Dimensão Relacional', categoriaNome: 'Bem-Estar Social & Liderança Humanizada' }
    ],

    referencias: [
      {
        author: 'ENGEL, George L.',
        title: 'The Need for a New Medical Model: A Challenge for Biomedicine',
        source: 'Science, v. 196, n. 4286, p. 129-136',
        year: '1977',
        doiOrUrl: 'https://doi.org/10.1126/science.847460'
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
    resumoDireto: 'Trajetória contínua de expansão de consciência, autonomia emocional e busca ativa de sentido pela qual o ser humano alinha suas decisões práticas a valores éticos e vocação social.',
    etimologiaOuOrigem: 'Originado na confluência da Logoterapia de Viktor Frankl, da Psicologia Humanista de Carl Rogers e da Filosofia Existencialista.',
    tags: ['Logoterapia', 'Viktor Frankl', 'Sentido da Vida', 'Existencialismo', 'Ética'],
    
    autorNome: 'Henrique Vivian',
    autorProfissao: 'Pesquisador em Filosofia & Educação',
    autorSelo: 'Bronze',
    autorPerfilUrl: 'https://esdhubem.github.io/esdhubem/?page=corpo-docente',

    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '4 minutos',
    nivel: 'Fundamental',
    destaque: true,

    filosofia: {
      questaoKant: 'O que posso esperar? & O que é o homem?',
      pilarDisciplinar: 'Antropologia Filosófica & Ética',
      essencia: 'Construção autônoma de sentido vital diante da existência.',
      causa: 'O vazio existencial gerado pela desagregação social contemporânea.',
      estrutura: 'Autoexame contínuo, maturidade relacional e autotranscendência.'
    },

    textoWikiHtml: `
      <p class="leading-relaxed mb-4 text-justify">
        O <strong>desenvolvimento humano e existencial</strong> é o processo pelo qual a pessoa transcende o condicionamento puramente biológico e social para assumir o protagonismo consciente da sua biografia. Ao contrário de concepções mecanicistas que avaliam o desenvolvimento com base em métricas produtivistas ou financeiras, a perspectiva existencial preconiza que a realização humana plena depende da descoberta e vivência de um <em>propósito singular de sentido</em>.
      </p>

      <h2 id="vontade-sentido" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        1. A Vontade de Sentido (Viktor Frankl)
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        O psiquiatra vienense <strong>Viktor E. Frankl</strong> demonstrou, a partir de suas experiências limites em campos de concentração, que a principal força motivadora da vida humana não é a busca hedonista pelo prazer (como postulava Freud) nem a aspiração cega pelo poder (como dizia Adler), mas a "Vontade de Sentido". O ser humano é capaz de suportar as maiores adversidades quando compreende o "porquê" de sua existência e enxerga valor nas suas criações, nos seus encontros afetivos e na sua atitude moral diante do sofrimento inevitável.
      </p>
    `,

    citacaoAbnt: 'VIVIAN, Henrique. Desenvolvimento Humano & Existencial. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=desenvolvimento-humano-existencial>. Acesso em: 20 out. 2026.',
    
    verbetesRelacionados: [
      { id: 'bem-estar-social', termo: 'Bem-Estar Social & Dimensão Relacional', categoriaNome: 'Bem-Estar Social & Liderança Humanizada' },
      { id: 'saude-biopsicossocial', termo: 'Saúde Biopsicossocial', categoriaNome: 'Saúde & Práticas Integrativas' }
    ],

    referencias: [
      {
        author: 'FRANKL, Viktor E.',
        title: 'Man\'s Search for Meaning: An Introduction to Logotherapy',
        source: 'Boston: Beacon Press',
        year: '2006'
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
    resumoDireto: 'Estado coletivo e dinâmico de confiança mútua, dignidade, convivência solidária e segurança psicológica que assegura as condições estruturais para a cooperação e o florescimento de uma comunidade.',
    etimologiaOuOrigem: 'Enraizado na Abordagem das Capacitações de Amartya Sen e nas teorias sociológicas de Capital Social de Robert Putnam.',
    tags: ['Comunidade', 'Capital Social', 'Amartya Sen', 'Ética', 'Segurança Psicológica'],
    
    autorNome: 'Silviane Silvério',
    autorProfissao: 'Biomédica Integrativa & Escritora',
    autorSelo: 'Bronze',
    autorPerfilUrl: 'https://esdhubem.github.io/esdhubem/?page=corpo-docente',

    dataPublicacao: '20 de outubro de 2026',
    dataAtualizacao: '20 de outubro de 2026',
    tempoLeitura: '4 minutos',
    nivel: 'Fundamental',
    destaque: false,

    filosofia: {
      questaoKant: 'O que devo fazer? & O que posso esperar?',
      pilarDisciplinar: 'Ética Social & Filosofia Política',
      essencia: 'Tecido relacional comunitário pautado pela dignidade e confiança.',
      causa: 'O individualismo predatório que dissolve laços de solidariedade.',
      estrutura: 'Ambientes cooperativos, segurança psicológica e expansão de capacitações.'
    },

    textoWikiHtml: `
      <p class="leading-relaxed mb-4 text-justify">
        O <strong>bem-estar social</strong> designa a densidade qualitativa das relações intersubjetivas que mantêm coeso o tecido de uma comunidade. Em oposição a indicadores estritamente mercadológicos que reduzem o progresso humano ao Produto Interno Bruto (PIB), as ciências sociais contemporâneas reconhecem que o florescimento humano requer condições substantivas de convivência ética, segurança psicológica nas instituições de trabalho e redes de apoio mútuo solidárias.
      </p>

      <h2 id="capacitacoes-liberdades" class="text-xl font-serif font-bold text-slate-900 border-b border-slate-300 pb-1 mt-8 mb-3">
        1. A Abordagem das Capacitações (Amartya Sen)
      </h2>
      <p class="leading-relaxed mb-4 text-justify">
        O economista indiano e Prêmio Nobel <strong>Amartya Sen</strong> redefiniu a noção de desenvolvimento como o "processo de expansão das liberdades reais que as pessoas desfrutam". Para Sen, o bem-estar social reside na capacidade efetiva que uma comunidade proporciona a seus membros de realizarem funcionamentos valiosos: ter acesso à saúde, instruir-se de forma crítica, participar das decisões públicas e viver livres do medo e da coerção arbitrária.
      </p>
    `,

    citacaoAbnt: 'SILVÉRIO, Silviane. Bem-Estar Social & Dimensão Relacional. In: ENCICLOWIKI ESDHUBEM: Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social. Curitiba: ESDHUBEM, 2026. Disponível em: <https://esdhubem.github.io/esdhubem/?page=enciclowiki-verbete&id=bem-estar-social>. Acesso em: 20 out. 2026.',
    
    verbetesRelacionados: [
      { id: 'desenvolvimento-humano-existencial', termo: 'Desenvolvimento Humano & Existencial', categoriaNome: 'Desenvolvimento Humano & Existencial' },
      { id: 'saude-biopsicossocial', termo: 'Saúde Biopsicossocial', categoriaNome: 'Saúde & Práticas Integrativas' }
    ],

    referencias: [
      {
        author: 'SEN, Amartya',
        title: 'Development as Freedom',
        source: 'New York: Anchor Books',
        year: '1999'
      }
    ]
  }
];
