import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Info,
  Award,
  User,
  Compass,
  FileText,
  Search,
  List,
  Layers,
  BookMarked
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
  const [mostrarIndice, setMostrarIndice] = useState(true);

  const verbete = ENCICLOWIKI_VERBETES.find(v => v.id === verbeteId) || ENCICLOWIKI_VERBETES[0];

  const handleCopiarCitacao = () => {
    navigator.clipboard.writeText(verbete.citacaoAbnt);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#202122] font-sans antialiased py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* ======================================================== */}
        {/* BARRA SUPERIOR DE NAVEGAÇÃO & IDENTIFICAÇÃO DE PRATELEIRA */}
        {/* ======================================================== */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-3 border-b border-slate-300 text-xs sm:text-sm">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 font-semibold text-[#0645ad] hover:text-[#0b0080] hover:underline cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            <span>← Voltar ao Índice da Enciclowiki</span>
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/90 border border-slate-300 text-xs font-bold text-slate-800">
            <Award className="w-3.5 h-3.5 text-slate-600" />
            <span>1ª Prateleira • Verbete Canônico Nível Prata</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO PADRÃO ENCICLOPÉDIA DA ESCOLA (CANÔNICO WIKIPEDIA / NÍVEL PRATA)  */}
        {/* ========================================================================= */}
        <article className="bg-white border border-[#a2a9b1] rounded-xs p-6 sm:p-10 shadow-xs relative">
            
            {/* Cabeçalho do Verbete: H1 Clássico com Linha Divisória */}
            <header className="mb-6 border-b border-[#a2a9b1] pb-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#000000] font-normal tracking-tight mb-1">
                {verbete.termo}
              </h1>
              <p className="text-xs text-slate-500 italic m-0">
                Origem: Enciclowiki ESDHUBEM, a enciclopédia livre do desenvolvimento humano e bem-estar social.
              </p>
            </header>

            {/* Ficha Técnica Lateral (Wikipedia Infobox) */}
            <aside className="sm:float-right sm:w-80 sm:ml-6 sm:mb-6 mb-6 border border-[#a2a9b1] bg-[#f8f9fa] rounded-xs text-xs text-slate-800 shadow-2xs">
              <div className="bg-[#eaecf0] border-b border-[#a2a9b1] px-3 py-2 text-center font-bold font-serif text-sm text-[#202122]">
                {verbete.termo}
              </div>

              <div className="p-3 divide-y divide-slate-200">
                <div className="py-2 flex flex-col gap-0.5">
                  <span className="font-bold text-slate-600 text-[11px] uppercase tracking-wider">Eixo Temático</span>
                  <span className="font-medium text-[#0645ad]">{verbete.categoriaNome}</span>
                </div>

                <div className="py-2 flex flex-col gap-0.5">
                  <span className="font-bold text-slate-600 text-[11px] uppercase tracking-wider">Autoria & Certificação</span>
                  <div className="font-medium text-slate-900">{verbete.autorNome}</div>
                  <div className="text-[11px] text-slate-600">{verbete.autorProfissao}</div>
                  <div className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 mt-0.5">
                    <Award className="w-3 h-3 text-slate-500" />
                    <span>Selo de Mérito Prata • Autor ESDHUBEM</span>
                  </div>
                  {verbete.autorPerfilUrl && (
                    <a
                      href={verbete.autorPerfilUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0645ad] hover:underline text-[11px] font-medium inline-flex items-center gap-1 mt-1"
                    >
                      <span>Ver perfil / portfólio ↗</span>
                    </a>
                  )}
                </div>

                {/* Enquadramento Filosófico */}
                <div className="py-2 flex flex-col gap-1.5 bg-amber-50/40 -mx-3 px-3">
                  <span className="font-bold text-amber-900 text-[11px] uppercase tracking-wider flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-amber-700" />
                    <span>Enquadramento Filosófico</span>
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div>
                      <strong className="text-slate-700">Questão de Kant:</strong>{' '}
                      <span className="text-slate-900 italic">{verbete.filosofia.questaoKant}</span>
                    </div>
                    <div>
                      <strong className="text-slate-700">Pilar Disciplinar:</strong>{' '}
                      <span className="text-slate-900">{verbete.filosofia.pilarDisciplinar}</span>
                    </div>
                    <div className="pt-1 border-t border-amber-200/60 mt-1">
                      <span className="font-bold text-slate-700 block mb-0.5">Tríade Clássica:</span>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-800 pl-1">
                        <li><strong>O que é? (Essência):</strong> {verbete.filosofia.essencia}</li>
                        <li><strong>Por que é? (Causa):</strong> {verbete.filosofia.causa}</li>
                        <li><strong>Como é? (Estrutura):</strong> {verbete.filosofia.estrutura}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {verbete.etimologiaOuOrigem && (
                  <div className="py-2 flex flex-col gap-0.5">
                    <span className="font-bold text-slate-600 text-[11px] uppercase tracking-wider">Etimologia & Origem</span>
                    <span className="text-slate-700 text-[11px] leading-relaxed">{verbete.etimologiaOuOrigem}</span>
                  </div>
                )}

                <div className="py-2 flex flex-col gap-1 text-[11px] text-slate-600">
                  <div><strong>Data de Publicação:</strong> {verbete.dataPublicacao}</div>
                  <div><strong>Extensão / Leitura:</strong> {verbete.tempoLeitura}</div>
                </div>
              </div>
            </aside>

            {/* Lead Paragraph */}
            <div className="text-base text-slate-800 leading-relaxed font-sans mb-6">
              <p className="m-0 text-justify">
                <strong className="font-bold text-slate-900">{verbete.termo}</strong> — {verbete.resumoDireto}
              </p>
            </div>

            {/* Sumário TOC */}
            <nav className="inline-block my-4 p-3 bg-[#f8f9fa] border border-[#a2a9b1] rounded-xs min-w-[240px] text-xs">
              <div className="flex items-center justify-between gap-4 font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2">
                <span className="flex items-center gap-1.5">
                  <List className="w-3.5 h-3.5 text-slate-600" />
                  <span>Índice</span>
                </span>
                <button
                  onClick={() => setMostrarIndice(!mostrarIndice)}
                  className="text-[#0645ad] hover:underline font-normal text-[11px] cursor-pointer"
                >
                  [{mostrarIndice ? 'ocultar' : 'mostrar'}]
                </button>
              </div>

              {mostrarIndice && (
                <ol className="list-decimal list-inside space-y-1 text-[#0645ad] font-sans">
                  <li><a href="#origem-fundamentacao" className="hover:underline">Origem e Fundamentação</a></li>
                  <li><a href="#principios-estruturais" className="hover:underline">Princípios Estruturais</a></li>
                  <li><a href="#dimensao-etica-pratica" className="hover:underline">Dimensão Ética e Aplicação</a></li>
                  <li><a href="#ver-tambem" className="hover:underline">Ver também</a></li>
                  <li><a href="#como-citar" className="hover:underline">Como citar este verbete (ABNT)</a></li>
                  <li><a href="#referencias" className="hover:underline">Referências e Bibliografia</a></li>
                </ol>
              )}
            </nav>

            {/* Texto Wiki Fluido */}
            <div
              className="wiki-content text-slate-800 leading-relaxed text-base font-sans mt-4 clear-both sm:clear-none"
              dangerouslySetInnerHTML={{ __html: verbete.textoWikiHtml }}
            />

            <div className="clear-both" />

            {/* Seção Ver Também */}
            <section id="ver-tambem" className="mt-10 pt-4 border-t border-[#a2a9b1]">
              <h2 className="text-xl font-serif font-normal text-slate-900 border-b border-slate-300 pb-1 mb-3">
                Ver também
              </h2>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#0645ad]">
                {verbete.verbetesRelacionados.map(rel => (
                  <li key={rel.id}>
                    <button
                      onClick={() => onSelectVerbete(rel.id)}
                      className="hover:underline text-left cursor-pointer inline-flex items-center gap-1"
                    >
                      <span>{rel.termo}</span>
                      <span className="text-slate-500 text-xs font-normal">({rel.categoriaNome})</span>
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            {/* Seção Como Citar */}
            <section id="como-citar" className="mt-8 pt-4 border-t border-[#a2a9b1]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <h2 className="text-xl font-serif font-normal text-slate-900 m-0">
                  Como citar este verbete
                </h2>
                <button
                  onClick={handleCopiarCitacao}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#eaecf0] hover:bg-[#dfe3e8] border border-[#a2a9b1] text-xs font-medium text-slate-800 rounded-xs transition-colors cursor-pointer"
                  title="Copiar citação ABNT"
                >
                  {copiado ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-600" />
                      <span>Copiar ABNT NBR 6023</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 bg-[#f8f9fa] border border-[#a2a9b1] rounded-xs text-xs font-mono text-slate-800 leading-relaxed select-all">
                {verbete.citacaoAbnt}
              </div>
            </section>

            {/* Seção Referências */}
            <section id="referencias" className="mt-8 pt-4 border-t border-[#a2a9b1]">
              <h2 className="text-xl font-serif font-normal text-slate-900 border-b border-slate-300 pb-1 mb-3">
                Referências
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-xs text-slate-700 leading-relaxed">
                {verbete.referencias.map((ref, idx) => (
                  <li key={idx} className="pl-1">
                    <strong>{ref.author}</strong>. <em>{ref.title}</em>. {ref.source}, {ref.year}.
                    {ref.doiOrUrl && (
                      <a
                        href={ref.doiOrUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0645ad] hover:underline ml-1.5 inline-flex items-center gap-0.5"
                      >
                        <span>[link externo]</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </li>
                ))}
              </ol>
            </section>
          </article>

        {/* ======================================================== */}
        {/* BARRA DE NAVEGAÇÃO INFERIOR */}
        {/* ======================================================== */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-300">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 text-xs sm:text-sm font-semibold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4 text-slate-600" />
            <span>Retornar ao Índice da Enciclowiki</span>
          </button>

          <button
            onClick={() => onNavigate('diretrizes-pedagogicas')}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-bold rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
          >
            <GraduationCap className="w-4 h-4" />
            <span>Diretrizes Pedagógicas & Autoria</span>
          </button>
        </div>

      </div>
    </div>
  );
};
