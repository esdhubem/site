import React, { useState } from 'react';
import {
  Award,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  FileText,
  GraduationCap,
  Sparkles,
  ArrowLeft,
  ExternalLink,
  MessageCircle,
  Eye,
  FileCheck,
  Building2,
  Scale,
  BrainCircuit,
  Share2,
  Upload,
  BookMarked,
  Globe,
  Layers,
  XCircle
} from 'lucide-react';

interface RegrasCertificacaoMeritoPageProps {
  onBackToHome: () => void;
  onOpenValidator?: () => void;
  onOpenCertificatePreview?: () => void;
  onNavigateToArticles?: () => void;
  onNavigate?: (page: string) => void;
}

export const RegrasCertificacaoMeritoPage: React.FC<RegrasCertificacaoMeritoPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onOpenCertificatePreview,
  onNavigateToArticles,
  onNavigate
}) => {
  const [selectedTier, setSelectedTier] = useState<'all' | 'bronze' | 'prata' | 'ouro' | 'diamante'>('all');

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans pb-20">
      
      {/* Top Breadcrumbs */}
      <div className="bg-[#011049] border-b border-blue-900/60 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-slate-300">Secretaria Acadêmica</span>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Diretrizes de Certificação e Escala de Autoria</span>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <Sparkles className="w-4 h-4 text-[#FFC72C]" />
            <span>Sistema de Selos de Autoria: Bronze, Prata, Ouro e Diamante</span>
          </div>
        </div>
      </div>

      {/* Hero Header com Azul Profundo Navy #011049 */}
      <header className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8 border-b border-blue-900/60 shadow-lg">
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-[#FFC72C] text-xs font-bold uppercase tracking-wider border border-amber-400/30">
              <GraduationCap className="w-4 h-4" />
              <span>Escala de Autoria</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              Diretrizes de Certificação e <br className="hidden sm:inline" />
              <span className="text-[#FFC72C]">Escala de Autoria</span>
            </h1>

            <p className="text-white text-base sm:text-lg font-normal leading-relaxed text-slate-100">
              Valorize sua jornada de estudos! Na ESDHUBEM, a conclusão do curso garante seu <strong>Certificado Bronze</strong> por meio da entrega da Tríade Pedagógica no ambiente interno (sem publicação externa). Para quem deseja ir além e construir autoridade no mercado, oferecemos três prateleiras de publicação editorial no site da escola: o <strong>Verbete amigável do Google na Enciclowiki (Prata)</strong>, o <strong>Artigo de Blog com SEO (Ouro)</strong> e o <strong>Artigo Investigativo de Alto Impacto com DOI (Diamante)</strong>.
            </p>
          </div>

          {/* Quick Stat Box */}
          <div className="bg-[#011049]/90 border border-blue-800/80 p-6 rounded-2xl shadow-xl max-w-sm w-full space-y-4 shrink-0 backdrop-blur-xs">
            <div className="text-xs font-bold text-[#FFC72C] uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-[#FFC72C]" />
              <span>4 Níveis & 3 Prateleiras</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-amber-900/30 border border-amber-600/40 text-amber-300 font-bold flex items-center gap-2">
                <span className="text-base">🥉</span> Bronze (Interno)
              </div>
              <div className="p-2.5 rounded-xl bg-slate-700/50 border border-slate-500/40 text-slate-200 font-bold flex items-center gap-2">
                <span className="text-base">🥈</span> Prata (Verbete)
              </div>
              <div className="p-2.5 rounded-xl bg-amber-500/20 border border-amber-400/50 text-amber-400 font-bold flex items-center gap-2">
                <span className="text-base">🥇</span> Ouro (Blog SEO)
              </div>
              <div className="p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 font-bold flex items-center gap-2">
                <span className="text-base">💎</span> Diamante (DOI)
              </div>
            </div>

            <p className="text-[11px] text-blue-200/80 leading-tight pt-1">
              ✓ Cada nível concede uma insígnia exclusiva impressa no certificado e cadastrada no registro público de validação.
            </p>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Por que criamos as Diretrizes de Publicação e a Escala de Autoria? */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white via-slate-50/80 to-blue-50/40 rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10 space-y-6 relative overflow-hidden backdrop-blur-xs">
            {/* Barra decorativa superior */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#011049] via-[#0047AB] to-[#FFC72C]" />

            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 shadow-xs">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                  Propósito Pedagógico & Institucional
                </span>
                <h2 className="font-extrabold text-[#011049] text-2xl sm:text-3xl tracking-tight">
                  Por que criamos as Diretrizes de Publicação e a Escala de Autoria?
                </h2>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-normal text-justify">
              <p>
                A <strong className="text-[#011049] font-bold">ESDHUBEM</strong> instituiu estas diretrizes e a Escala de Autoria para oferecer um caminho claro, seguro e valorizado para quem deseja ir além da simples conclusão de um curso.
              </p>
              <p>
                Nosso espaço de publicação é destinado aos alunos que, ao finalizarem sua formação, escolhem entregar um manuscrito como trabalho de conclusão com o propósito de desenvolver a prática da escrita e receber um reconhecimento que reflete verdadeiramente o esforço e a dedicação aplicados.
              </p>
              <p>
                Sabemos que muitos chegam até nós buscando preparo para desafios reais: elaborar Trabalhos de Conclusão de Curso, redações do ENEM, provas de concursos públicos, artigos para revistas científicas, livros, conteúdos para a internet e, sobretudo, para se expressar com clareza no ambiente profissional e nas relações pessoais. A Escala de Autoria foi estruturada justamente para acompanhar cada etapa desse crescimento: do primeiro texto prático ao trabalho de maior extensão e profundidade.
              </p>
              <p>
                Acreditamos que saber ler e escrever com clareza não é apenas uma habilidade técnica, é uma forma de compreender o mundo, de compartilhar ideias e de exercer a cidadania plena. Por isso, organizamos níveis, critérios e proteções para que cada aluno possa praticar, publicar e crescer com segurança, reconhecimento e total respeito à sua autoria.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: COMO FUNCIONA CADA SELO DE CERTIFICAÇÃO */}
        <section className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
              <BookMarked className="w-4 h-4" />
              <span>Escala de Autoria & Mérito</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Como Funciona Cada Selo de Certificação
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Conheça os requisitos de cada nível, a complexidade dos manuscritos, o destino da publicação, o nível da certificação de acordo com o tipo de produção e os benefícios para seu portfólio e currículo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* TIER 1: BRONZE */}
            <div className="bg-white rounded-3xl border-2 border-amber-700/30 p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-2xl shrink-0">
                      🥉
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Nível Bronze: Aproveitamento Básico</h3>
                      <span className="text-sm text-amber-800 font-semibold">Tríade Pedagógica de Fixação (Avaliação Interna)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                      Conclusão de Curso
                    </span>
                    <span className="bg-amber-800 text-amber-100 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Selo 🥉 Bronze
                    </span>
                  </div>
                </div>

                {/* Quadro Único Explicativo Completo */}
                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-sm space-y-4 text-slate-800">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Focado na consolidação prática do aprendizado através da <strong>metodologia da Tríade da Organização, Assimilação e Comunicação</strong> da ESDHUBEM. O aluno assiste às aulas completas e valida sua absorção entregando o exercício internamente na plataforma:
                  </p>
                  
                  <div className="space-y-2.5 pt-2 border-t border-amber-200/60">
                    <strong className="block text-sm font-bold text-amber-950 uppercase tracking-wide">📌 Requisitos & Entregáveis Internos:</strong>
                    <ul className="space-y-2 text-sm text-slate-700 pl-1 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-800 font-bold shrink-0 text-base">🧠</span>
                        <span><strong>Mapa Mental do Conteúdo:</strong> Diagrama visual estruturando os conceitos centrais e conexões pedagógicas do tema.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-800 font-bold shrink-0 text-base">✍️</span>
                        <span><strong>Texto Conceitual da Tríade (500 a 800 palavras):</strong> Síntese formal respondendo às três indagações kantianas (o que posso saber, o que devo fazer, o que posso esperar) para comprovar a assimilação dos conceitos.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="text-amber-800 font-bold shrink-0 text-base">🎙️</span>
                        <span><strong>Áudio Explicativo de 1 Minuto:</strong> Gravação de voz de 60 segundos sintetizando oralmente o conceito com clareza (Técnica Feynman).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-amber-200/60 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white/95 p-3.5 rounded-xl border border-amber-200 text-slate-800 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-amber-900 uppercase font-bold tracking-wider">📍 Destino da Produção:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed"><strong>Sem publicação externa.</strong> O trabalho é arquivado no ambiente acadêmico para avaliação e emissão do certificado.</span>
                    </div>
                    <div className="bg-white/95 p-3.5 rounded-xl border border-amber-200 text-slate-800 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-amber-900 uppercase font-bold tracking-wider">📜 Certificação Emitida:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Certificado Oficial de Conclusão de Curso Livre com Selo Bronze.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 2: PRATA */}
            <div className="bg-white rounded-3xl border-2 border-slate-300 p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center text-2xl shrink-0">
                      🥈
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Nível Prata: Verbete na Enciclowiki</h3>
                      <span className="text-sm text-slate-600 font-semibold">1ª Prateleira: Verbete Estruturado & SEO Amigável no Google (500 a 800 palavras)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300">
                      Autor de Verbete
                    </span>
                    <span className="bg-slate-700 text-slate-100 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Selo 🥈 Prata
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-4 text-slate-800">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    Para o estudante que deseja construir autoridade no mercado! O aluno desenvolve um <strong>Verbete Enciclopédico de 500 a 800 palavras</strong> no modelo padrão oficial da ESDHUBEM (conceito direto, contexto epistemológico, mapa mental, aplicações práticas e citação ABNT), pronto para ser indexado pelo <strong>Google (SEO)</strong>.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-200">
                    <strong className="block text-sm font-bold text-slate-900 uppercase tracking-wide">📌 Requisitos & Entregáveis:</strong>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                      <li><strong>Verbete Canônico Estruturado (500 a 800 palavras):</strong> Redação profunda com definição clara, fundamentação teórica e aplicações contemporâneas.</li>
                      <li><strong>Infográfico ou Mapa Mental Digital:</strong> Esquema visual acompanhando o verbete.</li>
                      <li><strong>Dados de Autoria & Referências:</strong> Nome, profissão, link para perfil/site e fontes bibliográficas de autoridade.</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-slate-800 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-slate-700 uppercase font-bold tracking-wider">📍 Destino da Publicação:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Enciclowiki Oficial da ESDHUBEM com página pública indexada no Google.</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-slate-800 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-slate-700 uppercase font-bold tracking-wider">📜 Certificação Emitida:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Certificado Oficial com Selo de Mérito Prata e link do verbete.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 3: OURO */}
            <div className="bg-white rounded-3xl border-2 border-amber-400 p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/20 border border-amber-400 flex items-center justify-center text-2xl shrink-0">
                      🥇
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Nível Ouro: Artigo de Blog com SEO</h3>
                      <span className="text-sm text-amber-700 font-semibold">2ª Prateleira: Artigo Autoral Otimizado para Busca Orgânica (800 a 1.500 palavras)</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold border border-amber-300">
                      Autor de Blog
                    </span>
                    <span className="bg-[#FFC72C] text-slate-950 text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Selo 🥇 Ouro
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/70 border border-amber-200 text-sm space-y-4 text-slate-800">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    O estudante escreve um <strong>Artigo de Blog reflexivo, técnico ou de estudo de caso (800 a 1.500 palavras)</strong>, formatado com as melhores práticas de SEO (títulos H2/H3 semânticos, palavras-chave e escaneabilidade) para atrair tráfego qualificado e consolidar sua voz profissional.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-amber-200">
                    <strong className="block text-sm font-bold text-amber-950 uppercase tracking-wide">📌 Requisitos & Entregáveis Obrigatórios:</strong>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                      <li><strong>Artigo Autoral de Blog (800 a 1.500 palavras):</strong> Redação reflexiva, prática ou analítica com introdução, desenvolvimento e conclusões.</li>
                      <li><strong>Estruturação SEO & Escaneabilidade:</strong> Subtítulos dinâmicos, síntese em tópicos e linkagem temática.</li>
                      <li><strong>Registro no OSF:</strong> Depósito de integridade autoral no Open Science Framework.</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-amber-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-amber-950 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-amber-900 uppercase font-bold tracking-wider">📍 Destino da Publicação:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Blog Oficial da ESDHUBEM com destaque editorial e perfil biográfico.</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-amber-200 text-amber-950 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-amber-900 uppercase font-bold tracking-wider">📜 Certificação Emitida:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Certificado com Selo Ouro de Autoria & SEO e link de publicação.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TIER 4: DIAMANTE */}
            <div className="bg-white rounded-3xl border-2 border-cyan-400 p-6 sm:p-8 shadow-sm space-y-5 relative overflow-hidden flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-2xl shrink-0">
                      💎
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">Nível Diamante: Artigo Investigativo de Alto Impacto</h3>
                      <span className="text-sm text-cyan-700 font-semibold">3ª Prateleira: Pesquisa Científica & Repositório com Registro DOI</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold border border-cyan-200">
                      Pesquisador(a)
                    </span>
                    <span className="bg-cyan-600 text-white text-xs font-black px-3.5 py-1 rounded-full uppercase tracking-wider">
                      Selo 💎 Diamante
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-cyan-50/70 border border-cyan-200 text-sm space-y-4 text-slate-800">
                  <p className="text-sm text-slate-700 leading-relaxed font-normal">
                    A honraria máxima de autoria da ESDHUBEM. Destinado a estudantes e pesquisadores que desenvolvem um <strong>Artigo Investigativo aprofundado (2.500 a 5.000 palavras)</strong> com metodologia científica, revisão bibliográfica e rigor analítico, depositado em repositório internacional com código <strong>DOI permanente</strong>.
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-cyan-200">
                    <strong className="block text-sm font-bold text-cyan-950 uppercase tracking-wide">📌 Requisitos & Entregáveis Obrigatórios:</strong>
                    <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 leading-relaxed">
                      <li><strong>Artigo Investigativo Completo (2.500 a 5.000 palavras):</strong> Ementa acadêmica, introdução, fundamentação teórica, metodologia e considerações finais.</li>
                      <li><strong>Rigor Metodológico & Normas:</strong> Citações e referências em padrão ABNT/Vancouver com bibliografia primária.</li>
                      <li><strong>Depósito e Atribuição de DOI:</strong> Depósito no repositório Zenodo (CERN) ou OSF gerando DOI para inclusão no Currículo Lattes.</li>
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-cyan-200 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                    <div className="bg-white p-3.5 rounded-xl border border-cyan-200 text-cyan-950 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-cyan-900 uppercase font-bold tracking-wider">📍 Destino da Publicação:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Repositório de Artigos da ESDHUBEM e repositório internacional Zenodo com DOI.</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-xl border border-cyan-200 text-cyan-950 space-y-1 shadow-2xs">
                      <strong className="block text-xs text-cyan-900 uppercase font-bold tracking-wider">📜 Certificação Emitida:</strong>
                      <span className="block text-sm text-slate-700 leading-relaxed">Certificado de Honraria Máxima com Chancela Diamante e citação oficial do DOI.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: FLUXO DE SUBMISSÃO PARA O ALUNO */}
        <section className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-8 border border-blue-900/60 relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#FFC72C] text-xs font-bold uppercase tracking-wider">
              Passo a Passo de Upgrade
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Como Submeter seu Trabalho e Elevar seu Selo
            </h2>
            <p className="text-xs sm:text-sm text-blue-100/90">
              Siga o fluxo simplificado da nossa comissão acadêmica para validar seu artigo ou TCC:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-[#011049]/90 border border-blue-800/80 hover:border-cyan-400/50 hover:bg-[#061e47] transition-all shadow-md backdrop-blur-xs space-y-3 group">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                1
              </span>
              <h4 className="font-bold text-white text-base">Escreva seu Trabalho</h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Desenvolva sua Tríade de fixação interna (Bronze), verbete para a Enciclowiki (Prata), artigo de blog com SEO (Ouro) ou artigo investigativo com DOI (Diamante).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#011049]/90 border border-blue-800/80 hover:border-cyan-400/50 hover:bg-[#061e47] transition-all shadow-md backdrop-blur-xs space-y-3 group">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                2
              </span>
              <h4 className="font-bold text-white text-base">Envie para Avaliação</h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Submeta os arquivos (PDF, DOCX, imagem do mapa mental ou áudio) através do e-mail da coordenação ou suporte acadêmico via WhatsApp.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#011049]/90 border border-blue-800/80 hover:border-cyan-400/50 hover:bg-[#061e47] transition-all shadow-md backdrop-blur-xs space-y-3 group">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                3
              </span>
              <h4 className="font-bold text-white text-base">Revisão Editorial</h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                Nossa equipe de docentes e pareceristas revisa a produção acadêmica e orienta as adequações ou indexação DOI.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#011049]/90 border border-blue-800/80 hover:border-cyan-400/50 hover:bg-[#061e47] transition-all shadow-md backdrop-blur-xs space-y-3 group">
              <span className="w-8 h-8 rounded-full bg-[#FFC72C] text-slate-950 font-black text-sm flex items-center justify-center group-hover:scale-105 transition-transform">
                4
              </span>
              <h4 className="font-bold text-white text-base">Emissão do Selo</h4>
              <p className="text-xs text-blue-100/80 leading-relaxed">
                O seu certificado é atualizado no sistema com o Selo de Mérito correspondente (Bronze, Prata, Ouro ou Diamante) e link de validação pública.
              </p>
            </div>

          </div>
        </section>

        {/* SECTION: Sobre a Revisão de Trabalhos */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Header */}
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <FileCheck className="w-4 h-4 text-amber-600" />
              <span>Processo Editorial & Orientação</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#182333] tracking-tight">
              Sobre a Revisão de Trabalhos
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
              A <strong className="text-slate-900 font-bold">ESDHUBEM</strong> oferece orientação e revisão dos textos enviados. Nosso papel é aprimorar, nunca substituir o autor.
            </p>
          </div>

          {/* O que fazemos vs O que NÃO fazemos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* O que fazemos */}
            <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>O que fazemos:</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Revisão linguística:</strong> ortografia, gramática, acentuação e clareza
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Organização:</strong> estrutura de títulos, parágrafos e seções
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Leitura crítica:</strong> coerência, encadeamento das ideias e sugestões de aprofundamento
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Ajustes de visibilidade:</strong> nos níveis aplicáveis, orientação sobre boas práticas de escrita para mecanismos de busca (SEO)
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Padronização:</strong> referências, citações e formato conforme o nível de publicação
                  </div>
                </li>
              </ul>
            </div>

            {/* O que NÃO fazemos */}
            <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80 space-y-4">
              <h3 className="text-base sm:text-lg font-extrabold text-rose-900 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>O que NÃO fazemos:</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">❌</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Não reescrevemos</strong> o texto em lugar do autor
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">❌</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Não criamos</strong> conteúdo novo que não seja do participante
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">❌</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Não alteramos</strong> a mensagem, a opinião ou a voz do autor
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-600 font-bold shrink-0 mt-0.5">❌</span>
                  <div>
                    <strong className="text-slate-900 font-bold">Não realizamos</strong> revisão por pares nem revisão acadêmica oficial — essa avaliação é própria de instituições de ensino superior e periódicos científicos;
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Como funciona */}
          <div className="space-y-4 pt-2">
            <h3 className="text-lg sm:text-xl font-extrabold text-[#182333] flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-600" />
              <span>Como funciona:</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] font-black text-xs flex items-center justify-center">
                  1
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Você envia seu texto
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Envio do manuscrito ou artigo prático pela plataforma ou suporte acadêmico.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] font-black text-xs flex items-center justify-center">
                  2
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Leitura e comentários
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Nossa equipe lê e devolve com comentários e ajustes sugeridos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="w-7 h-7 rounded-full bg-[#182333] text-[#FFC72C] font-black text-xs flex items-center justify-center">
                  3
                </div>
                <div className="text-xs sm:text-sm font-bold text-slate-900">
                  Você revisa e decide
                </div>
                <p className="text-[11px] text-slate-500 leading-tight">
                  Você revisa, ajusta e devolve, o texto é seu, você decide.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white font-black text-xs flex items-center justify-center">
                  4
                </div>
                <div className="text-xs sm:text-sm font-bold text-emerald-950">
                  Aprovado → Publicado!
                </div>
                <p className="text-[11px] text-emerald-800 leading-tight">
                  Trabalho publicado e emissão do selo correspondente.
                </p>
              </div>
            </div>
          </div>

          {/* Quote Block */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border-l-4 border-amber-500 text-slate-800 italic text-sm sm:text-base font-medium">
            “A revisão existe para dar clareza ao que você pensou, não para colocar palavras que você não disse.”
          </div>

        </section>

        {/* SECTION: Sobre Revisão, Ajustes e Reembolso */}
        <section className="text-slate-800 space-y-6 max-w-4xl mx-auto py-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="font-extrabold text-[#182333] text-2xl sm:text-3xl tracking-tight">
              Sobre Revisão, Ajustes e Reembolso
            </h2>
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              Caso não haja acordo com as sugestões e orientações da revisão pedagógica e o estudante opte por não seguir as correções e instruções da equipe docente, a obra não poderá ser publicada nas modalidades superiores (Prata, Ouro ou Diamante). Nessa situação:
            </p>

            <ul className="space-y-3 pl-1 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                <span>
                  <strong className="text-slate-900 font-bold">Certificado Bronze (Aproveitamento da Formação):</strong> O estudante recebe o Certificado Bronze de Conclusão de Curso (referente à participação e avaliação interna da Tríade de fixação, sem publicação externa);
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                <span>
                  <strong className="text-slate-900 font-bold">Restituição do Valor Excedente:</strong> Caso tenha sido contratada a publicação editorial de uma das três prateleiras superiores (Prata, Ouro ou Diamante) e o aluno decida não realizar os ajustes sugeridos, o valor que excede a certificação do Nível Bronze será integralmente restituído ao aluno em até 7 dias úteis;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✅</span>
                <span>
                  <strong className="text-slate-900 font-bold">Retenção da Taxa Bronze:</strong> O valor correspondente à avaliação da Tríade e emissão do Certificado Bronze permanece retido, pois a equipe docente realizou o trabalho pedagógico de leitura, análise e orientação do exercício formativo.
                </span>
              </li>
            </ul>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-2.5 mt-2">
              <p>
                <strong className="text-slate-800 font-semibold">Justificativa:</strong> O trabalho de análise, leitura e orientação já foi realizado pela equipe docente — por isso, a emissão do certificado Bronze e a retenção do valor correspondente reconhecem o atendimento, avaliação e participação no percurso, restituindo com total clareza aquilo que excede esse valor.
              </p>
              <p className="pt-2 border-t border-slate-200 text-slate-700">
                Caso o aluno queira mais esclarecimentos sobre nossos critérios de análise e devolução pedagógica, deve consultar a página:{' '}
                <button
                  type="button"
                  onClick={() => onNavigate ? onNavigate('diretrizes-avaliacao-manuscritos') : undefined}
                  className="inline-flex items-center gap-1 font-bold text-blue-900 hover:text-blue-700 hover:underline cursor-pointer ml-1"
                >
                  <span>Diretrizes de Avaliação de Manuscritos dos Alunos</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: CALL TO ACTION BANNER */}
        <section className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#011049] via-[#061e47] to-[#011049] border border-blue-900/60 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-white relative overflow-hidden">
          <div className="space-y-1 text-center md:text-left relative z-10">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-[#FFC72C]" />
              Pronto para transformar seu estudo em uma publicação real?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90">
              Explore nossos artigos científicos já publicados ou submeta seu trabalho para a coordenação acadêmica.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 relative z-10">
            {onNavigateToArticles && (
              <button
                onClick={onNavigateToArticles}
                className="px-5 py-3 bg-[#FFC72C] hover:bg-[#F5B014] text-slate-950 font-black text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
              >
                <BookOpen className="w-4 h-4" />
                <span>Ver Artigos Publicados</span>
              </button>
            )}

            {onOpenCertificatePreview && (
              <button
                onClick={onOpenCertificatePreview}
                className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer border border-slate-600 shadow-md hover:scale-105"
              >
                <Eye className="w-4 h-4 text-[#FFC72C]" />
                <span>Ver Modelo do Certificado</span>
              </button>
            )}

            <a
              href="https://wa.me/5511960319637?text=Olá!%20Gostaria%20de%20submeter%20meu%20artigo%20ou%20TCC%20para%20avaliação%20de%20mérito%20de%20autoria."
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Submeter via WhatsApp</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
};
