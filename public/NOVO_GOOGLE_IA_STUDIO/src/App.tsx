import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MindMapCoursePromoBanner } from './components/MindMapCoursePromoBanner';
import { CategoryGrid } from './components/CategoryGrid';
import { MethodologySection } from './components/MethodologySection';
import { CorporateBanner } from './components/CorporateBanner';
import { BookstoreBanner } from './components/BookstoreBanner';
import { PublicationBanner } from './components/PublicationBanner';
import { DigitalPresenceBanner } from './components/DigitalPresenceBanner';
import { LivrariaPage } from './components/LivrariaPage';
import { CourseCatalog } from './components/CourseCatalog';
import { CertificateValidatorModal } from './components/CertificateValidatorModal';
import { CertificatePreviewModal } from './components/CertificatePreviewModal';
import { Footer } from './components/Footer';
import { StudentPortalPage } from './components/StudentPortalPage';
import { CourseDetailPage } from './components/CourseDetailPage';
import { CourseDetailLaunchPage } from './components/CourseDetailLaunchPage';
import { CategoriesPage } from './components/CategoriesPage';
import { CategoryDetailPage } from './components/CategoryDetailPage';
import { LegalInfoPage } from './components/LegalInfoPage';
import { PoliticasPage } from './components/PoliticasPage';
import { PolicyDetailPage } from './components/PolicyDetailPage';
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';
import { AplicativosPage } from './components/AplicativosPage';
import { ArtigosPage } from './components/ArtigosPage';
import { ArtigoDetailPage } from './components/ArtigoDetailPage';
import { CorpoDocentePage } from './components/CorpoDocentePage';
import { DireitosAlunoPage } from './components/DireitosAlunoPage';
import { PoliticaPagamentoPage } from './components/PoliticaPagamentoPage';
import { SecretariaDocumentacaoPage } from './components/SecretariaDocumentacaoPage';
import { RegrasCertificacaoMeritoPage } from './components/RegrasCertificacaoMeritoPage';
import { DiretrizesPedagogicasPage } from './components/DiretrizesPedagogicasPage';
import { DiretrizesProtecaoAutoriaPage } from './components/DiretrizesProtecaoAutoriaPage';
import { PodcastsPage } from './components/PodcastsPage';
import { DiretrizesPublicacaoParceriasPage } from './components/DiretrizesPublicacaoParceriasPage';
import { SobreNosPage } from './components/SobreNosPage';
import { GeradorAbntPage } from './components/GeradorAbntPage';
import { PerguntasFrequentesPage } from './components/PerguntasFrequentesPage';
import { CartaAbertaPage } from './components/CartaAbertaPage';
import { ModalidadesFormacaoPage } from './components/ModalidadesFormacaoPage';
import { DiretrizesAvaliacaoManuscritosPage } from './components/DiretrizesAvaliacaoManuscritosPage';
import { EnciclowikiPage } from './components/EnciclowikiPage';
import { EnciclowikiArticlePage } from './components/EnciclowikiArticlePage';
import { CATEGORIES_DATA, COURSES_DATA } from './data/coursesData';
import { BLOG_POSTS } from './data/blogData';
import { ACADEMIC_ARTICLES } from './data/artigosData';
import { Course, AcademicArticle } from './types';
import {
  CheckCircle2,
  HeartHandshake,
  Sparkles,
  MessageCircle,
  Home,
  GraduationCap,
  BookOpen,
  Layers,
  Scale,
  ShieldCheck,
  Building2
} from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    'home' | 'sala-de-aula' | 'curso-detalhe' | 'categorias' | 'categoria-detalhe' | 'informacoes-legais' | 'modalidades-formacao' | 'politicas' | 'politica-detalhe' | 'livraria' | 'blog' | 'blog-post' | 'aplicativos' | 'artigos' | 'artigo-detalhe' | 'corpo-docente' | 'direitos-aluno' | 'politica-pagamento' | 'secretaria-documentacao' | 'regras-certificacao-merito' | 'diretrizes-pedagogicas' | 'diretrizes-protecao-autoria' | 'diretrizes-avaliacao-manuscritos' | 'podcasts' | 'diretrizes-publicacao-parcerias' | 'sobre-nos' | 'gerador-abnt' | 'perguntas-frequentes' | 'carta-aberta' | 'enciclowiki' | 'enciclowiki-verbete'
  >('home');
  const [activeVerbeteId, setActiveVerbeteId] = useState<string>('mapa-mental');
  const [activeCategorySlug, setActiveCategorySlug] = useState<string>('desenvolvimento-nas-empresas');
  const [activePolicyId, setActivePolicyId] = useState<string>('privacidade');
  const [activePortalCourseId, setActivePortalCourseId] = useState<string>('hc-1');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activePillar, setActivePillar] = useState<'all' | 'freepremium' | 'horas-complementares' | 'formacao-livre'>('all');
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<AcademicArticle | null>(ACADEMIC_ARTICLES[0]);
  const [activePostId, setActivePostId] = useState<string | null>(null);
  const [isValidatorOpen, setIsValidatorOpen] = useState(false);
  const [isCertificatePreviewOpen, setIsCertificatePreviewOpen] = useState(false);
  const [savedCourseIds, setSavedCourseIds] = useState<string[]>(['fp-1', 'hc-1']); // Initial saved items matching the "2" indicator
  const [coursePageVersion, setCoursePageVersion] = useState<'lancamento' | 'padrao'>('lancamento');
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.replace('#', '');

    const verbeteId = params.get('verbete') || (params.get('page') === 'enciclowiki-verbete' ? params.get('id') : null);
    const postId = params.get('post') || params.get('id') || (params.get('page') === 'blog-post' ? params.get('id') : null);
    const artigoId = params.get('artigo') || params.get('article');
    const cursoId = params.get('curso') || params.get('course');
    const categoriaId = params.get('categoria') || params.get('category');
    const pagina = params.get('pagina') || params.get('page') || params.get('p') || hash;

    if (verbeteId) {
      setActiveVerbeteId(verbeteId);
      setCurrentPage('enciclowiki-verbete');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'enciclowiki' || pagina === 'wiki' || pagina === 'enciclopedia') {
      setCurrentPage('enciclowiki');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (postId) {
      const post = BLOG_POSTS.find(p => p.id === postId);
      if (post) {
        setActivePostId(post.id);
        setCurrentPage('blog-post');
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
    }

    if (artigoId) {
      const artigo = ACADEMIC_ARTICLES.find(a => a.id === artigoId);
      if (artigo) {
        setSelectedArticle(artigo);
        setCurrentPage('artigo-detalhe');
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
    }

    if (cursoId) {
      const course = COURSES_DATA.find(c => c.id === cursoId);
      if (course) {
        setSelectedCourse(course);
        setCurrentPage('curso-detalhe');
        window.scrollTo({ top: 0, behavior: 'instant' });
        return;
      }
    }

    if (categoriaId) {
      setActiveCategorySlug(categoriaId);
      setCurrentPage('categoria-detalhe');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'podcasts' || pagina === 'podcast') {
      setCurrentPage('podcasts');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'diretrizes-publicacao' || pagina === 'diretrizes-publicacao-parcerias' || pagina === 'publicacao-cientifica') {
      setCurrentPage('diretrizes-publicacao-parcerias');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'diretrizes-protecao-autoria' || pagina === 'protecao-autoria' || pagina === 'diretrizes-de-protecao-a-autoria') {
      setCurrentPage('diretrizes-protecao-autoria');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'diretrizes-pedagogicas') {
      setCurrentPage('diretrizes-pedagogicas');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'diretrizes-avaliacao-manuscritos' || pagina === 'avaliacao-manuscritos' || pagina === 'analise-manuscritos' || pagina === 'diretrizes-manuscritos') {
      setCurrentPage('diretrizes-avaliacao-manuscritos');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'regras-certificacao-merito' || pagina === 'certificacao') {
      setCurrentPage('regras-certificacao-merito');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'informacoes-legais' || pagina === 'legal') {
      setCurrentPage('informacoes-legais');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'modalidades-formacao' || pagina === 'modalidades' || pagina === 'formas-de-ensino' || pagina === 'cursos-livres') {
      setCurrentPage('modalidades-formacao');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'sobre-nos' || pagina === 'sobre' || pagina === 'sobre-esdhubem') {
      setCurrentPage('sobre-nos');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'gerador-abnt' || pagina === 'referencias-abnt' || pagina === 'abnt' || pagina === 'gerador-referencias-abnt') {
      setCurrentPage('gerador-abnt');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'perguntas-frequentes' || pagina === 'faq' || pagina === 'duvidas-frequentes' || pagina === 'duvidas') {
      setCurrentPage('perguntas-frequentes');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'carta-aberta' || pagina === 'carta') {
      setCurrentPage('carta-aberta');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'blog' || pagina === 'posts') {
      setCurrentPage('blog');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'artigos' || pagina === 'repositorio') {
      setCurrentPage('artigos');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'livraria' || pagina === 'livros') {
      setCurrentPage('livraria');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (pagina === 'sala-de-aula' || pagina === 'aula') {
      setCurrentPage('sala-de-aula');
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
  }, []);

  const showNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  const handleToggleSaveCourse = (courseId: string) => {
    if (savedCourseIds.includes(courseId)) {
      setSavedCourseIds(savedCourseIds.filter((id) => id !== courseId));
      showNotification('Curso removido dos seus salvos.');
    } else {
      setSavedCourseIds([...savedCourseIds, courseId]);
      showNotification('Curso adicionado à sua lista de estudos!');
    }
  };

  const handleEnrollCourse = (course: Course) => {
    setActivePortalCourseId(course.id);
    setCurrentPage('sala-de-aula');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showNotification(`Acesso liberado! Bem-vindo(a) à Sala de Aula do curso "${course.title}".`);
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'categoria-detalhe' || sectionId.startsWith('categoria:')) {
      const slug = sectionId.startsWith('categoria:')
        ? sectionId.replace('categoria:', '')
        : 'desenvolvimento-nas-empresas';
      setActiveCategorySlug(slug);
      setCurrentPage('categoria-detalhe');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'categorias') {
      setCurrentPage('categorias');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'corpo-docente') {
      setCurrentPage('corpo-docente');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'direitos-aluno') {
      setCurrentPage('direitos-aluno');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'politica-pagamento') {
      setCurrentPage('politica-pagamento');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'secretaria-documentacao' || sectionId === 'secretaria' || sectionId === 'tabela-servicos') {
      setCurrentPage('secretaria-documentacao');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'regras-certificacao-merito' || sectionId === 'merito-academico' || sectionId === 'selos-merito') {
      setCurrentPage('regras-certificacao-merito');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'diretrizes-pedagogicas' || sectionId === 'esclarecimento-pedagogico' || sectionId === 'manifesto') {
      setCurrentPage('diretrizes-pedagogicas');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'diretrizes-avaliacao-manuscritos' || sectionId === 'avaliacao-manuscritos' || sectionId === 'analise-manuscritos') {
      setCurrentPage('diretrizes-avaliacao-manuscritos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'informacoes-legais') {
      setCurrentPage('informacoes-legais');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'modalidades-formacao' || sectionId === 'modalidades' || sectionId === 'formas-de-ensino' || sectionId === 'cursos-livres') {
      setCurrentPage('modalidades-formacao');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'politicas') {
      setCurrentPage('politicas');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'perguntas-frequentes' || sectionId === 'faq' || sectionId === 'duvidas' || sectionId === 'duvidas-frequentes') {
      setCurrentPage('perguntas-frequentes');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'carta-aberta' || sectionId === 'carta') {
      setCurrentPage('carta-aberta');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'livraria') {
      setCurrentPage('livraria');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'aplicativos') {
      setCurrentPage('aplicativos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'artigos') {
      setCurrentPage('artigos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'blog') {
      setCurrentPage('blog');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'enciclowiki' || sectionId === 'wiki' || sectionId === 'enciclopedia') {
      setCurrentPage('enciclowiki');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'enciclowiki-verbete' || sectionId.startsWith('verbete:')) {
      const vId = sectionId.startsWith('verbete:') ? sectionId.replace('verbete:', '') : 'mapa-mental';
      setActiveVerbeteId(vId);
      setCurrentPage('enciclowiki-verbete');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'podcasts' || sectionId === 'podcast') {
      setCurrentPage('podcasts');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sectionId === 'diretrizes-publicacao' ||
      sectionId === 'diretrizes-publicacao-parcerias' ||
      sectionId === 'publicacao-cientifica' ||
      sectionId === 'parcerias-estrategicas'
    ) {
      setCurrentPage('diretrizes-publicacao-parcerias');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sectionId === 'diretrizes-protecao-autoria' ||
      sectionId === 'protecao-autoria' ||
      sectionId === 'diretrizes-de-protecao-a-autoria'
    ) {
      setCurrentPage('diretrizes-protecao-autoria');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'sobre-nos' || sectionId === 'sobre' || sectionId === 'sobre-esdhubem') {
      setCurrentPage('sobre-nos');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'gerador-abnt' || sectionId === 'referencias-abnt' || sectionId === 'abnt') {
      setCurrentPage('gerador-abnt');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'curso-detalhe') {
      if (!selectedCourse) {
        setSelectedCourse(COURSES_DATA.find(c => c.id === 'fp-assertiva') || COURSES_DATA[0]);
      }
      setCurrentPage('curso-detalhe');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'sala-de-aula') {
      setCurrentPage('sala-de-aula');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'inicio') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // If on student portal and clicking a catalog filter, go to home first
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        executeSectionNavigation(sectionId);
      }, 100);
    } else {
      executeSectionNavigation(sectionId);
    }
  };

  const executeSectionNavigation = (sectionId: string) => {
    if (sectionId === 'cursos-freepremium') {
      setActivePillar('freepremium');
      setSelectedCategory(null);
      const el = document.getElementById('catalogo-cursos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'horas-complementares') {
      setActivePillar('horas-complementares');
      setSelectedCategory(null);
      const el = document.getElementById('catalogo-cursos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'formacao-livre') {
      setActivePillar('formacao-livre');
      setSelectedCategory(null);
      const el = document.getElementById('catalogo-cursos');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col font-sans">
      {/* Header */}
      <Header
        currentPage={currentPage}
        onSearch={(term) => {
          setSearchTerm(term);
          if (currentPage !== 'home') setCurrentPage('home');
        }}
        searchTerm={searchTerm}
        onNavigate={handleNavigate}
        onOpenValidator={() => setIsValidatorOpen(true)}
        onOpenAbout={() => {
          setCurrentPage('sobre-nos');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        savedCount={savedCourseIds.length}
      />

      {/* Main Content Area: Page Routing */}
      {currentPage === 'home' && (
        <main className="flex-1">
          {/* 1. Hero Section */}
          <Hero
            onSelectCategory={(cat) => {
              if (cat === 'treinamentos-palestras-corporativas') {
                handleNavigate('categoria:treinamentos-palestras-corporativas');
              } else {
                setSelectedCategory(cat);
                const el = document.getElementById('catalogo-cursos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />

          {/* 2. Explorar Categorias (The 17 exact categories) */}
          <CategoryGrid
            categories={CATEGORIES_DATA}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              if (cat?.toLowerCase() === 'livros & materiais') {
                handleNavigate('livraria');
              } else if (cat?.toLowerCase() === 'aplicativos & dashboards') {
                handleNavigate('aplicativos');
              } else if (cat?.toLowerCase() === 'treinamentos e palestras corporativas') {
                handleNavigate('categoria:treinamentos-palestras-corporativas');
              } else {
                setSelectedCategory(cat);
              }
            }}
            onNavigateToCategoriesPage={() => handleNavigate('categorias')}
            onNavigateToCategoryDetail={(slug) => {
              setActiveCategorySlug(slug);
              setCurrentPage('categoria-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />

          {/* Banner Publicitário no lugar do botão: Curso Principal & Metodologia Pedagógica (Freepremium) */}
          <MindMapCoursePromoBanner
            onSelectCourse={() => {
              const course = COURSES_DATA.find((c) => c.id === 'fp-mapas-mentais');
              if (course) {
                setSelectedCourse(course);
                setCurrentPage('curso-detalhe');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            onNavigatePedagogy={() => {
              handleNavigate('diretrizes-pedagogicas');
            }}
            onNavigateModalities={() => {
              handleNavigate('modalidades-formacao');
            }}
          />

          {/* 3. Cursos Freepremium, Horas Complementares e Formações Profissionais (Movido para perto das categorias) */}
          <CourseCatalog
            courses={COURSES_DATA}
            activePillar={activePillar}
            onPillarChange={(pillar) => setActivePillar(pillar)}
            onNavigate={handleNavigate}
            onSelectCourse={(course) => {
              setSelectedCourse(course);
              setCurrentPage('curso-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onToggleSaveCourse={handleToggleSaveCourse}
            savedCourseIds={savedCourseIds}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />


          <section className="py-12 bg-[#F8FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#182333] tracking-tight">
                  Mais do que Cursos: Conhecimento que Cresce com Você
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <PublicationBanner onNavigate={() => handleNavigate('diretrizes-publicacao-parcerias')} />
                <BookstoreBanner onNavigate={() => handleNavigate('livraria')} />
                <DigitalPresenceBanner onNavigate={() => handleNavigate('categoria:landing-pages-biolinks')} />
                <CorporateBanner onNavigate={() => handleNavigate('categoria:treinamentos-palestras-corporativas')} />
              </div>
            </div>
          </section>
        </main>
      )}

      {currentPage === 'categorias' && (
        <main className="flex-1">
          <CategoriesPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onNavigateToCourseDetail={() => {
              setCurrentPage('curso-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToCategoryDetail={(slug) => {
              setActiveCategorySlug(slug);
              setCurrentPage('categoria-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'categoria-detalhe' && (
        <main className="flex-1">
          <CategoryDetailPage
            categorySlug={activeCategorySlug}
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToCategories={() => {
              setCurrentPage('categorias');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectCourse={(course) => {
              setSelectedCourse(course);
              setCurrentPage('curso-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToCourseDetail={() => {
              setCurrentPage('curso-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPortal={(courseId) => {
              if (courseId) setActivePortalCourseId(courseId);
              setCurrentPage('sala-de-aula');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            onSelectAnotherCategory={(slug) => {
              setActiveCategorySlug(slug);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'informacoes-legais' && (
        <main className="flex-1">
          <LegalInfoPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'modalidades-formacao' && (
        <main className="flex-1">
          <ModalidadesFormacaoPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
            onOpenValidator={() => setIsValidatorOpen(true)}
          />
        </main>
      )}

      {currentPage === 'politicas' && (
        <main className="flex-1">
          <PoliticasPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPolicy={(policyId) => {
              setActivePolicyId(policyId);
              setCurrentPage('politica-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
            onOpenValidator={() => setIsValidatorOpen(true)}
          />
        </main>
      )}

      {currentPage === 'politica-detalhe' && (
        <main className="flex-1">
          <PolicyDetailPage
            policyId={activePolicyId}
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToPolicies={() => {
              setCurrentPage('politicas');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'livraria' && (
        <main className="flex-1">
          <LivrariaPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'aplicativos' && (
        <main className="flex-1">
          <AplicativosPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'artigos' && (
        <main className="flex-1">
          <ArtigosPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectArticle={(art) => {
              setSelectedArticle(art);
              setCurrentPage('artigo-detalhe');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'artigo-detalhe' && selectedArticle && (
        <main className="flex-1">
          <ArtigoDetailPage
            article={selectedArticle}
            onBackToArticles={() => {
              setCurrentPage('artigos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'blog' && (
        <main className="flex-1">
          <BlogPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPost={(postId) => {
              setActivePostId(postId);
              setCurrentPage('blog-post');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'podcasts' && (
        <main className="flex-1">
          <PodcastsPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToCourses={() => {
              setCurrentPage('home');
              setTimeout(() => {
                const el = document.getElementById('catalogo-cursos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
          />
        </main>
      )}

      {currentPage === 'blog-post' && activePostId && (
        <main className="flex-1">
          <BlogPostPage
            post={BLOG_POSTS.find(p => p.id === activePostId) || BLOG_POSTS[0]}
            onBackToBlog={() => {
              setCurrentPage('blog');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToCourses={() => {
              setCurrentPage('home');
              setTimeout(() => {
                const el = document.getElementById('catalogo-cursos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            onNavigate={handleNavigate}
            onNavigateToPost={(newPostId) => {
              setActivePostId(newPostId);
              setCurrentPage('blog-post');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'curso-detalhe' && (
        <main className="flex-1">
          {(() => {
            const courseToRender = selectedCourse || COURSES_DATA.find(c => c.id === 'fp-assertiva') || COURSES_DATA[0];
            return (
              <CourseDetailLaunchPage
                course={courseToRender}
                onBackToHome={() => {
                  setCurrentPage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                onEnroll={() => {
                  setActivePortalCourseId(courseToRender.id);
                  setCurrentPage('sala-de-aula');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  showNotification(`Inscrição confirmada! Bem-vindo(a) à Sala de Aula de ${courseToRender.title}.`);
                }}
                onOpenValidator={() => setIsValidatorOpen(true)}
                onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
                onNavigate={handleNavigate}
                onSelectCourse={(newCourse) => {
                  setSelectedCourse(newCourse);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            );
          })()}
        </main>
      )}

      {currentPage === 'sala-de-aula' && (
        <main className="flex-1">
          <StudentPortalPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            initialCourseId={activePortalCourseId}
          />
        </main>
      )}

      {currentPage === 'corpo-docente' && (
        <main className="flex-1">
          <CorpoDocentePage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'direitos-aluno' && (
        <main className="flex-1">
          <DireitosAlunoPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'politica-pagamento' && (
        <main className="flex-1">
          <PoliticaPagamentoPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'secretaria-documentacao' && (
        <main className="flex-1">
          <SecretariaDocumentacaoPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
            onNavigateToPortal={() => {
              setCurrentPage('sala-de-aula');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'regras-certificacao-merito' && (
        <main className="flex-1">
          <RegrasCertificacaoMeritoPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
            onNavigateToArticles={() => {
              setCurrentPage('artigos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'diretrizes-pedagogicas' && (
        <main className="flex-1">
          <DiretrizesPedagogicasPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
            onNavigateToArticles={() => {
              setCurrentPage('artigos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'diretrizes-publicacao-parcerias' && (
        <main className="flex-1">
          <DiretrizesPublicacaoParceriasPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToArticles={() => {
              setCurrentPage('artigos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPortal={() => {
              setCurrentPage('sala-de-aula');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'diretrizes-protecao-autoria' && (
        <main className="flex-1">
          <DiretrizesProtecaoAutoriaPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'sobre-nos' && (
        <main className="flex-1">
          <SobreNosPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onOpenValidator={() => setIsValidatorOpen(true)}
            onNavigateToCourses={() => {
              setCurrentPage('categorias');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToPedagogy={() => {
              setCurrentPage('diretrizes-pedagogicas');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'gerador-abnt' && (
        <main className="flex-1">
          <GeradorAbntPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigateToArticles={() => {
              setCurrentPage('artigos');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        </main>
      )}

      {currentPage === 'perguntas-frequentes' && (
        <main className="flex-1">
          <PerguntasFrequentesPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'carta-aberta' && (
        <main className="flex-1">
          <CartaAbertaPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'diretrizes-avaliacao-manuscritos' && (
        <main className="flex-1">
          <DiretrizesAvaliacaoManuscritosPage
            onBackToHome={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'enciclowiki' && (
        <main className="flex-1">
          <EnciclowikiPage
            onSelectVerbete={(id) => {
              setActiveVerbeteId(id);
              setCurrentPage('enciclowiki-verbete');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {currentPage === 'enciclowiki-verbete' && (
        <main className="flex-1">
          <EnciclowikiArticlePage
            verbeteId={activeVerbeteId}
            onBack={() => {
              setCurrentPage('enciclowiki');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onSelectVerbete={(id) => {
              setActiveVerbeteId(id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onNavigate={handleNavigate}
          />
        </main>
      )}

      {/* 5. Footer with Fale Conosco, Métodos de Pagamento, Links, Categorias, Newsletter & Copyright */}
      <Footer
        onSelectCategory={(cat) => {
          if (currentPage !== 'home') setCurrentPage('home');
          setSelectedCategory(cat);
          setTimeout(() => {
            const el = document.getElementById('catalogo-cursos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onOpenValidator={() => setIsValidatorOpen(true)}
        onOpenAbout={() => {
          setCurrentPage('sobre-nos');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNavigate={handleNavigate}
        onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
      />


      {/* Modals */}

      <CertificateValidatorModal
        isOpen={isValidatorOpen}
        onClose={() => setIsValidatorOpen(false)}
        onOpenCertificatePreview={() => setIsCertificatePreviewOpen(true)}
        onNavigate={handleNavigate}
      />

      <CertificatePreviewModal
        isOpen={isCertificatePreviewOpen}
        onClose={() => setIsCertificatePreviewOpen(false)}
      />

      {/* Floating WhatsApp / Direct Contact Support Button */}
      <a
        href="https://wa.me/5511960319637?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20cursos%20da%20ESDHUBEM"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 rounded-full shadow-lg shadow-black/15 flex items-center gap-2 transition-transform hover:scale-110 group cursor-pointer"
        title="Fale conosco no WhatsApp (11) 960319637"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-1">
          (11) 960319637
        </span>
      </a>

      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-6 z-50 bg-[#182333] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs sm:text-sm animate-in slide-in-from-top-4 border border-slate-700">
          <CheckCircle2 className="w-4 h-4 text-[#FFC72C] shrink-0" />
          <span>{notification}</span>
        </div>
      )}
    </div>
  );
}
