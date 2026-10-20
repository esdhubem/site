import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

interface MethodologySectionProps {
  onSelectPillar: (pillarType: 'freepremium' | 'capacitacao' | 'horas-complementares' | 'formacao-livre') => void;
  onOpenCertificatePreview?: () => void;
  onNavigate?: (sectionId: string) => void;
}

export const MethodologySection: React.FC<MethodologySectionProps> = ({ onSelectPillar, onOpenCertificatePreview, onNavigate }) => {
  return (
    <section className="bg-white" id="metodologia-jornada">
      {/* Vibrant Header Banner */}
      <div className="bg-[#b7d6f7] py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-y border-blue-200/80 shadow-xs">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
            Aqui oferecemos uma oportunidade <br />
            que pode ir além do curso.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-normal leading-relaxed max-w-3xl mx-auto">
            Na ESDHUBEM o seu curso livre pode virar autoria publicada. Escolha o seu percurso, desenvolva produções autorais e avance na Escala de Autoria ESDHUBEM.
          </p>
        </div>
      </div>



      {/* Quadro Escala de Autoria ESDHUBEM — Tipos de trabalho para concluir ou avançar no curso */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Conheça a Escala de Autoria ESDHUBEM
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
              Conheça os tipos de produção e trabalho para concluir a formação e alcançar os selos da nossa escola:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <div className="relative rounded-2xl border-2 border-amber-700/30 bg-gradient-to-b from-amber-50 to-orange-50 p-6 text-center shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3">🥉</div>
              <h4 className="text-lg font-extrabold text-amber-800 mb-2">Bronze</h4>
              <p className="text-sm font-bold text-slate-700 italic mb-2">Eu aprendi.</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">Tríade de fixação (500 a 800 palavras) no ambiente interno. Certificado Bronze garantido.</p>
            </div>
            <div className="relative rounded-2xl border-2 border-slate-300 bg-gradient-to-b from-slate-50 to-slate-100 p-6 text-center shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3">🥈</div>
              <h4 className="text-lg font-extrabold text-slate-700 mb-2">Prata</h4>
              <p className="text-sm font-bold text-slate-700 italic mb-2">Eu defini & estruturei.</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">1ª Prateleira: Verbete na Enciclowiki amigável do Google (SEO) com citação ABNT.</p>
            </div>
            <div className="relative rounded-2xl border-2 border-yellow-400/60 bg-gradient-to-b from-yellow-50 to-amber-50 p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
              <div className="text-4xl mb-3">🥇</div>
              <h4 className="text-lg font-extrabold text-yellow-700 mb-2">Ouro</h4>
              <p className="text-sm font-bold text-slate-700 italic mb-2">Eu ampliei & conectei.</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">2ª Prateleira: Artigo de Blog com SEO para rankear nos motores de busca.</p>
            </div>
            <div className="relative rounded-2xl border-2 border-cyan-300/60 bg-gradient-to-b from-cyan-50 to-sky-50 p-6 text-center shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ring-1 ring-cyan-200/50">
              <div className="text-4xl mb-3">💎</div>
              <h4 className="text-lg font-extrabold text-cyan-700 mb-2">Diamante</h4>
              <p className="text-sm font-bold text-slate-700 italic mb-2">Eu investiguei a fundo.</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">3ª Prateleira: Artigo Investigativo de Alto Impacto com código DOI no Repositório.</p>
            </div>
          </div>

          {/* Strategic Banner: Regras de Certificação (Posicionado diretamente abaixo dos 4 cards) */}
          <div className="p-6 rounded-3xl bg-[#182333] text-white border border-slate-700 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                <Award className="w-7 h-7 text-[#FFC72C]" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-amber-400/20 text-[#FFC72C] text-[11px] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Escala de Autoria ESDHUBEM</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-white">
                  Regras de Certificação & Selos de Autoria
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  Conheça os critérios dos certificados Bronze, Prata, Ouro e Diamante, amparados pela Lei nº 9.394/96 e pela transparência na Pesquisa, Estudo, Evolução e Prática.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <button
                type="button"
                onClick={() => {
                  if (onNavigate) onNavigate('regras-certificacao-merito');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-6 py-3 bg-[#FFC72C] hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-black rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:scale-105"
              >
                <Award className="w-4 h-4" />
                <span>Regras de Certificação</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
