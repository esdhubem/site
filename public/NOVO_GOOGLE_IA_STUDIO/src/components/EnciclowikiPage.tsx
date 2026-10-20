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
      {/* HERO SECTION DA ENCICLOWIKI (FUNDO BRANCO / CLARO)       */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/80 pt-12 pb-14 border-b border-slate-200">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          {/* Badge Oficial */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs sm:text-sm font-bold tracking-wide mb-5 shadow-xs">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Espaço Autoral dos Alunos Nível Bronze</span>
            <span className="bg-amber-200/80 text-[10px] px-2 py-0.5 rounded font-black text-amber-950">MÉRITO CONCEITUAL</span>
          </div>

          {/* Título H1 */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-3 leading-tight font-serif">
            Enciclowiki <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-700 to-emerald-700">ESDHUBEM</span>
          </h1>

          {/* Subtítulo Oficial */}
          <p className="text-base sm:text-xl text-slate-800 max-w-3xl mx-auto font-medium leading-relaxed mb-4">
            Conhecimento Vivo, Ciência Cidadã e Práticas de Bem-Estar Social.
          </p>

          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
            A enciclopédia livre e participativa da ESDHUBEM onde estudantes certificados com o <strong>Selo Bronze</strong> publicam verbetes canônicos concisos sob rigor ético, método investigativo e fundamentação filosófica clássica.
          </p>

          {/* ======================================================== */}
          {/* ALERTA OBRIGATÓRIO: PESQUISE ANTES DE ESCREVER */}
          {/* ======================================================== */}
          <div className="max-w-3xl mx-auto mb-8 p-4 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-300 text-left shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-200/80 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4 text-amber-800" />
              </div>
              <div className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                <strong className="text-amber-950 font-bold block mb-1">
                  Orientação aos Alunos: Pesquise no repositório antes de escrever seu verbete!
                </strong>
                Para preservar o rigor de uma enciclopédia canônica (estilo Wikipedia) e evitar duplicidades, <strong>cada conceito possui apenas um verbete oficial</strong>. Antes de redigir, digite o termo na busca abaixo. Se o termo já estiver cadastrado, explore um desdobramento correlato, um novo ângulo ou proponha outro conceito ainda inédito para garantir sua autoria pioneira.
              </div>
            </div>
          </div>

          {/* Barra de Busca Proeminente */}
          <div className="max-w-2xl mx-auto relative shadow-sm rounded-2xl">
            <div className="relative flex items-center">
              <input
                type="text"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Verificar se o verbete já existe (ex: mapa mental, PICS, ciência cidadã)..."
                className="w-full bg-white hover:bg-slate-50/80 focus:bg-white border-2 border-slate-300 focus:border-blue-600 text-slate-900 placeholder-slate-400 pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl text-sm sm:text-base focus:outline-hidden transition-all shadow-xs"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              {busca && (
                <button
                  onClick={() => setBusca('')}
                  className="absolute right-4 text-xs font-bold bg-slate-200 hover:bg-slate-300 text-slate-700 px-2 py-1 rounded-md transition-colors"
                >
                  Limpar
                </button>
              )}
            </div>

            {busca.trim() !== '' && (
              <div className="mt-2 text-xs text-left text-slate-600 flex items-center justify-between px-2">
                <span>
                  Status no repositório: <strong>{verbetesFiltrados.length}</strong> {verbetesFiltrados.length === 1 ? 'verbete coincide com sua busca' : 'verbetes coincidem com sua busca'}
                </span>
                {verbetesFiltrados.length === 0 && (
                  <span className="text-emerald-700 font-bold">✓ Termo livre para nova publicação autoral!</span>
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
        <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs mb-12">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black">
                <Award className="w-5 h-5 text-amber-700" />
              </span>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-serif">
                  A Enciclowiki e o Sistema de Publicações da ESDHUBEM
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Compreenda a diferença entre a Enciclowiki, o Blog, o Repositório de Artigos, a Biblioteca e a Livraria
                </p>
              </div>
            </div>

            <button
              onClick={() => setAbaExplicacaoAberta(!abaExplicacaoAberta)}
              className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
            >
              {abaExplicacaoAberta ? 'Ocultar Detalhes [-]' : 'Ver Estrutura Completa [+]'}
            </button>
          </div>

          {/* Cards dos 5 Espaços de Conteúdo */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            
            {/* 1. Enciclowiki */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border-2 border-amber-300 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-200 text-amber-900">
                    Selo Bronze
                  </span>
                  <BookOpen className="w-4 h-4 text-amber-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Enciclowiki</h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Verbetes canônicos conceituais (500 a 800 caracteres). Espaço exclusivo dos <strong>Alunos Bronze</strong> para catalogação pública de termos essenciais.
                </p>
              </div>
              <span className="text-[11px] font-bold text-amber-800 mt-3 pt-2 border-t border-amber-200">
                Você está aqui ✦
              </span>
            </div>

            {/* 2. Blog ESDHUBEM */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    Editorial
                  </span>
                  <FileText className="w-4 h-4 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Blog ESDHUBEM</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Artigos informativos, tutoriais práticos e orientações metodológicas assinados pela coordenação e corpo docente da escola.
                </p>
              </div>
              <button
                onClick={() => onNavigate('blog')}
                className="text-[11px] font-semibold text-blue-700 hover:underline mt-3 pt-2 border-t border-slate-200 text-left cursor-pointer"
              >
                Acessar Blog →
              </button>
            </div>

            {/* 3. Repositório de Artigos */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                    Bronze / Prata / Ouro
                  </span>
                  <GraduationCap className="w-4 h-4 text-emerald-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Repositório de Artigos</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Artigos científicos completos, monografias e ensaios com avaliação por pares e certificação de mérito progressivo.
                </p>
              </div>
              <button
                onClick={() => onNavigate('artigos')}
                className="text-[11px] font-semibold text-blue-700 hover:underline mt-3 pt-2 border-t border-slate-200 text-left cursor-pointer"
              >
                Ver Artigos →
              </button>
            </div>

            {/* 4. Livros (Biblioteca Aberta) */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                    Selo Diamante (Livre)
                  </span>
                  <BookMarked className="w-4 h-4 text-purple-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Livros Abertos</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Livros integrais de alunos com Certificado Diamante que optaram pela democratização e acesso livre e gratuito do conhecimento.
                </p>
              </div>
              <span className="text-[11px] font-semibold text-purple-700 mt-3 pt-2 border-t border-slate-200">
                Acesso Gratuito
              </span>
            </div>

            {/* 5. Livraria ESDHUBEM */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col justify-between shadow-2xs">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-cyan-100 text-cyan-800">
                    Loja / Comercial
                  </span>
                  <ShoppingBag className="w-4 h-4 text-cyan-600" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm mb-1.5">Livraria ESDHUBEM</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Vitrine e loja virtual de livros impressos e digitais comercializados, garantindo remuneração e royalties autorais aos criadores.
                </p>
              </div>
              <button
                onClick={() => onNavigate('livraria')}
                className="text-[11px] font-semibold text-blue-700 hover:underline mt-3 pt-2 border-t border-slate-200 text-left cursor-pointer"
              >
                Visitar Livraria →
              </button>
            </div>

          </div>

          {/* ======================================================== */}
          {/* ESTRUTURA FILOSÓFICA OBRIGATÓRIA (KANT & OS 3 VERBOS) */}
          {/* ======================================================== */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <Compass className="w-5 h-5 text-blue-700" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-serif">
                Diretriz de Escrita do Verbete: Fundamentação Filosófica de Kant & os Três Verbos
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              Para o modelo aprofundado, os verbetes da ESDHUBEM atendem às quatro indagações fundamentais consolidadas por <strong>Immanuel Kant</strong> e à postura crítica clássica:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              
              {/* Pilar 1: Metafísica */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 block mb-1">
                  Pilar Disciplinar 1
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Metafísica</h4>
                <div className="text-xs text-slate-500 italic mb-2">"O que existe?"</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Investiga a natureza primordial da realidade, existência e a estrutura do ser do conceito analisado.
                </p>
              </div>

              {/* Pilar 2: Epistemologia */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-black uppercase tracking-wider text-indigo-700 block mb-1">
                  Pilar Disciplinar 2
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Epistemologia</h4>
                <div className="text-xs text-slate-500 italic mb-2">"O que posso saber? / Como sabemos?"</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Analisa a origem, os limites metodológicos e a validade científica do conhecimento formulado.
                </p>
              </div>

              {/* Pilar 3: Ética */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-700 block mb-1">
                  Pilar Disciplinar 3
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Ética & Moral</h4>
                <div className="text-xs text-slate-500 italic mb-2">"O que devo fazer?"</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Examina os princípios do comportamento correto, responsabilidade clínica, justiça social e conduta.
                </p>
              </div>

              {/* Pilar 4: Estética & Antropologia */}
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-700 block mb-1">
                  Pilar Disciplinar 4
                </span>
                <h4 className="font-bold text-slate-900 text-sm mb-1">Estética & Antropologia</h4>
                <div className="text-xs text-slate-500 italic mb-2">"O que posso esperar? / O que é o homem?"</div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Explora o sentido da esperança, da arte, do gosto e o papel emancipatório do ser humano no mundo.
                </p>
              </div>

            </div>

            {/* Tríade de Verbos */}
            <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
              <span className="font-bold text-blue-950">
                A Tríade dos Três Verbos da Postura Filosófica:
              </span>
              <div className="flex flex-wrap gap-4 text-slate-700">
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
        <div className="bg-white border border-slate-200 rounded-2xl p-4 mb-8 shadow-xs">
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
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                      ? 'bg-slate-100 text-slate-800 hover:bg-amber-100 hover:text-amber-900 border border-slate-200 cursor-pointer'
                      : 'bg-slate-50 text-slate-300 cursor-not-allowed border border-slate-100'
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

        {/* ======================================================== */}
        {/* LISTAGEM DOS VERBETES / CARDS ENCICLOPÉDICOS */}
        {/* ======================================================== */}
        {verbetesFiltrados.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-dashed border-slate-300 p-8">
            <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-800 mb-2 font-serif">Nenhum verbete coincide com a pesquisa</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
              Este termo ainda não foi catalogado no repositório. Isso significa que ele está livre para uma nova publicação autoral por um aluno Bronze!
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verbetesFiltrados.map(verbete => (
              <article
                key={verbete.id}
                onClick={() => onSelectVerbete(verbete.id)}
                className="group relative bg-white hover:bg-slate-50/70 border border-slate-200 hover:border-amber-400 rounded-2xl p-6 transition-all duration-200 hover:shadow-md flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Topo do Card: Letra, Categoria e Badge de Selo Bronze */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-amber-100 border border-amber-300 text-amber-900 font-black text-sm flex items-center justify-center">
                        {verbete.letraInicial}
                      </span>
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1.5">
                        {renderIconCategoria(verbete.categoriaId)}
                        <span className="truncate max-w-[170px]">{verbete.categoriaNome}</span>
                      </span>
                    </div>

                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300 flex items-center gap-1">
                      <Award className="w-3 h-3 text-amber-700" />
                      <span>Aluno Bronze</span>
                    </span>
                  </div>

                  {/* Título do Verbete */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-800 transition-colors mb-2 leading-snug font-serif">
                    {verbete.termo}
                  </h3>

                  {/* Metadados de Autoria */}
                  <div className="text-xs text-slate-500 mb-3 flex flex-wrap items-center gap-x-2">
                    <span>Autor(a): <strong className="text-slate-800">{verbete.autorNome}</strong></span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-600 italic">{verbete.autorProfissao}</span>
                  </div>

                  {/* Enquadramento Kantiano */}
                  <div className="mb-4 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-[11px] text-slate-700 font-mono">
                    <span className="text-slate-500 font-sans">Kant:</span> {verbete.filosofia.questaoKant}
                  </div>

                  {/* Resumo Direto */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                    {verbete.textoAlunoParagrafo || verbete.resumoDireto}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {verbete.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
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
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
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
      </section>

      {/* ======================================================== */}
      {/* BANNER INFERIOR DE DIRETRIZES E CHAMADA PARA O ALUNO */}
      {/* ======================================================== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-amber-50 via-slate-50 to-blue-50 border border-slate-200 p-8 sm:p-12 shadow-xs relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-4">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>Aula de Orientação & Submissão</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight font-serif">
              Deseja publicar seu verbete e conquistar o Selo Bronze?
            </h2>

            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              Acesse as diretrizes pedagógicas da ESDHUBEM para aprender como estruturar sua pesquisa concisa de 500 a 800 caracteres, respondendo à essência do conceito, com citação ABNT e integridade investigativa.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('diretrizes-pedagogicas')}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all shadow-xs cursor-pointer flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-slate-950" />
                <span>Ver Diretrizes de Autoria & Avaliação</span>
              </button>

              <button
                onClick={() => onNavigate('catalogo-cursos')}
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-xs sm:text-sm border border-slate-300 transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
              >
                <BookOpen className="w-4 h-4 text-blue-700" />
                <span>Cursos com Formação Bronze</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
