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
  Clock,
  Tag,
  Award
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
        const noAutor = verbete.autorNome.toLowerCase().includes(query);
        const naProfissao = verbete.autorProfissao.toLowerCase().includes(query);
        if (!noTermo && !noResumo && !nasTags && !naCategoria && !noAutor && !naProfissao) {
          return false;
        }
      }

      return true;
    });
  }, [busca, categoriaAtiva, letraAtiva]);

  const renderIconCategoria = (catId: string) => {
    switch (catId) {
      case 'saude-integrativa':
        return <HeartPulse className="w-4 h-4 text-emerald-600" />;
      case 'desenvolvimento-humano':
        return <Compass className="w-4 h-4 text-blue-600" />;
      case 'ciencia-cidada':
        return <Microscope className="w-4 h-4 text-indigo-600" />;
      case 'tecnologia-escrever':
        return <Network className="w-4 h-4 text-amber-600" />;
      case 'bem-estar-social':
        return <Users className="w-4 h-4 text-rose-600" />;
      default:
        return <BookOpen className="w-4 h-4 text-sky-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased">
      
      {/* ======================================================== */}
      {/* HERO SECTION DA ENCICLOWIKI (FUNDO AZUL ESCURO OFICIAL)   */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#011049] via-[#0A1435] to-[#011049] pt-14 pb-16 border-b border-blue-900/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          {/* Badge Oficial */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-400/15 border border-slate-300/30 text-slate-200 text-xs sm:text-sm font-bold tracking-wide mb-5 shadow-lg shadow-blue-950/40 backdrop-blur-md">
            <Award className="w-4 h-4 text-slate-300" />
            <span>1ª Prateleira de Publicação • Autores Nível Prata</span>
            <span className="bg-slate-300/20 text-[10px] px-2 py-0.5 rounded font-black text-slate-100">SELOS DE AUTORIA</span>
          </div>

          {/* Título H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-3 leading-tight font-serif">
            Enciclowiki <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-400">ESDHUBEM</span>
          </h1>

          {/* Subtítulo Oficial */}
          <p className="text-base sm:text-xl text-blue-100/95 max-w-3xl mx-auto font-medium leading-relaxed mb-4">
            Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social.
          </p>

          <p className="text-xs sm:text-sm text-slate-300/85 max-w-2xl mx-auto leading-relaxed mb-8">
            A enciclopédia viva da ESDHUBEM onde estudantes que avançaram para o <strong>Selo Prata</strong> publicam verbetes canônicos estruturados (500 a 800 palavras) amigáveis ao Google (SEO), sob rigor ético, método investigativo e fundamentação epistemológica.
          </p>

          {/* Barra de Busca Proeminente */}
          <div className="max-w-2xl mx-auto relative shadow-2xl rounded-2xl">
            <div className="relative flex items-center">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Pesquisar verbetes (ex: mapa mental, PICS, ciência cidadã)..."
                className="w-full bg-slate-800/95 hover:bg-slate-800 focus:bg-slate-800 border-2 border-amber-500/40 focus:border-cyan-400 text-white placeholder-slate-400 pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base focus:outline-hidden transition-all shadow-inner"
              />
              <Search className="w-5 h-5 text-amber-400 absolute left-4 pointer-events-none" />
              {busca && (
                <button
                  onClick={() => setBusca('')}
                  className="absolute right-4 text-xs font-bold bg-slate-700 hover:bg-slate-600 text-slate-300 px-2 py-1 rounded-md transition-colors"
                >
                  Limpar
                </button>
              )}
            </div>

            {busca.trim() !== '' && (
              <div className="mt-2 text-xs text-left text-slate-300 flex items-center justify-between px-2">
                <span>
                  Status no repositório: <strong>{verbetesFiltrados.length}</strong> {verbetesFiltrados.length === 1 ? 'verbete coincide com sua busca' : 'verbetes coincidem com sua busca'}
                </span>
                {verbetesFiltrados.length === 0 && (
                  <span className="text-emerald-400 font-bold">✓ Termo livre para nova publicação autoral!</span>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SEÇÃO PRINCIPAL DE VERBETES (FUNDO BRANCO)               */}
      {/* ======================================================== */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Navegador Alfabético A-Z */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 mb-8 shadow-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-amber-600" />
                <span>Índice Alfabético do Repositório (A–Z)</span>
              </span>
              {letraAtiva !== 'todas' && (
                <button
                  onClick={() => setLetraAtiva('todas')}
                  className="text-xs text-blue-700 hover:underline font-semibold"
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
                    ? 'bg-amber-500 text-slate-950 shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
                        ? 'bg-amber-500 text-slate-950 font-black shadow-xs scale-105'
                        : temVerbetes
                        ? 'bg-white text-slate-800 hover:bg-amber-100 hover:text-amber-900 border border-slate-200 cursor-pointer'
                        : 'bg-slate-100 text-slate-300 cursor-not-allowed border border-slate-100'
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
              <h2 className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                <span>Filtrar por Eixo Temático</span>
              </h2>
              <span className="text-xs text-slate-500">
                {verbetesFiltrados.length} {verbetesFiltrados.length === 1 ? 'verbete cadastrado' : 'verbetes cadastrados'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => setCategoriaAtiva('todas')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  categoriaAtiva === 'todas'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
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
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {renderIconCategoria(cat.id)}
                    <span>{cat.nome}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                      isSelected ? 'bg-blue-800 text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Listagem dos Verbetes / Cards Enciclopédicos */}
          {verbetesFiltrados.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300 p-8">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800 mb-2 font-serif">Nenhum verbete coincide com a pesquisa</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Este termo ainda não foi catalogado no repositório.
              </p>
              <button
                onClick={() => {
                  setBusca('');
                  setCategoriaAtiva('todas');
                  setLetraAtiva('todas');
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all cursor-pointer shadow-xs"
              >
                Redefinir Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
              {verbetesFiltrados.map(verbete => (
                <article
                  key={verbete.id}
                  onClick={() => onSelectVerbete(verbete.id)}
                  className="group relative bg-slate-100/90 hover:bg-slate-200/70 border-2 border-slate-200/90 hover:border-amber-400 rounded-2xl p-6 transition-all duration-200 shadow-xs hover:shadow-lg flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    {/* Topo do Card: Letra, Categoria e Badge de Selo Bronze */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 text-amber-950 font-black text-sm flex items-center justify-center shadow-2xs">
                          {verbete.letraInicial}
                        </span>
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-slate-800 border border-slate-300 flex items-center gap-1.5 shadow-2xs">
                          {renderIconCategoria(verbete.categoriaId)}
                          <span className="truncate max-w-[170px]">{verbete.categoriaNome}</span>
                        </span>
                      </div>

                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-200 text-slate-800 border border-slate-300 flex items-center gap-1 shadow-2xs">
                        <Award className="w-3 h-3 text-slate-600" />
                        <span>Aluno Prata</span>
                      </span>
                    </div>

                    {/* Título do Verbete */}
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-2 leading-snug font-serif">
                      {verbete.termo}
                    </h3>

                    {/* Metadados de Autoria */}
                    <div className="text-xs text-slate-600 mb-3 flex flex-wrap items-center gap-x-2">
                      <span>Autor(a): <strong className="text-slate-900">{verbete.autorNome}</strong></span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-600 italic">{verbete.autorProfissao}</span>
                    </div>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {verbete.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-300 shadow-2xs"
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
                    <div className="pt-4 border-t border-slate-300/80 flex items-center justify-between text-xs text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{verbete.tempoLeitura}</span>
                      </span>

                      <span className="inline-flex items-center gap-1 text-blue-700 font-bold group-hover:translate-x-1 transition-transform">
                        <span>Ler Verbete</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
};
