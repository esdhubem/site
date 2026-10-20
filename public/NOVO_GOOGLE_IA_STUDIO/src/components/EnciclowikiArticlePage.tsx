import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Copy,
  Check,
  Share2,
  Clock,
  Tag,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Layers,
  HeartPulse,
  Compass,
  Microscope,
  Network,
  Users
} from 'lucide-react';
import { ENCICLOWIKI_VERBETES, EnciclowikiVerbete } from '../data/enciclowikiData';

interface EnciclowikiArticlePageProps {
  verbeteId: string;
  onBack: () => void;
  onSelectVerbete: (verbeteId: string) => void;
  onNavigate: (page: string) => void;
}

export const EnciclowikiArticlePage: React.FC<EnciclowikiArticlePageProps> = ({
  verbeteId,
  onBack,
  onSelectVerbete,
  onNavigate
}) => {
  const [copiado, setCopiado] = useState(false);

  const verbete = ENCICLOWIKI_VERBETES.find(v => v.id === verbeteId) || ENCICLOWIKI_VERBETES[0];

  const handleCopiarCitacao = () => {
    navigator.clipboard.writeText(verbete.citacaoAbnt);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

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
    <div className="min-h-screen bg-slate-900 text-slate-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* ======================================================== */}
        {/* BREADCRUMB & BOTÃO VOLTAR */}
        {/* ======================================================== */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar para a Enciclowiki</span>
          </button>

          <nav className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500">
            <button onClick={() => onNavigate('inicio')} className="hover:text-slate-300">Início</button>
            <ChevronRight className="w-3 h-3" />
            <button onClick={onBack} className="hover:text-slate-300">Enciclowiki</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-cyan-400 truncate max-w-[180px]">{verbete.termo}</span>
          </nav>
        </div>

        {/* ======================================================== */}
        {/* CABEÇALHO DO VERBETE */}
        {/* ======================================================== */}
        <header className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-10 mb-8 shadow-xl">
          <div className="flex flex-wrap items-center gap-2.5 mb-4">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-700 flex items-center gap-1.5">
              {renderIconCategoria(verbete.categoriaId)}
              <span>{verbete.categoriaNome}</span>
            </span>

            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20">
              Nível: {verbete.nivel}
            </span>

            <span className="text-xs text-slate-400 flex items-center gap-1 ml-auto">
              <Clock className="w-3.5 h-3.5" />
              <span>{verbete.tempoLeitura} de leitura</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4 leading-tight">
            {verbete.termo}
          </h1>

          {verbete.etimologiaOuOrigem && (
            <p className="text-xs sm:text-sm text-cyan-300/90 font-mono bg-cyan-950/40 border border-cyan-800/40 rounded-xl px-4 py-2.5 mb-6">
              <strong>Etimologia & Origem:</strong> {verbete.etimologiaOuOrigem}
            </p>
          )}

          {/* Featured Snippet (Definição Rápida) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-emerald-950/40 border-l-4 border-emerald-500 shadow-inner">
            <h2 className="text-xs font-black uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Síntese Enciclopédica (Definição Rápida)</span>
            </h2>
            <p className="text-sm sm:text-base text-emerald-100/95 font-medium leading-relaxed m-0">
              {verbete.resumoDireto}
            </p>
          </div>

          {/* Metadados do Autor e Data */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-6 border-t border-slate-700/60 text-xs text-slate-400">
            <div>
              <span className="text-slate-500">Verbete catalogado por: </span>
              <strong className="text-slate-200">{verbete.autor}</strong>
            </div>
            <div>
              <span>Última revisão: </span>
              <strong className="text-slate-300">{verbete.dataAtualizacao}</strong>
            </div>
          </div>
        </header>

        {/* ======================================================== */}
        {/* CORPO DO ARTIGO ENCICLOPÉDICO */}
        {/* ======================================================== */}
        <div className="space-y-8">
          {/* Seção 1: Definição Conceitual Fundamentada */}
          <section className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 text-sm font-black flex items-center justify-center">1</span>
              <span>Definição Conceitual & Fundamentação</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {verbete.conteudo.definicao}
            </p>
          </section>

          {/* Seção 2: Contexto Histórico e Científico */}
          <section className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 text-sm font-black flex items-center justify-center">2</span>
              <span>Contexto Histórico & Científico</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {verbete.conteudo.historico}
            </p>
          </section>

          {/* Seção 3: Princípios Operacionais e Funcionamento */}
          <section className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 text-sm font-black flex items-center justify-center">3</span>
              <span>Princípios Estruturais & Funcionamento</span>
            </h2>
            <ul className="space-y-3">
              {verbete.conteudo.principios.map((principio, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{principio}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Seção 4: Impacto Biopsicossocial */}
          <section className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 text-sm font-black flex items-center justify-center">4</span>
              <span>Impacto Biopsicossocial & Relevância</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {verbete.conteudo.impactoBiopsicossocial}
            </p>
          </section>

          {/* Seção 5: Aplicações Práticas */}
          <section className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-blue-600/30 text-blue-400 text-sm font-black flex items-center justify-center">5</span>
              <span>Aplicações Práticas no Estudo, Pesquisa e Cotidiano</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {verbete.conteudo.aplicacoes.map((app, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-2.5">
                  <span className="text-cyan-400 font-bold text-xs mt-0.5">✦</span>
                  <p className="text-xs sm:text-sm text-slate-300 m-0 leading-relaxed">{app}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pontos de Atenção / Limitações (se houver) */}
          {verbete.conteudo.pontosAtencao && (
            <section className="p-6 rounded-2xl bg-amber-950/30 border border-amber-500/40">
              <h3 className="text-sm font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span>⚠️ Pontos de Atenção & Delimitação de Uso</span>
              </h3>
              <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed m-0">
                {verbete.conteudo.pontosAtencao}
              </p>
            </section>
          )}

          {/* ======================================================== */}
          {/* VERBETES RELACIONADOS (NAVEGAÇÃO EM TEIA) */}
          {/* ======================================================== */}
          <section className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 sm:p-8">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Verbetes e Conceitos Conectados</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {verbete.verbetesRelacionados.map(rel => (
                <button
                  key={rel.id}
                  onClick={() => onSelectVerbete(rel.id)}
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-cyan-400/60 text-left transition-all cursor-pointer group"
                >
                  <div className="text-[10px] text-slate-400 uppercase font-semibold mb-1 truncate">{rel.categoriaNome}</div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span className="truncate">{rel.termo}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-cyan-400 shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* ======================================================== */}
          {/* CAIXA DE CITAÇÃO ABNT (COPIAR COM 1 CLIQUE) */}
          {/* ======================================================== */}
          <section className="bg-slate-900 border-2 border-dashed border-cyan-500/40 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-black uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Como Citar este Verbete (Padrão ABNT NBR 6023)</span>
              </span>

              <button
                onClick={handleCopiarCitacao}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-95"
              >
                {copiado ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Citação Copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Citação ABNT</span>
                  </>
                )}
              </button>
            </div>

            <p className="text-xs text-slate-300 font-mono bg-slate-950/70 p-4 rounded-xl border border-slate-800 leading-relaxed select-all">
              {verbete.citacaoAbnt}
            </p>
          </section>

          {/* ======================================================== */}
          {/* REFERÊNCIAS BIBLIOGRÁFICAS */}
          {/* ======================================================== */}
          <section className="bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Referências Científicas e Bibliografia Consultada
            </h3>
            <ul className="space-y-3">
              {verbete.referencias.map((ref, idx) => (
                <li key={idx} className="text-xs text-slate-300 font-mono leading-relaxed pl-3 border-l-2 border-slate-600">
                  <strong>{ref.author}</strong>. <em>{ref.title}</em>. {ref.source}, {ref.year}.
                  {ref.doiOrUrl && (
                    <a
                      href={ref.doiOrUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline ml-1 inline-flex items-center gap-1"
                    >
                      <span>[Acessar Fonte]</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Rodapé de Navegação */}
        <div className="mt-12 pt-6 border-t border-slate-700/80 flex items-center justify-between">
          <button
            onClick={onBack}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs sm:text-sm border border-slate-700 transition-all cursor-pointer flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retornar ao Índice da Enciclowiki</span>
          </button>

          <button
            onClick={() => onNavigate('diretrizes-pedagogicas')}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-lg shadow-cyan-500/25 flex items-center gap-2"
          >
            <GraduationCap className="w-4 h-4 text-slate-950" />
            <span>Diretrizes Pedagógicas</span>
          </button>
        </div>
      </div>
    </div>
  );
};
