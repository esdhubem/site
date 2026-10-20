import React, { useState } from 'react';
import {
  Heart,
  Sparkles,
  ShieldCheck,
  Building,
  GraduationCap,
  Users,
  Compass,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Mail,
  Phone,
  ExternalLink,
  BookOpen,
  Award,
  ChevronDown
} from 'lucide-react';
import { FAQ_DATA } from '../data/coursesData';

interface SobreNosPageProps {
  onBackToHome: () => void;
  onOpenValidator: () => void;
  onNavigateToCourses?: () => void;
  onNavigateToPedagogy?: () => void;
}

export const SobreNosPage: React.FC<SobreNosPageProps> = ({
  onBackToHome,
  onOpenValidator,
  onNavigateToCourses,
  onNavigateToPedagogy
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800">
      {/* Header Banner com Azul Profundo Navy #011049 */}
      <div className="bg-gradient-to-b from-[#011049] via-[#061e47] to-[#011049] text-white border-b border-blue-900/80 relative overflow-hidden shadow-lg">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.1),transparent_50%)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
            <button
              onClick={onBackToHome}
              className="hover:text-[#FFC72C] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Início</span>
            </button>
            <span>/</span>
            <span className="text-slate-300">Institucional</span>
            <span>/</span>
            <span className="text-[#FFC72C] font-semibold">Sobre Nós</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFC72C]/15 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Heart className="w-4 h-4 text-[#FFC72C] fill-[#FFC72C]" />
            <span>Escola de Desenvolvimento Humano e Bem-estar</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Sobre a ESDHUBEM
          </h1>
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-3xl leading-relaxed font-light">
            Conheça nossa história, propósito formativo, modelo de educação aberta e a visão pedagógica que une tradição, sensibilidade, rigor técnico e tecnologia.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* ========================================================================= */}
        {/* SESSÃO INSTITUCIONAL: Ecossistema Digital de Educação e Desenvolvimento */}
        {/* ========================================================================= */}
        <section className="space-y-8 text-slate-800 pb-4 border-b border-slate-200/80">
          {/* Header Principal */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-bold uppercase tracking-wider">
              <span>🏛️ Visão Geral do Ecossistema</span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#182333] tracking-tight leading-tight">
                🏛️ ESDHUBEM — ECOSSISTEMA DIGITAL DE EDUCAÇÃO E DESENVOLVIMENTO
              </h2>
              <p className="text-sm sm:text-base font-bold text-amber-700 uppercase tracking-wider">
                UMA PLATAFORMA DIGITAL DE APRENDIZAGEM, DESENVOLVIMENTO E PRODUÇÃO DE CONHECIMENTO
              </p>
            </div>

            <div className="space-y-4 pt-1 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                A <strong className="text-[#182333] font-bold">ESDHUBEM</strong> se desenvolveu como uma plataforma SaaS educacional, tornando-se um ecossistema digital de educação e desenvolvimento. Aqui nós oferecemos ao aluno a experiência completa de cadastro e login, de acesso à sala de aula, de acompanhamento das videoaulas, de estudo dos materiais didáticos, de consulta aos mapas mentais, de acompanhamento do seu percurso de aprendizado, de recebimento dos certificados e de validação pública desses certificados para que qualquer pessoa possa conferir a legitimidade do documento emitido.
              </p>
              <p>
                A nossa escola disponibiliza um amplo catálogo de cursos organizados por categorias, onde o aluno encontra diferentes caminhos de formação, incluindo cursos de capacitação prática, cursos de horas complementares com foco em validação acadêmica, percursos de formação integral, processos claros de certificação, regras transparentes de funcionamento e oportunidades de publicação do conhecimento produzido ao longo do aprendizado.
              </p>
              <p>
                Além de todo o percurso de estudo, a ESDHUBEM facilita ao aluno a experiência de autoria plena, permitindo que cada pessoa transforme o que aprendeu em conhecimento compartilhado. O aluno pode escrever e publicar um artigo para o Blog Oficial da escola, com seu nome e perfil próprios; pode elaborar um artigo científico ou pré-print que recebe identificação digital e fica registrado em plataformas de acesso público; pode escrever e publicar um livro ou obra completa, com todos os cuidados de proteção à autoria; e também tem a possibilidade de realizar publicação monetizada, onde o seu trabalho passa a estar disponível para aquisição dentro do próprio ecossistema, garantindo reconhecimento e valorização pelo esforço dedicado.
              </p>
              <p>
                A ESDHUBEM vai além dos cursos e das publicações e oferece também produtos digitais prontos e desenvolvidos para fortalecer a presença e a atuação de cada pessoa. O aluno e o profissional interessado podem adquirir Landing Pages profissionais para divulgação de seu trabalho, com design voltado para resultados, integração direta com WhatsApp e domínio e hospedagem gratuitos durante o primeiro ano; podem contratar Biolinks interativos para organizar de forma profissional todos os seus contatos e links importantes nas redes sociais; podem contar com Aplicativos e Dashboards personalizados para o acompanhamento de informações e resultados; e também podem adquirir produtos físicos, especialmente os livros publicados por autores da própria escola, levando conhecimento impresso para todo o Brasil.
              </p>
              <p>
                A oferta da ESDHUBEM também se estende ao ambiente corporativo, com a possibilidade de treinamentos personalizados para empresas, capacitação de equipes, desenvolvimento de lideranças e soluções educacionais desenhadas conforme a necessidade de cada instituição, sempre com a mesma qualidade pedagógica e o mesmo cuidado com o desenvolvimento humano que marca a nossa atuação.
              </p>
              <p>
                Todo o conhecimento produzido e compartilhado na ESDHUBEM está acessível de forma ampla, e o aluno — assim como qualquer pessoa interessada — pode encontrar conteúdo de qualidade através do nosso Blog, onde são publicados artigos e reflexões; da nossa Biblioteca, com materiais de referência e apoio; do nosso acervo de Livros, com obras autorais de alunos e colaboradores; de Materiais Complementares que aprofundam temas específicos; e também através da nossa Newsletter, que leva novidades, conteúdos exclusivos e acompanhamento do que acontece na escola diretamente para o e-mail de quem se interessa.
              </p>
              <p>
                Para que tudo isso funcione com ordem, clareza e responsabilidade, a nossa equipe realiza a administração completa de todo o ecossistema: fazemos a gestão de alunos, acompanhando cada percurso; a gestão dos cursos, mantendo o conteúdo sempre acessível e atualizado; a gestão dos certificados, garantindo que cada documento seja emitido com exatidão e possa ser verificado publicamente; a gestão dos produtos digitais e físicos; a gestão das publicações, orientando e acompanhando cada autor; a gestão dos pagamentos, com transparência em cada etapa; e funcionamos também como a secretaria da escola, recebendo dúvidas, orientando caminhos e atendendo a cada pessoa com respeito e dedicação.
              </p>
              <p>
                No ecossistema da ESDHUBEM circulam diferentes perfis, cada um com seu papel importante e reconhecido: o Aluno, que faz os cursos, estuda, se dedica e recebe os certificados; o Autor, que vai além do conteúdo consumido, escreve, cria e publica artigos e livros levando sua voz; o Profissional, que busca fortalecer sua atuação e adquire ferramentas digitais para crescer no mercado; a Empresa, que confia na nossa escola para capacitar seus colaboradores e verifica a legitimidade dos certificados apresentados; e o Administrador, que cuida, organiza, mantém e evolui todo o espaço para que ele continue funcionando e acolhendo cada pessoa.
              </p>
              <p className="font-bold text-[#182333] pt-2 border-t border-slate-200/80">
                A ESDHUBEM é, acima de tudo, uma plataforma digital de aprendizagem, desenvolvimento e produção de conhecimento, um lugar onde você não apenas estuda, mas também cria, compartilha, protege sua autoria e constrói sua própria trajetória.
              </p>
            </div>
          </div>

          {/* Grid de Pilares do Ecossistema em Quadros com tipografia ampla e legível */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* 🎓 Quadro 1: Para o Aluno */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl font-bold shrink-0">
                      🎓
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-blue-600 uppercase tracking-wider block">Área do Aluno</span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#182333] leading-tight">
                        Para o Aluno
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                    Aprendizado Completo
                  </span>
                </div>

                <p className="text-base sm:text-lg font-bold text-[#182333]">
                  Aprendizado Completo e Estruturado:
                </p>

                <ul className="space-y-2.5 text-base sm:text-lg text-slate-700 leading-relaxed">
                  <li className="flex items-start gap-2.5">• <span>Cadastro e acesso personalizado</span></li>
                  <li className="flex items-start gap-2.5">• <span>Sala de aula virtual</span></li>
                  <li className="flex items-start gap-2.5">• <span>Videoaulas e materiais didáticos</span></li>
                  <li className="flex items-start gap-2.5">• <span>Mapas mentais e recursos de estudo</span></li>
                  <li className="flex items-start gap-2.5">• <span>Acompanhamento do percurso</span></li>
                  <li className="flex items-start gap-2.5">• <span>Emissão de certificados</span></li>
                  <li className="flex items-start gap-2.5">• <span>Validação pública de certificados</span></li>
                </ul>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  <h4 className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-900">
                    Catálogo de Formação:
                  </h4>
                  <ul className="space-y-2 text-base sm:text-lg text-slate-700 pl-2 leading-relaxed">
                    <li>— Cursos livres</li>
                    <li>— Capacitação prática</li>
                    <li>— Horas complementares (validação acadêmica)</li>
                    <li>— Formação integral</li>
                    <li>— Diretrizes e regras de transparência</li>
                    <li>— Publicação e reconhecimento</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ✍️ Quadro 2: Para o Autor */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center text-2xl font-bold shrink-0">
                      ✍️
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-purple-600 uppercase tracking-wider block">Área de Autoria</span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#182333] leading-tight">
                        Para o Autor
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-200">
                    Sua Voz em Evidência
                  </span>
                </div>

                <p className="text-base sm:text-lg font-bold text-[#182333]">
                  Transforme o que aprendeu em conhecimento compartilhado:
                </p>

                <ul className="space-y-3 text-base sm:text-lg text-slate-700 pt-1 leading-relaxed">
                  <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-xl shrink-0">📝</span>
                    <div>
                      <strong className="text-slate-900 block font-bold">Artigo de Blog</strong>
                      <span className="text-slate-700">visibilidade e portfólio</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-xl shrink-0">🔬</span>
                    <div>
                      <strong className="text-slate-900 block font-bold">Artigo Científico / Pré-print</strong>
                      <span className="text-slate-700">reconhecimento com registro DOI</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-xl shrink-0">📖</span>
                    <div>
                      <strong className="text-slate-900 block font-bold">Livro ou Obra Completa</strong>
                      <span className="text-slate-700">proteção na Biblioteca Nacional</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <span className="text-xl shrink-0">💰</span>
                    <div>
                      <strong className="text-slate-900 block font-bold">Publicação Monetizada</strong>
                      <span className="text-slate-700">dentro do próprio ecossistema</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 🛠️ Quadro 3: Para o Profissional */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold shrink-0">
                      🛠️
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-emerald-600 uppercase tracking-wider block">Presença Digital</span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#182333] leading-tight">
                        Para o Profissional
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                    Ferramentas de Destaque
                  </span>
                </div>

                <p className="text-base sm:text-lg font-bold text-[#182333]">
                  Construa e fortaleça sua presença com produtos prontos:
                </p>

                <ul className="space-y-3 text-base sm:text-lg text-slate-700 pt-1 leading-relaxed">
                  <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors">
                    <span className="text-xl shrink-0">📄</span>
                    <div>
                      <strong className="text-slate-900 font-bold">Landing Pages:</strong> domínio e hospedagem inclusos
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors">
                    <span className="text-xl shrink-0">🔗</span>
                    <div>
                      <strong className="text-slate-900 font-bold">Biolinks:</strong> organização profissional de links
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors">
                    <span className="text-xl shrink-0">📱</span>
                    <div>
                      <strong className="text-slate-900 font-bold">Aplicativos:</strong> soluções digitais
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors">
                    <span className="text-xl shrink-0">📊</span>
                    <div>
                      <strong className="text-slate-900 font-bold">Dashboards:</strong> acompanhamento de dados
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors">
                    <span className="text-xl shrink-0">📚</span>
                    <div>
                      <strong className="text-slate-900 font-bold">Livros Físicos:</strong> publicação impressa
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 🏢 Quadro 4: Para Empresas e Instituições */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl font-bold shrink-0">
                      🏢
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-wider block">B2B & Corporativo</span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#182333] leading-tight">
                        Para Empresas e Instituições
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-200">
                    Soluções B2B
                  </span>
                </div>

                <p className="text-base sm:text-lg font-bold text-[#182333]">
                  Capacitação Estratégica Organizacional:
                </p>

                <ul className="space-y-3 text-base sm:text-lg text-slate-700 pt-1 leading-relaxed">
                  <li className="flex items-start gap-2.5">• <span>Treinamento corporativo personalizado</span></li>
                  <li className="flex items-start gap-2.5">• <span>Capacitação de equipes</span></li>
                  <li className="flex items-start gap-2.5">• <span>Desenvolvimento de lideranças</span></li>
                  <li className="flex items-start gap-2.5">• <span>Validação de certificados emitidos</span></li>
                </ul>
              </div>
            </div>

            {/* 📚 Quadro 5: Conteúdo Disponível para Todos */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center text-2xl font-bold shrink-0">
                      📚
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-rose-600 uppercase tracking-wider block">Acesso Aberto</span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#182333] leading-tight">
                        Conteúdo Disponível
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold bg-rose-50 text-rose-700 px-3 py-1 rounded-full border border-rose-200">
                    Para Todos
                  </span>
                </div>

                <p className="text-base sm:text-lg font-bold text-[#182333]">
                  Acervo, Artigos e Conhecimento Compartilhado:
                </p>

                <ul className="space-y-3 text-base sm:text-lg text-slate-700 pt-1 leading-relaxed">
                  <li className="flex items-start gap-2.5">• <span>Blog com publicações autorais</span></li>
                  <li className="flex items-start gap-2.5">• <span>Biblioteca de referência</span></li>
                  <li className="flex items-start gap-2.5">• <span>Acervo de livros</span></li>
                  <li className="flex items-start gap-2.5">• <span>Materiais complementares</span></li>
                  <li className="flex items-start gap-2.5">• <span>Newsletter com novidades</span></li>
                </ul>
              </div>
            </div>

            {/* ⚙️ Quadro 6: Gestão e Estrutura */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all p-7 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center text-2xl font-bold shrink-0">
                      ⚙️
                    </div>
                    <div>
                      <span className="text-xs sm:text-sm font-bold text-slate-600 uppercase tracking-wider block">Institucional</span>
                      <h3 className="text-xl sm:text-2xl font-black text-[#182333] leading-tight">
                        Gestão e Estrutura
                      </h3>
                    </div>
                  </div>
                  <span className="text-xs sm:text-sm font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                    Transparência
                  </span>
                </div>

                <p className="text-base sm:text-lg font-bold text-[#182333]">
                  A equipe da ESDHUBEM cuida de tudo com transparência:
                </p>

                <ul className="space-y-2.5 text-base sm:text-lg text-slate-700 pt-1 leading-relaxed">
                  <li className="flex items-start gap-2.5">• <span>Administração de alunos e acessos</span></li>
                  <li className="flex items-start gap-2.5">• <span>Organização de cursos e conteúdos</span></li>
                  <li className="flex items-start gap-2.5">• <span>Emissão e registro de certificados</span></li>
                  <li className="flex items-start gap-2.5">• <span>Gestão de produtos e publicações</span></li>
                  <li className="flex items-start gap-2.5">• <span>Processamento de pagamentos</span></li>
                  <li className="flex items-start gap-2.5">• <span>Secretaria e atendimento</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* 👥 Quem Faz Parte do Ecossistema (Tabela) */}
          <div className="pt-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-black text-[#182333] flex items-center gap-2">
              <span>👥</span> Quem Faz Parte do Ecossistema
            </h3>
            
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-base sm:text-lg">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-bold">
                    <th className="py-4 px-6 w-1/3">Perfil</th>
                    <th className="py-4 px-6">O que faz</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#182333]">🎓 Aluno</td>
                    <td className="py-4 px-6">Faz cursos, estuda e recebe certificados</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#182333]">✍️ Autor</td>
                    <td className="py-4 px-6">Escreve, publica e compartilha conhecimento</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#182333]">💼 Profissional</td>
                    <td className="py-4 px-6">Adquire ferramentas para fortalecer sua atuação</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#182333]">🏢 Empresa</td>
                    <td className="py-4 px-6">Contrata capacitação e valida certificados</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-[#182333]">🔐 Administrador</td>
                    <td className="py-4 px-6">Gerencia, mantém e evolui todo o espaço</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 💡 Frase Institucional Final */}
          <div className="pt-6 border-t border-slate-200 space-y-2">
            <p className="text-lg sm:text-xl lg:text-2xl font-black text-[#182333]">
              💡 ESDHUBEM — Aprenda. Escreva. Publique. Construa sua autoridade.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Um ecossistema onde o conhecimento circula, a autoria é protegida e cada passo é reconhecido.
            </p>
          </div>
        </section>

        {/* Card 1: Missão & Propósito */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <Sparkles className="w-6 h-6 text-[#FFC72C] fill-[#FFC72C]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-wider block">
                Propósito Institucional
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
                Nossa Missão & Propósito
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            <p>
              A <strong className="text-slate-900 font-semibold">ESDHUBEM</strong> nasceu com o compromisso de democratizar o acesso à educação socioemocional, ao autoconhecimento e às práticas integrativas com rigor didático, empatia e ética.
            </p>
            <p>
              Acreditamos que o progresso pessoal e profissional caminham juntos: quando uma pessoa aprende a regular suas emoções, aprimora sua comunicação e compreende seu papel ético no mundo, toda a sociedade ao seu redor floresce.
            </p>
            <p>
              Na nossa escola livre, o conhecimento deixa de ser um fardo estático engavetado para se transformar em um <strong className="text-amber-800 font-semibold">legado vivo e circulante</strong>. Capacitamos alunos a ler criticamente, refletir com profundidade e produzir conhecimento autoral aplicável ao desenvolvimento humano.
            </p>
          </div>

          {/* Destaques em Caixas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <span className="text-base sm:text-lg font-bold uppercase tracking-wider text-amber-900 flex items-center gap-2">
                <Compass className="w-5 h-5 text-amber-600 shrink-0" />
                Estudo & Autonomia
              </span>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Conteúdos completos e estruturados para permitir que cada estudante aprenda no seu ritmo, com liberdade intelectual e método.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
              <span className="text-base sm:text-lg font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600 shrink-0" />
                Evolução Contínua
              </span>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Desenvolvimento integrado de inteligência socioemocional, pensamento crítico, liderança e habilidades tecnológicas.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
              <span className="text-base sm:text-lg font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                Prática com Impacto
              </span>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Ferramentas práticas para aplicação imediata no mercado de trabalho, em consultórios, empresas e na vida pessoal.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Pilares do Nosso Modelo Educacional */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-[#182333] flex items-center justify-center text-[#FFC72C] shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider block">
                Metodologia & Transparência
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
                Diferenciais da Nossa Escola
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-cyan-100 text-cyan-800 flex items-center justify-center font-bold text-sm shrink-0">
                  01
                </span>
                <h3 className="font-bold text-[#182333] text-lg sm:text-xl">Cursos Freepremium & Cursos Pagos</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Disponibilizamos cursos no modelo Freepremium — onde você assiste a todas as videoaulas e acessa o material didático gratuitamente (com taxa administrativa simbólica cobrada apenas se desejar a emissão e validação formal do certificado oficial em PDF) — além de cursos e formações avançadas pagas.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-sm shrink-0">
                  02
                </span>
                <h3 className="font-bold text-[#182333] text-lg sm:text-xl">Certificados Válidos em Todo o Brasil</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Carga horária legítima com amparo na Lei nº 9.394/96 e Decreto Presidencial nº 5.154/04. Todos os certificados contam com QR Code e código alfanumérico para autenticação pública instantânea.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                  03
                </span>
                <h3 className="font-bold text-[#182333] text-lg sm:text-xl">Escala de Autoria & Registro</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Reconhecemos o esforço intelectual: alunos que avançam nos níveis de mérito podem publicar seus trabalhos em nossas 3 prateleiras de autoridade: Verbetes na Enciclowiki (Prata), Artigos de Blog com SEO (Ouro) e Artigos Investigativos com DOI no Repositório (Diamante).
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-sm shrink-0">
                  04
                </span>
                <h3 className="font-bold text-[#182333] text-lg sm:text-xl">Saberes Integrativos & Humanistas</h3>
              </div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Valorizamos a sabedoria ancestral e integrativa dentro da perspectiva das Ciências Humanas e Sociais, integrando saúde, autoconhecimento, liderança e ética relacional.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3: Identificação Institucional & Coordenação Pedagógica */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <Building className="w-6 h-6 text-[#FFC72C]" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-wider block">
                Dados Legais e Acadêmicos
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
                Identificação Institucional & Coordenação Pedagógica
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-slate-700">
            <div className="space-y-4 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 leading-relaxed">
              <h4 className="font-bold text-[#182333] text-base sm:text-lg uppercase tracking-wider mb-2">
                Dados Corporativos
              </h4>
              <p>
                <strong className="text-slate-900 font-bold">Razão Social:</strong> ESDHUBEM - Escola de Desenvolvimento Humano e Bem-estar
              </p>
              <p>
                <strong className="text-slate-900 font-bold">CNPJ:</strong> 61.928.778/0001-50
              </p>
              <p>
                <strong className="text-slate-900 font-bold">Sede:</strong> São Paulo - SP - Brasil
              </p>
              <p>
                <strong className="text-slate-900 font-bold">Amparo Legal:</strong> Cursos Livres amparados pelo Decreto Presidencial nº 5.154/04 e Lei de Diretrizes e Bases da Educação nº 9.394/96.
              </p>
            </div>

            <div className="space-y-4 p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 leading-relaxed">
              <h4 className="font-bold text-[#182333] text-base sm:text-lg uppercase tracking-wider mb-2">
                Coordenação & Autoria Acadêmica
              </h4>
              <p>
                <strong className="text-slate-900 font-bold">Coordenação Pedagógica:</strong> Profª. Silviane Silvério (Biomédica, Especialista em Práticas Integrativas & Desenvolvimento Humano)
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2 text-base sm:text-lg">
                <a
                  href="https://lattes.cnpq.br/7481458793724724"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-800 font-bold hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Currículo Lattes iD</span>
                </a>
                <span className="text-slate-300">•</span>
                <a
                  href="https://orcid.org/0000-0001-6311-1195"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-900 font-bold hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Registro ORCID iD</span>
                </a>
              </div>
              <div className="pt-3 border-t border-slate-200 space-y-2">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>E-mail:</strong> esdhubem@proton.me</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                  <span><strong>WhatsApp:</strong> (11) 960319637</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Perguntas Frequentes (FAQ) */}
        <div className="bg-white rounded-3xl p-7 sm:p-10 border border-slate-200/90 shadow-sm space-y-8">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shrink-0">
              <HelpCircle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <span className="text-xs sm:text-sm font-bold text-amber-600 uppercase tracking-wider block">
                Dúvidas Rápidas
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#182333]">
                Perguntas Frequentes (FAQ)
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/80 transition-colors cursor-pointer"
                  >
                    <span className="font-bold text-slate-800 text-base sm:text-lg">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 sm:p-6 bg-white text-slate-700 text-base sm:text-lg leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Card 5: Ações Rápidas & Rodapé */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#182333] via-[#1E293B] to-[#0F172A] text-white shadow-2xl border border-slate-700/80 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,199,44,0.15),transparent_50%)] pointer-events-none" />
          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-block bg-[#FFC72C]/20 border border-[#FFC72C]/40 text-[#FFC72C] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Comece Sua Jornada Hoje
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Faça Parte da Comunidade ESDHUBEM
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore nossos cursos livres, confira a legitimidade dos certificados emitidos ou entre em contato com a coordenação pedagógica.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={onOpenValidator}
                className="inline-flex items-center gap-2 bg-[#FFC72C] hover:bg-[#ffcf47] text-[#182333] font-black text-sm px-6 py-3.5 rounded-full shadow-lg hover:shadow-[#FFC72C]/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Validar Certificado</span>
              </button>

              {onNavigateToCourses && (
                <button
                  onClick={onNavigateToCourses}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>Ver Catálogo de Cursos</span>
                </button>
              )}

              {onNavigateToPedagogy && (
                <button
                  onClick={onNavigateToPedagogy}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm px-6 py-3.5 rounded-full border border-white/20 transition-all cursor-pointer"
                >
                  <Award className="w-4 h-4" />
                  <span>Diretrizes Pedagógicas</span>
                </button>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
