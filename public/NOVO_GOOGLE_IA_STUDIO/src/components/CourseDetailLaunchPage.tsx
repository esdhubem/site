import React, { useState } from 'react';
import {
  Clock,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ExternalLink,
  Users,
  Star,
  BookOpen,
  ShieldCheck,
  ArrowLeft,
  Tv,
  Sparkles,
  Info,
  Award,
  FileCheck,
  Target,
  BrainCircuit,
  QrCode,
  LayoutTemplate,
  Share2,
  Copy,
  Eye,
  FileText,
  HelpCircle,
  Zap,
  Check,
  Flame,
  PenTool,
  Mic,
  Network,
  Globe,
  DollarSign,
  Send,
  AlertCircle,
  Play
} from 'lucide-react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import profSilvianeImg from '../assets/prof-silviane.png';

interface CourseDetailLaunchPageProps {
  course?: Course;
  onBackToHome: () => void;
  onEnroll: () => void;
  onOpenValidator: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
  onSelectCourse?: (course: Course) => void;
}

export type CourseLevelId = 'bronze' | 'prata' | 'ouro' | 'diamante';

export interface CourseLevel {
  id: CourseLevelId;
  name: string;
  badge: string;
  hours: number;
  hoursLabel: string;
  iconEmoji: string;
  colorClass: {
    border: string;
    bg: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
    ring: string;
  };
  regularPrice: number;
  launchPrice: number;
  scopeStudent: string;
  deliverablesSchool: string[];
  repository: string;
  repositoryCost: string;
  isPopular?: boolean;
  tagline: string;
}

export const COURSE_LEVELS: CourseLevel[] = [
  {
    id: 'bronze',
    name: '1º Nível • BRONZE',
    badge: 'Certificação Essencial',
    hours: 20,
    hoursLabel: '20 Horas',
    iconEmoji: '🥉',
    colorClass: {
      border: 'border-amber-700/40',
      bg: 'bg-amber-900/5',
      badgeBg: 'bg-amber-100',
      badgeText: 'text-amber-900',
      accent: 'text-amber-800',
      ring: 'ring-amber-700'
    },
    regularPrice: 69.90,
    launchPrice: 39.90,
    tagline: 'Ideal para validação rápida de horas complementares com avaliação pedagógica da Tríade.',
    scopeStudent: 'Tríade Base (Mapa Mental + Síntese conceitual de 500 a 800 palavras + Áudio de 1 min). Sem publicação pública.',
    deliverablesSchool: [
      'Avaliação pedagógica da Tríade e verificação de aprendizagem',
      'Certificado Oficial Bronze (20h) com QR Code e Hash de Autenticidade',
      'Amparo legal pleno na LDB nº 9.394/96 e Decreto nº 5.154/04'
    ],
    repository: 'Portal de Verificação ESDHUBEM (Arquivo Interno)',
    repositoryCost: '100% Incluso / Gratuito'
  },
  {
    id: 'prata',
    name: '2º Nível • PRATA',
    badge: '1ª Prateleira • Verbete Enciclowiki',
    hours: 40,
    hoursLabel: '40 Horas',
    iconEmoji: '🥈',
    colorClass: {
      border: 'border-slate-400',
      bg: 'bg-slate-100/50',
      badgeBg: 'bg-[#FFC72C]',
      badgeText: 'text-[#182333]',
      accent: 'text-slate-800',
      ring: 'ring-[#182333]'
    },
    regularPrice: 147.00,
    launchPrice: 79.00,
    isPopular: true,
    tagline: 'Carga padrão das faculdades + seu verbete canônico publicado na Enciclowiki.',
    scopeStudent: 'Tríade Base + Verbete Canônico Estruturado (500 a 800 palavras, mapa mental e citação ABNT).',
    deliverablesSchool: [
      'Certificado Oficial Prata com Carga Horária de 40 Horas',
      'Revisão editorial e formatação no padrão canônico da Enciclowiki',
      'Publicação na 1ª Prateleira (Enciclowiki da ESDHUBEM) com seu perfil e backlink',
      'Indexação amigável no Google para consolidação de autoridade conceitual'
    ],
    repository: 'Enciclowiki Oficial ESDHUBEM (1ª Prateleira)',
    repositoryCost: '100% Gratuito (Sem taxas extras)'
  },
  {
    id: 'ouro',
    name: '3º Nível • OURO',
    badge: '2ª Prateleira • Artigo de Blog SEO',
    hours: 80,
    hoursLabel: '80 Horas',
    iconEmoji: '🥇',
    colorClass: {
      border: 'border-amber-400',
      bg: 'bg-amber-500/10',
      badgeBg: 'bg-amber-500 text-white',
      badgeText: 'text-amber-950',
      accent: 'text-amber-600',
      ring: 'ring-amber-500'
    },
    regularPrice: 350.00,
    launchPrice: 149.00,
    tagline: 'Posicionamento em motores de busca com artigo temático e otimização SEO.',
    scopeStudent: 'Tríade Base + Artigo de Blog com SEO (800 a 1.500 palavras com H2/H3 e palavras-chave).',
    deliverablesSchool: [
      'Certificado Oficial Ouro com Carga Horária de 80 Horas',
      'Copidesque, revisão de legibilidade e otimização para SEO on-page',
      'Publicação na 2ª Prateleira (Blog Oficial da ESDHUBEM) com créditos autorais',
      'Indexação orgânica no Google com meta-dados otimizados'
    ],
    repository: 'Blog Oficial ESDHUBEM (2ª Prateleira)',
    repositoryCost: '100% Gratuito (Sem taxas extras)'
  },
  {
    id: 'diamante',
    name: '4º Nível • DIAMANTE',
    badge: '3ª Prateleira • Artigo Investigativo',
    hours: 120,
    hoursLabel: '120 Horas',
    iconEmoji: '💎',
    colorClass: {
      border: 'border-sky-500',
      bg: 'bg-sky-500/10',
      badgeBg: 'bg-sky-600 text-white',
      badgeText: 'text-sky-950',
      accent: 'text-sky-600',
      ring: 'ring-sky-500'
    },
    regularPrice: 980.00,
    launchPrice: 297.00,
    tagline: 'Pesquisa aprofundada de alto impacto com DOI Internacional vitalício.',
    scopeStudent: 'Tríade Base + Artigo Investigativo de Alto Impacto (2.500 a 5.000 palavras com rigor metodológico e referências).',
    deliverablesSchool: [
      'Certificado Oficial Diamante com Carga Horária de 120 Horas (Formação Avançada)',
      'Mentoria editorial crítica e revisão acadêmica aprofundada',
      'Publicação na 3ª Prateleira (Repositório Oficial de Artigos ESDHUBEM)',
      'Submissão com DOI Internacional vitalício (Zenodo / Open Science Framework)'
    ],
    repository: 'Repositório de Artigos + DOI (Zenodo / OSF - 3ª Prateleira)',
    repositoryCost: 'Zenodo / OSF 100% Grátis (DOI vitalício)'
  }
];

export const CourseDetailLaunchPage: React.FC<CourseDetailLaunchPageProps> = ({
  course,
  onBackToHome,
  onEnroll,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigate,
  onSelectCourse
}) => {
  const [activeTab, setActiveTab] = useState<
    'quadro' | 'triade' | 'sobre' | 'conteudo' | 'certificacao' | 'comparativo' | 'legislacao' | 'faq'
  >('sobre');
  const [expandedModules, setExpandedModules] = useState<number[]>([0, 1]);
  const [copied, setCopied] = useState(false);
  const [enrollmentMode, setEnrollmentMode] = useState<'gratis' | 'nivel'>('nivel');
  const [selectedLevelId, setSelectedLevelId] = useState<CourseLevelId>('prata');
  const [certificateViewMode, setCertificateViewMode] = useState<'frente' | 'verso'>('frente');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const selectedLevel = COURSE_LEVELS.find(lvl => lvl.id === selectedLevelId) || COURSE_LEVELS[1];
  const totalSavings = selectedLevel.regularPrice - selectedLevel.launchPrice;

  const handleCopyLink = () => {
    const courseId = course?.id || 'fp-assertiva';
    const baseUrl = window.location.href.split('?')[0];
    const url = `${baseUrl}?curso=${courseId}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleModule = (index: number) => {
    if (expandedModules.includes(index)) {
      setExpandedModules(expandedModules.filter((i) => i !== index));
    } else {
      setExpandedModules([...expandedModules, index]);
    }
  };

  // Course fallback data
  const title = course?.title || 'Comunicação Assertiva com a Liderança';
  const subtitle = course?.subtitle || 'Aprenda a expressar suas ideias com firmeza, clareza e respeito no ambiente corporativo, desenvolvendo uma presença executiva transformadora.';
  const category = course?.category || 'Desenvolvimento Profissional';
  const rating = course?.rating || 4.9;
  const studentsCount = course?.studentsCount || 3800;
  const badge = course?.badge || 'Turma de Lançamento';

  const defaultSyllabus = [
    'Módulo 1: Fundamentos da Comunicação Assertiva e Neurobiologia do Diálogo',
    'Módulo 2: Postura Consciente, Linguagem Corporal e Autogestão Emocional',
    'Módulo 3: Aplicação Prática no Ambiente de Trabalho e Gestão de Conflitos',
    'Módulo 4: Avaliação Final da Tríade e Emissão do Certificado Registrado'
  ];

  const syllabus = course?.syllabus && Array.isArray(course.syllabus) && course.syllabus.length > 0 
    ? course.syllabus 
    : defaultSyllabus;

  const defaultObjectives = [
    'Dominar a comunicação assertiva sem ruídos com gestores e equipes interdisciplinares',
    'Construir mapas mentais estratégicos para condensar projetos em visões de alto impacto',
    'Desenvolver a habilidade de síntese verbal de 60 segundos com confiança e segurança',
    'Conquistar certificação oficial com avaliação ativa e evidência de autoria'
  ];

  const defaultAudienceList = [
    'Estudantes universitários que precisam de horas complementares (AACC) com comprovação real',
    'Profissionais que buscam progressão na carreira, liderança e reconhecimento no mercado',
    'Pesquisadores e pós-graduandos que desejam publicar artigos com DOI ou livros autorais',
    'Autônomos e empreendedores que precisam comunicar valor e fechar projetos'
  ];

  const targetAudienceText = course?.targetAudience || '';

  const faqs = [
    {
      q: 'Como funciona a condição especial de lançamento dos 4 Níveis?',
      a: 'Para celebrar o lançamento do nosso novo ecossistema, estamos oferecendo vagas na Turma Fundadora com valores promocionais ancorados em até 70% de desconto em relação ao mercado. Você escolhe o nível desejado (Bronze, Prata, Ouro ou Diamante) de acordo com a sua meta de certificação ou publicação.'
    },
    {
      q: 'O que é a Metodologia da Tríade da Organização, Assimilação e Comunicação?',
      a: 'Em vez de testes automatizados de múltipla escolha onde ninguém avalia nada, o aluno elabora 1 Mapa Mental do curso, escreve 1 síntese à mão (neurociência de retenção profunda) e grava 1 áudio de 1 minuto explicando a ideia central. Isso comprova 100% o aprendizado genuíno e elimina qualquer fraude.'
    },
    {
      q: 'O registro no Zenodo e no OSF é realmente gratuito?',
      a: 'Sim, 100% gratuito! Tanto o OSF (Open Science Framework) quanto o Zenodo (mantido pelo CERN e União Europeia) são repositórios públicos globais de acesso aberto sem taxas de manutenção ou emissão de DOI. O investimento pago na ESDHUBEM cobre nossa assessoria editorial de copidesque, adequação ABNT e submissão.'
    },
    {
      q: 'Como funciona o registro de Livros na Biblioteca Nacional (Nível Diamante)?',
      a: 'Nossa mentoria orienta a escrita, faz a revisão crítica das ~50 páginas e entrega a diagramação em e-book. O depósito aberto no OSF é gratuito. Caso o autor queira o registro formal em cartório/órgão governamental (Fundação Biblioteca Nacional ou ISBN na CBL), as taxas oficiais cobradas por essas entidades são recolhidas diretamente pelo próprio autor.'
    },
    {
      q: 'O certificado é aceito pelas faculdades para horas complementares?',
      a: 'Sim! Nossos certificados possuem pleno amparo legal na Lei de Diretrizes e Bases nº 9.394/96 e Decreto nº 5.154/04. Contêm carga horária expressa, ementa programática no verso, CNPJ institucional, código alfanumérico e QR Code com hash criptográfico para verificação pública instantânea.'
    }
  ];

  return (
    <div className="bg-[#E9F2FB] min-h-screen py-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#011049] transition py-2 px-3.5 rounded-xl bg-white/80 hover:bg-white border border-blue-100 shadow-2xs cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:border-slate-300 px-3 py-2 rounded-lg shadow-sm transition cursor-pointer"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copiado!' : 'Compartilhar'}</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column (Left - 2 Cols) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Course Hero Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="bg-[#182333] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {category}
                </span>
                <span className="bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                  {badge}
                </span>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{rating}</span>
                  <span className="text-slate-400 font-normal">({studentsCount}+ alunos)</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#182333] leading-tight mb-4">
                {title}
              </h1>

              <p className="text-base text-slate-600 leading-relaxed mb-6">
                {subtitle}
              </p>

              {/* Professor Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={profSilvianeImg}
                  alt="Profª Silviane"
                  className="w-13 h-13 rounded-full object-cover border-2 border-[#FFC72C] shadow-sm shrink-0"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#182333]">Coordenação Pedagógica: Profª Silviane</span>
                    <span className="bg-blue-50 text-blue-800 text-[10px] font-bold px-2 py-0.5 rounded border border-blue-200">
                      Curadoria Especialista
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Avaliação individualizada das produções da Tríade e Mentoria Editorial para Publicações.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="bg-gradient-to-r from-[#0d4494] via-[#0a3576] to-[#072458] rounded-2xl border border-cyan-400/30 p-2 shadow-lg flex flex-wrap gap-1.5">
              {[
                { id: 'sobre', label: 'Sobre o Curso', icon: BookOpen },
                { id: 'conteudo', label: 'Ementa & Aulas', icon: Tv },
                { id: 'certificacao', label: 'Modelo do Certificado', icon: FileCheck },
                { id: 'legislacao', label: 'Base Legal', icon: ShieldCheck },
                { id: 'quadro', label: 'Tabela de Níveis', icon: Award, highlight: true },
                { id: 'triade', label: 'Método da Tríade', icon: BrainCircuit },
                { id: 'comparativo', label: 'Economia Real', icon: DollarSign },
                { id: 'faq', label: 'Dúvidas', icon: HelpCircle }
              ].map(tab => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#FFC72C] text-[#072458] shadow-md ring-2 ring-[#FFC72C]/40'
                        : tab.highlight
                        ? 'text-amber-300 bg-amber-400/15 border border-amber-300/30 hover:bg-amber-400/25'
                        : 'text-blue-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab: Tabela de Níveis Completa */}
            {activeTab === 'quadro' && (
              <div id="quadro-niveis-detalhado" className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-1">
                    <Award className="w-4 h-4" />
                    <span>Quadro Oficial de Níveis e Produções</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#182333]">
                    Escolha o seu Nível de Conquista Acadêmica
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Cada nível associa uma carga horária precisa ao tipo de produção que você realiza, com transparência total de entregáveis e repositórios.
                  </p>
                </div>

                {/* Grid dos 4 Níveis em Cards Ricos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {COURSE_LEVELS.map(lvl => {
                    const isSelected = selectedLevelId === lvl.id;
                    return (
                      <div
                        key={lvl.id}
                        className={`p-5 rounded-2xl border transition-all relative flex flex-col justify-between cursor-pointer ${
                          isSelected
                            ? `${lvl.colorClass.border} ${lvl.colorClass.bg} ring-2 ${lvl.colorClass.ring} shadow-md`
                            : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-300'
                        }`}
                        onClick={() => setSelectedLevelId(lvl.id)}
                      >
                        {lvl.isPopular && (
                          <span className="absolute -top-2.5 right-4 bg-[#FFC72C] text-[#182333] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-sm">
                            Mais Escolhido
                          </span>
                        )}

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{lvl.iconEmoji}</span>
                              <div>
                                <h4 className="text-sm font-black text-[#182333]">{lvl.name}</h4>
                                <span className="text-xs font-extrabold text-blue-700 block">
                                  {lvl.hoursLabel} de Carga Horária
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] text-slate-400 line-through block">
                                R$ {lvl.regularPrice.toFixed(2).replace('.', ',')}
                              </span>
                              <span className="text-base font-black text-[#182333]">
                                R$ {lvl.launchPrice.toFixed(2).replace('.', ',')}
                              </span>
                            </div>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed mb-3">
                            {lvl.tagline}
                          </p>

                          <div className="space-y-2 text-xs border-t border-slate-200/60 pt-3">
                            <div>
                              <span className="font-bold text-slate-700 block text-[11px]">✍️ O que você produz:</span>
                              <span className="text-slate-600">{lvl.scopeStudent}</span>
                            </div>

                            <div>
                              <span className="font-bold text-slate-700 block text-[11px]">🌐 Repositório:</span>
                              <span className="text-slate-600">{lvl.repository} ({lvl.repositoryCost})</span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLevelId(lvl.id);
                            const el = document.getElementById('checkout-widget');
                            if (el) {
                              el.scrollIntoView({ behavior: 'smooth' });
                            } else {
                              onEnroll();
                            }
                          }}
                          className={`mt-4 w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer ${
                            lvl.isPopular
                              ? 'bg-[#FFC72C] hover:bg-[#F5B014] text-[#182333] shadow-md'
                              : 'bg-[#182333] hover:bg-slate-900 text-white shadow-sm'
                          }`}
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Selecionar Nível {lvl.name} • R$ {lvl.launchPrice.toFixed(2).replace('.', ',')}</span>
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Nota de Transparência Jurídica */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                  <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div className="text-xs text-amber-900 space-y-1">
                    <p className="font-bold">Transparência de Repositórios e Custos:</p>
                    <p>
                      • Os depósitos no <strong>OSF</strong> (Níveis Prata e Diamante) e no <strong>Zenodo com DOI Internacional</strong> (Nível Ouro) são <strong>100% gratuitos</strong>.
                    </p>
                    <p>
                      • No <strong>Nível Diamante (Livro)</strong>, nossa mentoria entrega a leitura crítica completa e o e-book estruturado. Caso o autor deseje registrar oficialmente na <strong>Fundação Biblioteca Nacional (FBN)</strong> ou <strong>CBL</strong>, as taxas e emolumentos oficiais dos órgãos públicos são recolhidos diretamente pelo próprio autor.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Método da Tríade da Organização, Assimilação e Comunicação */}
            {activeTab === 'triade' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="border-b border-slate-100 pb-5">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider mb-1">
                    <BrainCircuit className="w-4 h-4" />
                    <span>Diferencial Exclusivo ESDHUBEM</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#182333]">
                    O Método da Tríade da Organização, Assimilação e Comunicação
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Aqui você não é um mero espectador passivo clicando em alternativas de múltipla escolha. 
                    Nossa metodologia foi desenhada com base na neurociência da retenção e na técnica Feynman de síntese.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Etapa 1: Mapa Mental */}
                  <div className="bg-gradient-to-b from-amber-50/60 to-white p-5 rounded-2xl border border-amber-200 flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-base mb-3 shadow">
                      <Network className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-800">Passo 1 • Visual</span>
                    <h4 className="text-base font-bold text-[#182333] mt-1 mb-2">1. Mapa Mental</h4>
                    <p className="text-xs text-slate-600 leading-relaxed flex-1">
                      Você desenha e estrutura as conexões e conceitos centrais do curso em uma única folha visual.
                    </p>
                    <div className="mt-3 text-[11px] font-semibold text-amber-900 bg-amber-100/70 px-2.5 py-1.5 rounded-lg">
                      🧠 Ativa visão holística
                    </div>
                  </div>

                  {/* Etapa 2: Escrita à Mão */}
                  <div className="bg-gradient-to-b from-blue-50/60 to-white p-5 rounded-2xl border border-blue-200 flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-base mb-3 shadow">
                      <PenTool className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-800">Passo 2 • Cognitivo</span>
                    <h4 className="text-base font-bold text-[#182333] mt-1 mb-2">2. Texto à Mão</h4>
                    <p className="text-xs text-slate-600 leading-relaxed flex-1">
                      Você redige uma síntese explicando o seu mapa (~500 palavras). A escrita manual comprovadamente fixa o conhecimento e elimina cópias de IA.
                    </p>
                    <div className="mt-3 text-[11px] font-semibold text-blue-900 bg-blue-100/70 px-2.5 py-1.5 rounded-lg">
                      ✍️ Retenção profunda & autoria
                    </div>
                  </div>

                  {/* Etapa 3: Áudio de 1 Minuto */}
                  <div className="bg-gradient-to-b from-emerald-50/60 to-white p-5 rounded-2xl border border-emerald-200 flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-base mb-3 shadow">
                      <Mic className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800">Passo 3 • Verbal</span>
                    <h4 className="text-base font-bold text-[#182333] mt-1 mb-2">3. Áudio de 1 Minuto</h4>
                    <p className="text-xs text-slate-600 leading-relaxed flex-1">
                      Gravação no celular de um resumo de 60 segundos explicando o aprendizado (Técnica Feynman).
                    </p>
                    <div className="mt-3 text-[11px] font-semibold text-emerald-900 bg-emerald-100/70 px-2.5 py-1.5 rounded-lg">
                      🎙️ Síntese & comunicação oral
                    </div>
                  </div>
                </div>

                {/* Como Enviar */}
                <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Send className="w-4 h-4 text-[#182333]" />
                    <h4 className="text-sm font-bold text-[#182333]">Como você envia para avaliação pedagógica:</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Basta tirar uma foto do seu mapa e da sua redação manual e anexar o arquivo de áudio no e-mail de submissão do curso. 
                    Nossa equipe analisa, envia a devolutiva e emite seu certificado oficial ou inicia a mentoria do seu artigo/livro!
                  </p>
                </div>
              </div>
            )}

            {/* Tab: Sobre o Curso */}
            {activeTab === 'sobre' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h3 className="text-lg font-bold text-[#182333] mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-amber-500" />
                    <span>Objetivos de Aprendizagem</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {defaultObjectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-700 leading-relaxed">{obj}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-lg font-bold text-[#182333] mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-amber-500" />
                    <span>Para Quem é Este Curso?</span>
                  </h3>
                  {targetAudienceText ? (
                    <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-xs text-slate-700 leading-relaxed mb-3">
                      {targetAudienceText}
                    </div>
                  ) : null}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {defaultAudienceList.map((aud, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                        <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </div>
                        <span className="text-xs text-slate-700 leading-relaxed">{aud}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Ementa & Aulas */}
            {activeTab === 'conteudo' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#182333]">Grade Curricular Completa</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Assista às aulas no seu próprio ritmo</p>
                  </div>
                  <span className="text-xs font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                    {syllabus.length} Módulos
                  </span>
                </div>

                <div className="space-y-3">
                  {syllabus.map((modTitle, idx) => {
                    const isExpanded = expandedModules.includes(idx);
                    return (
                      <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleModule(idx)}
                          className="w-full p-4 text-left bg-slate-50 hover:bg-slate-100 transition flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-[#182333] text-white flex items-center justify-center font-bold text-xs shrink-0">
                              {idx + 1}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-[#182333]">{modTitle}</h4>
                              <p className="text-xs text-slate-500 hidden sm:block">Aulas teóricas, aplicação prática e materiais de apoio</p>
                            </div>
                          </div>
                          {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                        </button>

                        {isExpanded && (
                          <div className="p-4 bg-white border-t border-slate-200 space-y-2.5">
                            <div className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg hover:bg-slate-50">
                              <div className="flex items-center gap-2.5">
                                <Tv className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span className="text-slate-700 font-medium">Conceitos fundamentais e estruturação prática</span>
                              </div>
                              <span className="text-slate-400 text-[11px]">Vídeo-aula</span>
                            </div>
                            <div className="flex items-center justify-between text-xs py-1.5 px-2 rounded-lg hover:bg-slate-50">
                              <div className="flex items-center gap-2.5">
                                <BrainCircuit className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span className="text-slate-700 font-medium">Estudo de casos e aplicação na Tríade</span>
                              </div>
                              <span className="text-slate-400 text-[11px]">Prática</span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tab: Certificação */}
            {activeTab === 'certificacao' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#182333]">Modelo do Certificado Oficial ({selectedLevel.name})</h3>
                    <p className="text-xs text-slate-500">Validade jurídica em todo o território nacional (LDB 9.394/96)</p>
                  </div>
                  <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
                    <button
                      onClick={() => setCertificateViewMode('frente')}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition cursor-pointer ${
                        certificateViewMode === 'frente' ? 'bg-[#182333] text-white' : 'text-slate-600'
                      }`}
                    >
                      Frente
                    </button>
                    <button
                      onClick={() => setCertificateViewMode('verso')}
                      className={`px-3 py-1 text-xs font-bold rounded-lg transition cursor-pointer ${
                        certificateViewMode === 'verso' ? 'bg-[#182333] text-white' : 'text-slate-600'
                      }`}
                    >
                      Verso (Ementa)
                    </button>
                  </div>
                </div>

                {/* Preview Frame */}
                <div className="bg-slate-900 rounded-2xl p-6 text-white text-center relative border border-slate-800 shadow-inner">
                  <div className="max-w-md mx-auto space-y-4">
                    <div className="inline-block p-2 rounded-full bg-amber-400/20 border border-amber-400/30">
                      <Award className="w-8 h-8 text-[#FFC72C]" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">
                        Escola Superior de Desenvolvimento Humano e Bem-Estar Social
                      </span>
                      <h4 className="text-lg font-bold mt-1 text-white">
                        Certificado de Conclusão e Mérito • {selectedLevel.name}
                      </h4>
                      <p className="text-xs text-slate-300 mt-2">
                        {certificateViewMode === 'frente'
                          ? `Atestamos que o aluno(a) concluiu o curso livre de ${title} com carga horária averbada de ${selectedLevel.hours} horas.`
                          : `Verso com registro das disciplinas, carga horária detalhada por módulo e carimbo da coordenação.`}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-800 flex items-center justify-around text-xs text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <QrCode className="w-4 h-4 text-amber-400" />
                        <span>QR Code Criptográfico</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>LDB nº 9.394/96</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    onClick={onOpenValidator}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 text-slate-500" />
                    <span>Testar Validador Público</span>
                  </button>
                  {onOpenCertificatePreview && (
                    <button
                      onClick={onOpenCertificatePreview}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#182333] text-white text-xs font-bold hover:bg-slate-900 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Eye className="w-4 h-4 text-[#FFC72C]" />
                      <span>Ver Certificado em Alta Resolução</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* Tab: Comparativo de Economia Real */}
            {activeTab === 'comparativo' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span>Transparência de Preços</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#182333]">
                    Comparativo: Mercado Tradicional vs. ESDHUBEM
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    No mercado editorial e acadêmico, o valor de revisão crítica (copidesque) é cobrado por lauda (1.400 a 2.100 caracteres). 
                    Veja o quanto você economiza na nossa Condição de Lançamento:
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                    <thead className="bg-[#182333] text-white">
                      <tr>
                        <th className="p-3">Nível & Serviço</th>
                        <th className="p-3">Preço Médio de Mercado</th>
                        <th className="p-3 bg-amber-400/20 text-[#FFC72C]">Na ESDHUBEM (Lançamento)</th>
                        <th className="p-3">Sua Economia</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-800">
                          🥉 BRONZE (20h): Certificado Oficial + Avaliação Tríade
                        </td>
                        <td className="p-3 text-slate-500">R$ 69,90 a R$ 90,00</td>
                        <td className="p-3 font-bold text-[#182333] bg-amber-50/50">R$ 39,90</td>
                        <td className="p-3 font-bold text-emerald-700">Até 55% OFF</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-800">
                          🥈 PRATA (40h): Certificado + Artigo de Blog + Depósito OSF
                        </td>
                        <td className="p-3 text-slate-500">R$ 140,00 a R$ 250,00</td>
                        <td className="p-3 font-bold text-[#182333] bg-amber-50/50">R$ 79,00</td>
                        <td className="p-3 font-bold text-emerald-700">Economia de ~R$ 100</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-800">
                          🥇 OURO (80h): Certificado + Artigo Científico com DOI + Zenodo
                        </td>
                        <td className="p-3 text-slate-500">R$ 350,00 a R$ 600,00</td>
                        <td className="p-3 font-bold text-[#182333] bg-amber-50/50">R$ 149,00</td>
                        <td className="p-3 font-bold text-emerald-700">Economia de ~R$ 300</td>
                      </tr>
                      <tr className="hover:bg-slate-50">
                        <td className="p-3 font-semibold text-slate-800">
                          💎 DIAMANTE (120h): Certificado + Livro (~50 págs) + Copidesque + E-book
                        </td>
                        <td className="p-3 text-slate-500">R$ 800,00 a R$ 1.800,00</td>
                        <td className="p-3 font-bold text-[#182333] bg-amber-50/50">R$ 297,00</td>
                        <td className="p-3 font-bold text-emerald-700">Economia de ~R$ 700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab: Base Legal */}
            {activeTab === 'legislacao' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="text-lg font-bold text-[#182333] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>Amparo Legal dos Cursos Livres e Certificações</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Os cursos oferecidos pela ESDHUBEM estão enquadrados na categoria de <strong>Cursos Livres de Educação Profissional</strong>, 
                  com pleno amparo na legislação brasileira:
                </p>
                <div className="space-y-2 text-xs text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Lei nº 9.394/1996 (LDB):</strong> Artigos 39 a 42 (Educação Profissional e Continuada).</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Decreto Presidencial nº 5.154/2004:</strong> Regulamenta a oferta de cursos livres de capacitação profissional.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Deliberação CEE 14/97:</strong> Indicação CEE 14/97 que reconhece a validade para atividades complementares.</span>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: FAQ */}
            {activeTab === 'faq' && (
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-3 shadow-sm">
                <h3 className="text-lg font-bold text-[#182333] mb-2">Perguntas Frequentes</h3>
                {faqs.map((faq, idx) => {
                  const isOpen = expandedFaq === idx;
                  return (
                    <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left bg-slate-50 hover:bg-slate-100 transition flex items-center justify-between cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-bold text-[#182333]">{faq.q}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

          </div>

          {/* Checkout & Selection Column (Right - 1 Col) */}
          <div className="space-y-6">
            
            <div id="checkout-widget" className="bg-white rounded-2xl border-2 border-[#182333] p-5 sm:p-6 shadow-xl relative overflow-hidden">
              
              {/* Badge Top */}
              <div className="absolute top-0 right-0 bg-[#FFC72C] text-[#182333] text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl tracking-wider">
                Turma de Lançamento
              </div>

              {/* Mode Tabs */}
              <div className="flex bg-slate-100 p-1 rounded-xl mb-5 mt-2">
                <button
                  type="button"
                  onClick={() => setEnrollmentMode('gratis')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                    enrollmentMode === 'gratis'
                      ? 'bg-white text-[#182333] shadow-sm'
                      : 'text-slate-600 hover:text-[#182333]'
                  }`}
                >
                  Acesso Gratuito
                </button>
                <button
                  type="button"
                  onClick={() => setEnrollmentMode('nivel')}
                  className={`flex-1 py-2 text-xs font-bold rounded-lg transition cursor-pointer ${
                    enrollmentMode === 'nivel'
                      ? 'bg-[#182333] text-[#FFC72C] shadow-sm'
                      : 'text-slate-600 hover:text-[#182333]'
                  }`}
                >
                  Certificado & Níveis
                </button>
              </div>

              {enrollmentMode === 'gratis' ? (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-[#182333] block mb-1">
                      Você terá acesso livre às aulas:
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Assista ao conteúdo sem custo. Ao finalizar, se desejar emitir o certificado com carga horária ou publicar artigos, basta escolher o seu nível e enviar sua Tríade.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={onEnroll}
                    className="w-full bg-[#182333] hover:bg-slate-900 text-[#FFC72C] font-bold text-sm py-3.5 rounded-xl shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Entrar na Sala de Aula Grátis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  
                  {/* Unified Level Selector */}
                  <div>
                    <label className="block text-xs font-black text-[#182333] mb-2 uppercase tracking-wide flex items-center justify-between">
                      <span>Selecione o seu Nível:</span>
                      <span className="text-[10px] text-amber-700 font-bold">Valores Promocionais</span>
                    </label>

                    <div className="space-y-2">
                      {COURSE_LEVELS.map(lvl => {
                        const isSelected = selectedLevelId === lvl.id;
                        return (
                          <button
                            key={lvl.id}
                            type="button"
                            onClick={() => setSelectedLevelId(lvl.id)}
                            className={`w-full p-3 rounded-xl border text-left transition cursor-pointer ${
                              isSelected
                                ? 'border-[#182333] bg-[#182333]/5 ring-2 ring-[#182333] shadow-sm'
                                : 'border-slate-200 hover:border-slate-300 bg-white'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#182333] bg-[#182333]' : 'border-slate-300'
                                }`}>
                                  {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-[#FFC72C]" />}
                                </div>
                                <div>
                                  <div className="flex items-center gap-1.5">
                                    <span className="text-base">{lvl.iconEmoji}</span>
                                    <span className="text-xs font-black text-[#182333]">{lvl.name}</span>
                                    {lvl.isPopular && (
                                      <span className="bg-[#FFC72C] text-[#182333] text-[9px] font-black px-1.5 py-0.2 rounded">
                                        Popular
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>

                              <div className="text-right">
                                <span className="text-[10px] text-slate-400 line-through mr-1.5">
                                  R$ {lvl.regularPrice.toFixed(2).replace('.', ',')}
                                </span>
                                <span className="text-xs font-extrabold text-[#182333]">
                                  R$ {lvl.launchPrice.toFixed(2).replace('.', ',')}
                                </span>
                              </div>
                            </div>

                            <div className="mt-1.5 pl-6 text-[11px] text-slate-600 flex items-center justify-between border-t border-slate-100 pt-1">
                              <span className="font-bold text-blue-700">{lvl.hoursLabel}</span>
                              <span className="text-slate-500 truncate max-w-[170px]">{lvl.badge}</span>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Summary of Selected Level */}
                  <div className="p-4 bg-gradient-to-br from-slate-50 to-amber-50/40 rounded-xl border border-slate-200 space-y-2 text-xs">
                    <div className="flex justify-between items-center text-slate-500">
                      <span>Valor Regular de Mercado:</span>
                      <span className="line-through font-medium">
                        R$ {selectedLevel.regularPrice.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <div className="flex justify-between items-baseline pt-1 border-t border-slate-200">
                      <div>
                        <span className="text-[11px] font-bold text-slate-700 block">
                          Total {selectedLevel.name}:
                        </span>
                        <span className="text-2xl font-black text-[#182333]">
                          R$ {selectedLevel.launchPrice.toFixed(2).replace('.', ',')}
                        </span>
                      </div>
                      <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded text-[11px]">
                        Economia de R$ {totalSavings.toFixed(2).replace('.', ',')}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-200 text-[11px] text-slate-600 space-y-1">
                      <div className="font-semibold text-slate-800">
                        ✓ Carga Horária: <strong>{selectedLevel.hoursLabel}</strong>
                      </div>
                      <div className="text-slate-500">
                        ✓ {selectedLevel.tagline}
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    type="button"
                    onClick={onEnroll}
                    className="w-full bg-[#FFC72C] hover:bg-[#F5B014] text-[#182333] font-black text-sm py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Award className="w-4 h-4" />
                    <span>
                      Garantir Inscrição • {selectedLevel.name} ({selectedLevel.hoursLabel})
                    </span>
                  </button>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-1.5">
                    <div className="flex items-center gap-1.5 font-bold text-[#182333]">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Avaliação Humana da Tríade inclusa</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Depósito no OSF e Zenodo 100% gratuitos</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>Emolumentos FBN/CBL (Livro) recolhidos pelo autor</span>
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Support / Help Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-3">
              <h4 className="text-xs font-bold text-[#182333] uppercase tracking-wide">
                Dúvidas sobre o seu Nível?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fale diretamente com a nossa secretaria pedagógica pelo WhatsApp para esclarecer dúvidas sobre os Níveis ou a Tríade.
              </p>
              <a
                href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20tirar%20dúvidas%20sobre%20os%20Níveis%20da%20ESDHUBEM."
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition shadow-sm cursor-pointer"
              >
                <span>Falar no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
