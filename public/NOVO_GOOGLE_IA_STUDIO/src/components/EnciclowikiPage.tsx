import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Sparkles,
  HeartPulse,
  Compass,
  Microscope,
  Network,
  Users,
  ArrowRight,
  Filter,
  Layers,
  GraduationCap,
  Scale,
  Clock,
  Tag,
  CheckCircle2,
  Share2,
  FileText
} from 'lucide-react';
import {
  ENCICLOWIKI_CATEGORIAS,
  ENCICLOWIKI_VERBETES,
  EnciclowikiVerbete,
  EnciclowikiCategoria
} from '../data/enciclowikiData';

interface EnciclowikiPageProps {
  onSelectVerbete: (verbeteId: string) => void;
  onNavigate: (page: string) => void;
}

const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const EnciclowikiPage: React.FC<EnciclowikiPageProps> = ({
  onSelectVerbete,
  onNavigate
}) => {
  const [busca, setBusca] = useState('');
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todas');
  const [letraAtiva, setLetraAtiva] = useState<string>('todas');

  // Letras que possuem verbetes cadastrados
  const letrasDisponiveis = useMemo(() => {
    const setLetras = new Set(ENCICLOWIKI_VERBETES.map(v => v.letraInicial.toUpperCase()));
    return setLetras;
  }, []);

  // Filtragem dinâmica
  const verbetesFiltrados = useMemo(() => {
    return ENCICLOWIKI_VERBETES.filter(verbete => {
      // Filtro de Categoria
      if (categoriaAtiva !== 'todas' && verbete.categoriaId !== categoriaAtiva) {
        return false;
      }

      // Filtro de Letra
      if (letraAtiva !== 'todas' && verbete.letraInicial.toUpperCase() !== letraAtiva) {
        return false;
      }

      // Filtro de Busca
      if (busca.trim() !== '') {
        const query = busca.toLowerCase();
        const noTermo = verbete.termo.toLowerCase().includes(query);
        const noResumo = verbete.resumoDireto.toLowerCase().includes(query);
        const nasTags = verbete.tags.some(tag => tag.toLowerCase().includes(query));
        const naCategoria = verbete.categoriaNome.toLowerCase().includes(query);
        if (!noTermo && !noResumo && !nasTags && !naCategoria) {
          return false;
        }
      }

      return true;
    });
  }, [busca, categoriaAtiva, letraAtiva]);

  const renderIconCategoria = (catId: string) => {
    switch (catId) {
      case 'saude-integrativa':
        return <HeartPulse className="w-4 h-4 text-emerald-400" />;
      case 'desenvolvimento-humano':
        return <Compass className="w-4 h-4 text-blue-400" />;
      case 'ciencia-cidada':
        return <Microscope className="w-4 h-4 text-indigo-400" />;
      case 'tecnologia-escrever':
        return <Network className="w-4 h-4 text-amber-400" />;
      case 'bem-estar-social':
        return <Users className="w-4 h-4 text-rose-400" />;
      default:
        return <BookOpen className="w-4 h-4 text-sky-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* ======================================================== */}
      {/* HERO SECTION DA ENCICLOWIKI */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#011049] via-[#0A1435] to-slate-900 pt-16 pb-20 border-b border-blue-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Badge Oficial */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-lg shadow-emerald-950/40 backdrop-blur-md">
            <BookOpen className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Enciclopédia Aberta da ESDHUBEM</span>
            <span className="bg-emerald-500/30 text-[10px] px-2 py-0.5 rounded font-black text-emerald-200">OFICIAL</span>
          </div>

          {/* Título H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
            Enciclowiki <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-emerald-400">ESDHUBEM</span>
          </h1>

          {/* Subtítulo Oficial Escolhido */}
          <p className="text-base sm:text-xl text-blue-100/90 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social.
          </p>

          <p className="text-xs sm:text-sm text-slate-300/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Um repositório público e formativo de conceitos, metodologias investigativas, práticas integrativas e tecnologias reflexivas desenvolvidas para democratizar o saber com rigor ético e autoral.
          </p>

          {/* Barra de Busca Proeminente */}
          <div className="max-w-2xl mx-auto relative shadow-2xl rounded-2xl">
            <div className="relative flex items-center">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar verbetes (ex: mapa mental, PICS, ciência cidadã, autoria)..."
                className="w-full bg-slate-800/90 hover:bg-slate-800 focus:bg-slate-800 border-2 border-blue-500/40 focus:border-cyan-400 text-white placeholder-slate-400 pl-12 pr-10 py-4 rounded-2xl text-sm sm:text-base focus:outline-hidden transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-cyan-400 absolute left-4 pointer-events-none" />
              {busca && (
                <button
                  onClick={() => setBusca('')}
                  className="absolute right-4 text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-300 px-2 py-1 rounded-md transition-colors"
                >
                  Limpar
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* FILTROS: RÉGUA A-Z E CATEGORIAS TEMÁTICAS */}
      {/* ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Navegador Alfabético A-Z */}
        <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-4 mb-8 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-cyan-400" />
              <span>Índice Alfabético (Glossário A–Z)</span>
            </span>
            {letraAtiva !== 'todas' && (
              <button
                onClick={() => setLetraAtiva('todas')}
                className="text-xs text-cyan-400 hover:underline font-semibold"
              >
                Limpar letra ({letraAtiva})
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setLetraAtiva('todas')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                letraAtiva === 'todas'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'bg-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white'
              }`}
            >
              TODOS
            </button>
            {ALFABETO.map(letra => {
              const temVerbetes = letrasDisponiveis.has(letra);
              const isSelected = letraAtiva === letra;
              return (
                <button
                  key={letra}
                  disabled={!temVerbetes}
                  onClick={() => setLetraAtiva(letra)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all flex items-center justify-center ${
                    isSelected
                      ? 'bg-cyan-500 text-slate-950 font-black shadow-md shadow-cyan-500/30 scale-105'
                      : temVerbetes
                      ? 'bg-slate-700/80 text-white hover:bg-cyan-600/30 hover:border-cyan-400/50 border border-transparent cursor-pointer'
                      : 'bg-slate-800/40 text-slate-600 cursor-not-allowed border border-slate-800'
                  }`}
                  title={temVerbetes ? `Ver verbetes com a letra ${letra}` : `Nenhum verbete com a letra ${letra}`}
                >
                  {letra}
                </button>
              );
            })}
          </div>
        </div>

        {/* Eixos Temáticos / Categorias */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Filtrar por Eixo Temático</span>
            </h2>
            <span className="text-xs text-slate-400">
              {verbetesFiltrados.length} {verbetesFiltrados.length === 1 ? 'verbete encontrado' : 'verbetes encontrados'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <button
              onClick={() => setCategoriaAtiva('todas')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                categoriaAtiva === 'todas'
                  ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30 ring-2 ring-blue-500/20'
                  : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-750 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Todos os Eixos ({ENCICLOWIKI_VERBETES.length})</span>
            </button>

            {ENCICLOWIKI_CATEGORIAS.map(cat => {
              const count = ENCICLOWIKI_VERBETES.filter(v => v.categoriaId === cat.id).length;
              const isSelected = categoriaAtiva === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaAtiva(cat.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-400 shadow-md shadow-blue-600/30 ring-2 ring-blue-500/20'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-750 hover:text-white'
                  }`}
                >
                  {renderIconCategoria(cat.id)}
                  <span>{cat.nome}</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-900/60 font-black text-slate-300">
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ======================================================== */}
        {/* LISTAGEM DOS VERBETES / CARDS ENCICLOPÉDICOS */}
        {/* ======================================================== */}
        {verbetesFiltrados.length === 0 ? (
          <div className="text-center py-16 bg-slate-800/40 rounded-3xl border border-dashed border-slate-700 p-8">
            <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Nenhum verbete encontrado</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
              Não encontramos verbetes para os critérios selecionados. Tente buscar por outros termos ou limpe os filtros.
            </p>
            <button
              onClick={() => {
                setBusca('');
                setCategoriaAtiva('todas');
                setLetraAtiva('todas');
              }}
              className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
            >
              Redefinir Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verbetesFiltrados.map(verbete => (
              <article
                key={verbete.id}
                onClick={() => onSelectVerbete(verbete.id)}
                className="group relative bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Topo do Card: Letra, Categoria e Badge de Destaque */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 font-black text-sm flex items-center justify-center">
                        {verbete.letraInicial}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700/60 flex items-center gap-1.5">
                        {renderIconCategoria(verbete.categoriaId)}
                        <span className="truncate max-w-[200px]">{verbete.categoriaNome}</span>
                      </span>
                    </div>

                    {verbete.destaque && (
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Destaque</span>
                      </span>
                    )}
                  </div>

                  {/* Título do Verbete */}
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 leading-snug">
                    {verbete.termo}
                  </h3>

                  {/* Resumo Direto */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {verbete.resumoDireto}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {verbete.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-900/60 text-slate-400 border border-slate-800"
                      >
                        #{tag}
                      </span>
                    ))}
                    {verbete.tags.length > 3 && (
                      <span className="text-[11px] text-slate-500 self-center">
                        +{verbete.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Rodapé do Card */}
                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{verbete.tempoLeitura}</span>
                    </span>

                    <span className="inline-flex items-center gap-1 text-cyan-400 font-bold group-hover:translate-x-1 transition-transform">
                      <span>Explorar Verbete</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ======================================================== */}
      {/* BANNER INSTITUCIONAL: CIÊNCIA CIDADÃ E RIGOR ÉTICO */}
      {/* ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/80 via-slate-800 to-indigo-950/80 border border-blue-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
              <Microscope className="w-3.5 h-3.5 text-cyan-400" />
              <span>Manifesto da Enciclowiki</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
              Conhecimento que liberta, investiga e transforma
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              A <strong>Enciclowiki ESDHUBEM</strong> nasceu para desafiar o elitismo acadêmico tradicional sem abrir mão do rigor de evidências. Cada verbete é elaborado com base em referenciais científicos consolidados, práticas integrativas reconhecidas e diretrizes éticas que colocam o florescimento humano no centro do saber.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('diretrizes-pedagogicas')}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-slate-950" />
                <span>Conhecer Diretrizes Pedagógicas</span>
              </button>

              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-cyan-300" />
                <span>Explorar Cursos da Escola</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
