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
  Award,
  AlertTriangle,
  HelpCircle,
  ExternalLink,
  BookMarked,
  ShoppingBag,
  FileText,
  Bookmark
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
  const [abaExplicacaoAberta, setAbaExplicacaoAberta] = useState(false);

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
        const naFilosofia = verbete.filosofia.questaoKant.toLowerCase().includes(query) ||
                            verbete.filosofia.pilarDisciplinar.toLowerCase().includes(query);
        if (!noTermo && !noResumo && !nasTags && !naCategoria && !noAutor && !naProfissao && !naFilosofia) {
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
      <section className="relative overflow-hidden bg-gradient-to-b from-[#011049] via-[#0A1435] to-slate-900 pt-14 pb-16 border-b border-blue-900/40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          {/* Badge Oficial */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-bold tracking-wide mb-6 shadow-lg shadow-amber-950/40 backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Espaço Autoral dos Alunos Nível Bronze</span>
            <span className="bg-amber-500/30 text-[10px] px-2 py-0.5 rounded font-black text-amber-200">MÉRITO CONCEITUAL</span>
          </div>

          {/* Título H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 leading-tight">
            Enciclowiki <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-cyan-300 to-emerald-400">ESDHUBEM</span>
          </h1>

          {/* Subtítulo Oficial */}
          <p className="text-base sm:text-xl text-blue-100/95 max-w-3xl mx-auto font-medium leading-relaxed mb-6">
            Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social.
          </p>

          <p className="text-xs sm:text-sm text-slate-300/85 max-w-2xl mx-auto leading-relaxed mb-8">
            A enciclopédia livre e participativa da ESDHUBEM onde estudantes certificados com o <strong>Selo Bronze</strong> publicam verbetes canônicos de 500 a 800 palavras sob rigor ético, método investigativo e fundamentação filosófica clássica.
          </p>

          {/* ======================================================== */}
          {/* ALERTA OBRIGATÓRIO: PESQUISE ANTES DE ESCREVER */}
          {/* ======================================================== */}
          <div className="max-w-3xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-amber-950/50 border border-amber-500/40 text-left shadow-xl">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                <strong className="text-amber-300 font-bold block mb-1">
                  Orientação aos Alunos: Pesquise no repositório antes de escrever seu verbete!
                </strong>
                Para preservar o rigor de uma enciclopédia canônica (estilo Wikipedia) e evitar duplicidades, <strong>cada conceito possui apenas um verbete oficial</strong>. Antes de redigir, digite o termo na busca abaixo. Se o termo já estiver cadastrado, explore um desdobramento correlato, um novo ângulo ou proponha outro conceito ainda inédito para garantir sua autoria pioneira.
              </div>
            </div>
          </div>

          {/* Barra de Busca Proeminente */}
          <div className="max-w-2xl mx-auto relative shadow-2xl rounded-2xl">
            <div className="relative flex items-center">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Verificar se o verbete já existe (ex: mapa mental, PICS, ciência cidadã)..."
                className="w-full bg-slate-800/95 hover:bg-slate-800 focus:bg-slate-800 border-2 border-amber-500/40 focus:border-cyan-400 text-white placeholder-slate-400 pl-12 pr-10 py-4 rounded-2xl text-sm sm:text-base focus:outline-hidden transition-all shadow-inner"
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
      {/* SEÇÃO PEDAGÓGICA: O QUE É O ALUNO BRONZE & OS 5 ESPAÇOS */}
      {/* ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-slate-800/80 border border-slate-700 rounded-3xl p-6 sm:p-10 shadow-xl mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black">
                <Award className="w-5 h-5" />
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  A Enciclowiki e o Sistema de Publicações da ESDHUBEM
                </h2>
                <p className="text-xs sm:text-sm text-slate-400">
                  Compreenda a diferença entre a Enciclowiki, o Blog, o Repositório de Artigos, a Biblioteca e a Livraria
                </p>
              </div>
            </div>

            <button
              onClick={() => setAbaExplicacaoAberta(!abaExplicacaoAberta)}
              className="text-xs font-bold text-cyan-400 hover:underline cursor-pointer"
            >
              {abaExplicacaoAberta ? 'Ocultar Detalhes [-]' : 'Ver Estrutura Completa [+]'}
            </button>
          </div>

          {/* Cards dos 5 Espaços de Conteúdo */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* 1. Enciclowiki */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300">
                    Selo Bronze
                  </span>
                  <BookOpen className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5">Enciclowiki</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Verbetes canônicos conceituais (500 a 800 palavras). Espaço exclusivo dos <strong>Alunos Bronze</strong> para catalogação pública de termos essenciais.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-amber-300 mt-3 pt-2 border-t border-amber-500/20">
                Você está aqui ✦
              </span>
            </div>

            {/* 2. Blog ESDHUBEM */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300">
                    Editorial
                  </span>
                  <FileText className="w-4 h-4 text-blue-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5">Blog ESDHUBEM</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Artigos informativos, tutoriais práticos e orientações metodológicas assinados pela coordenação e corpo docente da escola.
                </p>
              </div>
              <button
                onClick={() => onNavigate('blog')}
                className="text-[11px] font-semibold text-cyan-400 hover:underline mt-3 pt-2 border-t border-slate-700 text-left cursor-pointer"
              >
                Acessar Blog →
              </button>
            </div>

            {/* 3. Repositório de Artigos */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">
                    Bronze / Prata / Ouro
                  </span>
                  <GraduationCap className="w-4 h-4 text-emerald-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5">Repositório de Artigos</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Artigos científicos completos, monografias e ensaios com avaliação por pares e certificação de mérito progressivo.
                </p>
              </div>
              <button
                onClick={() => onNavigate('artigos')}
                className="text-[11px] font-semibold text-cyan-400 hover:underline mt-3 pt-2 border-t border-slate-700 text-left cursor-pointer"
              >
                Ver Artigos →
              </button>
            </div>

            {/* 4. Livros (Biblioteca Aberta) */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300">
                    Selo Diamante (Livre)
                  </span>
                  <BookMarked className="w-4 h-4 text-purple-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5">Livros Abertos</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Livros integrais de alunos com Certificado Diamante que optaram pela democratização e acesso livre e gratuito do conhecimento.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-purple-300 mt-3 pt-2 border-t border-slate-700">
                Acesso Gratuito
              </span>
            </div>

            {/* 5. Livraria ESDHUBEM */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                    Loja / Comercial
                  </span>
                  <ShoppingBag className="w-4 h-4 text-cyan-400" />
                </div>
                <h3 className="font-bold text-white text-sm mb-1.5">Livraria ESDHUBEM</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Vitrine e loja virtual de livros impressos e digitais comercializados, garantindo remuneração e royalties autorais aos criadores.
                </p>
              </div>
              <button
                onClick={() => onNavigate('livraria')}
                className="text-[11px] font-semibold text-cyan-400 hover:underline mt-3 pt-2 border-t border-slate-700 text-left cursor-pointer"
              >
                Visitar Livraria →
              </button>
            </div>

          </div>

          {/* ======================================================== */}
          {/* ESTRUTURA FILOSÓFICA OBRIGATÓRIA (KANT & OS 3 VERBOS) */}
          {/* ======================================================== */}
          <div className="mt-8 pt-8 border-t border-slate-700">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base sm:text-lg font-bold text-white">
                Diretriz de Escrita do Verbete: Fundamentação Filosófica de Kant & os Três Verbos
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Todo verbete da Enciclowiki ESDHUBEM deve ser redigido entre <strong>500 e 800 palavras</strong>, em formato contínuo e sem divisórias rebuscadas (seguindo a clareza da Wikipedia), devendo atender expressamente às questões consolidadas por <strong>Immanuel Kant</strong> e à postura crítica clássica:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              
              {/* Pilar 1: Metafísica */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <span className="text-[10px] font-black uppercase tracking-wider text-cyan-400 block mb-1">
                  Pilar Disciplinar 1
                </span>
                <h4 className="font-bold text-white text-sm mb-1">Metafísica</h4>
                <div className="text-xs text-slate-400 italic mb-2">"O que existe?"</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Investiga a natureza primordial da realidade, existência e a estrutura do ser do conceito analisado.
                </p>
              </div>

              {/* Pilar 2: Epistemologia */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-400 block mb-1">
                  Pilar Disciplinar 2
                </span>
                <h4 className="font-bold text-white text-sm mb-1">Epistemologia</h4>
                <div className="text-xs text-slate-400 italic mb-2">"O que posso saber? / Como sabemos?"</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Analisa a origem, os limites metodológicos e a validade científica do conhecimento formulado.
                </p>
              </div>

              {/* Pilar 3: Ética */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 block mb-1">
                  Pilar Disciplinar 3
                </span>
                <h4 className="font-bold text-white text-sm mb-1">Ética & Moral</h4>
                <div className="text-xs text-slate-400 italic mb-2">"O que devo fazer?"</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Examina os princípios do comportamento correto, responsabilidade clínica, justiça social e conduta.
                </p>
              </div>

              {/* Pilar 4: Estética & Antropologia */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80">
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-400 block mb-1">
                  Pilar Disciplinar 4
                </span>
                <h4 className="font-bold text-white text-sm mb-1">Estética & Antropologia</h4>
                <div className="text-xs text-slate-400 italic mb-2">"O que posso esperar? / O que é o homem?"</div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Explora o sentido da esperança, da arte, do gosto e o papel emancipatório do ser humano no mundo.
                </p>
              </div>

            </div>

            {/* Tríade de Verbos */}
            <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-500/30 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
              <span className="font-bold text-blue-200">
                A Tríade dos Três Verbos da Escrita Enciclopédica:
              </span>
              <div className="flex flex-wrap gap-4 text-slate-300">
                <span><strong>1. O que é?</strong> (Essência)</span>
                <span>•</span>
                <span><strong>2. Por que é?</strong> (Causa e justificativa)</span>
                <span>•</span>
                <span><strong>3. Como é?</strong> (Estrutura e funcionamento prático)</span>
              </div>
            </div>

          </div>

        </div>

        {/* ======================================================== */}
        {/* FILTROS: RÉGUA A-Z E CATEGORIAS TEMÁTICAS */}
        {/* ======================================================== */}
        
        {/* Navegador Alfabético A-Z */}
        <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-4 mb-8 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-amber-400" />
              <span>Índice Alfabético do Repositório (A–Z)</span>
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
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
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
                      ? 'bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/30 scale-105'
                      : temVerbetes
                      ? 'bg-slate-700/80 text-white hover:bg-amber-600/30 hover:border-amber-400/50 border border-transparent cursor-pointer'
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
              {verbetesFiltrados.length} {verbetesFiltrados.length === 1 ? 'verbete cadastrado' : 'verbetes cadastrados'}
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
            <h3 className="text-lg font-bold text-white mb-2">Nenhum verbete coincide com a pesquisa</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto mb-6">
              Este termo ainda não foi catalogado no repositório. Isso significa que ele está livre para uma nova publicação autoral por um aluno Bronze!
            </p>
            <button
              onClick={() => {
                setBusca('');
                setCategoriaAtiva('todas');
                setLetraAtiva('todas');
              }}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all cursor-pointer shadow-lg shadow-amber-500/20"
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
                className="group relative bg-slate-800/70 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-200 hover:shadow-xl hover:shadow-amber-950/30 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Topo do Card: Letra, Categoria e Badge de Selo Bronze */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 font-black text-sm flex items-center justify-center">
                        {verbete.letraInicial}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-slate-300 border border-slate-700/60 flex items-center gap-1.5">
                        {renderIconCategoria(verbete.categoriaId)}
                        <span className="truncate max-w-[170px]">{verbete.categoriaNome}</span>
                      </span>
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-400" />
                      <span>Aluno Bronze</span>
                    </span>
                  </div>

                  {/* Título do Verbete */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mb-2 leading-snug">
                    {verbete.termo}
                  </h3>

                  {/* Metadados de Autoria */}
                  <div className="text-xs text-slate-400 mb-3 flex flex-wrap items-center gap-x-2">
                    <span>Autor(a): <strong className="text-slate-200">{verbete.autorNome}</strong></span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 italic">{verbete.autorProfissao}</span>
                  </div>

                  {/* Enquadramento Kantiano */}
                  <div className="mb-4 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-[11px] text-cyan-300/90 font-mono">
                    <span className="text-slate-500 font-sans">Kant:</span> {verbete.filosofia.questaoKant}
                  </div>

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

                    <span className="inline-flex items-center gap-1 text-amber-400 font-bold group-hover:translate-x-1 transition-transform">
                      <span>Ler Verbete Estilo Wiki</span>
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
      {/* BANNER INFERIOR DE DIRETRIZES E CHAMADA PARA O ALUNO */}
      {/* ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-amber-950/40 via-slate-800 to-blue-950/60 border border-amber-500/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold mb-4">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Aula de Orientação & Submissão</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4 tracking-tight">
              Deseja publicar seu verbete e conquistar o Selo Bronze?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              Acesse as diretrizes pedagógicas da ESDHUBEM para aprender como estruturar sua pesquisa de 500 a 800 palavras, respondendo às 4 questões de Kant e aos três verbos clássicos, com citações ABNT e integridade investigativa.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('diretrizes-pedagogicas')}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/25 cursor-pointer flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-slate-950" />
                <span>Ver Diretrizes de Autoria & Avaliação</span>
              </button>

              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-cyan-300" />
                <span>Cursos com Formação Bronze</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
