import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Award,
  Globe,
  Share2,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Rocket,
  Target,
  Handshake,
  HeartPulse,
  Compass,
  GraduationCap,
  Sparkles,
  Layers,
  FileText,
  FileCheck,
  MessageCircle,
  Landmark,
  ChevronRight,
  ChevronDown,
  Info,
  Clock,
  AlertTriangle,
  Check,
  Cpu,
  RefreshCw,
  Play,
  Headphones,
  Lightbulb
} from 'lucide-react';

interface LazyVideoPlayerProps {
  id: string;
  src: string;
  title: string;
  thumbnail: string;
  fallbackThumbnail?: string;
  badge?: string;
}

const LazyVideoPlayer: React.FC<LazyVideoPlayerProps> = ({
  id,
  src,
  title,
  thumbnail,
  fallbackThumbnail,
  badge
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(thumbnail);

  if (isPlaying) {
    const embedUrl = src.includes('autoplay') ? src : `${src}&autoplay=1`;
    return (
      <div className="w-full flex justify-center py-2">
        <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-800 bg-slate-950 aspect-video w-full max-w-md sm:max-w-lg">
          <iframe
            id={id}
            className="w-full h-full border-0 absolute inset-0"
            src={embedUrl}
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title={title}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center py-2">
      <div
        role="button"
        tabIndex={0}
        onClick={() => setIsPlaying(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsPlaying(true);
          }
        }}
        className="group relative rounded-2xl overflow-hidden shadow-xl border-2 border-slate-800 bg-slate-950 aspect-video w-full max-w-md sm:max-w-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#FFC72C] select-none transition-all duration-300 hover:border-amber-400/80 hover:scale-[1.01]"
        aria-label={`Assistir ao vídeo: ${title}`}
      >
        {/* Imagem de Capa do Vídeo */}
        <img
          src={imgSrc}
          alt={title}
          onError={() => {
            if (fallbackThumbnail && imgSrc !== fallbackThumbnail) {
              setImgSrc(fallbackThumbnail);
            }
          }}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Gradiente Escuro Suave para Contraste e Efeito Cinema */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-950/30 group-hover:via-slate-950/35 transition-colors duration-300" />

        {/* Selo Superior com Foco em Áudio e Conteúdo */}
        <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
          {badge ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[#FFC72C] text-[10px] sm:text-xs font-black uppercase tracking-wider border border-[#FFC72C]/40 shadow-md">
              <span>🎬</span>
              <span>{badge}</span>
            </span>
          ) : <span />}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-cyan-300 text-[10px] sm:text-[11px] font-bold border border-cyan-400/30 shadow-md">
            <Headphones className="w-3 h-3 text-cyan-300" />
            <span>Áudio Explicativo</span>
          </span>
        </div>

        {/* Botão de Play Central e Chamada para Ação */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 z-10 p-4 text-center">
          <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#FFC72C] to-amber-300 text-slate-950 flex items-center justify-center shadow-[0_0_30px_rgba(255,199,44,0.6)] group-hover:shadow-[0_0_45px_rgba(255,199,44,0.9)] group-hover:scale-110 transition-all duration-300 border-2 border-white/40">
            <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current translate-x-0.5 text-slate-950" />
          </div>
          <div className="space-y-0.5 drop-shadow-md">
            <span className="text-white font-black text-xs sm:text-sm block tracking-tight group-hover:text-[#FFC72C] transition-colors">
              Clique para ouvir e assistir
            </span>
            <span className="inline-flex items-center gap-1 text-slate-300 text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-900/60 backdrop-blur-xs border border-white/10">
              <Sparkles className="w-2.5 h-2.5 text-[#FFC72C]" />
              Formato compacto • Conteúdo essencial
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DiretrizesPublicacaoParceriasPageProps {
  onBackToHome: () => void;
  onNavigateToArticles?: () => void;
  onNavigateToPortal?: () => void;
  onNavigate?: (sectionId: string) => void;
}

const LISTA_SANFONAS_DIRETRIZES = [
  { id: '1', titulo: '1 - Apresentação das Diretrizes de Publicação' },
  { id: '2', titulo: '2 - Declarações de autorização e de autoria' },
  { id: 'triade', titulo: '3 - O que é a Tríade da Organização, Assimilação e Comunicação' },
  { id: 'quadrilatero', titulo: '4 - O que é o Quadrilátero da Organização, Assimilação, Comunicação e Produção' },
  { id: '3', titulo: '5 - Certificação Bronze - Publicação de Verbete' },
  { id: '4', titulo: '6 - Guia Completo para publicar o Verbete - Nível Bronze' },
  { id: '5', titulo: '7 - Certificação Prata - Publicação de Artigo de Blog' },
  { id: '6', titulo: '8 - Guia Completo para publicar o artigo de Blog - Nível Prata' },
  { id: '7', titulo: '9 - Certificação Ouro - Publicação de artigo de investigação' },
  { id: '8', titulo: '10 - Guia Completo do Artigo de Investigação - Nível Ouro' },
  { id: '9', titulo: '11 - Orientações para Produção do Artigo de investigação' },
  { id: 'plataformas-pesquisa', titulo: '12 - Sugestão de plataformas onde o aluno pode fazer pesquisa de artigos para compor suas referências bibliográficas' },
  { id: '10', titulo: '13 - Sobre o uso do nosso certificado como Horas Complementares na faculdade' },
  { id: '11', titulo: '14 - Certificação Diamante: Orientação para publicação de livro' },
  { id: '12', titulo: '15 - Guia Completo para publicar o livro - Nível Diamante' },
  { id: '13', titulo: '16 - Orientações para Produção do Livro & Registro de Direitos Autorais' },
  { id: '14', titulo: '17 - Livro Autoral — Formato e Contagem de Páginas' },
  { id: 'analise-portfolios', titulo: '18 - O que é a análise dos portfólios dos estudantes?' },
  { id: 'certificacao-valores', titulo: '19 - Certificação e Valores (Modalidades, Requisitos & Percursos)' },
  { id: 'autoria-responsabilidade', titulo: '20 - Autoria e Responsabilidade' },
  { id: 'publicacao-periodicos-revistas', titulo: '21 - Publicação em Repositórios, Periódicos e Revistas' },
  { id: '15', titulo: '22 - Padrão de Extensão: Palavras Sugeridas e Páginas por Nível' },
  { id: '16', titulo: '23 - Prazos de Análise e Devolutiva' },
  { id: '17', titulo: '24 - Critérios de Análise, Publicação e Direito de Retirada' },
  { id: '18', titulo: '25 - Estrutura e Formato por Nível de Produção' },
  { id: '19', titulo: '26 - Registro Obrigatório nas Plataformas e Atualização de Versões' },
  { id: 'como-publicar-osf', titulo: '27 - Como publicar na plataforma OSF?' },
  { id: 'como-publicar-zenodo', titulo: '28 - Como publicar no Zenodo?' },
  { id: 'registro-atualizacao-versoes', titulo: '29 - Registro Nas Plataformas, Atualização de Versões e Publicação na ESDHUBEM' },
  { id: '20', titulo: '30 - Uso Responsável de Inteligência Artificial — Declaração e Limites' }
];

export const DiretrizesPublicacaoParceriasPage: React.FC<DiretrizesPublicacaoParceriasPageProps> = ({
  onBackToHome,
  onNavigateToArticles,
  onNavigateToPortal,
  onNavigate
}) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    '1': true,
    '2': false,
    'triade': false,
    'quadrilatero': false,
    '3': false,
    '4': false,
    '5': false,
    '6': false,
    '7': false,
    '8': false,
    '9': false,
    '10': false,
    '11': false,
    '12': false,
    '13': false,
    '14': false,
    'analise-portfolios': false,
    '15': false,
    '16': false,
    '17': false,
    '18': false,
    '19': false,
    '20': false,
    'plataformas-pesquisa': false,
    'como-publicar-osf': false,
    'como-publicar-zenodo': false,
    'registro-atualizacao-versoes': false,
    'certificacao-valores': false,
    'autoria-responsabilidade': false,
    'uso-responsavel-ia': false,
    'publicacao-periodicos-revistas': false
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const expandAll = () => {
    setOpenSections({
      '1': true,
      '2': true,
      'triade': true,
      'quadrilatero': true,
      '3': true,
      '4': true,
      '5': true,
      '6': true,
      '7': true,
      '8': true,
      '9': true,
      '10': true,
      '11': true,
      '12': true,
      '13': true,
      '14': true,
      'analise-portfolios': true,
      '15': true,
      '16': true,
      '17': true,
      '18': true,
      '19': true,
      '20': true,
      'plataformas-pesquisa': true,
      'como-publicar-osf': true,
      'como-publicar-zenodo': true,
      'registro-atualizacao-versoes': true,
      'certificacao-valores': true,
      'autoria-responsabilidade': true,
      'uso-responsavel-ia': true,
      'publicacao-periodicos-revistas': true
    });
  };

  const collapseAll = () => {
    setOpenSections({
      '1': false,
      '2': false,
      'triade': false,
      'quadrilatero': false,
      '3': false,
      '4': false,
      '5': false,
      '6': false,
      '7': false,
      '8': false,
      '9': false,
      '10': false,
      '11': false,
      '12': false,
      '13': false,
      '14': false,
      'analise-portfolios': false,
      '15': false,
      '16': false,
      '17': false,
      '18': false,
      '19': false,
      '20': false,
      'plataformas-pesquisa': false,
      'como-publicar-osf': false,
      'como-publicar-zenodo': false,
      'registro-atualizacao-versoes': false,
      'certificacao-valores': false,
      'autoria-responsabilidade': false,
      'uso-responsavel-ia': false,
      'publicacao-periodicos-revistas': false
    });
  };

  const openAndScrollTo = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      const el = document.getElementById(`secao-sanfona-${id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 60);
  };
  return (
    <div className="bg-[#F8FAFC] min-h-screen text-slate-800 flex flex-col">
      {/* Hero Header com Azul Profundo Navy #011049 */}
      <div className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white border-b border-blue-900/60 shadow-lg">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'radial-gradient(circle at 25px 25px, white 2%, transparent 0%), radial-gradient(circle at 75px 75px, #FFC72C 2%, transparent 0%)',
              backgroundSize: '100px 100px'
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-sm font-semibold cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Voltar para o Início</span>
            </button>

            {onNavigateToArticles && (
              <button
                onClick={onNavigateToArticles}
                className="inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-white bg-cyan-950/60 border border-cyan-500/40 px-3.5 py-1.5 rounded-full transition-all cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Ver Repositório de Artigos</span>
              </button>
            )}
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC72C]/15 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold tracking-wide uppercase shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#FFC72C]" />
              <span>DIRETRIZES DE PUBLICAÇÃO & PESQUISA ESDHUBEM</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Diretrizes de Publicação
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10 flex-1 w-full -mt-6 relative z-20">

        {/* Bloco Sanfona (Accordion) das Diretrizes e Certificações */}
        <div className="space-y-5">
          {/* Barra Superior da Sanfona: Título, Filtros Rápidos e Botões de Controle */}
          <div className="bg-gradient-to-r from-[#0d4494] via-[#0a3576] to-[#072458] text-white rounded-3xl p-5 sm:p-7 border border-cyan-400/30 shadow-2xl space-y-4 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFC72C]/15 text-[#FFC72C] text-xs font-bold uppercase tracking-wider mb-2 border border-[#FFC72C]/30 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFC72C]" />
                  <span>Navegação Interativa das 30 Seções</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  Diretrizes de Publicação
                </h2>
                <p className="text-xs sm:text-sm text-blue-100 mt-1 leading-relaxed">
                  Clique nas seções para abrir ou recolher os vídeos, modelos de documentos e orientações detalhadas de cada nível.
                </p>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                <button
                  type="button"
                  onClick={expandAll}
                  className="px-3.5 py-2 rounded-xl text-xs font-black bg-[#FFC72C] text-slate-950 hover:bg-amber-400 transition-all cursor-pointer shadow-md"
                >
                  Expandir Todas
                </button>
                <button
                  type="button"
                  onClick={collapseAll}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer border border-white/20 shadow-xs"
                >
                  Recolher Todas
                </button>
              </div>
            </div>

            {/* Lista Simples com Links para o Título de Cada Sanfona - Fundo Branco */}
            <div className="pt-4 border-t border-cyan-400/20 relative z-10 space-y-3">
              <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-lg text-slate-800">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-100 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
                  <span className="text-amber-500 font-black">📋</span>
                  <span>Sumário das Diretrizes de Publicação :</span>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 text-xs sm:text-sm">
                  {LISTA_SANFONAS_DIRETRIZES.map((item) => (
                    <li key={item.id} className="flex items-start gap-2">
                      <span className="text-amber-500 font-bold text-xs shrink-0 pt-0.5 select-none">
                        →
                      </span>
                      <button
                        type="button"
                        onClick={() => openAndScrollTo(item.id)}
                        className="text-left text-slate-700 hover:text-[#011049] hover:underline transition-colors leading-snug cursor-pointer font-medium"
                      >
                        {item.titulo}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 1: 1 - Apresentação das Diretrizes de Publicação */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-1"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('1')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['1']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#011049] text-[#FFC72C] flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-blue-900">
                  1
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                    Vídeo 1 • Da Aprendizagem à Autoria
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    1 - Apresentação das Diretrizes de Publicação
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  {openSections['1'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 transition-transform duration-300 ${
                    openSections['1'] ? 'rotate-180 bg-[#011049] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['1'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
{/* Tutorial Vídeo - Parte 1: Boas-Vindas & Sequência do Percurso */}
          <div className="space-y-6 pb-8 border-b border-[#badbf7]">
            <div className="space-y-3">
              <LazyVideoPlayer
                id="odysee-iframe-parte-1"
                src="https://odysee.com/$/embed/@esdhubem:a/Diretrizes-de-Publica%C3%A7%C3%A3o-Parte-1-:f?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                title="Tutorial ESDHUBEM - Diretrizes de Publicação (Parte 1: Boas-vindas)"
                thumbnail="./images/thumb_video_diretrizes_1.webp"
                fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/fb4830417af8c53f1df8747696760ee2.webp"
                badge="Parte 1 • Boas-Vindas"
              />
              <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Vídeo 1: Introdução e boas-vindas ao percurso de autoria e publicação da ESDHUBEM</span>
              </p>
            </div>

            {/* Fluxo do Percurso (Junto do Vídeo) */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0d4494] via-[#0a3576] to-[#072458] text-white space-y-4 shadow-xl border border-cyan-400/40 relative overflow-hidden">
              <div className="flex items-center justify-between gap-2 flex-wrap relative z-10">
                <span className="text-xs sm:text-sm uppercase tracking-wider text-cyan-200 font-black flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFC72C]" />
                  <span>O percurso segue esta sequência:</span>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-medium leading-relaxed relative z-10">
                <span className="bg-[#001c4e] hover:bg-[#00286e] px-3.5 py-2 rounded-xl text-white font-bold shadow-md border border-cyan-400/30 transition-all">
                  Conclusão do curso
                </span>
                <span className="text-cyan-300 font-black text-base sm:text-lg">→</span>
                <span className="bg-[#001c4e] hover:bg-[#00286e] px-3.5 py-2 rounded-xl text-white font-bold shadow-md border border-cyan-400/30 transition-all">
                  Comunicação da modalidade de manuscrito
                </span>
                <span className="text-cyan-300 font-black text-base sm:text-lg">→</span>
                <span className="bg-[#001c4e] hover:bg-[#00286e] px-3.5 py-2 rounded-xl text-white font-bold shadow-md border border-cyan-400/30 transition-all">
                  Pagamento da taxa do nível específico
                </span>
                <span className="text-cyan-300 font-black text-base sm:text-lg">→</span>
                <span className="bg-[#001c4e] hover:bg-[#00286e] px-3.5 py-2 rounded-xl text-white font-bold shadow-md border border-cyan-400/30 transition-all">
                  Produção do manuscrito
                </span>
                <span className="text-cyan-300 font-black text-base sm:text-lg">→</span>
                <span className="bg-[#001c4e] hover:bg-[#00286e] px-3.5 py-2 rounded-xl text-white font-bold shadow-md border border-cyan-400/30 transition-all">
                  Envio para análise
                </span>
                <span className="text-cyan-300 font-black text-base sm:text-lg">→</span>
                <span className="bg-[#001c4e] hover:bg-[#00286e] px-3.5 py-2 rounded-xl text-white font-bold shadow-md border border-cyan-400/30 transition-all">
                  Devolutiva da escola
                </span>
                <span className="text-cyan-300 font-black text-base sm:text-lg">→</span>
                <span className="bg-[#001c4e] hover:bg-[#00286e] px-3.5 py-2 rounded-xl text-white font-bold shadow-md border border-cyan-400/30 transition-all">
                  Aprovação de ambas as partes
                </span>
                <span className="text-cyan-300 font-black text-base sm:text-lg">→</span>
                <span className="bg-[#FFC72C] hover:bg-amber-400 text-slate-950 font-black px-4 py-2 rounded-xl shadow-lg border-2 border-amber-300 transition-all">
                  Emissão do certificado e publicação do trabalho
                </span>
              </div>
            </div>
          </div>

          {/* Introdução e Apresentação das Diretrizes */}
          <div className="space-y-6 pb-8 border-b border-[#badbf7]">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">
                Da aprendizagem à autoria
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Apresentação das Diretrizes de Publicação
              </h2>
            </div>

            {/* Quadro Branco para Leitura Otimizada do Texto */}
            <div className="bg-white border-2 border-blue-200/80 rounded-2xl p-5 sm:p-7 shadow-sm space-y-4 text-slate-800 text-sm sm:text-base leading-relaxed">
              <p>
                A <strong className="text-[#00227B] font-bold">ESDHUBEM</strong> oferece ao aluno um sistema de aprendizagem na área do desenvolvimento humano e bem-estar que contribui para o desenvolvimento da memorização, raciocínio, escrita e oralidade, com a finalidade de proporcionar ao aluno chance de transformar sua experiência de aprendizagem em uma produção escrita e autoral.
              </p>
              <div className="space-y-2">
                <p>
                  Após concluir as videoaulas, o estudante deverá entrar em contato com a ESDHUBEM via WhatsApp e comunicar nesse passo a passo:
                </p>
                <ul className="space-y-1.5 pl-2 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span>👉</span>
                    <span>Qual modalidade de produção pretende desenvolver;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>👉</span>
                    <span>Pagar a taxa do tipo de certificado escolhido (Bronze, Prata, Ouro ou Diamante);</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>👉</span>
                    <span>Seguir com a preparação do seu portfólio.</span>
                  </li>
                </ul>
              </div>
              <p>
                O portfólio é o trabalho fundamental desenvolvido pelo estudante para ter direito a receber qualquer tipo de certificados da ESDHUBEM.
              </p>
              <div className="space-y-2">
                <p>
                  Esse portfólio chama-se <strong>"A Tríade da Organização, Assimilação e Comunicação"</strong>, que é composto por 3 tipos de atividades:
                </p>
                <ul className="space-y-1.5 pl-2 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span>✔️</span>
                    <span><strong>A primeira atividade</strong> é a criação de um mapa mental do que foi assimilado do conteúdo do curso percorrido;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✔️</span>
                    <span><strong>A segunda atividade</strong> é um texto verbete de 500 a 800 palavras;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✔️</span>
                    <span><strong>A terceira atividade</strong> é um áudio explicando o que aprendeu.</span>
                  </li>
                </ul>
              </div>
              <p>
                Após o estudante concluir as atividades, faz o envio do portfólio via e-mail <a href="mailto:esdhubem@proton.me" className="text-blue-700 font-bold underline hover:text-blue-900">esdhubem@proton.me</a>, que seguirá para a análise por parte dos nossos tutores de acordo com as diretrizes de análise da ESDHUBEM, publicação no wiki enciclopédia da ESDHUBEM e lançamento do Certificado Bronze para quem escolheu este tipo de certificado.
              </p>
              <div className="space-y-2">
                <p>
                  Os estudantes que escolheram outros tipos de certificado não recebem o certificado bronze, pois ainda seguirão com mais uma etapa que chamamos de <strong>Quadrilátero da Organização, Assimilação, Comunicação e Produção</strong>, onde o estudante vai produzir mais um trabalho de acordo com o tipo de certificado que quer receber:
                </p>
                <ul className="space-y-1.5 pl-2 text-sm sm:text-base">
                  <li className="flex items-start gap-2">
                    <span>🏆</span>
                    <span><strong>Certificado Prata:</strong> entrega um artigo de blog (1.200 a 2.500 palavras) voltado à divulgação do conhecimento e indexação orgânica (SEO) e publicação no Blog Oficial da ESDHUBEM;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🏆</span>
                    <span><strong>Certificado Ouro:</strong> desenvolve um artigo investigativo (2.500 a 5.000 palavras) estruturado no repositório internacional Zenodo com DOI permanente e publicação no Repositório de Artigos da ESDHUBEM;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🏆</span>
                    <span><strong>Certificado Diamante:</strong> um livro.</span>
                  </li>
                </ul>
              </div>
              <p>
                A partir dessa escolha, receberá as orientações específicas para elaboração do tipo de trabalho que quer realizar.
              </p>
              <p>
                Quando o aluno concluir o seu manuscrito, deve fazer um registro nas plataformas internacionais OSF (para verbete, artigo de blog e livro) ou Zenodo (para artigo investigativo).
              </p>
              <p>
                As plataformas de repositórios gratuitas e internacionais registram seus trabalhos, proporcionando mais tranquilidade autoral.
              </p>
              <p>
                Por fim, envia para a escola o link de publicação para que a ESDHUBEM possa avaliar, publicar no site da escola e emitir o certificado associado ao trabalho.
              </p>
            </div>
          </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 2: 2 - Declarações de autorização e de autoria */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-2"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('2')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['2']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#00227B] text-[#FFC72C] flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-blue-900">
                  📄 2
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Modelos Oficiais • Válidos para Todas as Categorias
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    2 - Declarações de autorização e de autoria
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['2'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 transition-transform duration-300 ${
                    openSections['2'] ? 'rotate-180 bg-[#00227B] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['2'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
                {/* Tutorial Vídeo - Declarações de Autorização e de Autoria */}
                <div className="space-y-4 pb-6 border-b border-[#badbf7]">
                  <LazyVideoPlayer
                    id="odysee-iframe-declaracoes-autoria"
                    src="https://odysee.com/$/embed/@esdhubem:a/diretriz-publicacao-8:a?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                    title="Tutorial ESDHUBEM - Diretrizes de Publicação (Declarações de Autorização e de Autoria)"
                    thumbnail="./images/thumb_video_diretrizes_8.webp"
                    fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/fb4830417af8c53f1df8747696760ee2.webp"
                    badge="Modelos Oficiais • Declarações"
                  />
                  <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Vídeo: Orientações completas sobre o preenchimento das declarações de autorização e autoria</span>
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Declarações de autorização e de autoria
                  </h2>

                  <div className="bg-white border-2 border-blue-200/80 rounded-2xl p-5 sm:p-6 shadow-sm text-slate-800 text-sm sm:text-base leading-relaxed space-y-3">
                    <p>
                      Estas declarações são modelos oficiais de preenchimento obrigatório que atendem a <strong className="text-[#00227B] font-bold">todas as categorias e níveis de publicação</strong> (Bronze, Prata, Ouro e Diamante).
                    </p>
                    <p>
                      Elas asseguram a titularidade intelectual do estudante, o consentimento para divulgação nos canais da ESDHUBEM e a conformidade ética com a legislação de direitos autorais.
                    </p>
                  </div>
                </div>

                {/* Grid dos dois modelos oficiais */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center gap-2 text-[#00227B] font-extrabold text-sm sm:text-base">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span>Modelos de Documentos Oficiais para Publicação</span>
                    </div>
                    <span className="text-xs text-slate-600 font-medium">
                      Documentos oficiais para download e preenchimento
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Documento 1: Declaração de Autorização de Publicação */}
                    <div className="bg-white border-2 border-blue-200/90 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md flex flex-col">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="font-bold text-xs uppercase tracking-wide text-slate-900 flex items-center gap-1.5">
                          <FileCheck className="w-4 h-4 text-amber-600" />
                          Declaração de Autorização de Publicação
                        </span>
                        <a
                          href="https://docs.google.com/document/d/e/2PACX-1vTvaBZHkV5P8aFmiVQv8qk4QGvTa_QFiwgHq3raRSLQjq1-xpQtFJMHOCWVmIHh1SH4K2gWH7N7WBvZ/pub"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-semibold hover:underline"
                        >
                          <span>Abrir Documento</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="w-full h-[450px] sm:h-[500px] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner">
                        <iframe
                          src="https://docs.google.com/document/d/e/2PACX-1vTvaBZHkV5P8aFmiVQv8qk4QGvTa_QFiwgHq3raRSLQjq1-xpQtFJMHOCWVmIHh1SH4K2gWH7N7WBvZ/pub?embedded=true"
                          className="w-full h-full border-0"
                          title="Declaração de Autorização de Publicação ESDHUBEM"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Documento 2: Declaração de Autoria e Responsabilidade */}
                    <div className="bg-white border-2 border-blue-200/90 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md flex flex-col">
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="font-bold text-xs uppercase tracking-wide text-slate-900 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-blue-600" />
                          Declaração de Autoria e Responsabilidade
                        </span>
                        <a
                          href="https://docs.google.com/document/d/e/2PACX-1vRrM84I2aCUSWkSh40jNbufvDMKMcL2ZurNRImp9nFvKC8-uxKLz7cr-TRbhe0i0eVH9govf3lz85xB/pub"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-semibold hover:underline"
                        >
                          <span>Abrir Documento</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      <div className="w-full h-[450px] sm:h-[500px] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner">
                        <iframe
                          src="https://docs.google.com/document/d/e/2PACX-1vRrM84I2aCUSWkSh40jNbufvDMKMcL2ZurNRImp9nFvKC8-uxKLz7cr-TRbhe0i0eVH9govf3lz85xB/pub?embedded=true"
                          className="w-full h-full border-0"
                          title="Declaração de Autoria e Responsabilidade ESDHUBEM"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO DA TRÍADE: Tríade da Organização, Assimilação e Comunicação (Válida para Todos os Níveis) */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-triade"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('triade')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['triade']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-amber-900">
                  🔺 3
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    Metodologia Pedagógica ESDHUBEM • Válida para Todos os Níveis
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    3 - O que é a Tríade da Organização, Assimilação e Comunicação
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['triade'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 transition-transform duration-300 ${
                    openSections['triade'] ? 'rotate-180 bg-amber-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['triade'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold tracking-wide uppercase shadow-2xs">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Destaque Metodológico Oficial da ESDHUBEM</span>
                  </div>

                  {/* Tutorial Vídeo - Tríade da Organização, Assimilação e Comunicação */}
                  <div className="space-y-3 py-3 border-y border-amber-200/80">
                    <LazyVideoPlayer
                      id="odysee-iframe-triade-assimilacao"
                      src="https://odysee.com/$/embed/@esdhubem:a/diretriz-publicacao-9:4?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                      title="Tutorial ESDHUBEM - Diretrizes de Publicação (A Tríade da Organização, Assimilação e Comunicação)"
                      thumbnail="./images/thumb_video_diretrizes_9.webp"
                      fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/fb4830417af8c53f1df8747696760ee2.webp"
                      badge="Metodologia • Assimilação e Comunicação"
                    />
                    <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Vídeo: Orientações completas sobre a Tríade da Organização, Assimilação e Comunicação e seus três vértices de validação</span>
                    </p>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    3 - O que é a Tríade da Organização, Assimilação e Comunicação
                  </h2>
                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      A metodologia da <strong className="text-[#00227B]">Tríade da Organização, Assimilação e Comunicação</strong> é a base pedagógica e epistemológica que estrutura a autoria do estudante e a validação do conhecimento na ESDHUBEM através de certificado por meio da produção de um portfólio.
                    </p>
                    <p>
                      Esse portfólio primordial chamado <strong>Tríade da Organização, Assimilação e Comunicação</strong> é exigido em <strong className="text-amber-900 font-bold">todos os níveis de certificação da ESDHUBEM</strong> (Bronze, Prata, Ouro e Diamante).
                    </p>
                    <p>
                      A criação desse portfólio contribui para o estudante consolidar a aprendizagem por meio de três bases fundamentais, dinâmicas e complementares: síntese visual desenhada à mão, elaboração textual conceitual e a prática da comunicação na apresentação dos conceitos aprendidos via áudio.
                    </p>
                  </div>
                </div>

                {/* Diagrama em Triângulo - Requisitos da Tríade da Organização, Assimilação e Comunicação */}
                <div className="bg-gradient-to-b from-amber-50/70 via-white to-amber-50/40 border-2 border-amber-300 rounded-2xl p-4 sm:p-6 shadow-sm space-y-6">
                  {/* Cabeçalho */}
                  <div className="flex items-center justify-between flex-wrap gap-2 border-b border-amber-200/80 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-700 text-white flex items-center justify-center font-black text-xs shadow-xs">
                        ▲
                      </div>
                      <span className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-amber-950">
                        Requisitos da Tríade da Organização, Assimilação e Comunicação
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-amber-900 bg-amber-100/90 px-3 py-1 rounded-full border border-amber-300">
                      Estrutura em Triângulo Pedagógico
                    </span>
                  </div>

                  {/* Desenho Gráfico do Triângulo Pedagógico */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-md bg-white border border-amber-200 rounded-2xl p-3 sm:p-4 shadow-xs">
                      <svg viewBox="0 0 360 210" className="w-full h-auto" fill="none">
                        <defs>
                          <linearGradient id="triGradientSanfona" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#fed7aa" stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        {/* Triângulo Preenchido e Borda Tracejada */}
                        <polygon points="180,24 45,178 315,178" fill="url(#triGradientSanfona)" stroke="#d97706" strokeWidth="2.5" strokeDasharray="5 5" />
                        
                        {/* Linhas Internas até o Centro */}
                        <line x1="180" y1="24" x2="180" y2="128" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="45" y1="178" x2="180" y2="128" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="315" y1="178" x2="180" y2="128" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" />

                        {/* Centro do Triângulo */}
                        <circle cx="180" cy="128" r="26" fill="#ffffff" stroke="#b45309" strokeWidth="2" />
                        <text x="180" y="125" textAnchor="middle" fontSize="8" fontWeight="900" fill="#78350f">ASSIMILAÇÃO</text>
                        <text x="180" y="137" textAnchor="middle" fontSize="8" fontWeight="900" fill="#78350f">ATIVA</text>

                        {/* Vértice 1: Topo (Mapa Mental) */}
                        <circle cx="180" cy="24" r="18" fill="#b45309" stroke="#ffffff" strokeWidth="3" />
                        <text x="180" y="30" textAnchor="middle" fontSize="13">🧠</text>
                        <text x="180" y="55" textAnchor="middle" fontSize="9.5" fontWeight="bold" fill="#92400e">1. MAPA MENTAL</text>

                        {/* Vértice 2: Base Esquerda (Verbete) */}
                        <circle cx="45" cy="178" r="18" fill="#b45309" stroke="#ffffff" strokeWidth="3" />
                        <text x="45" y="184" textAnchor="middle" fontSize="13">✍️</text>
                        <text x="50" y="202" textAnchor="start" fontSize="9.5" fontWeight="bold" fill="#92400e">2. VERBETE</text>

                        {/* Vértice 3: Base Direita (Áudio) */}
                        <circle cx="315" cy="178" r="18" fill="#b45309" stroke="#ffffff" strokeWidth="3" />
                        <text x="315" y="184" textAnchor="middle" fontSize="13">🎙️</text>
                        <text x="310" y="202" textAnchor="end" fontSize="9.5" fontWeight="bold" fill="#92400e">3. ÁUDIO 1 MIN</text>
                      </svg>
                    </div>
                  </div>

                  {/* Organização Triangular dos 3 Vértices com Texto Integral */}
                  <div className="space-y-4">
                    {/* Vértice 1 (Topo do Triângulo) */}
                    <div className="max-w-xl mx-auto">
                      <div className="bg-white border-2 border-amber-400 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all text-left sm:text-center relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400" />
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider mb-2 border border-amber-200">
                          ▲ Vértice Superior 1 • Síntese Visual (Feito à Mão)
                        </span>
                        <div className="flex items-center sm:justify-center gap-2 text-amber-950 font-bold text-sm sm:text-base mb-1.5">
                          <span className="text-xl">🧠</span>
                          <span>Mapa Mental do Conteúdo (Feito à Mão)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <strong>Mapa Mental do Conteúdo:</strong> Diagrama visual desenhado (Feito à Mão) estruturando os conceitos centrais e conexões pedagógicas da aula.
                        </p>
                      </div>
                    </div>

                    {/* Base do Triângulo: Vértice 2 (Esquerda) e Vértice 3 (Direita) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Vértice 2 (Base Esquerda) */}
                      <div className="bg-white border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-500 to-amber-300" />
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider mb-2 border border-amber-200">
                            ◀ Vértice Inferior 2 • Estrutura Conceitual (Escrito à Mão)
                          </span>
                          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm sm:text-base mb-1.5">
                            <span className="text-xl">✍️</span>
                            <span>Verbete Enciclopédico (500 a 800 palavras) (Escrito à Mão)</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong>Verbete Enciclopédico (500 a 800 palavras):</strong> Texto conceitual e informativo em norma-padrão (Escrito à Mão), explicando o significado, o contexto histórico e a aplicação do tema.
                          </p>
                        </div>
                      </div>

                      {/* Vértice 3 (Base Direita) */}
                      <div className="bg-white border-2 border-amber-300 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-300 to-amber-500" />
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider mb-2 border border-amber-200">
                            ▶ Vértice Inferior 3 • Retenção Oral
                          </span>
                          <div className="flex items-center gap-2 text-amber-950 font-bold text-sm sm:text-base mb-1.5">
                            <span className="text-xl">🎙️</span>
                            <span>Áudio Explicativo de 1 Minuto</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong>Áudio Explicativo de 1 Minuto:</strong> Gravação de voz de 60 segundos sintetizando o conceito oralmente com clareza (Técnica Feynman de retenção).
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nota de evolução */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-amber-100/70 border border-amber-300/80 flex items-start gap-2.5 text-xs sm:text-sm text-amber-950">
                    <span className="text-base leading-none shrink-0 mt-0.5">💡</span>
                    <p className="leading-relaxed">
                      <strong>Nota de evolução:</strong> O Áudio Explicativo possui duração de 1 minuto para a Tríade (nível Bronze) e expande-se para 3 minutos no Quadrilátero (níveis Prata, Ouro e Diamante), acompanhando o aprofundamento do trabalho autoral.
                    </p>
                  </div>

                  {/* Informações de Registro e Publicação */}
                  <div className="pt-2 border-t border-amber-200/80 flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-200 flex items-center gap-1.5">
                      <span>🛡️</span>
                      <span>Registro de Autoria: OSF (Open Science Framework)</span>
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-200 flex items-center gap-1.5">
                      <span>📍</span>
                      <span>Publicação: Wiki Oficial ESDHUBEM (Enciclopédia Temática)</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                  * O trabalho chega às mãos da coordenação com comprovante de registro no OSF, resguardando integralmente a anterioridade e a autoria do aluno.
                </p>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO DO QUADRILÁTERO: Quadrilátero da Organização, Assimilação, Comunicação e Produção */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-quadrilatero"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('quadrilatero')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['quadrilatero']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-indigo-700 via-blue-800 to-indigo-950 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-indigo-950">
                  💠 4
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Metodologia Pedagógica Avançada ESDHUBEM • Válida para Níveis Prata, Ouro e Diamante
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    4 - O que é o Quadrilátero da Organização, Assimilação, Comunicação e Produção
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['quadrilatero'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-900 transition-transform duration-300 ${
                    openSections['quadrilatero'] ? 'rotate-180 bg-indigo-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['quadrilatero'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100 border border-indigo-300 text-indigo-950 text-xs font-bold tracking-wide uppercase shadow-2xs">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    <span>Destaque Metodológico Oficial da ESDHUBEM • Autoria Ampliada</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    O que é o Quadrilátero da Organização, Assimilação, Comunicação e Produção
                  </h2>
                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      O <strong className="text-[#00227B]">Quadrilátero da Organização, Assimilação, Comunicação e Produção</strong> é o desdobramento metodológico avançado da ESDHUBEM para os estudantes que pretendem alcançar as certificações superiores de mérito (<strong className="text-indigo-950 font-bold">Prata, Ouro e Diamante</strong>).
                    </p>
                    <p>
                      Enquanto a Tríade estabelece a base fundamental (composta por Mapa Mental, Verbete Enciclopédico e Áudio explicativo), o <strong>Quadrilátero</strong> introduz o quarto vértice decisivo: a <strong>Produção Autoral Ampliada</strong>, que certifica a autonomia, a pesquisa e a capacidade do estudante de produzir obras investigativas e editoriais de impacto.
                    </p>
                    <p>
                      A quarta etapa (Produção) desdobra-se em conformidade com o tipo de certificado escolhido:
                    </p>
                    <ul className="space-y-1.5 pl-2 text-sm sm:text-base">
                      <li className="flex items-start gap-2">
                        <span>🏆</span>
                        <span><strong>Certificado Prata:</strong> entrega um <strong>verbete enciclopédico estruturado</strong> (500 a 800 palavras) amigável do Google (SEO) com definição, fundamento epistemológico e citação ABNT, publicado na Enciclowiki Oficial da ESDHUBEM;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>🏆</span>
                        <span><strong>Certificado Ouro:</strong> desenvolve um <strong>artigo autoral de blog com SEO</strong> (800 a 1.500 palavras) otimizado para os motores de busca e publicado no Blog Oficial da ESDHUBEM;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span>🏆</span>
                        <span><strong>Certificado Diamante:</strong> desenvolve um <strong>artigo investigativo de alto impacto</strong> (2.500 a 5.000 palavras) estruturado no repositório internacional Zenodo com <strong>DOI permanente</strong> e publicação no Repositório de Artigos da ESDHUBEM.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Diagrama em Quadrilátero - Requisitos do Quadrilátero */}
                <div className="bg-gradient-to-b from-blue-50/70 via-white to-indigo-50/40 border-2 border-indigo-300 rounded-2xl p-4 sm:p-6 shadow-sm space-y-6">
                  {/* Cabeçalho */}
                  <div className="flex items-center justify-between flex-wrap gap-2 border-b border-indigo-200/80 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-700 text-white flex items-center justify-center font-black text-xs shadow-xs">
                        ◆
                      </div>
                      <span className="font-extrabold text-xs sm:text-sm uppercase tracking-wider text-indigo-950">
                        Requisitos do Quadrilátero da Organização, Assimilação, Comunicação e Produção
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-indigo-900 bg-indigo-100/90 px-3 py-1 rounded-full border border-indigo-300">
                      Estrutura em Quadrilátero Pedagógico
                    </span>
                  </div>

                  {/* Desenho Gráfico do Quadrilátero Pedagógico */}
                  <div className="flex justify-center">
                    <div className="w-full max-w-lg bg-white border border-indigo-200 rounded-2xl p-3 sm:p-5 shadow-xs">
                      <svg viewBox="0 0 380 280" className="w-full h-auto" fill="none">
                        <defs>
                          <linearGradient id="quadGradientSanfona" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#ede9fe" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#e0e7ff" stopOpacity="0.4" />
                          </linearGradient>
                        </defs>
                        {/* Polígono do Quadrilátero (Losango / Diamante Geométrico) */}
                        <polygon points="190,32 335,140 190,248 45,140" fill="url(#quadGradientSanfona)" stroke="#4338ca" strokeWidth="2.5" strokeDasharray="5 5" />
                        
                        {/* Linhas Internas até o Centro */}
                        <line x1="190" y1="32" x2="190" y2="140" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="190" y1="248" x2="190" y2="140" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="45" y1="140" x2="190" y2="140" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="335" y1="140" x2="190" y2="140" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="3 3" />

                        {/* Centro do Quadrilátero */}
                        <circle cx="190" cy="140" r="30" fill="#ffffff" stroke="#3730a3" strokeWidth="2" />
                        <text x="190" y="132" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#312e81">PRODUÇÃO</text>
                        <text x="190" y="143" textAnchor="middle" fontSize="7.5" fontWeight="900" fill="#312e81">AUTORAL</text>
                        <text x="190" y="153" textAnchor="middle" fontSize="6.5" fontWeight="bold" fill="#4f46e5">EXPANDIDA</text>

                        {/* Vértice 1: Topo (Mapa Mental) */}
                        <circle cx="190" cy="32" r="18" fill="#3730a3" stroke="#ffffff" strokeWidth="3" />
                        <text x="190" y="38" textAnchor="middle" fontSize="13">🧠</text>
                        <text x="190" y="62" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#312e81">1. MAPA MENTAL</text>

                        {/* Vértice 2: Esquerda (Verbete) */}
                        <circle cx="45" cy="140" r="18" fill="#3730a3" stroke="#ffffff" strokeWidth="3" />
                        <text x="45" y="146" textAnchor="middle" fontSize="13">✍️</text>
                        <text x="50" y="172" textAnchor="start" fontSize="9" fontWeight="bold" fill="#312e81">2. VERBETE</text>

                        {/* Vértice 3: Direita (Áudio) */}
                        <circle cx="335" cy="140" r="18" fill="#3730a3" stroke="#ffffff" strokeWidth="3" />
                        <text x="335" y="146" textAnchor="middle" fontSize="13">🎙️</text>
                        <text x="330" y="172" textAnchor="end" fontSize="9" fontWeight="bold" fill="#312e81">3. ÁUDIO 3 MIN</text>

                        {/* Vértice 4: Base (Produção Autoral Específica) */}
                        <circle cx="190" cy="248" r="18" fill="#d97706" stroke="#ffffff" strokeWidth="3" />
                        <text x="190" y="254" textAnchor="middle" fontSize="13">🏆</text>
                        <text x="190" y="228" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#b45309">4. PRODUÇÃO AUTORAL</text>
                        <text x="190" y="275" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#475569">(Artigo de Blog • Investigativo • Livro)</text>
                      </svg>
                    </div>
                  </div>

                  {/* Organização dos 4 Vértices com Cards Explicativos */}
                  <div className="space-y-4">
                    {/* Linha Superior: Vértice 1 */}
                    <div className="max-w-xl mx-auto">
                      <div className="bg-white border-2 border-indigo-400 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all text-left sm:text-center relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-600 to-indigo-800" />
                        <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-[10px] font-black uppercase tracking-wider mb-2 border border-indigo-200">
                          ▲ Vértice 1 • Organização &amp; Síntese Visual (Feito à Mão)
                        </span>
                        <div className="flex items-center sm:justify-center gap-2 text-indigo-950 font-bold text-sm sm:text-base mb-1.5">
                          <span className="text-xl">🧠</span>
                          <span>Mapa Mental do Conteúdo (Feito à Mão)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          <strong>Mapa Mental do Conteúdo:</strong> Diagrama visual desenhado à mão estruturando os conceitos centrais, esquemas cognitivos e conexões pedagógicas da aula.
                        </p>
                      </div>
                    </div>

                    {/* Linha Central: Vértice 2 (Esquerda) e Vértice 3 (Direita) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Vértice 2 */}
                      <div className="bg-white border-2 border-indigo-300 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-400" />
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-[10px] font-black uppercase tracking-wider mb-2 border border-indigo-200">
                            ◀ Vértice 2 • Assimilação &amp; Estrutura Conceitual (Escrito à Mão)
                          </span>
                          <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm sm:text-base mb-1.5">
                            <span className="text-xl">✍️</span>
                            <span>Verbete Enciclopédico (500 a 800 palavras)</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong>Verbete Enciclopédico:</strong> Texto conceitual e informativo em norma-padrão, escrito à mão, explicando o significado, o contexto histórico e a aplicação do tema.
                          </p>
                        </div>
                      </div>

                      {/* Vértice 3 */}
                      <div className="bg-white border-2 border-indigo-300 rounded-2xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500" />
                        <div>
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-100 text-indigo-900 text-[10px] font-black uppercase tracking-wider mb-2 border border-indigo-200">
                            ▶ Vértice 3 • Comunicação &amp; Retenção Oral
                          </span>
                          <div className="flex items-center gap-2 text-indigo-950 font-bold text-sm sm:text-base mb-1.5">
                            <span className="text-xl">🎙️</span>
                            <span>Áudio Explicativo de 3 Minutos</span>
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                            <strong>Áudio Explicativo:</strong> Gravação de voz de 3 minutos sintetizando o conceito oralmente com clareza (Técnica Feynman de retenção).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Linha Inferior: Vértice 4 (Produção Autoral Ampliada) */}
                    <div className="max-w-3xl mx-auto w-full">
                      <div className="bg-gradient-to-br from-amber-50/90 via-white to-amber-50/60 border-2 border-amber-400 rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-lg transition-all relative overflow-hidden">
                        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400" />
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[10px] font-black uppercase tracking-wider border border-amber-300">
                            ▼ Vértice 4 • Produção Autoral Específica (Prata, Ouro ou Diamante)
                          </span>
                          <span className="text-xs font-bold text-amber-800 bg-amber-200/60 px-2.5 py-0.5 rounded-full">
                            Autoria Avançada
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-amber-950 font-black text-base sm:text-lg mb-2">
                          <span className="text-2xl">🏆</span>
                          <span>4º Vértice: Produção Autoral Expandida por Nível de Certificado</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                          O aluno produz a obra autoral correspondente à certificação escolhida, que passará por registro internacional e publicação:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-2xs space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-slate-800 text-sm">
                              <span>🥈</span>
                              <span>Prata</span>
                            </div>
                            <p className="text-slate-600">
                              <strong>Verbete na Enciclowiki</strong> (500 a 800 palavras) amigável do Google (SEO) com citação ABNT e publicação na Enciclowiki Oficial da ESDHUBEM.
                            </p>
                          </div>
                          <div className="p-3 bg-white border border-amber-200 rounded-xl shadow-2xs space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-amber-900 text-sm">
                              <span>🥇</span>
                              <span>Ouro</span>
                            </div>
                            <p className="text-slate-600">
                              <strong>Artigo de Blog com SEO</strong> (800 a 1.500 palavras) voltado à divulgação do conhecimento, atração orgânica e publicação no Blog Oficial da ESDHUBEM.
                            </p>
                          </div>
                          <div className="p-3 bg-white border border-cyan-200 rounded-xl shadow-2xs space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-cyan-900 text-sm">
                              <span>💎</span>
                              <span>Diamante</span>
                            </div>
                            <p className="text-slate-600">
                              <strong>Artigo Investigativo de Alto Impacto</strong> (2.500 a 5.000 palavras) estruturado no repositório internacional Zenodo com DOI permanente e publicação no Repositório de Artigos da ESDHUBEM.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Informações de Registro e Publicação */}
                  <div className="pt-2 border-t border-indigo-200/80 flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-indigo-100 text-indigo-950 font-semibold border border-indigo-200 flex items-center gap-1.5">
                      <span>🛡️</span>
                      <span>Registro de Autoria: OSF ou Zenodo (conforme o formato)</span>
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-indigo-100 text-indigo-950 font-semibold border border-indigo-200 flex items-center gap-1.5">
                      <span>📍</span>
                      <span>Publicação Oficial: Enciclowiki (Prata), Blog SEO (Ouro) e Repositório DOI (Diamante)</span>
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-200 flex items-center gap-1.5">
                      <span>🏅</span>
                      <span>Validação: Certificados Prata, Ouro e Diamante</span>
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                  * O Quadrilátero garante a integridade investigativa, a rastreabilidade autoral internacional e a consolidação prática do aprendizado do estudante.
                </p>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 3: 3 - Certificação Bronze */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-3"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('3')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['3']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-amber-800">
                  🥉 5
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                    Vídeo 2 • Níveis, Plataforma OSF & Assimilação Ativa
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-amber-950 truncate sm:whitespace-normal">
                    5 - Certificação Bronze - Publicação de Verbete
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  {openSections['3'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 transition-transform duration-300 ${
                    openSections['3'] ? 'rotate-180 bg-amber-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['3'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
                {/* 🥉 BRONZE */}
                <div className="bg-gradient-to-r from-amber-50/50 via-white to-white border-2 border-amber-300/80 rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🥉</span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-amber-950">
                        BRONZE — APRENDER E CONCEITUAR (ASSIMILAÇÃO ATIVA)
                      </h4>
                      <span className="text-xs font-semibold text-amber-800">Tríade da Organização, Assimilação e Comunicação &amp; Verbete Enciclopédico na Wiki</span>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    O Bronze é destinado ao estudante que deseja consolidar sua aprendizagem através da criação da <strong>Tríade da Organização, Assimilação e Comunicação</strong> da ESDHUBEM, onde o estudante elabora um <strong>mapa mental</strong>, para demonstrar como absorveu os conceitos do curso, um <strong>Verbete escrito à mão</strong> de forma clara, informativa, objetiva, histórica, baseado nos assuntos do curso assistido, com cerca de 500 a 800 palavras e com aplicação prática que será publicado no setor <strong>Enciclopédico Wiki oficial</strong> da escola e um <strong>áudio</strong> explicando o que aprendeu a respeito do assunto estudado. O verbete será publicado na wiki enciclopédia e lançado o <strong>certificado Bronze</strong>.
                  </p>

                  {/* Tutorial Vídeo - Parte 2: Os Quatro Percursos & Registro OSF */}
                  <div className="space-y-4 py-4 border-y border-amber-200/80">
                    <LazyVideoPlayer
                      id="odysee-iframe-parte-2"
                      src="https://odysee.com/$/embed/@esdhubem:a/diretriz-de-publicacao-2:f?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                      title="Tutorial ESDHUBEM - Diretrizes de Publicação (Parte 2: Os Quatro Percursos e OSF)"
                      thumbnail="./images/thumb_video_diretrizes_2.webp"
                      fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/05ebc84738c2eb46184d9cbad0fec902.webp"
                      badge="Parte 2 • Níveis e OSF"
                    />
                    <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Vídeo 2: Apresentação dos 4 percursos formativos, níveis de mérito e registro de autoria no OSF</span>
                    </p>

                    {/* Box informativo OSF com link */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 text-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-[#00227B] flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-blue-600" />
                            Publicação na Plataforma Oficial OSF (Open Science Framework)
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          OSF é uma plataforma gratuita e aberta para apoiar sua pesquisa e possibilitar a colaboração e fazer gerenciamento de pesquisas.
                        </p>
                      </div>
                      <a
                        href="https://osf.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00227B] hover:bg-[#001b63] text-white text-xs font-bold transition-all shadow-sm shrink-0"
                      >
                        <span>Acessar OSF (osf.io)</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-amber-50/60 border border-amber-200 rounded-xl p-4 sm:p-5 space-y-3">
                    <span className="font-extrabold text-xs uppercase tracking-wider text-amber-950 block">
                      Requisitos da Tríade da Organização, Assimilação e Comunicação:
                    </span>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-base leading-none">🧠</span>
                        <div>
                          <strong>Mapa Mental do Conteúdo:</strong> Diagrama visual desenhado (Feito à Mão) estruturando os conceitos centrais e conexões pedagógicas da aula.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-base leading-none">✍️</span>
                        <div>
                          <strong>Verbete Enciclopédico (500 a 800 palavras):</strong> Texto conceitual e informativo em norma-padrão (Escrito à Mão), explicando o significado, o contexto histórico e a aplicação do tema.
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-base leading-none">🎙️</span>
                        <div>
                          <strong>Áudio Explicativo de 1 Minuto:</strong> Gravação de voz de 60 segundos sintetizando o conceito oralmente com clareza (Técnica Feynman de retenção).
                        </div>
                      </li>
                    </ul>

                    {/* Nota de evolução */}
                    <div className="p-3 rounded-lg bg-amber-100/70 border border-amber-200 flex items-start gap-2 text-xs sm:text-sm text-amber-950">
                      <span className="text-base leading-none shrink-0 mt-0.5">💡</span>
                      <p className="leading-relaxed">
                        <strong>Nota de evolução:</strong> O Áudio Explicativo possui duração de 1 minuto para a Tríade (nível Bronze) e expande-se para 3 minutos no Quadrilátero (níveis Prata, Ouro e Diamante), acompanhando o aprofundamento do trabalho autoral.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-amber-200/60 flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-200 flex items-center gap-1.5">
                        <span>🛡️</span>
                        <span>Registro de Autoria: OSF (Open Science Framework)</span>
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-200 flex items-center gap-1.5">
                        <span>📍</span>
                        <span>Publicação: Wiki Oficial ESDHUBEM (Enciclopédia Temática)</span>
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                    * O trabalho chega às mãos da coordenação com comprovante de registro no OSF, resguardando integralmente a anterioridade e a autoria do aluno.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 4: 4 - GUIA COMPLETO DO VERBETE — NÍVEL BRONZE */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-4"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('4')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['4']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-amber-800">
                  📖 6
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Documento Integrado • Tríade da Organização, Assimilação e Comunicação
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-amber-950 truncate sm:whitespace-normal">
                    6 - Guia Completo para publicar o Verbete - Nível Bronze
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['4'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 transition-transform duration-300 ${
                    openSections['4'] ? 'rotate-180 bg-amber-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['4'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Guia Completo para publicar o Verbete - Nível Bronze
                  </h2>

                  <div className="bg-white border-2 border-blue-200/80 rounded-2xl p-5 sm:p-6 shadow-sm text-slate-800 text-sm sm:text-base leading-relaxed">
                    <p>
                      Consulte o documento oficial abaixo com o modelo passo a passo, critérios de formatação (500 a 800 palavras), estrutura da Tríade da Organização, Assimilação e Comunicação (verbete, mapa mental e áudio de 1 minuto) e orientações para publicação na Wiki Oficial da ESDHUBEM.
                    </p>
                  </div>
                </div>

                {/* Documento Integrado: Guia Completo do Verbete */}
                <div className="bg-white border-2 border-amber-200/90 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md flex flex-col">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-bold text-xs uppercase tracking-wide text-slate-900 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-amber-600" />
                      Guia Completo para publicar o Verbete - Nível Bronze
                    </span>
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vTnwqqsY7e8DzHbrMwYl5fIn8r8pdJgN30S4SPsqKgsYGS5H7OnEkitqtJBF9O1DILc2re0s279Azkn/pub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-semibold hover:underline"
                    >
                      <span>Abrir Documento</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="w-full h-[500px] sm:h-[600px] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner">
                    <iframe
                      src="https://docs.google.com/document/d/e/2PACX-1vTnwqqsY7e8DzHbrMwYl5fIn8r8pdJgN30S4SPsqKgsYGS5H7OnEkitqtJBF9O1DILc2re0s279Azkn/pub?embedded=true"
                      className="w-full h-full border-0"
                      title="Guia Completo para publicar o Verbete - Nível Bronze — ESDHUBEM"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 5: 5 - Certificação Prata */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-5"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('5')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['5']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-slate-800">
                  🥈 7
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 block">
                    Vídeo 3 • Artigo de Blog & SEO (1.200 a 2.500 palavras)
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    7 - Certificação Prata - Publicação de Artigo de Blog
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  {openSections['5'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 transition-transform duration-300 ${
                    openSections['5'] ? 'rotate-180 bg-slate-800 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['5'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
                {/* 🥈 PRATA */}
                <div className="bg-gradient-to-r from-slate-50 via-white to-white border-2 border-slate-300/80 rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🥈</span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                        PRATA — EXPRESSAR E COMUNICAR
                      </h4>
                      <span className="text-xs font-semibold text-slate-600">Verbete + Artigo para o Blog da ESDHUBEM (1.200 a 2.500 palavras)</span>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    O Prata é destinado ao estudante que deseja demonstrar sua aprendizagem entregando a <strong>Tríade da Organização, Assimilação e Comunicação</strong> do curso e ainda publicar um texto maior, um artigo autoral aprofundado para publicação no <strong>Blog Oficial da ESDHUBEM</strong>, com <strong>1.200 a 2.500 palavras</strong> para gerar autoridade e indexação no Google (SEO), assim completando o <strong>Quadrilátero da Organização, Assimilação, Comunicação e Produção</strong>.
                  </p>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    Após a escolha dessa modalidade, o estudante receberá orientações detalhadas para a elaboração do artigo e seu registro de autoria no <strong>OSF (Open Science Framework)</strong>.
                  </p>

                  {/* Tutorial Vídeo - Parte 3: Artigo de Blog & SEO */}
                  <div className="space-y-4 py-4 border-y border-slate-200">
                    <LazyVideoPlayer
                      id="odysee-iframe-parte-3"
                      src="https://odysee.com/$/embed/@esdhubem:a/diretrizes-publicacao-3:4?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                      title="Tutorial ESDHUBEM - Diretrizes de Publicação (Parte 3: Artigo de Blog & SEO)"
                      thumbnail="./images/thumb_video_diretrizes_3.webp"
                      fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/c9d9e1cc9fd5cffa400edb14d2f1ed0b.webp"
                      badge="Parte 3 • Artigo de Blog & SEO"
                    />
                    <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Vídeo 3: Orientações práticas para elaboração do artigo de blog, técnicas de SEO e estruturação</span>
                    </p>

                    {/* Box informativo OSF com link */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 text-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-[#00227B] flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-blue-600" />
                            Publicação na Plataforma Oficial OSF (Open Science Framework)
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          OSF é uma plataforma gratuita e aberta para apoiar sua pesquisa e possibilitar a colaboração e fazer gerenciamento de pesquisas.
                        </p>
                      </div>
                      <a
                        href="https://osf.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00227B] hover:bg-[#001b63] text-white text-xs font-bold transition-all shadow-sm shrink-0"
                      >
                        <span>Acessar OSF (osf.io)</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border-2 border-blue-300 rounded-2xl p-5 space-y-3 shadow-xs">
                    <span className="font-extrabold text-sm sm:text-base text-[#00227B] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span>Como estruturar o Artigo de Blog?</span>
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-800">
                      <div>• Estrutura do artigo (1.200 a 2.500 palavras)</div>
                      <div>• Definição do tema e do público</div>
                      <div>• Título, subtítulos H2/H3 e escaneabilidade</div>
                      <div>• Organização das informações e casos práticos</div>
                      <div>• Linguagem clara e acessível</div>
                      <div>• Técnicas de redação para a internet</div>
                      <div>• Princípios de SEO para busca orgânica</div>
                      <div>• Registro de autoria prévio no OSF</div>
                      <div>• Direitos autorais e Lei 9.610/98</div>
                      <div>• Utilização responsável de fontes e bibliografia</div>
                      <div>• Revisão e preparação para publicação</div>
                    </div>

                    <div className="pt-2.5 border-t border-blue-200 flex flex-wrap gap-2 text-xs">
                      <span className="px-3 py-1.5 rounded-lg bg-white text-[#00227B] font-bold border border-blue-200 shadow-2xs flex items-center gap-1.5">
                        <span>🛡️</span>
                        <span>Registro de Autoria: OSF (Open Science Framework)</span>
                      </span>
                      <span className="px-3 py-1.5 rounded-lg bg-white text-[#00227B] font-bold border border-blue-200 shadow-2xs flex items-center gap-1.5">
                        <span>📍</span>
                        <span>Publicação: Blog Oficial ESDHUBEM</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <p>
                      A aplicação de técnicas de SEO tem como objetivo favorecer a organização e a encontrabilidade do conteúdo nos mecanismos de busca, potencializando seu portfólio profissional.
                    </p>
                    <p className="font-semibold text-slate-900">
                      Após a aprovação, o artigo será publicado no Blog Oficial da ESDHUBEM, com biografia do autor, link público de portfólio e chancela do Selo Prata.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 6: 6 - Guia Completo para publicar o artigo de Blog - Nível Prata */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-6"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('6')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['6']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-slate-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-slate-800">
                  📖 8
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Documento Integrado • Artigo de Blog &amp; SEO (1.200 a 2.500 palavras)
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    8 - Guia Completo para publicar o artigo de Blog - Nível Prata
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['6'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 transition-transform duration-300 ${
                    openSections['6'] ? 'rotate-180 bg-slate-800 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['6'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Guia Completo para publicar o artigo de Blog - Nível Prata
                  </h2>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Consulte o documento oficial abaixo com o modelo completo, regras de SEO para ranqueamento nos buscadores, estrutura recomendada (1.200 a 2.500 palavras) e orientações de registro e submissão para o Blog Oficial da ESDHUBEM.
                  </p>
                </div>

                {/* Documento Integrado: Guia Completo - Artigo de Blog & SEO */}
                <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md flex flex-col">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-bold text-xs uppercase tracking-wide text-slate-900 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-blue-600" />
                      Guia Completo para publicar o artigo de Blog - Nível Prata
                    </span>
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vRU1IGDHMqKJGO9dXcA7q4BgeWy_UMpY7WG8ocLglse36452RquRkvmo54mgeVukjhpqDWYzPlac8af/pub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-semibold hover:underline"
                    >
                      <span>Abrir Documento</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="w-full h-[500px] sm:h-[600px] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner">
                    <iframe
                      src="https://docs.google.com/document/d/e/2PACX-1vRU1IGDHMqKJGO9dXcA7q4BgeWy_UMpY7WG8ocLglse36452RquRkvmo54mgeVukjhpqDWYzPlac8af/pub?embedded=true"
                      className="w-full h-full border-0"
                      title="Guia Completo para publicar o artigo de Blog - Nível Prata ESDHUBEM"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 7: 7 - Certificação Ouro */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-7"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('7')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['7']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-amber-600">
                  🥇 9
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block">
                    Vídeo 4 • Manuscrito Científico, Zenodo & DOI
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-amber-950 truncate sm:whitespace-normal">
                    9 - Certificação Ouro - Publicação de artigo de investigação
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  {openSections['7'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-amber-200/80 flex items-center justify-center text-amber-950 transition-transform duration-300 ${
                    openSections['7'] ? 'rotate-180 bg-amber-500 text-slate-950' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['7'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
                {/* 🥇 OURO */}
                <div className="bg-gradient-to-r from-amber-50/60 via-white to-white border-2 border-[#FFC72C] rounded-2xl p-6 sm:p-7 space-y-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🥇</span>
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-amber-950">
                        OURO — INVESTIGAR E APROFUNDAR
                      </h4>
                      <span className="text-xs font-semibold text-amber-800">Manuscrito de Conclusão de Curso + Zenodo + DOI (2.500 a 5.000 palavras)</span>
                    </div>
                  </div>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    O nível Ouro é destinado ao estudante que entrega a <strong>Tríade da Organização, Assimilação e Comunicação</strong> do curso e o <strong>artigo de investigação</strong> com registro <strong>DOI</strong>, que será publicado na página de <strong>Repositório de Artigos da ESDHUBEM</strong>.
                  </p>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    O trabalho deverá apresentar uma estrutura compatível com uma produção de investigação e receberá orientações específicas para sua elaboração.
                  </p>

                  <p className="text-slate-700 text-sm leading-relaxed">
                    Para o Manuscrito de Investigação do Nível Ouro, sugerimos entre <strong>2.500 e 5.000 palavras</strong> de conteúdo efetivo — o suficiente para desenvolver o tema com profundidade sem exigir volume excessivo. O que prevalece é a coerência, a clareza e o desenvolvimento das ideias, não a quantidade de páginas.
                  </p>

                  {/* Tutorial Vídeo - Parte 4: Manuscrito Científico, Zenodo & DOI */}
                  <div className="space-y-4 py-4 border-y border-amber-200/80">
                    <LazyVideoPlayer
                      id="odysee-iframe-parte-4"
                      src="https://odysee.com/$/embed/@esdhubem:a/diretriz-publicacao-4:1?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                      title="Tutorial ESDHUBEM - Diretrizes de Publicação (Parte 4: Manuscrito Científico, Zenodo & DOI)"
                      thumbnail="./images/thumb_video_diretrizes_4.webp"
                      fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/533c4cb48d38f26d2b7e62a08cf35318.webp"
                      badge="Parte 4 • Manuscrito & Zenodo/DOI"
                    />
                    <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>Vídeo 4: Orientações práticas para elaboração do manuscrito científico, depósito no Zenodo e atribuição de DOI</span>
                    </p>

                    {/* Box informativo Zenodo com link */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 text-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-[#00227B] flex items-center gap-1.5">
                            <Globe className="w-4 h-4 text-blue-600" />
                            Publicação na Plataforma Oficial Zenodo (Depósito &amp; DOI)
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          O Zenodo é uma plataforma aberta e gratuita desenvolvida pelo CERN para apoiar pesquisas, possibilitar o depósito de artigos e outros documentos e atribuição de registro DOI internacional.
                        </p>
                      </div>
                      <a
                        href="https://zenodo.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00227B] hover:bg-[#001b63] text-white text-xs font-bold transition-all shadow-sm shrink-0"
                      >
                        <span>Acessar Zenodo (zenodo.org)</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="bg-white border border-amber-200 rounded-xl p-4 space-y-2">
                    <span className="font-bold text-xs uppercase tracking-wider text-amber-950 block">
                      Após a escolha da modalidade e o pagamento da taxa correspondente, o estudante receberá um vídeo com orientações sobre a construção do manuscrito, incluindo, conforme a natureza do trabalho:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                      <div>• Definição do tema</div>
                      <div>• Questão ou problema de estudo</div>
                      <div>• Objetivos</div>
                      <div>• Introdução</div>
                      <div>• Fundamentação</div>
                      <div>• Metodologia, quando aplicável</div>
                      <div>• Desenvolvimento</div>
                      <div>• Análise e discussão</div>
                      <div>• Conclusão</div>
                      <div>• Citações e referências</div>
                      <div>• Organização das fontes</div>
                      <div>• Apresentação final do trabalho</div>
                    </div>

                    <div className="pt-2 border-t border-amber-200 flex flex-wrap gap-2 text-xs">
                      <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-medium">🛡️ Registro de Autoria: OSF (Open Science Framework)</span>
                      <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-medium">📍 Publicação: Repositório Oficial ESDHUBEM</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed bg-amber-50/70 p-4 rounded-xl border border-amber-200">
                    <p>
                      Antes do aluno enviar seu portfolio para a escola fazer avaliação, ele deverá realizar o depósito no site do <strong>Zenodo</strong>, conforme as orientações fornecidas.
                    </p>
                    <p>
                      Quando o depósito for concluído e o Zenodo atribuir o identificador correspondente, o trabalho terá um <strong>DOI — Digital Object Identifier</strong>, que permite sua identificação e localização persistente na internet e deve ser enviado para o e-mail da escola (<a href="mailto:esdhubem@proton.me" className="font-bold text-[#00227B] hover:underline">esdhubem@proton.me</a>) para aprovação do manuscrito, juntamente com o <strong>mapa mental</strong>, <strong>áudio de 3 minutos</strong> explicando o que aprendeu, juntamente com a <strong>Declaração de Autoria</strong> e <strong>Declaração de Autorização de Publicação</strong>.
                    </p>
                    <p className="text-slate-600 italic">
                      O DOI identifica a publicação. Ele não significa, por si só, revisão por pares, certificação científica ou validação acadêmica do conteúdo.
                    </p>
                    <p className="font-bold text-amber-950 pt-1">
                      O Certificado Ouro será emitido após o cumprimento dos requisitos da modalidade e o pagamento da taxa correspondente.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 8: 8 - Guia Completo do Artigo de Investigação - Nível Ouro */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-8"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('8')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['8']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-amber-600">
                  🔬 10
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Documento Integrado • Artigo de Investigação (Zenodo &amp; DOI)
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-amber-950 truncate sm:whitespace-normal">
                    10 - Guia Completo do Artigo de Investigação - Nível Ouro
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['8'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-amber-200/80 flex items-center justify-center text-amber-950 transition-transform duration-300 ${
                    openSections['8'] ? 'rotate-180 bg-amber-500 text-slate-950' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['8'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="space-y-3">
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Guia Completo do Artigo de Investigação - Nível Ouro
                  </h2>

                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Consulte o documento oficial abaixo com o modelo completo e formatado, estrutura metodológica de seções, normas da ABNT e orientações passo a passo para depósito no repositório Zenodo e obtenção de registro DOI permanente da ESDHUBEM.
                  </p>
                </div>

                {/* Documento Integrado: Modelo de Manuscrito & Artigo de Investigação */}
                <div className="bg-white border-2 border-amber-200/90 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md flex flex-col">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-bold text-xs uppercase tracking-wide text-slate-900 flex items-center gap-1.5">
                      <FileCheck className="w-4 h-4 text-amber-600" />
                      Guia Completo do Artigo de Investigação - Nível Ouro
                    </span>
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vRqu0ZL5-NLsPebaChDs4SM5CcbvCWzzZa6cKexbeBGZqWvlpXS560IF5kuIS7jvf1y5HF2fXZtto98/pub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-blue-700 hover:text-blue-900 font-semibold hover:underline"
                    >
                      <span>Abrir Documento</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <div className="w-full h-[500px] sm:h-[600px] rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner">
                    <iframe
                      src="https://docs.google.com/document/d/e/2PACX-1vRqu0ZL5-NLsPebaChDs4SM5CcbvCWzzZa6cKexbeBGZqWvlpXS560IF5kuIS7jvf1y5HF2fXZtto98/pub?embedded=true"
                      className="w-full h-full border-0"
                      title="Guia Completo do Artigo de Investigação - Nível Ouro ESDHUBEM"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 9: 9 - Orientações para Produção do Artigo de investigação */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-9"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('9')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['9']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-purple-800 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-purple-900">
                  📝 11
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-700 block">
                    Vídeo 5 • Metodologia, Eixos Temáticos & Fontes Bibliográficas
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-purple-950 truncate sm:whitespace-normal">
                    11 - Orientações para Produção do Artigo de investigação
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  {openSections['9'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800 transition-transform duration-300 ${
                    openSections['9'] ? 'rotate-180 bg-purple-800 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['9'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
                {/* Tutorial Vídeo - Parte 5: Orientações para Produção do Artigo de investigação */}
                <div className="space-y-4 py-4 border-y border-amber-200/80">
                  <LazyVideoPlayer
                    id="odysee-iframe-parte-5"
                    src="https://odysee.com/$/embed/@esdhubem:a/diretrizes-publicacao-5:b?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                    title="Tutorial ESDHUBEM - Diretrizes de Publicação (Parte 5: Orientações para Produção do Artigo de investigação)"
                    thumbnail="./images/thumb_video_diretrizes_5.webp"
                    fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/b278d110bda87d4316ff0fb0fc59e6d2.webp"
                    badge="Parte 5 • Produção do Artigo de investigação"
                  />
                  <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>Vídeo 5: Diretrizes práticas e passo a passo para a estruturação do artigo de investigação</span>
                  </p>
                </div>

                {/* Orientações para Produção de Artigo de Investigação / Manuscrito */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📝</span>
                    <h5 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                      Orientações para Produção do Artigo de investigação
                    </h5>
                  </div>
                  
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Após a confirmação da participação e o pagamento da taxa correspondente, o autor receberá material de orientação detalhado e vídeo explicativo com diretrizes para estruturação e preparação do artigo de investigação.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="py-2.5 px-4 font-bold uppercase tracking-wider w-1/3">Etapa</th>
                          <th className="py-2.5 px-4 font-bold uppercase tracking-wider">Conteúdo Abordado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Planejamento & Tema</td>
                          <td className="py-3 px-4">Definição do tema vinculado a um dos 4 Eixos Temáticos de Pesquisa, problema de estudo e objetivos do trabalho</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Fundamentação Teórica</td>
                          <td className="py-3 px-4">Revisão bibliográfica, contextualização teórica, estado da arte e citação de fontes confiáveis (normas ABNT)</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Metodologia Científica</td>
                          <td className="py-3 px-4">Enquadramento metodológico (revisão integrativa/narrativa, estudo de caso ou ensaio teórico reflexivo) e procedimentos adotados</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Desenvolvimento & Discussão</td>
                          <td className="py-3 px-4">Estruturação dos tópicos de desenvolvimento, análise crítica e argumentativa, articulação teórica e conclusões</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Elementos Acadêmicos</td>
                          <td className="py-3 px-4">Título, resumo, abstract, palavras-chave, referências bibliográficas completas e adequação aos padrões científicos</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Depósito & Atribuição DOI</td>
                          <td className="py-3 px-4">Padronização do arquivo final em PDF e depósito no repositório Zenodo para geração e atribuição do DOI permanente</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* 🎯 Nossos Eixos Temáticos de Pesquisa (Alinhados à CAPES) */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-amber-200/90 shadow-sm space-y-5">
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                    <div className="w-11 h-11 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 shrink-0">
                      <Target className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
                        Alinhamento CAPES dos Manuscritos e Artigos
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span>🎯 Nossos Eixos Temáticos de Pesquisa</span>
                      </h4>
                    </div>
                  </div>

                  {/* Esclarecimento importante */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1.5">
                    <div className="font-bold text-slate-900 flex items-center gap-2">
                      <Info className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Esclarecimento importante:</span>
                    </div>
                    <p>
                      A ESDHUBEM adota o alinhamento temático com o CAPES apenas como <strong>referência organizacional e metodológica</strong> que serve para nortear, estruturar e dar coerência interna aos nossos cursos e produções. Esta escolha não confere à escola status de instituição acadêmica ou científica <em>stricto sensu</em>. Esse posicionamento trata-se de uma forma de ordenar nosso sistema de ensino, definir linhas de estudo e seguir critérios reconhecidos, sem, contudo, assumir natureza ou competência que não nos cabe.
                    </p>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Alinhados aos critérios de avaliação da <strong className="text-slate-900">CAPES (Coordenação de Aperfeiçoamento de Pessoal de Nível Superior)</strong>, os artigos e manuscritos científicos da ESDHUBEM conectam-se diretamente a quatro grandes áreas do conhecimento:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
                    {/* Eixo 1: Saúde Coletiva */}
                    <div className="bg-gradient-to-b from-rose-50/50 to-white border border-rose-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-9 h-9 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-600 font-bold">
                          <HeartPulse className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-rose-600 block">Eixo 01</span>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base">Saúde Coletiva</h5>
                        </div>
                        <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed">
                          <p>
                            <strong className="text-slate-800">Foco:</strong> Práticas Integrativas, Bem-Estar e Saúde Mental.
                          </p>
                          <p>
                            <strong className="text-slate-800">Aplicação:</strong> Estudos sobre coaching, espiritualidade aplicada, meditação e Práticas Integrativas e Complementares (PICS).
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Eixo 2: Interdisciplinar */}
                    <div className="bg-gradient-to-b from-blue-50/50 to-white border border-blue-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-9 h-9 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold">
                          <Compass className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Eixo 02</span>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base">Interdisciplinar</h5>
                        </div>
                        <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed">
                          <p>
                            <strong className="text-slate-800">Foco:</strong> Desenvolvimento Pessoal, Humano, Profissional e Consciencial.
                          </p>
                          <p>
                            <strong className="text-slate-800">Aplicação:</strong> Competências socioemocionais cruzando áreas como psicologia, administração e filosofia.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Eixo 3: Ensino & Educação */}
                    <div className="bg-gradient-to-b from-emerald-50/50 to-white border border-emerald-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 font-bold">
                          <GraduationCap className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">Eixo 03</span>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base">Ensino & Educação</h5>
                        </div>
                        <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed">
                          <p>
                            <strong className="text-slate-800">Foco:</strong> Pedagogia Integrativa e Ética.
                          </p>
                          <p>
                            <strong className="text-slate-800">Aplicação:</strong> Metodologias inovadoras de ensino e educação voltada para adultos.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Eixo 4: Ciências da Religião, História & Cultura */}
                    <div className="bg-gradient-to-b from-amber-50/50 to-white border border-amber-200/80 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                      <div className="space-y-2.5">
                        <div className="w-9 h-9 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600 font-bold">
                          <Landmark className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">Eixo 04</span>
                          <h5 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">Ciências da Religião, História & Cultura</h5>
                        </div>
                        <div className="text-xs space-y-1.5 text-slate-600 leading-relaxed">
                          <p>
                            <strong className="text-slate-800">Foco:</strong> Esoterismo Ocidental, Novas Formas de Espiritualidade e Fenômenos Contemporâneos.
                          </p>
                          <p>
                            <strong className="text-slate-800">Aplicação:</strong> Estudos históricos, antropológicos e sociológicos sobre correntes tradicionais (Alquimia, Cabala, Teosofia, Ocultismo, Maçonaria) e manifestações modernas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Alinhamento Temático */}
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-white to-indigo-50/60 border border-blue-200 text-slate-700 space-y-2 shadow-2xs">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
                      <h5 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                        Alinhamento Temático
                      </h5>
                    </div>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                      Os eixos temáticos definidos pela ESDHUBEM foram estruturados com base nas áreas de conhecimento da <strong>CAPES</strong>, visando manter uniformidade, coerência e um norteamento conceitual comum aos trabalhos. Este alinhamento temático não significa certificação ou validação oficial pela CAPES nem confere status de instituição de ensino superior à ESDHUBEM — <strong>trata-se de referência organizacional</strong>.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO: Sugestão de plataformas onde o aluno pode fazer pesquisa de artigos */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-plataformas-pesquisa"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('plataformas-pesquisa')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['plataformas-pesquisa']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-blue-800">
                  📚 12
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Fontes &amp; Bases Acadêmicas Recomendadas
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-blue-950 truncate sm:whitespace-normal">
                    12 - Sugestão de plataformas onde o aluno pode fazer pesquisa de artigos para compor suas referências bibliográficas
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['plataformas-pesquisa'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 transition-transform duration-300 ${
                    openSections['plataformas-pesquisa'] ? 'rotate-180 bg-blue-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['plataformas-pesquisa'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-white">
                        <th className="py-3 px-4 font-bold uppercase tracking-wider w-1/2 sm:w-2/5">Plataforma</th>
                        <th className="py-3 px-4 font-bold uppercase tracking-wider">Por que usar</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🌐</span>
                              <span className="text-slate-900 font-extrabold">Scielo + Google Acadêmico</span>
                            </div>
                            <div className="flex items-center flex-wrap gap-2 pt-0.5">
                              <a
                                href="https://scielo.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#00227B] text-xs font-bold border border-blue-200 transition-colors shadow-2xs"
                                title="Acessar SciELO (Scientific Electronic Library Online)"
                              >
                                <span>Acessar Scielo</span>
                                <ExternalLink className="w-3 h-3 text-blue-600" />
                              </a>
                              <a
                                href="https://scholar.google.com.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-900 text-xs font-bold border border-sky-200 transition-colors shadow-2xs"
                                title="Acessar Google Acadêmico (Google Scholar)"
                              >
                                <span>Google Acadêmico</span>
                                <ExternalLink className="w-3 h-3 text-sky-600" />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 align-middle">
                          Já conhecidos, mantidos como você pediu
                        </td>
                      </tr>

                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🏛️</span>
                              <span className="text-slate-900 font-extrabold">Portal Periódicos CAPES</span>
                            </div>
                            <div className="pt-0.5">
                              <a
                                href="https://www.periodicos.capes.gov.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#00227B] text-xs font-bold border border-blue-200 transition-colors shadow-2xs"
                                title="Acessar Portal de Periódicos CAPES"
                              >
                                <span>Acessar Portal CAPES</span>
                                <ExternalLink className="w-3 h-3 text-blue-600" />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 align-middle">
                          Acesso a várias bases de uma vez
                        </td>
                      </tr>

                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🎓</span>
                              <span className="text-slate-900 font-extrabold">BDTD</span>
                            </div>
                            <div className="pt-0.5">
                              <a
                                href="https://bdtd.ibict.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#00227B] text-xs font-bold border border-blue-200 transition-colors shadow-2xs"
                                title="Acessar Biblioteca Digital Brasileira de Teses e Dissertações (BDTD)"
                              >
                                <span>Acessar BDTD</span>
                                <ExternalLink className="w-3 h-3 text-blue-600" />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 align-middle">
                          Teses e dissertações brasileiras
                        </td>
                      </tr>

                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">⛵</span>
                              <span className="text-slate-900 font-extrabold">OasisBr</span>
                            </div>
                            <div className="pt-0.5">
                              <a
                                href="https://oasisbr.ibict.br/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#00227B] text-xs font-bold border border-blue-200 transition-colors shadow-2xs"
                                title="Acessar OasisBr (Portal de Publicações Científicas em Acesso Aberto)"
                              >
                                <span>Acessar OasisBr</span>
                                <ExternalLink className="w-3 h-3 text-blue-600" />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 align-middle">
                          Produção científica nacional em acesso aberto
                        </td>
                      </tr>

                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">🌎</span>
                              <span className="text-slate-900 font-extrabold">Redalyc</span>
                            </div>
                            <div className="pt-0.5">
                              <a
                                href="https://www.redalyc.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#00227B] text-xs font-bold border border-blue-200 transition-colors shadow-2xs"
                                title="Acessar Redalyc (Red de Revistas Científicas de América Latina y el Caribe)"
                              >
                                <span>Acessar Redalyc</span>
                                <ExternalLink className="w-3 h-3 text-blue-600" />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 align-middle">
                          Artigos em português/espanhol — América Latina
                        </td>
                      </tr>

                      <tr className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">📖</span>
                              <span className="text-slate-900 font-extrabold">DOAJ</span>
                            </div>
                            <div className="pt-0.5">
                              <a
                                href="https://doaj.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 text-[#00227B] text-xs font-bold border border-blue-200 transition-colors shadow-2xs"
                                title="Acessar DOAJ (Directory of Open Access Journals)"
                              >
                                <span>Acessar DOAJ</span>
                                <ExternalLink className="w-3 h-3 text-blue-600" />
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 text-slate-600 align-middle">
                          Revistas internacionais de acesso livre
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-xs text-amber-900 font-semibold bg-amber-50 p-2.5 rounded-lg border border-amber-200 flex items-center gap-1.5">
                  <span>✅</span>
                  <span>Todas são gratuitas e confiáveis.</span>
                </p>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 10: 10 - Sobre o uso do nosso certificado como Horas Complementares na faculdade */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-10"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('10')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['10']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  🏛️ 13
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Referência Institucional &amp; Critérios de Validação
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    13 - Sobre o uso do nosso certificado como Horas Complementares na faculdade
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['10'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['10'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['10'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-7 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-7 space-y-6 shadow-sm">
                  
                  {/* Título interno com o badge 6 */}
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 font-black flex items-center justify-center text-xs shadow-xs">
                      13
                    </span>
                    <h4 className="font-black text-base sm:text-lg text-slate-900">
                      Sobre o uso do nosso certificado como Horas Complementares na faculdade.
                    </h4>
                  </div>

                  {/* Card: Validação de horas complementares */}
                  <div className="bg-sky-50/50 border border-sky-200 rounded-2xl p-5 sm:p-6 space-y-3.5 shadow-xs">
                    <div className="flex items-center gap-2 text-sky-950 font-bold text-sm sm:text-base">
                      <Landmark className="w-5 h-5 text-sky-700 shrink-0" />
                      <h5>Validação de horas complementares</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      O reconhecimento de horas complementares é <strong>competência de cada instituição de ensino</strong> onde o estudante estiver matriculado. Recomendamos:
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2 pt-1">
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">•</span>
                        <span>Consultar previamente a secretaria ou coordenação do seu curso sobre os requisitos, documentos aceitos e critérios de validação</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">•</span>
                        <span>Se necessário, solicitar à ESDHUBEM carta de apresentação, declaração de participação ou detalhamento de carga horária para entrega à sua instituição</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-sky-600 font-bold">•</span>
                        <span>Cada instituição possui suas próprias regras — a ESDHUBEM fornece os documentos comprobatórios, mas a decisão de validação cabe exclusivamente à instituição de origem do estudante</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 11: 11 - Certificação Diamante: Orientação para publicação de livro */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-11"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('11')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['11']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  💎 14
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block">
                    Vídeos 6 e 7 • Livro Autoral (Mín. 50 Páginas) & Registro EDA/FBN
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    14 - Certificação Diamante: Orientação para publicação de livro
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  {openSections['11'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['11'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['11'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
{/* 💎 DIAMANTE */}
              <div className="bg-gradient-to-r from-cyan-50/50 via-white to-white border-2 border-cyan-400 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">💎</span>
                  <div>
                    <h4 className="text-lg sm:text-xl font-black text-cyan-950">
                      DIAMANTE — AUTORAR E CONSTRUIR
                    </h4>
                    <span className="text-xs font-bold text-cyan-800">Tríade da Organização, Assimilação e Comunicação + Livro Autoral (Mín. 50 páginas)</span>
                  </div>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  O nível <strong>Diamante</strong> é destinado ao participante que entrega a <strong>Tríade da Organização, Assimilação e Comunicação</strong> do curso <strong>MAIS</strong> uma obra autoral completa de maior extensão (livro com no mínimo 50 páginas de conteúdo desenvolvido).
                </p>

                {/* Tutorial Vídeo - Parte 6: Livro Autoral & Nível Diamante */}
                <div className="space-y-4 py-4 border-y border-cyan-200/80">
                  <LazyVideoPlayer
                    id="odysee-iframe-parte-6"
                    src="https://odysee.com/$/embed/@esdhubem:a/diretriz-publicacao-6:b?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                    title="Tutorial ESDHUBEM - Diretrizes de Publicação (Parte 6: Livro Autoral & Nível Diamante)"
                    thumbnail="./images/thumb_video_diretrizes_6.webp"
                    fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/7a9351c5cdd6fae99bc88d2cd611d9cd.webp"
                    badge="Parte 6 • Livro Autoral & Diamante"
                  />
                  <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Vídeo 6: Orientações completas para produção da obra autoral e requisitos do nível Diamante</span>
                  </p>

                  {/* Box informativo OSF com link */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200 text-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm text-[#00227B] flex items-center gap-1.5">
                          <Globe className="w-4 h-4 text-blue-600" />
                          Publicação na Plataforma Oficial OSF (Open Science Framework)
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        OSF é uma plataforma gratuita e aberta para apoiar sua pesquisa e possibilitar a colaboração e fazer gerenciamento de pesquisas.
                      </p>
                    </div>
                    <a
                      href="https://osf.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#00227B] hover:bg-[#001b63] text-white text-xs font-bold transition-all shadow-sm shrink-0"
                    >
                      <span>Acessar OSF (osf.io)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Formatos de Obra Aceitos */}
                <div className="bg-white border border-cyan-200 rounded-2xl p-5 space-y-3 shadow-2xs">
                  <span className="font-extrabold text-xs uppercase tracking-wider text-cyan-950 flex items-center gap-2">
                    <span>📚</span>
                    <span>Formatos de Obra Aceitos</span>
                  </span>
                  <p className="text-xs text-slate-600">
                    A obra poderá assumir diferentes formatos, conforme a finalidade e o público-alvo:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs pt-1">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Livros de desenvolvimento pessoal</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Ensaios</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Obras acadêmicas ou didáticas</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Manuais técnicos</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Guias profissionais</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Livros de referência</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Biografias e autobiografias</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Memórias</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Livros-reportagem</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Obras sobre espiritualidade e religião</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Outras formas de não ficção</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-100/90 to-sky-100/90 border-2 border-cyan-400 text-cyan-950 font-bold shadow-xs hover:border-cyan-500 hover:shadow-sm transition-all flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shrink-0" />
                      <span>Obras de ficção adulta (compatíveis com os princípios da escola)</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-cyan-200 flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-medium">🛡️ Registro de Autoria: OSF (Open Science Framework)</span>
                    <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-medium">📍 Publicação: Livraria Oficial da ESDHUBEM</span>
                  </div>
                </div>

                {/* Requisito Mínimo de Extensão */}
                <div className="bg-cyan-100/70 border-l-4 border-cyan-600 p-5 rounded-r-2xl space-y-2 text-xs sm:text-sm text-cyan-950 shadow-2xs">
                  <div className="flex items-center gap-2 font-black uppercase tracking-wider text-cyan-900">
                    <span>✅</span>
                    <span>Requisito Mínimo de Extensão</span>
                  </div>
                  <p className="font-semibold text-slate-900">
                    O texto deverá conter no <strong>mínimo 50 páginas de conteúdo</strong>.
                  </p>
                  <p className="text-slate-700">
                    ⚠️ <strong>Não são contabilizadas para este mínimo:</strong> capa, folha de rosto, sumário, referências e demais elementos editoriais pré e pós-textuais.
                  </p>
                  <p className="text-slate-600 italic text-xs pt-1">
                    A extensão, entretanto, não substitui a qualidade. A obra deverá apresentar conteúdo desenvolvido, organização coerente e proposta autoral definida.
                  </p>
                </div>

                {/* Publicação e Mural de Livros da ESDHUBEM */}
                <div className="space-y-4 pt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📖</span>
                    <h5 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                      Publicação e Mural de Livros da ESDHUBEM
                    </h5>
                  </div>
                  
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Após cumprir todos os requisitos, a obra poderá ser incluída no <strong>Mural de Livros da ESDHUBEM</strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Disponibilização Gratuita */}
                    <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 font-bold text-emerald-950">
                        <span>🆓</span>
                        <strong className="text-base">Disponibilização Gratuita</strong>
                      </div>
                      <ul className="space-y-1.5 text-slate-700">
                        <li>• Página própria no site da ESDHUBEM;</li>
                        <li>• Disponível a capa da imagem do livro e a descrição e informação do certificado diamante emitido pela escola.</li>
                      </ul>
                    </div>

                    {/* Sobre Disponibilização para Venda */}
                    <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 space-y-2.5 text-xs sm:text-sm">
                      <div className="flex items-center gap-2 font-bold text-amber-950">
                        <span>💰</span>
                        <strong className="text-base">Sobre Disponibilização para Venda</strong>
                      </div>
                      <p className="text-slate-700 leading-relaxed">
                        Caso você queira disponibilizar seu livro ou obra para venda ao público, a ESDHUBEM estabelece uma <strong>parceria como afiliado por meio da plataforma Hotmart</strong>. Por que fazemos assim?
                      </p>
                    </div>
                  </div>

                  {/* Detalhamento Venda Hotmart */}
                  <div className="bg-white border border-amber-200/80 rounded-2xl p-5 space-y-3 text-xs sm:text-sm shadow-xs">
                    <p className="font-bold text-amber-950">Por que fazemos assim?</p>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>Você continua sendo o autor e o titular dos direitos</strong> — a parceria não altera a propriedade da obra;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>A Hotmart cuida de toda a estrutura:</strong> processamento de pagamentos, entrega, segurança digital e relatórios;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>A parceria permite que a escola divulgue a venda do seu trabalho</strong> para nossa rede de contatos, ampliando sua visibilidade;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>Cada parte recebe a participação combinada sobre as vendas</strong>, você como autor, a escola como parceira de divulgação;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>Tudo com transparência:</strong> valores, porcentagens e condições são combinados previamente, de forma clara e acordada;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span><strong>Você pode optar por não vender:</strong> a publicação gratuita no site ou repositório não exige parceria de venda, isso é uma escolha sua, feita quando quiser avançar para comercialização.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

          {/* ======================================================== */}
          {/* SEÇÃO 12: 12 - Guia Completo para publicar o livro - Nível Diamante */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-12"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('12')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['12']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  📘 15
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Documento Integrado • Livro Autoral (Mín. 50 Páginas)
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    15 - Guia Completo para publicar o livro - Nível Diamante
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['12'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['12'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['12'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                {/* Tutorial Vídeo - Parte 7: Orientações para Produção do Livro Autoral */}
                <div className="space-y-4 py-2">
                  <LazyVideoPlayer
                    id="odysee-iframe-parte-7"
                    src="https://odysee.com/$/embed/@esdhubem:a/diretrizes-publicacao-7:8?r=Bow3KBdVnTzHQq8X9Q4nFDppobfbLNBJ"
                    title="Tutorial ESDHUBEM - Diretrizes de Publicação (Parte 7: Orientações para Produção do Livro Autoral)"
                    thumbnail="./images/thumb_video_diretrizes_7.webp"
                    fallbackThumbnail="https://thumbnails.odycdn.com/card/s:1280:720/quality:85/plain/https://thumbs.odycdn.com/22b85158397a9448375c556425d8aada.webp"
                    badge="Parte 7 • Produção do Livro"
                  />
                  <p className="text-xs text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Vídeo 7: Diretrizes detalhadas para a estruturação, escrita e preparação do livro autoral</span>
                  </p>
                </div>

                {/* Documento Integrado: Modelo de Livro Autoral */}
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-md flex flex-col">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="font-bold text-xs uppercase tracking-wide text-cyan-950 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-cyan-700" />
                      Guia Completo para publicar o livro - Nível Diamante
                    </span>
                    <a
                      href="https://docs.google.com/document/d/e/2PACX-1vRpvgiYjDDTq_7wQRfkhN07kb4CtiHDR262klfU88tg0rnEWMyiVYipHlo-In7tjL3HNzeDjdCX4g-w/pub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-cyan-800 hover:text-cyan-950 font-semibold hover:underline"
                    >
                      <span>Abrir Documento</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="w-full h-[500px] sm:h-[600px] rounded-xl overflow-hidden border border-cyan-200 bg-white shadow-inner">
                    <iframe
                      src="https://docs.google.com/document/d/e/2PACX-1vRpvgiYjDDTq_7wQRfkhN07kb4CtiHDR262klfU88tg0rnEWMyiVYipHlo-In7tjL3HNzeDjdCX4g-w/pub?embedded=true"
                      className="w-full h-full border-0"
                      title="Guia Completo para publicar o livro - Nível Diamante ESDHUBEM"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 13: 13 - Orientações para Produção do Livro & Registro de Direitos Autorais */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-13"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('13')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['13']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  ✍️ 16
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Etapas de Produção &amp; Registro Oficial EDA/FBN
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    16 - Orientações para Produção do Livro &amp; Registro de Direitos Autorais
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['13'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['13'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['13'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                {/* Orientações para Produção */}
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">📝</span>
                    <h5 className="font-black text-sm sm:text-base text-slate-900 uppercase tracking-wide">
                      Orientações para Produção
                    </h5>
                  </div>
                  
                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Após a confirmação da participação e do pagamento da taxa correspondente, o autor receberá material de orientação detalhado com diretrizes para estruturação e preparação da obra.
                  </p>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="py-2.5 px-4 font-bold uppercase tracking-wider w-1/3">Etapa</th>
                          <th className="py-2.5 px-4 font-bold uppercase tracking-wider">Conteúdo Abordado</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Planejamento</td>
                          <td className="py-3 px-4">Definição de público, proposta da obra, estrutura geral</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Desenvolvimento</td>
                          <td className="py-3 px-4">Organização de capítulos, introdução, desenvolvimento, conclusão</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Elementos editoriais</td>
                          <td className="py-3 px-4">Folha de rosto, dedicatória, agradecimentos, sumário, referências</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Preparação do arquivo</td>
                          <td className="py-3 px-4">Formatação, padronização, versões para impressão e digital</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3 px-4 font-bold text-slate-900">Apresentação</td>
                          <td className="py-3 px-4">Descrição da obra, texto de divulgação, palavras-chave</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1">
                    <strong className="text-slate-900 font-bold block">Para Manuais Técnicos e Guias Profissionais:</strong>
                    <p>
                      Poderão ser utilizadas como base artigos científicos, normas, documentos oficiais e fontes pertinentes. O foco será clareza, utilidade, organização e responsabilidade das informações.
                    </p>
                  </div>
                </div>

                {/* Registro de Direitos Autorais */}
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
                  <div className="flex items-center gap-2 text-cyan-950 font-black text-sm sm:text-base uppercase tracking-wide">
                    <ShieldCheck className="w-5 h-5 text-cyan-700" />
                    <span>📜 Registro de Direitos Autorais (EDA / FBN)</span>
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                    Para o nível Diamante, o autor deverá realizar o <strong>registro oficial da obra junto ao Escritório de Direitos Autorais da Fundação Biblioteca Nacional (EDA/FBN)</strong>.
                  </p>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <p className="font-bold text-slate-900">Como funciona:</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>O pedido é realizado pelo próprio autor diretamente no Portal Gov.Br;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>Acesso com conta Gov.Br; preenchimento de dados; anexo da obra e documentos;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>Pagamento das taxas conforme valores vigentes na plataforma;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>O processo passa por análise e pode ser deferido ou indeferido;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>O resultado e o certificado ficam disponíveis no próprio portal.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://www.gov.br/pt-br/servicos/registrar-ou-averbar-direitos-autorais-na-biblioteca-nacional"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-800 hover:bg-cyan-900 text-white font-bold text-xs sm:text-sm transition-all shadow-sm"
                    >
                      <span>🔗 Acessar Registro na Biblioteca Nacional — Portal Gov.Br</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2 text-slate-700">
                    <p className="font-bold text-slate-900">Papel da ESDHUBEM:</p>
                    <div className="space-y-1">
                      <div className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✅</span> Orienta sobre a preparação da obra para atender aos requisitos;</div>
                      <div className="flex items-start gap-1.5"><span className="text-emerald-600 font-bold">✅</span> Apoia na organização dos elementos necessários;</div>
                      <div className="flex items-start gap-1.5"><span className="text-rose-600 font-bold">❌</span> <strong>Não realiza o registro em nome do autor</strong> — é procedimento pessoal e intransferível;</div>
                      <div className="flex items-start gap-1.5"><span className="text-rose-600 font-bold">❌</span> Não tem ingerência sobre a análise e decisão da Fundação Biblioteca Nacional.</div>
                    </div>
                    <p className="text-slate-500 italic pt-1 border-t border-slate-200">
                      * Para informações atualizadas sobre documentos, valores, procedimentos e prazos, consulte sempre diretamente as orientações oficiais da Fundação Biblioteca Nacional.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 14: 14 - Livro Autoral — Formato e Contagem de Páginas */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-14"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('14')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['14']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  📄 17
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Extensão Mínima de 50 Páginas, Parâmetros Gráficos e EDA/FBN
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    17 - Livro Autoral — Formato e Contagem de Páginas
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['14'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['14'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['14'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-7 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-7 space-y-6 shadow-sm">
                  
                  {/* Título interno com o badge 14 */}
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 font-black flex items-center justify-center text-xs shadow-xs">
                      17
                    </span>
                    <h4 className="font-black text-base sm:text-lg text-slate-900">
                      Livro Autoral — Formato e Contagem de Páginas
                    </h4>
                  </div>

                  {/* Card Extensão Mínima */}
                  <div className="bg-sky-50/50 border border-sky-200 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs">
                    <div className="flex items-center gap-2 text-sky-950 font-bold text-sm sm:text-base">
                      <BookOpen className="w-5 h-5 text-sky-700 shrink-0" />
                      <h5>Extensão mínima</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      O trabalho deve conter <strong>no mínimo 50 páginas de conteúdo efetivo</strong>. Não são contabilizadas neste mínimo:
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 pt-1">
                      <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-medium shadow-2xs">
                        • Capa e contracapa
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-medium shadow-2xs">
                        • Folha de rosto
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-medium shadow-2xs">
                        • Sumário
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-medium shadow-2xs">
                        • Dedicatória, agradecimentos, epígrafe
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-medium shadow-2xs">
                        • Lista de tabelas, figuras ou abreviações
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-medium shadow-2xs">
                        • Referências bibliográficas
                      </div>
                      <div className="bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-700 font-medium shadow-2xs sm:col-span-2 md:col-span-1">
                        • Apêndices e anexos
                      </div>
                    </div>
                  </div>

                  {/* Tabela de Orientações de formatação sugeridas */}
                  <div className="space-y-3.5 pt-2">
                    <h5 className="font-bold text-sm sm:text-base text-slate-900">
                      Orientações de formatação sugeridas
                    </h5>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider">
                          <tr>
                            <th className="py-3 px-4 w-1/3">Aspecto</th>
                            <th className="py-3 px-4">Recomendação</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">Formato de página</td>
                            <td className="py-3 px-4">A4 (210 × 297 mm)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">Margens</td>
                            <td className="py-3 px-4">3 cm (superior e esquerda) / 2 cm (inferior e direita)</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">Fonte</td>
                            <td className="py-3 px-4">Times New Roman ou Arial, tamanho 12</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">Espaçamento entre linhas</td>
                            <td className="py-3 px-4">1,5</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">Parágrafo</td>
                            <td className="py-3 px-4">Recuo de 1,25 cm na primeira linha</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">Numeração de páginas</td>
                            <td className="py-3 px-4">Canto superior direito, a partir da primeira página de conteúdo</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">Títulos de capítulo</td>
                            <td className="py-3 px-4">Iniciando em página nova, em destaque</td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">Arquivo final</td>
                            <td className="py-3 px-4 font-semibold text-cyan-900">PDF, pronto para publicação e eventual impressão</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Card inferior */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2.5 text-xs sm:text-sm text-slate-700 shadow-xs">
                    <p className="leading-relaxed">
                      <strong>A qualidade do conteúdo prevalece sobre a quantidade de páginas.</strong> O texto deve apresentar coerência, desenvolvimento completo das ideias e proposta autoral definida.
                    </p>
                    <p className="leading-relaxed pt-2 border-t border-slate-200">
                      Após aprovação, o autor orienta-se sobre o registro oficial junto à <strong>Fundação Biblioteca Nacional (EDA/FBN)</strong>, procedimento pessoal e intransferível.
                    </p>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SANFONA: O que é a análise dos portfólios dos estudantes? */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-analise-portfolios"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('analise-portfolios')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['analise-portfolios']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-amber-900">
                  🔍 18
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                    Avaliação Pedagógica • Mediação &amp; Investigação da Aprendizagem
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    18 - O que é a análise dos portfólios dos estudantes?
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['analise-portfolios'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-900 transition-transform duration-300 ${
                    openSections['analise-portfolios'] ? 'rotate-180 bg-amber-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['analise-portfolios'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-8 animate-fadeIn">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-bold tracking-wide uppercase shadow-2xs">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Processo Pedagógico Investigativo Oficial da ESDHUBEM</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    O que é a análise dos portfólios dos estudantes?
                  </h2>

                  <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <p>
                      Na ESDHUBEM a análise do portfólio é um processo pedagógico onde o manuscrito será analisado segundo o <strong>como</strong> e o <strong>porquê</strong> do trabalho desenvolvido, verificando o raciocínio lógico, concordância com o tema do curso, caminhos cognitivos que o estudante percorreu para chegar àquela resposta, compreender a linha de pensamento do estudante, identificar dificuldades específicas e entender onde o aluno tropeçou ou brilhou conceitualmente.
                    </p>
                    <p>
                      Aqui na ESDHUBEM os nossos tutores atuam como um <strong>investigador da aprendizagem</strong>. Não é nosso objetivo atuar com julgamento ou atribuição de nota. O artigo será analisado conforme as diretrizes editoriais da ESDHUBEM que estão disponíveis na{' '}
                      {onNavigate ? (
                        <button
                          type="button"
                          onClick={() => onNavigate('diretrizes-avaliacao-manuscritos')}
                          className="font-bold text-[#00227B] hover:underline cursor-pointer inline"
                        >
                          página de diretrizes de avaliação
                        </button>
                      ) : (
                        <span className="font-bold text-[#00227B]">página de diretrizes de avaliação</span>
                      )}
                      .
                    </p>
                  </div>
                </div>

                {/* Cards com os Pilares da Análise Pedagógica */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white border-2 border-amber-300 rounded-2xl p-5 space-y-2 shadow-xs">
                    <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
                      <span className="text-xl">🧭</span>
                      <span>Investigação Cognitiva</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Compreender as conexões mentais, a evolução lógica e a apreensão conceitual do estudante ao longo do percurso formativo.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-amber-300 rounded-2xl p-5 space-y-2 shadow-xs">
                    <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
                      <span className="text-xl">🤝</span>
                      <span>Mediação sem Julgamento</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Tutores dedicados a acolher e orientar o aprendizado, sem notas punitivas ou classificação excludente.
                    </p>
                  </div>

                  <div className="bg-white border-2 border-amber-300 rounded-2xl p-5 space-y-2 shadow-xs">
                    <div className="flex items-center gap-2 text-amber-950 font-bold text-base">
                      <span className="text-xl">📨</span>
                      <span>Canal Oficial de Envio</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Envio de todo o material para o e-mail oficial{' '}
                      <a href="mailto:esdhubem@proton.me" className="font-bold text-[#00227B] hover:underline">
                        esdhubem@proton.me
                      </a>{' '}
                      com as declarações devidamente preenchidas.
                    </p>
                  </div>
                </div>

                {/* Box de Instruções de Envio do Portfólio */}
                <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/60 border-2 border-amber-300 rounded-2xl p-5 sm:p-6 space-y-3 shadow-xs">
                  <span className="font-extrabold text-xs uppercase tracking-wider text-amber-950 flex items-center gap-2">
                    <span>📋</span>
                    <span>Documentos que Acompanham o Portfólio</span>
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    O portfólio deve ser enviado para a escola pelo e-mail:{' '}
                    <a href="mailto:esdhubem@proton.me" className="font-bold text-[#00227B] hover:underline">
                      esdhubem@proton.me
                    </a>{' '}
                    juntamente com o <strong>mapa mental</strong>, o <strong>áudio de 3 minutos</strong> explicando o que você aprendeu com o curso e juntamente com a <strong>Declaração de Autorização de Publicação</strong> e a <strong>Declaração de Autoria e Responsabilidade</strong>.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 font-medium italic">
                  * A análise do portfólio é um ato pedagógico colaborativo, visando aprimorar a escrita, a oratória e a autonomia intelectual de cada aluno da ESDHUBEM.
                </p>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SANFONA: Certificação e Valores */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-certificacao-valores"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('certificacao-valores')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['certificacao-valores']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#011049] text-[#FFC72C] flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-blue-900">
                  🎗️ 19
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                    Modalidades, Requisitos &amp; Percursos
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    19 - Certificação e Valores (Modalidades, Requisitos &amp; Percursos)
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['certificacao-valores'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['certificacao-valores'] ? 'rotate-180 bg-[#011049] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['certificacao-valores'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="bg-white border-2 border-blue-200 rounded-2xl p-5 sm:p-7 space-y-6 shadow-sm">
                  <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                    <p>Cada modalidade possui um valor específico para a emissão do certificado correspondente.</p>
                    <p>O valor da certificação será informado ao estudante antes da escolha da modalidade.</p>
                    <p className="font-semibold text-slate-900">
                      O pagamento da certificação não substitui a necessidade de cumprir os requisitos da modalidade escolhida.
                    </p>
                  </div>

                  {/* Tabela Resumo dos Percursos */}
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs pt-1">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                      <thead>
                        <tr className="bg-[#011049] text-white">
                          <th className="py-3 px-4 font-bold uppercase tracking-wider">Nível</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider">O estudante faz</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider">Produção / requisito</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider">Resultado</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider">O que paga</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        <tr className="hover:bg-amber-50/30">
                          <td className="py-3.5 px-4 font-bold text-amber-950 whitespace-nowrap">🥉 Bronze</td>
                          <td className="py-3.5 px-4">Entrega da Tríade Pedagógica de Fixação no ambiente interno</td>
                          <td className="py-3.5 px-4 font-medium text-slate-900">Texto Conceitual (500 a 800 palavras) + Mapa Mental + Áudio 1 min</td>
                          <td className="py-3.5 px-4">Avaliação Interna + Certificado Oficial com Selo Bronze (sem publicação externa)</td>
                          <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Bronze</td>
                        </tr>
                        <tr className="hover:bg-slate-50">
                          <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">🥈 Prata</td>
                          <td className="py-3.5 px-4">1ª Prateleira: Verbete na Enciclowiki amigável do Google (SEO)</td>
                          <td className="py-3.5 px-4 font-medium text-slate-900">Verbete Canônico Estruturado (500 a 800 palavras) + Mapa Mental + Citação ABNT</td>
                          <td className="py-3.5 px-4">Publicação na Enciclowiki Oficial ESDHUBEM + Certificado com Selo Prata</td>
                          <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Prata</td>
                        </tr>
                        <tr className="hover:bg-amber-50/30">
                          <td className="py-3.5 px-4 font-bold text-amber-800 whitespace-nowrap">🥇 Ouro</td>
                          <td className="py-3.5 px-4">2ª Prateleira: Artigo Autoral de Blog com SEO</td>
                          <td className="py-3.5 px-4 font-medium text-slate-900">Artigo de Blog Otimizado para Busca (800 a 1.500 palavras) + Registro OSF</td>
                          <td className="py-3.5 px-4">Publicação no Blog Oficial ESDHUBEM + Certificado Ouro de Autoria & SEO</td>
                          <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Ouro</td>
                        </tr>
                        <tr className="hover:bg-cyan-50/30">
                          <td className="py-3.5 px-4 font-bold text-cyan-900 whitespace-nowrap">💎 Diamante</td>
                          <td className="py-3.5 px-4">3ª Prateleira: Artigo Investigativo de Alto Impacto com DOI</td>
                          <td className="py-3.5 px-4 font-medium text-slate-900">Artigo Investigativo Estruturado (2.500 a 5.000 palavras) + DOI Permanente no Zenodo</td>
                          <td className="py-3.5 px-4">Publicação no Repositório de Artigos ESDHUBEM + Certificado Diamante de Honraria Máxima</td>
                          <td className="py-3.5 px-4 text-slate-600 font-medium">Taxa do Certificado Diamante</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-xs text-slate-500 italic">
                    * Os certificados Prata, Ouro e Diamante dependem da entrega e aprovação da produção correspondente.
                  </p>

                  {/* UM PERCURSO DE AUTORIA */}
                  <div className="bg-gradient-to-r from-[#011049] via-[#061e47] to-[#011049] text-white p-6 sm:p-8 rounded-2xl space-y-4 shadow-xl border border-blue-900/60 text-center">
                    <h4 className="text-lg sm:text-xl font-black uppercase tracking-wider text-[#FFC72C]">
                      Um Percurso de Autoria
                    </h4>
                    <div className="max-w-2xl mx-auto space-y-1.5 text-xs sm:text-sm text-slate-200 leading-relaxed">
                      <p>O estudante não é obrigado a realizar todos os níveis.</p>
                      <p>Pode concluir o curso e permanecer no <strong>Bronze</strong>.</p>
                      <p>Pode escolher escrever um artigo e avançar para o <strong>Prata</strong>.</p>
                      <p>Pode desenvolver um artigo de investigação e seguir para o <strong>Ouro</strong>.</p>
                      <p>Pode transformar seu conhecimento em um livro e alcançar o <strong>Diamante</strong>.</p>
                      <p className="pt-2 font-medium text-white">
                        Cada percurso corresponde a uma forma diferente de transformar aprendizagem em produção.
                      </p>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm font-black text-[#FFC72C]">
                      <span>APRENDER</span>
                      <span>→</span>
                      <span>EXPRESSAR</span>
                      <span>→</span>
                      <span>INVESTIGAR</span>
                      <span>→</span>
                      <span>AUTORAR</span>
                    </div>

                    <p className="text-xs text-slate-400 italic pt-1">
                      O curso pode ser o começo. A produção é uma possibilidade. A autoria é uma construção.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SANFONA: Autoria e Responsabilidade */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-autoria-responsabilidade"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('autoria-responsabilidade')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['autoria-responsabilidade']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#011049] text-[#FFC72C] flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-blue-900">
                  📑 20
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 block">
                    Produção Intelectual, Ética &amp; Uso de Inteligência Artificial
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    20 - Autoria e Responsabilidade
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  {openSections['autoria-responsabilidade'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 transition-transform duration-300 ${
                    openSections['autoria-responsabilidade'] ? 'rotate-180 bg-[#011049] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['autoria-responsabilidade'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="bg-white border-2 border-blue-200/80 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm max-w-4xl mx-auto">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">📄</span>
                    <h4 className="font-extrabold text-[#011049] text-base sm:text-lg uppercase tracking-wide">
                      AUTORIA E RESPONSABILIDADE
                    </h4>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    A produção intelectual pertence ao seu autor. A ESDHUBEM oferece orientação, modelos e critérios para desenvolvimento e publicação, mas não substitui o autor na criação da obra.
                  </p>

                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm text-slate-900 font-bold">
                      O autor é responsável pelo conteúdo que apresenta e assina, incluindo:
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 list-disc list-inside pl-1">
                      <li>Informações, argumentos e interpretações;</li>
                      <li>Referências e citações;</li>
                      <li>Imagens e materiais utilizados;</li>
                      <li>Respeito aos direitos de terceiros;</li>
                      <li>Revisão final da produção.</li>
                    </ul>
                  </div>

                  <p className="text-[12px] sm:text-xs text-slate-500 italic pt-2 border-t border-slate-100 leading-relaxed">
                    A publicação de uma obra pela ESDHUBEM não significa que a instituição endosse automaticamente todas as opiniões, interpretações ou conclusões apresentadas pelo autor.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SANFONA: Publicação em Repositórios, Periódicos e Revistas */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-publicacao-periodicos-revistas"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('publicacao-periodicos-revistas')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['publicacao-periodicos-revistas']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#011049] text-[#FFC72C] flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-blue-900">
                  📚 21
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 block">
                    Orientações, Pré-prints com DOI &amp; Direito de Remoção
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-slate-900 truncate sm:whitespace-normal">
                    21 - Publicação em Repositórios, Periódicos e Revistas
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-500 hidden sm:inline-block">
                  {openSections['publicacao-periodicos-revistas'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 transition-transform duration-300 ${
                    openSections['publicacao-periodicos-revistas'] ? 'rotate-180 bg-[#011049] text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['publicacao-periodicos-revistas'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Card 1: Sobre Publicação em Periódicos e Revistas */}
                  <div className="bg-white border-2 border-blue-200/80 rounded-3xl p-6 sm:p-7 space-y-3.5 shadow-sm md:col-span-2">
                    <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-base">
                      <span className="text-xl">📤</span>
                      <h4 className="font-extrabold text-[#011049] text-base sm:text-lg">
                        Sobre Publicação em Periódicos e Revistas
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      A ESDHUBEM oferece orientação, estruturação, revisão dos manuscritos dos alunos de acordo com nossos modelos de publicação. Não exigimos rigor científico. Nosso trabalho é voltado para o investigativo e não realizamos encaminhamento, nem garantimos que o aluno faça publicação em plataformas de revistas científicas. Não garantimos, a aceitação do trabalho em revista, periódico ou repositório específico.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Mesmo que seu trabalho seja publicado no site da nossa escola, a decisão de aceitar o seu trabalho em outros sites é exclusiva da instituição ou comitê responsável que segue regras próprias. Muitas revistas científicas têm suas próprias regras de publicação e os pesquisadores devem seguir o que as revistas exigem.
                    </p>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      A ESDHUBEM não responde por recusa, avaliação ou prazo de revista terceira. Nosso trabalho é focado no treinamento e desenvolvimento de habilidades, capacitações onde a nossa <strong>Tríade da Organização, Assimilação e Comunicação</strong> e o <strong>Quadrilátero da Organização, Assimilação, Comunicação e Produção</strong> é um treinamento da escrita e da oralidade voltada para o desenvolvimento pessoal e humano.
                    </p>
                  </div>

                  {/* Card 2: Pré-print e Depósito com DOI */}
                  <div className="bg-white border-2 border-blue-200/80 rounded-3xl p-6 sm:p-7 space-y-3.5 shadow-sm">
                    <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-base">
                      <span className="text-xl">🔬</span>
                      <h4 className="font-extrabold text-[#011049] text-base sm:text-lg">
                        Pré-print e Depósito com DOI
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      O depósito em repositório com atribuição de <strong>DOI</strong> constitui <strong>registro e divulgação prévia</strong> da obra (pré-print):
                    </p>
                    <ul className="text-xs sm:text-sm text-slate-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>Fica registrada oficialmente a autoria e data de criação;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-600 font-bold">✅</span>
                        <span>O trabalho passa a ser acessível publicamente;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">❌</span>
                        <span><strong>Não equivale a publicação em revista com revisão por pares</strong>;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-rose-600 font-bold">❌</span>
                        <span>Verifique a política do periódico caso queira submeter a mesma obra.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Card 3: Direito de Remoção / Retirada */}
                  <div className="bg-white border-2 border-blue-200/80 rounded-3xl p-6 sm:p-7 space-y-3.5 shadow-sm">
                    <div className="flex items-center gap-2.5 text-slate-900 font-extrabold text-base">
                      <span className="text-xl">📁</span>
                      <h4 className="font-extrabold text-[#011049] text-base sm:text-lg">
                        Direito de Remoção / Retirada
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      O autor pode solicitar a exclusão de seu texto a qualquer momento. O prazo para retirada da página e dos índices públicos é de até <strong>15 dias úteis</strong>.
                    </p>
                    <p className="text-xs text-slate-500 italic pt-2 border-t border-slate-100">
                      * Em repositórios externos (Zenodo/CERN), a exclusão segue as normas da plataforma terceira.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 15: 15 - Padrão de Extensão: Palavras Sugeridas e Páginas por Nível */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-15"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('15')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['15']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  📏 22
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Parâmetros de Contagem de Palavras e Páginas Sugeridas
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    22 - Padrão de Extensão: Palavras Sugeridas e Páginas por Nível
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['15'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['15'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['15'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm">
                  
                  {/* Introdução */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 font-black flex items-center justify-center text-xs shadow-xs">
                        📏
                      </span>
                      <h4 className="font-black text-base sm:text-lg text-slate-900">
                        Padrão de Extensão por Nível
                      </h4>
                    </div>
                    <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                      O nosso padrão é acessível e coerente com a nossa proposta:
                    </p>
                  </div>

                  {/* Tabela 1: Extensão por Nível */}
                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="py-3 px-4 font-bold">Nível</th>
                          <th className="py-3 px-4 font-bold">Tipo de trabalho</th>
                          <th className="py-3 px-4 font-bold">Palavras sugeridas</th>
                          <th className="py-3 px-4 font-bold">Páginas aproximadas</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        <tr className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3.5 px-4 font-bold">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-slate-100 text-slate-700 border border-slate-300">
                              🥈 Prata
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-900">Artigo de Blog</td>
                          <td className="py-3.5 px-4 font-bold text-slate-800">1.200 a 2.500 palavras</td>
                          <td className="py-3.5 px-4 text-slate-700">4 a 8 páginas</td>
                        </tr>
                        <tr className="hover:bg-amber-50/50 transition-colors">
                          <td className="py-3.5 px-4 font-bold">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300">
                              🥇 Ouro
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-900">Manuscrito de Investigação</td>
                          <td className="py-3.5 px-4 font-bold text-amber-900">2.500 a 5.000 palavras</td>
                          <td className="py-3.5 px-4 text-slate-700">8 a 15 páginas</td>
                        </tr>
                        <tr className="hover:bg-cyan-50/50 transition-colors">
                          <td className="py-3.5 px-4 font-bold">
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-black bg-cyan-100 text-cyan-800 border border-cyan-300">
                              💎 Diamante
                            </span>
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-slate-900">Livro Autoral</td>
                          <td className="py-3.5 px-4 font-bold text-cyan-900">Mín. 50 pág. conteúdo</td>
                          <td className="py-3.5 px-4 text-slate-700">50+ páginas</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Tabela 2: O que conta e o que NÃO conta */}
                  <div className="space-y-3 pt-2">
                    <h5 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                      <span>📝</span> O que conta e o que NÃO conta
                    </h5>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="py-3 px-4 font-bold bg-emerald-50 text-emerald-900 border-r border-slate-200">
                              ✅ Conta no total
                            </th>
                            <th className="py-3 px-4 font-bold bg-rose-50 text-rose-900">
                              ❌ Não entra na contagem
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-800 border-r border-slate-200">Introdução</td>
                            <td className="py-2.5 px-4 text-slate-600">Resumo (às vezes separado)</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-800 border-r border-slate-200">Desenvolvimento</td>
                            <td className="py-2.5 px-4 text-slate-600">Folha de rosto, capa</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-800 border-r border-slate-200">Discussão</td>
                            <td className="py-2.5 px-4 text-slate-600">Sumário, dedicatória</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-800 border-r border-slate-200">Conclusão</td>
                            <td className="py-2.5 px-4 text-slate-600">Referências bibliográficas</td>
                          </tr>
                          <tr>
                            <td className="py-2.5 px-4 font-medium text-slate-800 border-r border-slate-200">Citações no texto</td>
                            <td className="py-2.5 px-4 text-slate-600">Anexos e apêndices</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Card: Recomendação Prática */}
                  <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-5 sm:p-6 space-y-2.5 shadow-xs">
                    <div className="flex items-center gap-2 text-amber-900 font-bold text-sm sm:text-base">
                      <span className="text-lg">💡</span>
                      <h5>Recomendação prática para a ESDHUBEM</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-amber-950/90 leading-relaxed italic bg-white/70 p-4 rounded-xl border border-amber-200/80">
                      &quot;Para o Artigo de Investigação do Nível Ouro, sugerimos entre 2.500 e 5.000 palavras de conteúdo efetivo — o suficiente para desenvolver o tema com profundidade sem exigir volume excessivo. O que prevalece é a coerência, a clareza e o desenvolvimento das ideias, não a quantidade de páginas.&quot;
                    </p>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 16: 16 - Prazos de Análise e Devolutiva */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-16"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('16')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['16']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  ⏱️ 23
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Prazos Institucionais &amp; Devolutivas de Avaliação
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    23 - Prazos de Análise e Devolutiva
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['16'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['16'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['16'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-6 space-y-5 shadow-sm">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 font-black flex items-center justify-center text-xs shadow-xs">
                        1
                      </span>
                      <h4 className="font-black text-base sm:text-lg text-slate-900">
                        Prazos de Análise e Devolutiva
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Com base em práticas adotadas por instituições de ensino e periódicos acadêmicos, estabelecemos os seguintes prazos de referência:
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="py-3 px-4 font-bold uppercase tracking-wider">Etapa</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider w-44 sm:w-52">Prazo Estimado</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider">Observação</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white text-slate-700">
                        <tr className="hover:bg-slate-50/70">
                          <td className="py-3 px-4 font-semibold text-slate-900">Análise inicial do trabalho enviado</td>
                          <td className="py-3 px-4 font-medium text-blue-700">até 10 dias úteis</td>
                          <td className="py-3 px-4 text-xs text-slate-600">Contados a partir do recebimento completo do material</td>
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="py-3 px-4 font-semibold text-slate-900">Devolutiva com ajustes ou aprovação</td>
                          <td className="py-3 px-4 font-medium text-blue-700">até 15 dias úteis</td>
                          <td className="py-3 px-4 text-xs text-slate-600">Prazo pode ser reduzido conforme disponibilidade; ajustes solicitados reiniciam a contagem</td>
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="py-3 px-4 font-semibold text-slate-900">Reenvio após ajustes e nova análise</td>
                          <td className="py-3 px-4 font-medium text-blue-700">até 7 dias úteis</td>
                          <td className="py-3 px-4 text-xs text-slate-600">Aplica-se à segunda avaliação</td>
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="py-3 px-4 font-semibold text-slate-900">Emissão de certificado após aprovação</td>
                          <td className="py-3 px-4 font-medium text-emerald-700 font-semibold">até 5 dias úteis</td>
                          <td className="py-3 px-4 text-xs text-slate-600">Após confirmação do cumprimento de todos os requisitos</td>
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="py-3 px-4 font-semibold text-slate-900">Registro OSF / Zenodo / DOI</td>
                          <td className="py-3 px-4 font-medium text-blue-700">até 10 dias úteis</td>
                          <td className="py-3 px-4 text-xs text-slate-600">Após orientação e envio do arquivo final</td>
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="py-3 px-4 font-semibold text-slate-900">Registro de obra no EDA/FBN (Diamante)</td>
                          <td className="py-3 px-4 font-medium text-purple-700">Conforme prazos da Fundação Biblioteca Nacional</td>
                          <td className="py-3 px-4 text-xs text-slate-600">Procedimento de responsabilidade pessoal do autor</td>
                        </tr>
                        <tr className="hover:bg-slate-50/70">
                          <td className="py-3 px-4 font-semibold text-slate-900">Remoção de conteúdo publicado</td>
                          <td className="py-3 px-4 font-medium text-rose-700">até 15 dias úteis</td>
                          <td className="py-3 px-4 text-xs text-slate-600">Após solicitação formal</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 shadow-2xs">
                    <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      Os prazos indicados referem-se a estimativas operacionais de atendimento. Havendo necessidade de adequação devido ao volume de entregas, o estudante será comunicado.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 17: 17 - Critérios de Análise, Publicação e Direito de Retirada */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-17"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('17')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['17']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  ⚖️ 24
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Critérios de Análise, Publicação e Direito de Retirada
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    24 - Critérios de Análise, Publicação e Direito de Retirada
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['17'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['17'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['17'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm">
                  {/* Título interno com o número 2 */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 font-black flex items-center justify-center text-xs shadow-xs">
                      2
                    </span>
                    <h4 className="font-black text-base sm:text-lg text-slate-900">
                      Critérios de Análise, Publicação e Direito de Retirada
                    </h4>
                  </div>

                  {/* Grid Principal Superior */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {/* Card: O que define aprovação */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-3">
                      <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        <span>O que define aprovação</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A aprovação se dá pelo cumprimento integral dos requisitos específicos de cada nível, com entrega do trabalho desenvolvido de acordo com as orientações recebidas e em comum acordo entre autor e escola. A análise verifica:
                      </p>
                      <ul className="text-xs text-slate-700 space-y-2 pl-1">
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold">•</span>
                          <span><strong>Registro prévio obrigatório:</strong> Não recebemos trabalhos que não foram registrados no OSF (Bronze, Prata e Diamante) ou Zenodo (Ouro)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Aderência ao tema e aos eixos temáticos</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Cumprimento da extensão mínima e estrutura definida</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Clareza, coerência e organização das ideias</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Uso responsável de fontes e direitos autorais</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Verificação se houve plágio ou cópia literal de inteligência artificial</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Adequação às normas de escrita e citação quando aplicável</span>
                        </li>
                      </ul>
                    </div>

                    {/* Coluna Direita: Publicação é opcional + Direito de retirada */}
                    <div className="space-y-4">
                      {/* Publicação é opcional */}
                      <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-5 space-y-2">
                        <div className="flex items-center gap-2 font-bold text-emerald-950 text-sm">
                          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                          <span>Publicação é opcional</span>
                        </div>
                        <p className="text-xs text-emerald-900 leading-relaxed">
                          Caso o estudante não deseje a publicação do seu trabalho no site da ESDHUBEM, sua escolha será integralmente respeitada. O certificado será emitido normalmente, e o trabalho será mantido em registro privado, sem divulgação pública. A publicação é um benefício adicional — não uma exigência.
                        </p>
                      </div>

                      {/* Direito de retirada a qualquer momento */}
                      <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-5 space-y-2">
                        <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                          <Clock className="w-4 h-4 text-amber-700 shrink-0" />
                          <span>Direito de retirada a qualquer momento</span>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          Mesmo após a publicação, o autor pode solicitar a retirada do conteúdo a qualquer instante, pelo e-mail: <strong className="text-amber-950 underline decoration-amber-400">esdhubem@proton.me</strong>. O prazo para remoção das páginas e dos índices públicos é de até <strong>15 dias úteis</strong>. Em repositórios externos (Zenodo, OSF), a exclusão segue as regras próprias de cada plataforma.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Grid Inferior: Quem avalia + Sobre revisão por pares */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    {/* Quem analisa os portfólios dos alunos? */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                        <GraduationCap className="w-4 h-4 text-blue-700 shrink-0" />
                        <span>Quem analisa os portfólios dos alunos?</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A análise é realizada pelo corpo docente da ESDHUBEM e docentes auxiliares contratados, conforme os critérios próprios de cada nível de certificação.{' '}
                        {onNavigate ? (
                          <button
                            type="button"
                            onClick={() => onNavigate('diretrizes-avaliacao-manuscritos')}
                            className="font-bold text-[#00227B] hover:underline cursor-pointer inline text-left"
                          >
                            Consulte a página das Diretrizes de Análise dos Portfólios dos estudantes.
                          </button>
                        ) : (
                          <span className="font-bold text-[#00227B]">
                            Consulte a página das Diretrizes de Análise dos Portfólios dos estudantes.
                          </span>
                        )}
                      </p>
                    </div>

                    {/* Sobre revisão por pares e banca */}
                    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                        <Info className="w-4 h-4 text-indigo-600 shrink-0" />
                        <span>Sobre revisão por pares e banca</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        A ESDHUBEM não realiza revisão por pares nem dispõe de serviços de revistas científicas. Não há composição de banca examinadora. A avaliação tem caráter formativo e orientador, focada no desenvolvimento do autor e no cumprimento das diretrizes estabelecidas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 18: 18 - Estrutura e Formato por Nível de Produção */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-18"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('18')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['18']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  📐 25
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Parâmetros Textuais, Normas de Estilo &amp; Extensão
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    25 - Estrutura e Formato por Nível de Produção
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['18'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['18'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['18'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-6 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-6 space-y-5 shadow-sm">
                  {/* Título interno com o número 3 */}
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 font-black flex items-center justify-center text-xs shadow-xs">
                      3
                    </span>
                    <h4 className="font-black text-base sm:text-lg text-slate-900">
                      Estrutura e Formato por Nível de Produção
                    </h4>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[700px]">
                      <thead>
                        <tr className="bg-slate-900 text-white">
                          <th className="py-3 px-4 font-bold uppercase tracking-wider w-1/5">Elemento</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider w-2/5">Estrutura Mínima</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider w-1/4">Normas de Estilo</th>
                          <th className="py-3 px-4 font-bold uppercase tracking-wider">Extensão</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white text-slate-700">
                        {/* Linha 1: Bronze */}
                        <tr className="hover:bg-amber-50/20 align-top">
                          <td className="py-4 px-4 font-bold text-amber-950">
                            <div className="flex items-start gap-1.5">
                              <FileText className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                              <div>
                                <span>Verbete Enciclopédico</span>
                                <span className="block text-xs font-semibold text-amber-700">(Bronze)</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <ul className="space-y-1 text-slate-700 text-xs">
                              <li>• Título claro e preciso</li>
                              <li>• Definição direta do tema</li>
                              <li>• Contexto histórico e conceitual</li>
                              <li>• Aplicação prática ou relevância atual</li>
                              <li>• Ligação com os eixos temáticos</li>
                              <li>• Sem referências extensas — informações integradas ao texto</li>
                            </ul>
                          </td>
                          <td className="py-4 px-4">
                            <ul className="space-y-1 text-slate-600 text-xs">
                              <li>• Linguagem objetiva e informativa</li>
                              <li>• Tom neutro e educativo</li>
                              <li>• Parágrafos curtos</li>
                              <li>• Sem jargões desnecessários</li>
                              <li>• Sem citações longas</li>
                            </ul>
                          </td>
                          <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                            500 a 800 palavras
                          </td>
                        </tr>

                        {/* Linha 2: Prata */}
                        <tr className="hover:bg-slate-50/80 align-top">
                          <td className="py-4 px-4 font-bold text-slate-900">
                            <div className="flex items-start gap-1.5">
                              <span className="text-base shrink-0">✍️</span>
                              <div>
                                <span>Artigo de Blog</span>
                                <span className="block text-xs font-semibold text-slate-600">(Prata)</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <ul className="space-y-1 text-slate-700 text-xs">
                              <li>• Título + subtítulo chamativo</li>
                              <li>• Introdução (contexto e objetivo)</li>
                              <li>• Desenvolvimento dividido em seções (H2/H3)</li>
                              <li>• Exemplos práticos ou relatos</li>
                              <li>• Conclusão com fechamento</li>
                              <li>• Referências quando aplicável</li>
                            </ul>
                          </td>
                          <td className="py-4 px-4">
                            <ul className="space-y-1 text-slate-600 text-xs">
                              <li>• Linguagem acessível e fluida</li>
                              <li>• Escaneabilidade: parágrafos curtos, destaques, listas</li>
                              <li>• Princípios de clareza e encontrabilidade (SEO)</li>
                              <li>• Transição suave entre seções</li>
                              <li>• Normas ABNT para referências</li>
                            </ul>
                          </td>
                          <td className="py-4 px-4 font-bold text-slate-900 whitespace-nowrap">
                            1.200 a 2.500 palavras
                          </td>
                        </tr>

                        {/* Linha 3: Ouro */}
                        <tr className="hover:bg-amber-50/20 align-top">
                          <td className="py-4 px-4 font-bold text-amber-900">
                            <div className="flex items-start gap-1.5">
                              <span className="text-base shrink-0">🔬</span>
                              <div>
                                <span>Artigo de Investigação</span>
                                <span className="block text-xs font-semibold text-amber-700">(Ouro)</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <ul className="space-y-1 text-slate-700 text-xs">
                              <li>• Título</li>
                              <li>• Resumo + palavras-chave</li>
                              <li>• Introdução (problema, objetivos)</li>
                              <li>• Fundamentação teórica</li>
                              <li>• Metodologia</li>
                              <li>• Desenvolvimento e discussão</li>
                              <li>• Conclusão</li>
                              <li>• Referências bibliográficas completas</li>
                            </ul>
                          </td>
                          <td className="py-4 px-4">
                            <ul className="space-y-1 text-slate-600 text-xs">
                              <li>• Linguagem formal e analítica</li>
                              <li>• Normas ABNT integral</li>
                              <li>• Citações no texto e lista de referências</li>
                              <li>• Estrutura lógica e sequencial</li>
                              <li>• Distinção clara entre ideias do autor e ideias de outros autores</li>
                            </ul>
                          </td>
                          <td className="py-4 px-4 font-bold text-blue-700">
                            2.500 a 5.000 palavras de conteúdo efetivo
                          </td>
                        </tr>

                        {/* Linha 4: Diamante */}
                        <tr className="hover:bg-cyan-50/20 align-top">
                          <td className="py-4 px-4 font-bold text-cyan-950">
                            <div className="flex items-start gap-1.5">
                              <span className="text-base shrink-0">📖</span>
                              <div>
                                <span>Livro Autoral</span>
                                <span className="block text-xs font-semibold text-cyan-800">(Diamante)</span>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <ul className="space-y-1 text-slate-700 text-xs">
                              <li>• Folha de rosto</li>
                              <li>• Sumário detalhado</li>
                              <li>• Introdução geral</li>
                              <li>• Capítulos sequenciais com unidade temática</li>
                              <li>• Considerações finais</li>
                              <li>• Referências / bibliografia</li>
                              <li>• Elementos opcionais: dedicatória, agradecimentos, apêndices</li>
                            </ul>
                          </td>
                          <td className="py-4 px-4">
                            <ul className="space-y-1 text-slate-600 text-xs">
                              <li>• Formato consistente ao longo da obra</li>
                              <li>• Normas ABNT para referências e citações</li>
                              <li>• Padronização de títulos, subtítulos e corpo de texto</li>
                              <li>• Versão final em PDF formatado</li>
                            </ul>
                          </td>
                          <td className="py-4 px-4 font-bold text-cyan-900">
                            Mínimo de 50 páginas de conteúdo efetivo
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 19: 19 - Registro Obrigatório nas Plataformas e Atualização de Versões */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-19"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('19')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['19']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  🌐 26
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    OSF, Zenodo com DOI, Autoria Perpétua e Gestão de Versões
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    26 - Registro Obrigatório nas Plataformas e Atualização de Versões
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['19'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['19'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['19'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-7 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-7 space-y-7 shadow-sm">
                  
                  {/* Título interno com o badge 4 */}
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 font-black flex items-center justify-center text-xs shadow-xs">
                      4
                    </span>
                    <h4 className="font-black text-base sm:text-lg text-slate-900">
                      Registro Obrigatório nas Plataformas e Atualização de Versões
                    </h4>
                  </div>

                  {/* 1. Alerta Institucional Obrigatório */}
                  <div className="bg-rose-50/80 border-2 border-rose-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-rose-950 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-rose-100 border border-rose-300 flex items-center justify-center shrink-0 text-rose-600 mt-0.5">
                      <AlertTriangle className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h5 className="font-bold text-sm text-rose-900 flex items-center gap-1.5 uppercase tracking-wide">
                        ⚠️ ATENÇÃO INSTITUCIONAL OBRIGATÓRIA
                      </h5>
                      <p className="text-xs sm:text-sm text-rose-950 leading-relaxed">
                        <strong>Não recebemos trabalhos que não foram registrados.</strong> O estudante deve obrigatoriamente realizar o registro na plataforma correspondente (<strong>OSF para Níveis Bronze, Prata e Diamante</strong>; <strong>Zenodo com DOI para Ouro</strong>) e anexar o link público oficial no ato da entrega final. Trabalhos sem comprovação de registro não avançam para homologação nem certificação.
                      </p>
                    </div>
                  </div>

                  {/* 2. Como funciona a garantia de autoria e datação perpétua */}
                  <div className="bg-teal-50/60 border border-teal-200 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 text-slate-800 shadow-xs">
                    <div className="w-8 h-8 rounded-xl bg-teal-100 border border-teal-300 flex items-center justify-center shrink-0 text-teal-700 mt-0.5">
                      <Lightbulb className="w-4 h-4" />
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-bold text-sm text-teal-900 flex items-center gap-1.5">
                        Como funciona a garantia de autoria e datação perpétua
                      </h5>
                      <div className="text-xs sm:text-sm text-slate-700 leading-relaxed space-y-2">
                        <p>
                          O estudante deve registrar seu manuscrito na plataforma OSF ou Zenodo, depois enviar para análise na nossa escola. A ESDHUBEM vai analisar e caso seja necessário fazer sugestões de ajustes equilibrados. O estudante pode corrigir seu manuscrito e enviar novamente na plataforma de publicação e assim gerar uma versão atualizada...
                        </p>
                        <p>
                          O Zenodo e OSF foram criados com esse objetivo de proporcionar liberdade, segurança e desenvolvimento de projetos de escrita. Quando você atualiza o seu trabalho com uma nova versão nunca muda a versão original. <strong>Ela fica guardada para sempre</strong> (é a garantia jurídica internacional de autoria e carimbo de data). Ninguém &quot;apaga&quot; o que já foi registrado. O que se faz tecnicamente é acrescentar uma nova versão aprimorada.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 3. Fluxo Recomendado para o Estudante na ESDHUBEM (6 passos) */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-4">
                    <div className="space-y-1">
                      <h5 className="font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                        <span>📌</span> Fluxo Recomendado para o Estudante na ESDHUBEM
                      </h5>
                      <p className="text-xs text-slate-600">
                        Para evitar retrabalho ou registros de rascunhos desnecessários, o estudante segue este fluxo ordenado:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
                      {/* Passo 1 */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-xs">
                        <span className="inline-block text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                          PASSO 1
                        </span>
                        <h6 className="font-bold text-xs sm:text-sm text-slate-900">
                          Elaboração Interna
                        </h6>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Escreva, pesquise, corrija e ajuste diretamente nos modelos.
                        </p>
                      </div>

                      {/* Passo 2 */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-xs">
                        <span className="inline-block text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                          PASSO 2
                        </span>
                        <h6 className="font-bold text-xs sm:text-sm text-slate-900">
                          Registro Oficial nas plataformas Zenodo ou OSF
                        </h6>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Acesse a plataforma e efetue o registro com seu manuscrito e obtenha o link público.
                        </p>
                      </div>

                      {/* Passo 3 */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-xs">
                        <span className="inline-block text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                          PASSO 3
                        </span>
                        <h6 className="font-bold text-xs sm:text-sm text-slate-900">
                          Devolutiva Docente
                        </h6>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Receba o feedback pedagógico e realize os eventuais ajustes solicitados.
                        </p>
                      </div>

                      {/* Passo 4 */}
                      <div className="bg-white border border-slate-200 rounded-xl p-4 space-y-1.5 shadow-xs">
                        <span className="inline-block text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                          PASSO 4
                        </span>
                        <h6 className="font-bold text-xs sm:text-sm text-slate-900">
                          Aprovação Final
                        </h6>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Atingiu o parecer favorável e obteve a validação final da autoria.
                        </p>
                      </div>

                      {/* Passo 5 */}
                      <div className="bg-emerald-50/70 border-2 border-emerald-400 rounded-xl p-4 space-y-1.5 shadow-sm">
                        <span className="inline-block text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-emerald-600 text-white">
                          PASSO 5 ✅
                        </span>
                        <h6 className="font-bold text-xs sm:text-sm text-emerald-950">
                          Registro Oficial
                        </h6>
                        <p className="text-xs text-emerald-900 leading-relaxed">
                          Publicação do trabalho na plataforma e lançamento do certificado de conclusão de curso.
                        </p>
                      </div>

                      {/* Passo 6 */}
                      <div className="bg-purple-50/70 border-2 border-purple-300 rounded-xl p-4 space-y-1.5 shadow-xs">
                        <span className="inline-block text-[10px] font-black tracking-wider uppercase px-2 py-0.5 rounded-md bg-purple-100 text-purple-800 border border-purple-300">
                          PASSO 6 (SE NECESSÁRIO)
                        </span>
                        <h6 className="font-bold text-xs sm:text-sm text-purple-950">
                          Correção Pós-Registro
                        </h6>
                        <p className="text-xs text-purple-900 leading-relaxed">
                          Crie uma nova versão na plataforma, insira o link da publicação na nossa escola nas informações e nos envie o link novo da sua publicação. A versão originária fica guardada com carimbo perpétuo.
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SANFONA: Como publicar na plataforma OSF? */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-como-publicar-osf"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('como-publicar-osf')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['como-publicar-osf']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-sky-600 to-sky-800 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-sky-900">
                  🌐 27
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    Open Science Framework • Níveis Bronze, Prata e Diamante
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    27 - Como publicar na plataforma OSF?
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['como-publicar-osf'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['como-publicar-osf'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['como-publicar-osf'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-7 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-7 space-y-6 shadow-sm">
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4 w-1/3">Situação</th>
                          <th className="py-3 px-4">O que acontece</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <tr>
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            Projeto antes de registrar
                          </td>
                          <td className="py-3 px-4 text-slate-700 leading-relaxed">
                            <span className="text-emerald-700 font-semibold">✅ Pode criar, corrigir, renomear quantas vezes quiser</span> — o OSF guarda histórico de versões automaticamente.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            Após fazer o REGISTRO
                          </td>
                          <td className="py-3 px-4 text-slate-700 leading-relaxed">
                            <span className="text-rose-700 font-semibold">🛑 O arquivo fica arquivado</span> — não dá para alterar nem substituir silenciosamente. O registro é um &quot;congelamento&quot; daquele momento, garantindo data e autoria.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            Para corrigir depois de registrado
                          </td>
                          <td className="py-3 px-4 text-slate-700 leading-relaxed">
                            Cria-se uma atualização formal com justificativa, mas os arquivos originais permanecem. A nova versão é registrada separadamente.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Passo a Passo Prático no OSF */}
                  <div className="bg-sky-50/50 border border-sky-200 rounded-2xl p-4 sm:p-5 space-y-3.5">
                    <h6 className="font-bold text-xs sm:text-sm text-sky-950 uppercase tracking-wider">
                      PASSO A PASSO PRÁTICO NO OSF (OSF.IO)
                    </h6>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                      {/* Etapa 1 */}
                      <div className="bg-white border border-sky-200 rounded-xl p-3.5 space-y-2 shadow-xs">
                        <span className="inline-block text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded">
                          ETAPA 1: CONTA E CRIAÇÃO
                        </span>
                        <ol className="text-xs text-slate-700 space-y-1.5 list-decimal list-inside leading-relaxed">
                          <li>Acessar <a href="https://osf.io" target="_blank" rel="noopener noreferrer" className="text-cyan-700 underline font-semibold">osf.io</a></li>
                          <li>Clique em <strong>Sign Up</strong> e crie sua conta com o e-mail preferencial.</li>
                          <li>Confirme seu endereço de e-mail clicando no link recebido.</li>
                        </ol>
                      </div>

                      {/* Etapa 2 */}
                      <div className="bg-white border border-sky-200 rounded-xl p-3.5 space-y-2 shadow-xs">
                        <span className="inline-block text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded">
                          ETAPA 2: PROJETO E UPLOAD
                        </span>
                        <ol start={4} className="text-xs text-slate-700 space-y-1.5 list-decimal list-inside leading-relaxed">
                          <li>Na página inicial, clique em <strong>Create New Project</strong>.</li>
                          <li>Dê um título ao projeto (mesmo título do seu trabalho) e descrição breve.</li>
                          <li>Salve o projeto — clique em <strong>Files → Upload Files</strong> (formato PDF).</li>
                        </ol>
                      </div>

                      {/* Etapa 3 */}
                      <div className="bg-white border border-sky-200 rounded-xl p-3.5 space-y-2 shadow-xs">
                        <span className="inline-block text-[10px] font-black uppercase tracking-wider text-sky-700 bg-sky-100/70 px-2 py-0.5 rounded">
                          ETAPA 3: PUBLICAÇÃO E ENVIO
                        </span>
                        <ol start={7} className="text-xs text-slate-700 space-y-1.5 list-decimal list-inside leading-relaxed">
                          <li>Selecione o arquivo final de seu trabalho.</li>
                          <li>Após upload, clique em <strong>Make Public</strong> — isso torna o registro acessível e datado.</li>
                          <li>Copie o link público da página do projeto e envie para a ESDHUBEM.</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Quadro de Atenção ao Registro no OSF (Onde aponta a seta) */}
                  <div className="bg-amber-50/90 border-2 border-amber-300 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5 shadow-xs">
                    <span className="text-lg shrink-0 mt-0.5">⚠️</span>
                    <p className="leading-relaxed">
                      <strong>Atenção ao Registro no OSF:</strong> A partir de fevereiro de 2026, os projetos na plataforma OSF não permitirão edições diretas após o registro público. Recomendamos efetuar o registro definitivo apenas após a aprovação final do trabalho pela escola.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SANFONA: Como publicar no Zenodo? */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-como-publicar-zenodo"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('como-publicar-zenodo')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['como-publicar-zenodo']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-teal-600 to-teal-800 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-teal-900">
                  🔬 28
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    Zenodo + DOI • Nível Ouro
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    28 - Como publicar no Zenodo?
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['como-publicar-zenodo'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['como-publicar-zenodo'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['como-publicar-zenodo'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-7 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-7 space-y-6 shadow-sm">
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-3 px-4 w-1/3">Situação</th>
                          <th className="py-3 px-4">O que acontece</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        <tr>
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            Antes de publicar
                          </td>
                          <td className="py-3 px-4 text-slate-700 leading-relaxed">
                            <span className="text-emerald-700 font-semibold">✅ Salva como rascunho</span>, edita e revisa livremente.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            Após publicado com DOI
                          </td>
                          <td className="py-3 px-4 text-slate-700 leading-relaxed">
                            <span className="text-rose-700 font-semibold">🛑 Não se substitui o arquivo antigo</span>. Cria-se uma nova versão (ex: v1.1 corrigida a partir de v1.0).
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            O que muda
                          </td>
                          <td className="py-3 px-4 text-slate-700 leading-relaxed">
                            O DOI principal (conceitual) continua o mesmo e aponta sempre para a versão mais recente; cada versão recebe seu próprio identificador.
                          </td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-semibold text-slate-900">
                            O que permanece
                          </td>
                          <td className="py-3 px-4 text-slate-700 leading-relaxed">
                            A versão original continua acessível, com data e conteúdo preservados.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SANFONA: Registro Nas Plataformas, Atualização de Versões e Publicação na ESDHUBEM */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-registro-atualizacao-versoes"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('registro-atualizacao-versoes')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['registro-atualizacao-versoes']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-indigo-950">
                  🔄 29
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    Gestão de Versões &amp; Homologação
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    29 - Registro Nas Plataformas, Atualização de Versões e Publicação na ESDHUBEM
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['registro-atualizacao-versoes'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['registro-atualizacao-versoes'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['registro-atualizacao-versoes'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-7 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-7 space-y-5 shadow-sm">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    O trabalho do aluno deverá ser enviado por e-mail para a nossa escola apenas quando estiver devidamente registrado na plataforma correspondente ao nível escolhido, OSF ou Zenodo. Entretanto, sabemos que ajustes podem ser necessários. Funciona assim:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Antes do registro público */}
                    <div className="bg-sky-50/60 border border-sky-200 rounded-2xl p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-sky-950">
                        <CheckCircle2 className="w-4 h-4 text-sky-600" />
                        <h6>Antes do registro público</h6>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        O estudante pode elaborar, corrigir e aprimorar o texto. Registra seu trabalho no Zenodo ou OSF e envia para a ESDHUBEM para que seja feita a avaliação. O aluno recebe a devolutiva com orientações para modificações. O aluno faz ajustes. Ocorrendo a aprovação final da escola, o aluno atualiza a nova versão no Zenodo ou OSF e, com o DOI gerado na plataforma, realizamos a publicação e lançamento do certificado, garantindo que o material publicado represente a versão definitiva.
                      </p>
                    </div>

                    {/* Após o registro — posso atualizar? */}
                    <div className="bg-indigo-50/60 border border-indigo-200 rounded-2xl p-4 sm:p-5 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-indigo-950">
                        <Clock className="w-4 h-4 text-indigo-600" />
                        <h6>Após o registro — posso atualizar?</h6>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        <strong>Sim! Nenhuma correção posterior é perdida</strong>, mas também não se apaga o que já foi registrado. O sistema funciona por versões:
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed pt-1">
                        <strong>No OSF:</strong> O projeto pode receber versões atualizadas antes do registro público. Após registrado, qualquer alteração gera um histórico transparente — a versão original permanece visível e datada, preservando a autoria.
                      </p>
                      <p className="text-xs text-slate-700 leading-relaxed">
                        <strong>No Zenodo:</strong> Publicou e precisa corrigir? Cria-se uma nova versão (ex: v1.1 corrigida). O identificador principal continua o mesmo, apontando sempre para a versão mais recente, e cada versão fica preservada com seu próprio registro.
                      </p>
                    </div>
                  </div>

                  {/* Como proceder se precisar corrigir */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 space-y-2.5">
                    <h6 className="font-bold text-xs sm:text-sm text-slate-900">
                      Como proceder se precisar corrigir após já ter registrado:
                    </h6>
                    <ol className="text-xs text-slate-700 space-y-1 list-decimal list-inside leading-relaxed">
                      <li>Acesse seu projeto/registro na plataforma</li>
                      <li>Faça upload do arquivo corrigido como nova versão</li>
                      <li>Atualize a justificativa descrevendo o que foi ajustado</li>
                      <li>Envie o novo link para a ESDHUBEM</li>
                    </ol>
                    <p className="text-[11px] sm:text-xs text-slate-500 italic pt-1 border-t border-slate-200">
                      Ambas as versões ficarão acessíveis — isso fortalece a transparência e a autoria, não a enfraquece.
                    </p>
                  </div>

                  {/* Resumo prático em destaque verde */}
                  <div className="bg-emerald-50/80 border-2 border-emerald-300 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-emerald-950 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>Resumo prático:</strong> Registre a versão aprovada. Se corrigir depois, crie uma nova versão na plataforma e nos envie o link atualizado. Nada é apagado — tudo é documentado.
                    </p>
                  </div>

                  {/* 6. Resumo Prático de Perguntas & Respostas */}
                  <div className="space-y-3.5 pt-3 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🎯</span>
                      <h6 className="font-bold text-sm sm:text-base text-slate-900">
                        Resumo Prático de Perguntas &amp; Respostas
                      </h6>
                    </div>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                      <table className="w-full text-left text-xs sm:text-sm">
                        <thead className="bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider">
                          <tr>
                            <th className="py-3 px-4 w-1/3">Pergunta</th>
                            <th className="py-3 px-4">Resposta</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">
                              Aceito sem registro?
                            </td>
                            <td className="py-3 px-4 font-bold text-rose-700">
                              ❌ Não — só recebemos com registro concluído
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">
                              Pode registrar e depois corrigir?
                            </td>
                            <td className="py-3 px-4 text-slate-800">
                              <span className="text-emerald-700 font-bold">✅ Sim, criando nova versão</span> — original fica guardada
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">
                              A versão antiga some?
                            </td>
                            <td className="py-3 px-4 text-slate-800">
                              <span className="text-rose-700 font-bold">❌ Não</span> — permanece como histórico, isso é garantia de autoria
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">
                              O DOI muda?
                            </td>
                            <td className="py-3 px-4 text-slate-700">
                              O principal não muda; cada versão ganha um identificador específico
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-semibold text-slate-900">
                              Melhor prática
                            </td>
                            <td className="py-3 px-4 font-semibold text-slate-900">
                              Só registrar após aprovação final para evitar versões desnecessárias
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ======================================================== */}
          {/* SEÇÃO 20: 20 - Uso de Inteligência Artificial — Declaração e Limites */}
          {/* ======================================================== */}
          <div
            id="secao-sanfona-20"
            className="bg-[#d8ecfc] rounded-3xl border-2 border-[#b0d6f8] shadow-md overflow-hidden transition-all duration-200"
          >
            <button
              type="button"
              onClick={() => toggleSection('20')}
              className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 bg-gradient-to-r from-[#cbe4fb] via-[#dcedfc] to-[#cbe4fb] hover:bg-[#bfe0fa] transition-colors cursor-pointer border-b border-[#badbf7]"
              aria-expanded={openSections['20']}
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-cyan-700 text-white flex items-center justify-center font-black text-base sm:text-lg shadow-sm shrink-0 border border-cyan-800">
                  🤖 30
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-800 block flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-600" />
                    Ética, Transparência, Limites de Uso e Modelos de Declaração
                  </span>
                  <h3 className="text-base sm:text-xl font-black text-cyan-950 truncate sm:whitespace-normal">
                    30 - Uso Responsável de Inteligência Artificial — Declaração e Limites
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-xs font-semibold text-slate-600 hidden sm:inline-block">
                  {openSections['20'] ? 'Recolher' : 'Expandir'}
                </span>
                <div
                  className={`w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-900 transition-transform duration-300 ${
                    openSections['20'] ? 'rotate-180 bg-cyan-700 text-white' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </button>

            {openSections['20'] && (
              <div className="p-6 sm:p-8 lg:p-10 space-y-7 animate-fadeIn">
                <div className="bg-white border-2 border-cyan-200 rounded-2xl p-5 sm:p-7 space-y-7 shadow-sm">
                  
                  {/* Título interno com o badge 5 */}
                  <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100">
                    <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-900 font-black flex items-center justify-center text-xs shadow-xs">
                      5
                    </span>
                    <h4 className="font-black text-base sm:text-lg text-slate-900">
                      Uso Responsável de Inteligência Artificial — Declaração e Limites
                    </h4>
                  </div>

                  {/* Texto introdutório */}
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    A ferramenta de Inteligência Artificial é vista como <strong>apoio à produção</strong>, nunca como substituta do pensamento e da criação humana. A responsabilidade sobre todo o conteúdo publicado é <strong>sempre do autor</strong>.
                  </p>

                  {/* Princípios de Autoria e Responsabilidade */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Card 1: Inteligência Artificial e Autoria */}
                    <div className="bg-white border-2 border-purple-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                          <Sparkles className="w-5 h-5 text-purple-600 shrink-0" />
                          <h5 className="font-extrabold text-[#011049] text-sm sm:text-base uppercase tracking-wide">
                            INTELIGÊNCIA ARTIFICIAL E AUTORIA
                          </h5>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          Ferramentas de inteligência artificial poderão ser utilizadas como apoio à produção, de acordo com as orientações da ESDHUBEM. Podem auxiliar na organização de ideias, elaboração de estruturas, revisão textual e aprimoramento da linguagem.
                        </p>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          Entretanto, o autor continua responsável por compreender, verificar e revisar aquilo que publica. Informações, referências, dados ou resultados não devem ser apresentados como verdadeiros sem verificação adequada.
                        </p>
                      </div>

                      <div className="bg-purple-50/80 border border-purple-200/80 p-3.5 rounded-xl text-xs sm:text-sm text-purple-950 font-medium">
                        A tecnologia pode auxiliar a produção. A autoria e a responsabilidade permanecem com o autor.
                      </div>
                    </div>

                    {/* Card 2: Uso Responsável de Inteligência Artificial */}
                    <div className="bg-white border-2 border-blue-200/80 rounded-2xl p-5 sm:p-6 space-y-4 shadow-xs flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2.5">
                          <span className="text-2xl">🤖</span>
                          <h5 className="font-extrabold text-[#011049] text-sm sm:text-base tracking-normal">
                            Uso Responsável de Inteligência Artificial
                          </h5>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          A tecnologia é ferramenta de apoio, <strong>não de substituição</strong> do pensamento e criação humana.
                        </p>

                        <ul className="text-xs sm:text-sm text-slate-700 space-y-2.5 list-disc list-inside pl-1">
                          <li>A responsabilidade sobre o conteúdo é sempre do autor;</li>
                          <li>
                            Se utilizou IA em qualquer etapa, <strong>declare com transparência</strong> como foi aplicada;
                          </li>
                          <li>O uso não declarado poderá impedir ou cancelar a publicação.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* 2 Cards lado a lado: O que pode vs O que NÃO pode */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Em quais etapas pode ser usada? */}
                    <div className="bg-emerald-50/50 border border-emerald-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-emerald-950">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <h5>Em quais etapas pode ser usada?</h5>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Organização de ideias e estruturação de esboços</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Revisão textual e sugestões de redação</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Verificação de coerência e clareza</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">•</span>
                          <span>Sugestões de referências e fontes <em>(sempre conferir!)</em></span>
                        </li>
                      </ul>
                    </div>

                    {/* O que NÃO pode ser feito sem verificação integral? */}
                    <div className="bg-rose-50/50 border border-rose-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs">
                      <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-rose-950">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                        <h5>O que NÃO pode ser feito sem verificação integral?</h5>
                      </div>
                      <ul className="text-xs text-slate-700 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold">•</span>
                          <span>Apresentar conteúdos gerados sem leitura, confirmação e edição</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold">•</span>
                          <span>Usar dados, citações ou referências sem verificação na fonte original</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-rose-600 font-bold">•</span>
                          <span>Transferir a autoria para a ferramenta ou omitir sua participação</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Seção Modelo de Declaração de Uso de IA */}
                  <div className="space-y-4 pt-3 border-t border-slate-200">
                    <div className="space-y-1">
                      <h5 className="font-bold text-base text-slate-900">
                        Modelo de Declaração de Uso de IA
                      </h5>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Insira no final do trabalho (antes das referências) um texto conforme o exemplo que melhor se aplica:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {/* Exemplo 1 */}
                      <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[11px] font-bold">
                            Exemplo 1 — Uso parcial:
                          </span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 italic leading-relaxed flex-1 flex items-center">
                          "Declaro que utilizei ferramenta de Inteligência Artificial para apoio na organização de ideias e revisão de redação. Todo o conteúdo foi lido, verificado e desenvolvido por mim. A versão final é de minha autoria e responsabilidade integral."
                        </div>
                      </div>

                      {/* Exemplo 2 */}
                      <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[11px] font-bold">
                            Exemplo 2 — Uso estrutural:
                          </span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 italic leading-relaxed flex-1 flex items-center">
                          "Declaro que utilizei ferramenta de Inteligência Artificial para elaboração de esboço e estruturação de seções. O desenvolvimento, análise e redação final foram realizados por mim. Assumo total responsabilidade pelo texto apresentado."
                        </div>
                      </div>

                      {/* Exemplo 3 */}
                      <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs flex flex-col justify-between">
                        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-slate-600 shrink-0" />
                          <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-800 text-[11px] font-bold">
                            Exemplo 3 — Não utilizei:
                          </span>
                        </div>
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-700 italic leading-relaxed flex-1 flex items-center">
                          "Declaro que não utilizei ferramentas de Inteligência Artificial na elaboração deste trabalho."
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card de Aviso Inferior */}
                  <div className="bg-amber-50/80 border-2 border-amber-300 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-amber-950 flex items-start gap-2.5 shadow-xs">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>⚠️ A não declaração quando houver uso de IA pode impedir ou cancelar a publicação.</strong> Se tiver dúvida sobre como declarar, entre em contato antes do envio.
                    </p>
                  </div>

                </div>
              </div>
            )}
          </div>
        </div>





      </div>
    </div>
  );
};