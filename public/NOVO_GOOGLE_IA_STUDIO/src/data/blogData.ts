export interface AuthorDetails {
  name: string;
  role: string;
  bio: string;
  avatarUrl?: string;
  profileUrl?: string;
  lattesUrl?: string;
  orcidUrl?: string;
}

export interface SourceReference {
  title: string;
  url?: string;
  author?: string;
  institution?: string;
  date?: string;
}

export interface RelatedPostRef {
  id: string;
  title: string;
  category: string;
}

export interface TocItem {
  id: string;
  label: string;
}

export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string;
  excerpt: string;
  content: string; // HTML semântico formatado
  imageUrl: string;
  imageCaption?: string;
  imageAlt?: string;
  author: string;
  authorDetails?: AuthorDetails;
  date: string;
  updatedDate?: string;
  datePublishedIso?: string;
  dateModifiedIso?: string;
  category: string;
  categorySlug?: string;
  topics?: string[];
  readTime: string;
  videoUrl?: string;
  tableOfContents?: TocItem[];
  editorialNote?: string;
  sources?: SourceReference[];
  relatedPosts?: RelatedPostRef[];
  faq?: Array<{ question: string; answer: string }>;
  cta?: {
    title: string;
    subtitle: string;
    buttonText: string;
    link?: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  // ==========================================
  // ARTIGO 1: MODELO OFICIAL PADRÃO
  // ==========================================
  {
    id: 'como-escolher-um-curso-livre-para-melhorar-sua-carreira',
    title: 'Como escolher um curso livre para melhorar sua carreira',
    subtitle: 'Critérios práticos, comparação de opções e como transformar o aprendizado em resultados reais e portfólio.',
    excerpt: 'Veja critérios práticos para escolher um curso livre, comparar opções e avaliar se uma formação atende aos seus objetivos.',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Estudar pode ser uma forma de desenvolver conhecimentos e competências para diferentes objetivos profissionais.',
    imageAlt: 'Pessoa estudando em um curso online com notebook e bloco de anotações',
    author: 'Prof.ª Silviane Silvério',
    authorDetails: {
      name: 'Prof.ª Silviane Silvério',
      role: 'Coordenação Pedagógica & Pesquisa ESDHUBEM',
      bio: 'Biomédica, pós-graduada em Práticas Integrativas e Complementares em Saúde, pesquisadora em metodologias de ensino, desenvolvimento humano e escrita autoral.',
      profileUrl: 'corpo-docente',
      lattesUrl: 'https://lattes.cnpq.br/7481458793724724',
      orcidUrl: 'https://orcid.org/0000-0001-6311-1195'
    },
    date: '3 de outubro de 2026',
    updatedDate: '3 de outubro de 2026',
    datePublishedIso: '2026-10-03',
    dateModifiedIso: '2026-10-03',
    category: 'Carreira e cursos livres',
    categorySlug: 'carreira-e-cursos-livres',
    topics: ['Educação', 'Aprendizagem', 'Autoria', 'Desenvolvimento Profissional', 'Cursos Livres'],
    readTime: '6 minutos',
    tableOfContents: [
      { id: 'objetivo', label: '1. Defina seu objetivo' },
      { id: 'comparacao', label: '2. Compare os cursos' },
      { id: 'qualidade', label: '3. Analise a qualidade do material' },
      { id: 'autoria-portfolio', label: '4. Da aprendizagem à autoria e portfólio' },
      { id: 'conclusao', label: 'Conclusão' }
    ],
    editorialNote: 'Este conteúdo tem finalidade educativa e informativa. Informações sobre cursos, certificados, carreira ou formação devem ser avaliadas de acordo com o contexto de cada leitor.',
    sources: [
      {
        title: 'Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/96, art. 42 - Educação Profissional e Cursos Livres)',
        author: 'Presidência da República',
        institution: 'Governo Federal do Brasil',
        date: '1996',
        url: 'https://www.planalto.gov.br/ccivil_03/leis/l9394.htm'
      },
      {
        title: 'Diretrizes Curriculares Nacionais para as Atividades Complementares no Ensino Superior',
        author: 'Conselho Nacional de Educação (CNE/CES)',
        institution: 'Ministério da Educação (MEC)',
        date: '2001',
        url: 'https://www.gov.br/mec/pt-br'
      },
      {
        title: 'Diretrizes Pedagógicas e Escala de Autoria ESDHUBEM',
        author: 'Coordenação Pedagógica',
        institution: 'ESDHUBEM - Educação Integral',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=diretrizes-pedagogicas'
      }
    ],
    relatedPosts: [
      {
        id: 'transforme-seu-aprendizado-em-autoridade-e-publicacao',
        title: 'Como transformar seu aprendizado em autoridade e publicação autoral',
        category: 'Autoria & Publicação'
      },
      {
        id: 'tcc-certificados-autoridade-publicacao-cientifica',
        title: 'Seu TCC e certificados vão para a gaveta? Como transformar estudo em produção real',
        category: 'Educação & Carreira'
      },
      {
        id: 'o-poder-do-desenvolvimento-pessoal',
        title: 'O poder do desenvolvimento pessoal na trajetória profissional',
        category: 'Desenvolvimento Pessoal'
      }
    ],
    content: `
      <p class="text-lg text-slate-800 leading-relaxed font-normal mb-6">
        Escolher um curso livre pode contribuir para o desenvolvimento profissional quando o conteúdo, a carga horária e os objetivos da formação estão alinhados às necessidades do estudante.
      </p>

      <h2 id="objetivo" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        1. Defina seu objetivo
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Antes de se matricular, procure definir o que deseja aprender e como pretende utilizar esse conhecimento. Você busca atualização rápida, cumprimento de horas complementares na faculdade, desenvolvimento de competências comportamentais (<em>soft skills</em>) ou ferramentas para produzir e publicar trabalhos autorais?
      </p>

      <h2 id="comparacao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        2. Compare os cursos
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Alguns critérios essenciais podem ajudar na comparação entre diferentes formações disponíveis no mercado educacional:
      </p>

      <div class="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
        <table class="w-full text-left border-collapse text-sm">
          <caption class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-b border-slate-200 text-left">
            Critérios para comparar cursos livres
          </caption>
          <thead>
            <tr class="bg-slate-100/80 text-slate-900 border-b border-slate-200">
              <th scope="col" class="py-3 px-5 font-bold">Critério</th>
              <th scope="col" class="py-3 px-5 font-bold">O que verificar</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Conteúdo</th>
              <td class="py-3.5 px-5">Programa, módulos, ementa clara e atualização do material didático.</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Prática</th>
              <td class="py-3.5 px-5">Exercícios reflexivos, projetos aplicados, exemplos reais e estímulo à escrita.</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Suporte</th>
              <td class="py-3.5 px-5">Canais diretos de atendimento, secretaria ativa e orientação ao aluno.</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Certificado</th>
              <td class="py-3.5 px-5">Critérios transparentes para emissão, amparo legal (Lei 9.394/96), QR Code antifraude e validação pública.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="qualidade" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        3. Analise a qualidade do material
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Procure informações sobre o corpo docente, a autoria, as fontes bibliográficas utilizadas e os objetivos de cada formação. Um curso de qualidade oferece referências sólidas e estimula o pensamento crítico, evitando fórmulas prontas ou promessas irreais.
      </p>

      <h2 id="autoria-portfolio" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        4. Da aprendizagem à autoria e portfólio
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Na ESDHUBEM, incentivamos que o curso livre vá além do consumo passivo de aulas. Por meio da nossa <a href="/esdhubem/?page=diretrizes-pedagogicas" class="text-amber-600 font-bold hover:underline">proposta pedagógica de autoria</a>, os estudantes têm a oportunidade de transformar o aprendizado em artigos, ensaios e produções com registro formal, construindo um portfólio profissional verificável.
      </p>

      <h2 id="conclusao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        Conclusão
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A escolha de um curso livre é mais assertiva quando o estudante compara objetivos, conteúdo, atividades, suporte e dados sobre a instituição. Investir em conhecimento bem fundamentado é o caminho mais seguro para enriquecer o currículo e abrir novas portas profissionais.
      </p>
    `,
    cta: {
      title: 'Conheça a Grade de Cursos Livres da ESDHUBEM',
      subtitle: 'Formações com metodologia ativa, emissão segura de certificados e oportunidade de desenvolver sua autoria.',
      buttonText: '👉 Explorar Catálogo de Cursos',
      link: 'categorias'
    }
  },

  // ==========================================
  // ARTIGO 2: AUTORIA E PUBLICAÇÃO
  // ==========================================
  {
    id: 'transforme-seu-aprendizado-em-autoridade-e-publicacao',
    title: 'Como transformar seu aprendizado em autoridade e publicação autoral',
    subtitle: 'Seu conhecimento não precisa ficar guardado na gaveta: aprenda a estruturar produções autorais e construir um portfólio visível.',
    excerpt: 'Descubra como ir além do certificado tradicional em PDF, desenvolvendo reflexão, escrita e produções intelectuais com reconhecimento e proteção de autoria.',
    imageUrl: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'A autoria e a produção textual como instrumentos de consolidação do conhecimento e posicionamento profissional.',
    imageAlt: 'Pessoa escrevendo com caneta em caderno sobre mesa de trabalho bem iluminada',
    author: 'Prof.ª Silviane Silvério',
    authorDetails: {
      name: 'Prof.ª Silviane Silvério',
      role: 'Coordenação Pedagógica & Pesquisa ESDHUBEM',
      bio: 'Biomédica, pós-graduada em Práticas Integrativas e Complementares em Saúde, pesquisadora em metodologias de ensino, desenvolvimento humano e escrita autoral.',
      profileUrl: 'corpo-docente',
      lattesUrl: 'https://lattes.cnpq.br/7481458793724724',
      orcidUrl: 'https://orcid.org/0000-0001-6311-1195'
    },
    date: '2 de outubro de 2026',
    updatedDate: '2 de outubro de 2026',
    datePublishedIso: '2026-10-02',
    dateModifiedIso: '2026-10-02',
    category: 'Autoria & Publicação',
    categorySlug: 'autoria-e-publicacao',
    topics: ['Autoria', 'Escrita Reflexiva', 'Publicação', 'Direitos Autorais', 'Portfólio'],
    readTime: '5 minutos',
    videoUrl: 'https://odysee.com/$/embed/@esdhubem:a/apresentacao_esdhubem:2?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ',
    tableOfContents: [
      { id: 'conhecimento-gaveta', label: '1. O conhecimento que fica na gaveta' },
      { id: 'aprendizagem-autoria', label: '2. Da recepção passiva à produção autoral' },
      { id: 'escala-autoria', label: '3. Os níveis da Escala de Autoria ESDHUBEM' },
      { id: 'protecao-autoria', label: '4. Proteção, integridade e direitos do autor' },
      { id: 'conclusao', label: 'Conclusão' }
    ],
    editorialNote: 'Conteúdo informativo sobre as modalidades de progressão autoral, diretrizes de publicação e proteção dos direitos intelectuais dos estudantes na ESDHUBEM.',
    sources: [
      {
        title: 'Lei nº 9.610, de 19 de fevereiro de 1998 (Lei de Direitos Autorais)',
        author: 'Presidência da República',
        institution: 'Governo Federal do Brasil',
        date: '1998',
        url: 'https://www.planalto.gov.br/ccivil_03/leis/l9610.htm'
      },
      {
        title: 'Diretrizes de Proteção à Autoria ESDHUBEM',
        author: 'Coordenação Pedagógica',
        institution: 'ESDHUBEM',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=diretrizes-protecao-autoria'
      },
      {
        title: 'Diretrizes de Publicação e Parcerias Editoriais da ESDHUBEM',
        author: 'Comitê Editorial',
        institution: 'ESDHUBEM',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=diretrizes-publicacao'
      }
    ],
    relatedPosts: [
      {
        id: 'como-escolher-um-curso-livre-para-melhorar-sua-carreira',
        title: 'Como escolher um curso livre para melhorar sua carreira',
        category: 'Carreira e cursos livres'
      },
      {
        id: 'tcc-certificados-autoridade-publicacao-cientifica',
        title: 'Seu TCC e certificados vão para a gaveta? Como transformar estudo em produção real',
        category: 'Educação & Carreira'
      },
      {
        id: 'o-poder-do-desenvolvimento-pessoal',
        title: 'O poder do desenvolvimento pessoal na trajetória profissional',
        category: 'Desenvolvimento Pessoal'
      }
    ],
    content: `
      <p class="text-lg text-slate-800 leading-relaxed font-normal mb-6">
        A maioria dos cursos tradicionais termina com um arquivo em PDF arquivado em uma pasta digital. No entanto, o conhecimento ganha relevância quando o estudante é incentivado a organizar o que aprendeu e expressar suas próprias reflexões.
      </p>

      <h2 id="conhecimento-gaveta" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        1. O conhecimento que fica na gaveta
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Muitos profissionais e universitários acumulam certificados de participação que comprovam presença, mas não demonstram a sua capacidade de análise, síntese ou aplicação prática. Guardar resumos, anotações e trabalhos de conclusão em pastas inacessíveis limita o potencial de compartilhamento das ideias produzidas.
      </p>

      <h2 id="aprendizagem-autoria" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        2. Da recepção passiva à produção autoral
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A passagem do papel de mero consumidor de conteúdo para o de <strong>produtor de conhecimento</strong> envolve etapas estruturadas de leitura atenta, reflexão crítica e redação autoral. Ao redigir um artigo sobre o tema estudado, o estudante consolida os conceitos fundamentais e exercita a sua própria voz.
      </p>

      <h2 id="escala-autoria" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        3. Os níveis da Escala de Autoria ESDHUBEM
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Para orientar a progressão dos estudantes desde a conclusão inicial até publicações de maior fôlego, a ESDHUBEM adota uma estrutura em quatro níveis:
      </p>

      <div class="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
        <table class="w-full text-left border-collapse text-sm">
          <caption class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-b border-slate-200 text-left">
            Níveis de Conclusão e Autoria na ESDHUBEM
          </caption>
          <thead>
            <tr class="bg-slate-100/80 text-slate-900 border-b border-slate-200">
              <th scope="col" class="py-3 px-5 font-bold">Nível</th>
              <th scope="col" class="py-3 px-5 font-bold">Lema</th>
              <th scope="col" class="py-3 px-5 font-bold">Tipo de Produção</th>
              <th scope="col" class="py-3 px-5 font-bold">Formato de Divulgação</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-bold text-amber-800 whitespace-nowrap">🥉 Bronze</th>
              <td class="py-3.5 px-5 italic">Eu aprendi.</td>
              <td class="py-3.5 px-5">Tríade de fixação (Mapa + Síntese 500-800 palavras + Áudio)</td>
              <td class="py-3.5 px-5">Avaliação pedagógica interna e Certificado Oficial (sem publicação externa)</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-bold text-slate-700 whitespace-nowrap">🥈 Prata</th>
              <td class="py-3.5 px-5 italic">Eu estruturei o conceito.</td>
              <td class="py-3.5 px-5">Verbete canônico na Enciclowiki (1ª Prateleira)</td>
              <td class="py-3.5 px-5">Publicação na Enciclowiki ESDHUBEM com perfil de autor(a) e citação ABNT</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-bold text-yellow-700 whitespace-nowrap">🥇 Ouro</th>
              <td class="py-3.5 px-5 italic">Eu comuniquei com alcance.</td>
              <td class="py-3.5 px-5">Artigo de Blog temático com SEO (2ª Prateleira)</td>
              <td class="py-3.5 px-5">Publicação no Blog Oficial ESDHUBEM com otimização para motores de busca</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-bold text-cyan-700 whitespace-nowrap">💎 Diamante</th>
              <td class="py-3.5 px-5 italic">Eu investiguei em profundidade.</td>
              <td class="py-3.5 px-5">Artigo Investigativo de Alto Impacto (3ª Prateleira)</td>
              <td class="py-3.5 px-5">Publicação no Repositório de Artigos com DOI Internacional vitalício (Zenodo/OSF)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="protecao-autoria" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        4. Proteção, integridade e direitos do autor
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A publicação de um trabalho autoral exige respeito absoluto aos direitos do criador. Conforme estabelecido nas <a href="/esdhubem/?page=diretrizes-protecao-autoria" class="text-emerald-700 font-bold hover:underline">Diretrizes de Proteção à Autoria da ESDHUBEM</a>, a submissão de textos concede apenas autorização de uso não exclusiva: a propriedade intelectual permanece integralmente com o autor, com registro de data, identificação pública e amparo na Lei nº 9.610/1998.
      </p>

      <h2 id="conclusao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        Conclusão
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Transformar o tempo de estudo em produção autoral é a maneira mais sólida de dar visibilidade ao seu conhecimento e demonstrar maturidade profissional. O aprendizado atinge seu ápice quando se converte em reflexão compartilhada.
      </p>
    `,
    cta: {
      title: 'Conheça a Escala de Autoria e Diretrizes Pedagógicas',
      subtitle: 'Entenda como submeter seu artigo para o Blog ESDHUBEM ou avançar para os níveis Ouro e Diamante.',
      buttonText: '👉 Ler Diretrizes Pedagógicas e de Autoria',
      link: 'diretrizes-pedagogicas'
    }
  },

  // ==========================================
  // ARTIGO 3: TCC E CERTIFICADOS
  // ==========================================
  {
    id: 'tcc-certificados-autoridade-publicacao-cientifica',
    title: 'Seu TCC e certificados vão para a gaveta? Como transformar estudo em produção real',
    subtitle: 'Entenda como converter trabalhos de conclusão, relatórios e horas de estudo em publicações reconhecidas e portfólio acadêmico.',
    excerpt: 'Veja como romper o ciclo burocrático dos certificados esquecidos e transformar suas pesquisas acadêmicas em artigos com registro, visibilidade e impacto profissional.',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Produção acadêmica e científica com identificação digital e documentação transparente.',
    imageAlt: 'Livros acadêmicos, computador portátil e materiais de pesquisa organizados sobre a mesa de estudos',
    author: 'Prof.ª Silviane Silvério',
    authorDetails: {
      name: 'Prof.ª Silviane Silvério',
      role: 'Coordenação Pedagógica & Pesquisa ESDHUBEM',
      bio: 'Biomédica, pós-graduada em Práticas Integrativas e Complementares em Saúde, pesquisadora em metodologias de ensino, desenvolvimento humano e escrita autoral.',
      profileUrl: 'corpo-docente',
      lattesUrl: 'https://lattes.cnpq.br/7481458793724724',
      orcidUrl: 'https://orcid.org/0000-0001-6311-1195'
    },
    date: '27 de setembro de 2026',
    updatedDate: '27 de setembro de 2026',
    datePublishedIso: '2026-09-27',
    dateModifiedIso: '2026-09-27',
    category: 'Educação & Carreira',
    categorySlug: 'educacao-e-carreira',
    topics: ['TCC', 'Produção Científica', 'Horas Complementares', 'DOI', 'Carreira Acadêmica'],
    readTime: '6 minutos',
    videoUrl: 'https://odysee.com/$/embed/@esdhubem:a/apresentacao_esdhubem:2',
    tableOfContents: [
      { id: 'ciclo-burocratico', label: '1. O dilema dos trabalhos acadêmicos engavetados' },
      { id: 'transformacao-tcc', label: '2. O valor de transformar o TCC em artigo ou manuscrito' },
      { id: 'comparativo-validacao', label: '3. Comparativo: Certificado tradicional versus Portfólio autoral' },
      { id: 'identificadores-visibilidade', label: '4. Identificadores digitais e visibilidade científica' },
      { id: 'conclusao', label: 'Conclusão' }
    ],
    editorialNote: 'Informações sobre a equivalência, validade e amparo legal dos certificados de cursos livres e depósitos em repositórios acadêmicos abertos conforme a Lei nº 9.394/96.',
    sources: [
      {
        title: 'Depósito e Atribuição de DOI no Repositório Científico Zenodo (CERN / OpenAIRE)',
        institution: 'Zenodo / CERN',
        date: '2026',
        url: 'https://zenodo.org'
      },
      {
        title: 'Parecer CNE/CES nº 67/2003 sobre Atividades Complementares nos Cursos de Graduação',
        author: 'Conselho Nacional de Educação (CNE)',
        institution: 'Ministério da Educação (MEC)',
        date: '2003',
        url: 'https://www.gov.br/mec/pt-br'
      },
      {
        title: 'Regras de Certificação e Mérito Acadêmico da ESDHUBEM',
        author: 'Coordenação Pedagógica',
        institution: 'ESDHUBEM',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=regras-certificacao-merito'
      }
    ],
    relatedPosts: [
      {
        id: 'como-escolher-um-curso-livre-para-melhorar-sua-carreira',
        title: 'Como escolher um curso livre para melhorar sua carreira',
        category: 'Carreira e cursos livres'
      },
      {
        id: 'transforme-seu-aprendizado-em-autoridade-e-publicacao',
        title: 'Como transformar seu aprendizado em autoridade e publicação autoral',
        category: 'Autoria & Publicação'
      },
      {
        id: 'lideranca-humanizada',
        title: 'Liderança humanizada: princípios para inspirar equipes e fortalecer organizações',
        category: 'Gestão e Liderança'
      }
    ],
    content: `
      <p class="text-lg text-slate-800 leading-relaxed font-normal mb-6">
        Milhares de estudantes universitários e profissionais dedicam meses à elaboração de Trabalhos de Conclusão de Curso (TCC), relatórios de estágio e atividades complementares. No entanto, a grande maioria dessas produções acaba restrita a arquivos esquecidos.
      </p>

      <h2 id="ciclo-burocratico" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        1. O dilema dos trabalhos acadêmicos engavetados
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Cumprir a carga horária de Atividades Complementares ou defender a monografia de conclusão são etapas indispensáveis para a colação de grau. Porém, quando esse processo é tratado apenas como obrigação burocrática, perde-se a chance de projetar a pesquisa do estudante para a comunidade científica e para o mercado de trabalho.
      </p>

      <h2 id="transformacao-tcc" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        2. O valor de transformar o TCC em artigo ou manuscrito
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A condensação de um TCC em formato de artigo científico ou manuscrito executivo permite que outros pesquisadores, recrutadores e colegas de profissão tenham acesso às conclusões do trabalho. Essa transição exige clareza metodológica, síntese e adequação às normas de publicação.
      </p>

      <h2 id="comparativo-validacao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        3. Comparativo: Certificado tradicional versus Portfólio autoral
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A tabela a seguir compara o impacto entre a simples comprovação de horas e a construção de produções com registro formal:
      </p>

      <div class="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
        <table class="w-full text-left border-collapse text-sm">
          <caption class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-b border-slate-200 text-left">
            Comparativo de Impacto Formativo e Profissional
          </caption>
          <thead>
            <tr class="bg-slate-100/80 text-slate-900 border-b border-slate-200">
              <th scope="col" class="py-3 px-5 font-bold">Modalidade</th>
              <th scope="col" class="py-3 px-5 font-bold">Objetivo Principal</th>
              <th scope="col" class="py-3 px-5 font-bold">Visibilidade Pública</th>
              <th scope="col" class="py-3 px-5 font-bold">Valor Curricular</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Certificado Simples</th>
              <td class="py-3.5 px-5">Averbação de horas complementares</td>
              <td class="py-3.5 px-5">Restrita (somente para secretaria)</td>
              <td class="py-3.5 px-5">Comprovação burocrática de carga horária</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Artigo de Blog (Nível Prata)</th>
              <td class="py-3.5 px-5">Divulgação de reflexão e autoria</td>
              <td class="py-3.5 px-5">Pública (link permanente na web)</td>
              <td class="py-3.5 px-5">Portfólio de escrita e presença digital</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Manuscrito com DOI (Nível Ouro)</th>
              <td class="py-3.5 px-5">Depósito em repositório científico</td>
              <td class="py-3.5 px-5">Internacional e citável</td>
              <td class="py-3.5 px-5">Comprovação acadêmica para Lattes e seleções</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="identificadores-visibilidade" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        4. Identificadores digitais e visibilidade científica
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        O identificador de objeto digital (DOI - <em>Digital Object Identifier</em>) confere perenidade ao trabalho acadêmico. Ao depositar um Manuscrito de Conclusão de Curso (MCC) em repositórios abertos reconhecidos, a pesquisa passa a ser indexada e pode ser referenciada por outros autores, integrando-se ao currículo Lattes do estudante.
      </p>

      <h2 id="conclusao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        Conclusão
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Dedicar tempo a um trabalho de pesquisa é um esforço valoroso que merece transcender a exigência burocrática de graduação. Ao estruturar suas produções para publicação, o estudante assume a autoria de sua trajetória acadêmica e profissional.
      </p>
    `,
    cta: {
      title: 'Conheça o Repositório de Artigos da ESDHUBEM',
      subtitle: 'Acesse artigos de estudo, pesquisas fundamentadas e trabalhos desenvolvidos pelo corpo discente e docente.',
      buttonText: '👉 Acessar Repositório de Artigos',
      link: 'artigos'
    }
  },

  // ==========================================
  // ARTIGO 4: DESENVOLVIMENTO PESSOAL
  // ==========================================
  {
    id: 'o-poder-do-desenvolvimento-pessoal',
    title: 'O poder do desenvolvimento pessoal na trajetória profissional',
    subtitle: 'Como o autoconhecimento, a inteligência emocional e as competências relacionais impulsionam carreiras sólidas.',
    excerpt: 'Descubra por que habilidades comportamentais e autogestão emocional são os fatores mais determinantes para a evolução e sustentabilidade profissional.',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Desenvolvimento humano e inteligência emocional aplicados ao trabalho e às relações interpessoais.',
    imageAlt: 'Grupo diversificado de profissionais dialogando com colaboração e respeito em mesa de reunião',
    author: 'Prof.ª Silviane Silvério',
    authorDetails: {
      name: 'Prof.ª Silviane Silvério',
      role: 'Coordenação Pedagógica & Pesquisa ESDHUBEM',
      bio: 'Biomédica, pós-graduada em Práticas Integrativas e Complementares em Saúde, pesquisadora em metodologias de ensino, desenvolvimento humano e escrita autoral.',
      profileUrl: 'corpo-docente',
      lattesUrl: 'https://lattes.cnpq.br/7481458793724724',
      orcidUrl: 'https://orcid.org/0000-0001-6311-1195'
    },
    date: '24 de outubro de 2026',
    updatedDate: '24 de outubro de 2026',
    datePublishedIso: '2026-10-24',
    dateModifiedIso: '2026-10-24',
    category: 'Desenvolvimento Pessoal',
    categorySlug: 'desenvolvimento-pessoal',
    topics: ['Autoconhecimento', 'Soft Skills', 'Inteligência Emocional', 'Comunicação Assertiva', 'Carreira'],
    readTime: '5 minutos',
    tableOfContents: [
      { id: 'alem-tecnica', label: '1. Além da qualificação estritamente técnica' },
      { id: 'pilares-desenvolvimento', label: '2. Pilares centrais do desenvolvimento humano' },
      { id: 'comparativo-skills', label: '3. Comparativo entre competências técnicas e relacionais' },
      { id: 'autogestao-cotidiano', label: '4. Como praticar a autogestão no cotidiano' },
      { id: 'conclusao', label: 'Conclusão' }
    ],
    editorialNote: 'Artigo de reflexão educativa fundamentado em estudos de psicologia comportamental, neurociência aplicada e desenvolvimento humano integral.',
    sources: [
      {
        title: 'The Future of Jobs Report 2025: Soft Skills and Human-Centric Capabilities',
        institution: 'World Economic Forum (WEF)',
        date: '2025',
        url: 'https://www.weforum.org'
      },
      {
        title: 'Working with Emotional Intelligence',
        author: 'Daniel Goleman',
        institution: 'Bantam Books',
        date: '1998'
      },
      {
        title: 'Matriz Curricular de Desenvolvimento Humano e Relacional ESDHUBEM',
        author: 'Coordenação Pedagógica',
        institution: 'ESDHUBEM',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=categorias'
      }
    ],
    relatedPosts: [
      {
        id: 'lideranca-humanizada',
        title: 'Liderança humanizada: princípios para inspirar equipes e fortalecer organizações',
        category: 'Gestão e Liderança'
      },
      {
        id: 'como-escolher-um-curso-livre-para-melhorar-sua-carreira',
        title: 'Como escolher um curso livre para melhorar sua carreira',
        category: 'Carreira e cursos livres'
      },
      {
        id: 'transforme-seu-aprendizado-em-autoridade-e-publicacao',
        title: 'Como transformar seu aprendizado em autoridade e publicação autoral',
        category: 'Autoria & Publicação'
      }
    ],
    content: `
      <p class="text-lg text-slate-800 leading-relaxed font-normal mb-6">
        O desenvolvimento pessoal é um processo contínuo de autopercepção, gestão emocional e aprimoramento relacional. Embora diplomas técnicos abram portas, são as competências humanas que sustentam uma trajetória profissional equilibrada e duradoura.
      </p>

      <h2 id="alem-tecnica" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        1. Além da qualificação estritamente técnica
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Em um mercado caracterizado pela automação e pela rápida obsolescência de ferramentas, o diferencial profissional migrou das habilidades operacionais repetitivas para a capacidade de reflexão crítica, empatia, adaptabilidade e tomada de decisão ética.
      </p>

      <h2 id="pilares-desenvolvimento" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        2. Pilares centrais do desenvolvimento humano
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Três pilares estruturam o autodesenvolvimento consistente:
      </p>

      <ul class="space-y-3 text-base text-slate-700 list-disc list-inside mb-6 pl-2">
        <li><strong>Autoconsciência:</strong> Reconhecer gatilhos emocionais, vieses de pensamento e pontos fortes de atuação.</li>
        <li><strong>Comunicação Assertiva:</strong> Expressar ideias com clareza, respeito e firmeza, sem agressividade ou passividade.</li>
        <li><strong>Resiliência Cognitiva:</strong> Capacidade de aprender com os erros e manter a lucidez em momentos de adversidade.</li>
      </ul>

      <h2 id="comparativo-skills" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        3. Comparativo entre competências técnicas e relacionais
      </h2>

      <div class="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
        <table class="w-full text-left border-collapse text-sm">
          <caption class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-b border-slate-200 text-left">
            Comparação: Competências Técnicas vs Competências Humanas
          </caption>
          <thead>
            <tr class="bg-slate-100/80 text-slate-900 border-b border-slate-200">
              <th scope="col" class="py-3 px-5 font-bold">Dimensão</th>
              <th scope="col" class="py-3 px-5 font-bold">Competências Técnicas (Hard Skills)</th>
              <th scope="col" class="py-3 px-5 font-bold">Competências Humanas (Soft Skills)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Aquisição</th>
              <td class="py-3.5 px-5">Manuais, aulas teóricas e treinamentos pontuais</td>
              <td class="py-3.5 px-5">Prática reflexiva contínua, convivência e autocrítica</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Durabilidade</th>
              <td class="py-3.5 px-5">Sujeita a rápida substituição tecnológica</td>
              <td class="py-3.5 px-5">Cumulativa, perene e transferível entre áreas</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Impacto</th>
              <td class="py-3.5 px-5">Execução direta da tarefa especializada</td>
              <td class="py-3.5 px-5">Clima de trabalho, liderança e resolução de conflitos</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="autogestao-cotidiano" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        4. Como praticar a autogestão no cotidiano
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A evolução pessoal requer pausas conscientes para autoavaliação. Exercitar a escuta ativa com colegas de equipe, buscar cursos livres voltados ao desenvolvimento relacional e dedicar tempo à escrita e à reflexão são hábitos práticos que aceleram essa maturidade.
      </p>

      <h2 id="conclusao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        Conclusão
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        O desenvolvimento pessoal não é um objetivo isolado, mas a base que sustenta qualquer conquista profissional genuína. Investir em autoconhecimento é cultivar a clareza necessária para tomar decisões conscientes ao longo da vida.
      </p>
    `,
    cta: {
      title: 'Explore os Cursos de Desenvolvimento Pessoal da ESDHUBEM',
      subtitle: 'Formações dedicadas à comunicação assertiva, inteligência emocional e autogestão.',
      buttonText: '👉 Ver Cursos de Desenvolvimento Pessoal',
      link: 'categoria:desenvolvimento-pessoal'
    }
  },

  // ==========================================
  // ARTIGO 5: LIDERANÇA HUMANIZADA
  // ==========================================
  {
    id: 'lideranca-humanizada',
    title: 'Liderança humanizada: princípios para inspirar equipes e fortalecer organizações',
    subtitle: 'Por que a empatia, a escuta ativa e a segurança psicológica superam modelos tradicionais de comando e controle.',
    excerpt: 'Entenda os fundamentos da liderança humanizada e como criar ambientes de trabalho saudáveis, produtivos e éticos em tempos de transformação constante.',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Empatia, escuta ativa e liderança positiva em ambientes corporativos de alta performance.',
    imageAlt: 'Líder em reunião dialogando com atenção e abertura junto aos membros de sua equipe',
    author: 'Prof.ª Silviane Silvério',
    authorDetails: {
      name: 'Prof.ª Silviane Silvério',
      role: 'Coordenação Pedagógica & Pesquisa ESDHUBEM',
      bio: 'Biomédica, pós-graduada em Práticas Integrativas e Complementares em Saúde, pesquisadora em metodologias de ensino, desenvolvimento humano e escrita autoral.',
      profileUrl: 'corpo-docente',
      lattesUrl: 'https://lattes.cnpq.br/7481458793724724',
      orcidUrl: 'https://orcid.org/0000-0001-6311-1195'
    },
    date: '15 de outubro de 2026',
    updatedDate: '15 de outubro de 2026',
    datePublishedIso: '2026-10-15',
    dateModifiedIso: '2026-10-15',
    category: 'Gestão e Liderança',
    categorySlug: 'gestao-e-lideranca',
    topics: ['Liderança Humanizada', 'Gestão de Pessoas', 'Segurança Psicológica', 'Comunicação Não-Violenta', 'Clima Organizacional'],
    readTime: '5 minutos',
    tableOfContents: [
      { id: 'esgotamento-comando', label: '1. O esgotamento do modelo de comando e controle' },
      { id: 'fundamentos-humanizada', label: '2. Fundamentos da liderança humanizada' },
      { id: 'comparativo-modelos', label: '3. Comparativo: Liderança Tradicional vs Liderança Humanizada' },
      { id: 'praticas-diarias', label: '4. Práticas diárias para uma gestão empática' },
      { id: 'conclusao', label: 'Conclusão' }
    ],
    editorialNote: 'Conteúdo formativo voltado a gestores, profissionais de RH e líderes de equipe, alinhado às diretrizes de Desenvolvimento nas Empresas da ESDHUBEM.',
    sources: [
      {
        title: 'The Fearless Organization: Creating Psychological Safety in the Workplace for Learning, Innovation, and Growth',
        author: 'Amy C. Edmondson',
        institution: 'Harvard Business School / Wiley',
        date: '2018'
      },
      {
        title: 'Comunicação Não-Violenta: Técnicas para aprimorar relacionamentos pessoais e profissionais',
        author: 'Marshall B. Rosenberg',
        institution: 'Editora Ágora',
        date: '2006'
      },
      {
        title: 'Diretrizes de Treinamentos Corporativos e DHO da ESDHUBEM',
        author: 'Coordenação Pedagógica',
        institution: 'ESDHUBEM',
        date: '2026',
        url: 'https://praticasdebemestarsocial.github.io/esdhubem/?page=categorias'
      }
    ],
    relatedPosts: [
      {
        id: 'o-poder-do-desenvolvimento-pessoal',
        title: 'O poder do desenvolvimento pessoal na trajetória profissional',
        category: 'Desenvolvimento Pessoal'
      },
      {
        id: 'como-escolher-um-curso-livre-para-melhorar-sua-carreira',
        title: 'Como escolher um curso livre para melhorar sua carreira',
        category: 'Carreira e cursos livres'
      },
      {
        id: 'tcc-certificados-autoridade-publicacao-cientifica',
        title: 'Seu TCC e certificados vão para a gaveta? Como transformar estudo em produção real',
        category: 'Educação & Carreira'
      }
    ],
    content: `
      <p class="text-lg text-slate-800 leading-relaxed font-normal mb-6">
        O modelo tradicional de liderança baseado exclusivamente em cobranças e hierarquias rígidas tem se mostrado insuficiente para engajar equipes contemporâneas. A liderança humanizada propõe colocar as pessoas, o diálogo e a confiança mútua no centro da estratégia organizacional.
      </p>

      <h2 id="esgotamento-comando" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        1. O esgotamento do modelo de comando e controle
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Organizações que operam sob constante pressão punitiva enfrentam altos índices de rotatividade (<em>turnover</em>), desmotivação e esgotamento profissional (<em>burnout</em>). A produtividade sustentável requer um ambiente no qual os colaboradores se sintam seguros para expor dúvidas, sugerir inovações e relatar falhas com rapidez.
      </p>

      <h2 id="fundamentos-humanizada" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        2. Fundamentos da liderança humanizada
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Um líder humanizado equilibra firmeza de propósito com acolhimento genuíno. Seus pilares essenciais incluem:
      </p>

      <ul class="space-y-3 text-base text-slate-700 list-disc list-inside mb-6 pl-2">
        <li><strong>Segurança Psicológica:</strong> Garantir que nenhum membro seja ridicularizado ou punido por fazer perguntas ou propor melhorias.</li>
        <li><strong>Escuta Ativa e Empatia:</strong> Ouvir para compreender a perspectiva do outro, e não apenas para formular respostas automáticas.</li>
        <li><strong>Feedback Construtivo:</strong> Orientar com clareza sobre o trabalho realizado, preservando sempre o respeito e a dignidade pessoal.</li>
      </ul>

      <h2 id="comparativo-modelos" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        3. Comparativo: Liderança Tradicional vs Liderança Humanizada
      </h2>

      <div class="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
        <table class="w-full text-left border-collapse text-sm">
          <caption class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-b border-slate-200 text-left">
            Comparativo entre Paradigmas de Liderança
          </caption>
          <thead>
            <tr class="bg-slate-100/80 text-slate-900 border-b border-slate-200">
              <th scope="col" class="py-3 px-5 font-bold">Aspecto</th>
              <th scope="col" class="py-3 px-5 font-bold">Liderança Autoritária Tradicional</th>
              <th scope="col" class="py-3 px-5 font-bold">Liderança Humanizada</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Foco Principal</th>
              <td class="py-3.5 px-5">Metas e processos isolados</td>
              <td class="py-3.5 px-5">Pessoas, cultura ética e resultados sustentáveis</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Comunicação</th>
              <td class="py-3.5 px-5">Descendente, formal e unilateral</td>
              <td class="py-3.5 px-5">Bidirecional, empática e transparente</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Tratamento de Erros</th>
              <td class="py-3.5 px-5">Culpa, penalização e constrangimento</td>
              <td class="py-3.5 px-5">Diagnóstico, aprendizagem e ajuste de processos</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Clima da Equipe</th>
              <td class="py-3.5 px-5">Medo, competição tóxica e silêncio</td>
              <td class="py-3.5 px-5">Confiança, colaboração e autonomia responsável</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="praticas-diarias" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        4. Práticas diárias para uma gestão empática
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A implementação da liderança humanizada ocorre nos detalhes da rotina: em reuniões onde todos têm oportunidade de fala, no reconhecimento sincero do esforço individual e no respeito aos limites de saúde mental e jornada de trabalho dos colaboradores.
      </p>

      <h2 id="conclusao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        Conclusão
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Organizações fortes são formadas por pessoas que se sentem respeitadas e valorizadas. Desenvolver líderes humanizados é o investimento mais seguro para construir instituições perenes, éticas e de alto desempenho.
      </p>
    `,
    cta: {
      title: 'Conheça os Treinamentos Corporativos da ESDHUBEM',
      subtitle: 'Programas in-company e cursos de liderança humanizada com emissão de certificados oficiais.',
      buttonText: '👉 Conhecer Treinamentos Corporativos',
      link: 'categoria:desenvolvimento-nas-empresas'
    }
  },
  // ==========================================
  // ARTIGO 6: O QUE É UM MAPA MENTAL
  // ==========================================
  {
    id: 'o-que-e-um-mapa-mental',
    title: 'O Que É um Mapa Mental: Guia Definitivo para Organizar Ideias e Potencializar o Aprendizado',
    subtitle: 'Entenda a neurociência por trás do pensamento radial, descubra seus pilares estruturais e aprenda o passo a passo para criar mapas mentais de alta retenção.',
    excerpt: 'Descubra o que é um mapa mental, como ele funciona na prática e o passo a passo para organizar pensamentos, acelerar estudos e ter clareza.',
    imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Mapas mentais utilizam o pensamento radial para conectar conceitos e acelerar a assimilação de ideias complexas.',
    imageAlt: 'Pessoa desenhando conexões visuais e notas em um mapa mental estratégico',
    author: 'Prof.ª Silviane Silvério',
    authorDetails: {
      name: 'Prof.ª Silviane Silvério',
      role: 'Coordenação Pedagógica & Pesquisa ESDHUBEM',
      bio: 'Biomédica, pós-graduada em Práticas Integrativas e Complementares em Saúde, pesquisadora em metodologias de ensino, desenvolvimento humano e escrita autoral.',
      profileUrl: 'corpo-docente',
      lattesUrl: 'https://lattes.cnpq.br/7481458793724724',
      orcidUrl: 'https://orcid.org/0000-0001-6311-1195'
    },
    date: '16 de outubro de 2026',
    updatedDate: '16 de outubro de 2026',
    datePublishedIso: '2026-10-16',
    dateModifiedIso: '2026-10-16',
    category: 'Metodologia e Aprendizagem',
    categorySlug: 'metodologia-e-aprendizagem',
    topics: ['Mapa Mental', 'Metodologia de Estudo', 'Aprendizagem Ativa', 'Desenvolvimento Humano', 'Produtividade'],
    readTime: '7 minutos',
    tableOfContents: [
      { id: 'definicao-rapida', label: '1. O que é um mapa mental (Definição Rápida)' },
      { id: 'neurociencia-pensamento-radial', label: '2. Como o mapa mental funciona no cérebro humano' },
      { id: 'pilares-estruturais', label: '3. Os 5 pilares estruturais de um mapa mental eficiente' },
      { id: 'comparativo-ferramentas', label: '4. Comparativo: Mapa Mental vs Mapa Conceitual vs Anotação Linear' },
      { id: 'passo-a-passo-pratico', label: '5. Passo a passo prático para criar do zero' },
      { id: 'aplicacoes-reais', label: '6. Aplicações reais: estudos, pesquisa e autoria' },
      { id: 'perguntas-frequentes', label: '7. Perguntas Frequentes (FAQ)' },
      { id: 'conclusao', label: 'Conclusão' }
    ],
    editorialNote: 'Este conteúdo integra os fundamentos de neurociência cognitiva, métodos de estudo e escrita reflexiva desenvolvidos pela ESDHUBEM.',
    sources: [
      {
        title: 'The Mind Map Book: How to Use Radiant Thinking to Maximize Your Brain\'s Untapped Potential',
        author: 'Tony Buzan & Barry Buzan',
        institution: 'BBC Books / Plume',
        date: '1993'
      },
      {
        title: 'Cognitive Load Theory and the Format of Instruction',
        author: 'John Sweller',
        institution: 'Cognition and Instruction',
        date: '1988'
      },
      {
        title: 'Diretrizes Pedagógicas e Metodologia de Mapeamento Mental ESDHUBEM',
        author: 'Coordenação Pedagógica',
        institution: 'ESDHUBEM - Educação Integral',
        date: '2026'
      }
    ],
    relatedPosts: [
      {
        id: 'transforme-seu-aprendizado-em-autoridade-e-publicacao',
        title: 'Como transformar seu aprendizado em autoridade e publicação autoral',
        category: 'Autoria & Publicação'
      },
      {
        id: 'como-escolher-um-curso-livre-para-melhorar-sua-carreira',
        title: 'Como escolher um curso livre para melhorar sua carreira',
        category: 'Carreira e cursos livres'
      },
      {
        id: 'o-poder-do-desenvolvimento-pessoal',
        title: 'O poder do desenvolvimento pessoal na trajetória profissional',
        category: 'Desenvolvimento Pessoal'
      }
    ],
    faq: [
      {
        question: 'Qualquer pessoa consegue usar mapas mentais?',
        answer: 'Sim. A metodologia não exige talentos artísticos. O valor de um mapa mental está na sua organização relacional e na clareza conceitual, não na beleza do desenho.'
      },
      {
        question: 'Qual é a quantidade ideal de ramos em um mapa mental?',
        answer: 'A neurociência recomenda de 4 a 7 ramificações primárias. Esse intervalo respeita o limite da capacidade da memória de trabalho humana (a "Lei de Miller"), prevenindo a sobrecarga cognitiva.'
      },
      {
        question: 'Posso usar frases completas no mapa mental?',
        answer: 'O ideal é evitar. Textos longos estimulam a leitura passiva. Palavras-chave isoladas forçam o cérebro a recuperar ativamente os conceitos associados, promovendo o aprendizado profundo.'
      },
      {
        question: 'Qual é a principal diferença entre mapa mental e mapa conceitual?',
        answer: 'O mapa mental possui um único ponto central e cresce de forma radial e orgânica. O mapa conceitual pode ter múltiplos pontos de partida e foca em relacionar caixas através de verbos de ligação explícitos.'
      }
    ],
    content: `
      <p class="text-lg text-slate-700 leading-relaxed font-medium mb-6">
        Você já sentiu que sua mente está cheia de boas ideias, mas na hora de colocá-las no papel tudo parece confuso, fragmentado ou disperso?
      </p>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        O modelo tradicional de anotação — aquele texto corrido em linhas horizontais — força o nosso cérebro a pensar em um formato linear rígido. No entanto, o pensamento humano não funciona em linhas retas: ele opera por <strong>associação livre, imagens, conexões e redes dinâmicas</strong>.
      </p>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        É exatamente aqui que entra o <strong>mapa mental</strong>: uma metodologia visual projetada para espelhar a estrutura neurológica do cérebro, transformando o excesso de informações soltas em clareza, retenção e criatividade aplicável.
      </p>

      <h2 id="definicao-rapida" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        1. O que é um mapa mental (Definição Rápida)
      </h2>

      <div class="my-6 p-6 rounded-2xl bg-emerald-50/80 border-l-4 border-emerald-500 shadow-xs">
        <p class="text-slate-800 font-semibold leading-relaxed m-0 text-base">
          <strong>Um mapa mental é uma ferramenta visual de organização do pensamento que estrutura ideias a partir de um núcleo central, ramificando conceitos secundários por meio de palavras-chave, cores, símbolos e conexões radiais. Ele simula as redes neurais cerebrais, facilitando a memorização, a resolução de problemas e a síntese de informações complexas.</strong>
        </p>
      </div>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Popularizado pelo psicólogo e pesquisador britânico <strong>Tony Buzan</strong> na década de 1970, o mapa mental surgiu como uma alternativa neurocientífica às listas de texto monótonas que sobrecarregam a memória de trabalho e desestimulam o aprendizado ativo.
      </p>

      <h2 id="neurociencia-pensamento-radial" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        2. Como o mapa mental funciona no cérebro humano
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        A eficácia do mapa mental apoia-se no princípio da <strong>integração hemisférica</strong> da neurobiologia:
      </p>

      <ul class="space-y-3 text-base text-slate-700 list-disc list-inside mb-6 pl-2">
        <li><strong>Hemisfério Esquerdo (Lógico e Analítico):</strong> Processa palavras, lógica, sequências, números e listas organizadas.</li>
        <li><strong>Hemisfério Direito (Visual e Criativo):</strong> Processa cores, ritmos, imagens, dimensões e percepção espacial.</li>
      </ul>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Quando criamos anotações comuns em preto e branco, solicitamos quase que exclusivamente o lado esquerdo. Ao desenhar um mapa mental — unindo nós centrais, curvas orgânicas, contrastes cromáticos e ícones —, ambos os hemisférios são recrutados simultaneamente, gerando o <strong>Efeito de Superioridade da Imagem (PSE)</strong>, que acelera a assimilação e a retenção mnêmica a longo prazo.
      </p>

      <h2 id="pilares-estruturais" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        3. Os 5 pilares estruturais de um mapa mental eficiente
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Para que um mapa mental cumpra sua função cognitiva sem se transformar em um amontoado confuso de anotações, ele deve respeitar cinco princípios fundamentais:
      </p>

      <ol class="space-y-4 text-base text-slate-700 list-decimal list-inside mb-6 pl-2">
        <li><strong>Ideia Central Única (Núcleo):</strong> O tema principal sempre se localiza no centro exato da página, acompanhado de uma palavra forte ou símbolo gráfico.</li>
        <li><strong>Pensamento Radial:</strong> As ramificações irradiam do centro para as extremidades, espelhando a disposição de sinapses e dendritos.</li>
        <li><strong>Hierarquia por Ramos (Troncos e Galhos):</strong> Os ramos principais trazem as macro-categorias; as ramificações subsequentes aprofundam dados, conceitos e evidências.</li>
        <li><strong>Economia Verbal (Palavras-Chave):</strong> Utilização de termos catalisadores em vez de frases completas, obrigando o cérebro a sintetizar e processar o significado.</li>
        <li><strong>Diferenciação Cromática:</strong> Cada ramificação primária recebe uma paleta de cor própria, servindo como âncora mnemônica visual instantânea.</li>
      </ol>

      <h2 id="comparativo-ferramentas" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        4. Comparativo: Mapa Mental vs Mapa Conceitual vs Anotação Linear
      </h2>

      <div class="my-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
        <table class="w-full text-left border-collapse text-sm">
          <caption class="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border-b border-slate-200 text-left">
            Comparativo de Estruturas de Organização do Pensamento
          </caption>
          <thead>
            <tr class="bg-slate-100/80 text-slate-900 border-b border-slate-200">
              <th scope="col" class="py-3 px-5 font-bold">Critério</th>
              <th scope="col" class="py-3 px-5 font-bold">Mapa Mental</th>
              <th scope="col" class="py-3 px-5 font-bold">Mapa Conceitual</th>
              <th scope="col" class="py-3 px-5 font-bold">Anotação Linear Tradicional</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-slate-700">
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Estrutura</th>
              <td class="py-3.5 px-5">Radial (do centro para fora)</td>
              <td class="py-3.5 px-5">Hierárquica em rede (topo para base)</td>
              <td class="py-3.5 px-5">Sequencial (linha após linha)</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Foco Principal</th>
              <td class="py-3.5 px-5">Síntese, memorização e geração de ideias</td>
              <td class="py-3.5 px-5">Relações de causa, efeito e proposições</td>
              <td class="py-3.5 px-5">Registro textual cronológico e literal</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Conexões</th>
              <td class="py-3.5 px-5">Ramos orgânicos associativos</td>
              <td class="py-3.5 px-5">Setas com verbos de ligação explícitos</td>
              <td class="py-3.5 px-5">Parágrafos, tópicos e travessões</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Estímulo Visual</th>
              <td class="py-3.5 px-5">Altíssimo (cores, ícones e formas livres)</td>
              <td class="py-3.5 px-5">Moderado (caixas conceituais e setas)</td>
              <td class="py-3.5 px-5">Mínimo (texto preto sobre fundo branco)</td>
            </tr>
            <tr class="hover:bg-slate-50/70">
              <th scope="row" class="py-3.5 px-5 font-semibold text-slate-900 whitespace-nowrap">Melhor Aplicação</th>
              <td class="py-3.5 px-5">Brainstorming, revisões rápidas, planejamento</td>
              <td class="py-3.5 px-5">Teorias complexas, processos e sistemas</td>
              <td class="py-3.5 px-5">Atas formais, transcrições e minutas</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="passo-a-passo-pratico" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        5. Passo a passo prático para criar do zero
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Construir um mapa mental eficiente exige método. Siga as cinco etapas fundamentais:
      </p>

      <ul class="space-y-4 text-base text-slate-700 list-disc list-inside mb-6 pl-2">
        <li><strong>1. Posicione o papel na horizontal:</strong> A visão humana possui maior amplitude lateral. Coloque a folha em formato paisagem e insira o tema central no meio.</li>
        <li><strong>2. Defina os 4 a 7 troncos principais:</strong> Puxe ramificações robustas representando os pilares do tema. Pinte cada um com uma cor exclusiva.</li>
        <li><strong>3. Ramifique os detalhes secundários:</strong> De cada tronco, puxe ramos mais finos contendo as especificidades, dados ou exemplos relacionados.</li>
        <li><strong>4. Use uma palavra-chave por linha:</strong> Troque sentenças inteiras pelo substantivo ou verbo nuclear. Menos texto exige maior atividade sináptica de recordação.</li>
        <li><strong>5. Conecte ramos com setas e ilustrações:</strong> Acrescente ícones rápidos e setas tracejadas entre ideias que conversam entre si, estimulando a visão sistêmica.</li>
      </ul>

      <h2 id="aplicacoes-reais" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        6. Aplicações reais: estudos, pesquisa e autoria
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        Na pedagogia da <strong>ESDHUBEM</strong>, o mapa mental é adotado como uma etapa indispensável da <em>Tecnologia do Escrever e do Mapear</em>:
      </p>

      <ul class="space-y-3 text-base text-slate-700 list-disc list-inside mb-6 pl-2">
        <li><strong>Preparação para Produção Autoral:</strong> Antes de redigir um artigo ou monografia, o autor mapeia os eixos conceituais, garantindo coerência antes de escrever o primeiro parágrafo.</li>
        <li><strong>Revisão Espaçada de Conteúdos:</strong> Um mapa mental bem estruturado permite repassar semanas de estudo em poucos minutos durante as sessões de revisão.</li>
        <li><strong>Resolução de Problemas Complexos:</strong> Ao expor todas as variáveis de uma decisão em uma visão panorâmica, soluções criativas emergem com facilidade.</li>
      </ul>

      <h2 id="perguntas-frequentes" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        7. Perguntas Frequentes (FAQ)
      </h2>

      <div class="space-y-6 my-6">
        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Qualquer pessoa consegue usar mapas mentais?</h3>
          <p class="text-sm text-slate-700 leading-relaxed m-0">Sim. A metodologia não exige dotes artísticos. O valor de um mapa mental está na clareza conceitual e na organização relacional das ideias, e não na sofisticação gráfica do desenho.</p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Qual é a quantidade ideal de ramos em um mapa mental?</h3>
          <p class="text-sm text-slate-700 leading-relaxed m-0">A ciência cognitiva recomenda entre 4 e 7 ramificações primárias. Esse intervalo respeita a capacidade natural da memória de trabalho humana (a "Lei de Miller"), prevenindo fadiga mental.</p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Posso usar frases completas no mapa mental?</h3>
          <p class="text-sm text-slate-700 leading-relaxed m-0">O recomendado é evitar. Frases extensas conduzem à leitura passiva. Palavras-chave isoladas desafiam o cérebro a recuperar ativamente os conceitos, consolidando o aprendizado.</p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200">
          <h3 class="text-base font-bold text-slate-900 mb-2">Qual é a diferença entre mapa mental e mapa conceitual?</h3>
          <p class="text-sm text-slate-700 leading-relaxed m-0">O mapa mental irradia de um único núcleo central de forma orgânica. O mapa conceitual foca em redes com múltiplos conceitos interligados por verbos e proposições explícitas.</p>
        </div>
      </div>

      <h2 id="conclusao" class="text-2xl font-black text-slate-900 mt-10 mb-4 tracking-tight">
        Conclusão
      </h2>

      <p class="text-base text-slate-700 leading-relaxed mb-6">
        O mapa mental é muito mais do que um formato estético de anotação: ele é uma ponte entre a complexidade do conhecimento e a forma biológica como a sua mente processa a realidade. Ao adotar o pensamento radial, você conquista clareza mental, velocidade de raciocínio e autonomia na construção do seu próprio saber.
      </p>
    `,
    cta: {
      title: 'Aprofunde sua Autoria e Métodos de Estudo',
      subtitle: 'Conheça os cursos e diretrizes pedagógicas da ESDHUBEM para desenvolver autonomia intelectual e escrita investigativa.',
      buttonText: '👉 Conhecer os Cursos da ESDHUBEM',
      link: 'cursos'
    }
  }
];
