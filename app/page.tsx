import Link from "next/link"
import {
  ArrowRight,
  MapPin,
  Smartphone,
  Users,
  AlertTriangle,
  ThumbsUp,
  Droplets,
  Shield,
} from "lucide-react"
import Image from "next/image"


import { Button } from "@/components/ui/button"
import { FeedbackForm } from "@/components/feedback-form"

export default function Home() {
  return (
    
<div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between mx-auto">
          <div className="flex items-center gap-2">
            <Image
                      src="/Frame 42.svg"
                      alt="Imagem do App2"
                      width={60}
                      height={60}
                      className="rounded-lg object-contain"/>
            <span className="text-xl font-bold">LAZE</span>
          </div>
         <nav className="hidden md:flex justify-center gap-6 w-full">

            <Link href="#sobre" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Sobre
            </Link>
            <Link href="#problema" className="text-sm font-medium hover:text-blue-600 transition-colors">
              O Problema
            </Link>
            <Link href="#como-funciona" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Como Funciona
            </Link>
            <Link href="#ods" className="text-sm font-medium hover:text-blue-600 transition-colors">
              ODS
            </Link>
            <Link href="#feedback" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Feedback
            </Link>
            <Link href="#download" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Download
            </Link>
          </nav>
          <Button className="hidden md:flex">Baixar App</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-8 md:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    LAZE: Alerta de Enchentes em Palmas
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Navegue com segurança pela cidade durante as chuvas. Receba alertas em tempo real sobre alagamentos
                    e encontre rotas alternativas.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Baixar Agora
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <Image
                      src="/815shots_so.png"
                      alt="Imagem do App"
                      width={700}
                      height={600}
                      className="rounded-lg object-contain"
                    />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre o LAZE</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  O LAZE é um aplicativo colaborativo que alerta sobre enchentes e alagamentos em Palmas, Tocantins,
                  permitindo que os cidadãos naveguem com segurança pela cidade durante os períodos chuvosos.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                      src="/mapa.png"
                      alt="Imagem do App"
                      width={700}
                      height={600}
                      className="rounded-lg object-contain"
                    />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-500" />
                      <h3 className="text-xl font-bold">Alertas em Tempo Real</h3>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Receba notificações instantâneas sobre alagamentos nas principais vias da cidade, permitindo que
                      você planeje rotas alternativas.
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center gap-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <h3 className="text-xl font-bold">Colaboração Cidadã</h3>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Contribua reportando alagamentos e ajude outros moradores a evitarem áreas problemáticas durante
                      as chuvas.
                    </p>
                  </li>
                  <li>
                    <div className="flex items-center gap-3">
                      <ThumbsUp className="h-6 w-6 text-green-600" />
                      <h3 className="text-xl font-bold">Dados para Políticas Públicas</h3>
                    </div>
                    <p className="text-gray-500 mt-2">
                      Os dados coletados podem ser utilizados pelas autoridades para priorizar melhorias no sistema de
                      drenagem urbana.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="problema" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">O Problema</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Palmas enfrenta sérios desafios durante os períodos chuvosos
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Impacto das Chuvas</h3>
                  <p className="text-gray-500">
                    Em janeiro de 2024, fortes chuvas resultaram em alagamentos nas principais rotatórias e avenidas da
                    cidade. A Defesa Civil relatou aproximadamente 34 milímetros de chuva durante a noite, representando
                    11% da previsão de chuva do mês inteiro.
                  </p>
                </div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Experiências Reais</h3>
                  <p className="text-gray-500">
                    Em março de 2025, estudantes ficaram presos em seus veículos por mais de 20 minutos na Avenida
                    Teotônio Segurado, esperando o escoamento da água na via expressa principal da cidade.
                  </p>
                </div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Infraestrutura Inadequada</h3>
                  <p className="text-gray-500">
                    A má projeção das avenidas para o escoamento da água das chuvas é a grande causa da maioria dos
                    problemas enfrentados pela população, resultando em acidentes e paralisação do trânsito.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <Image
                      src="/b46aea0d-4081-4b59-99b2-d9324bd563ad-1024x497.jpg"
                      alt="Imagem do App1"
                      width={700}
                      height={600}
                      className="rounded-lg object-contain"
                    />
                <Image
                      src="/asasas.jpeg"
                      alt="Imagem do App2"
                      width={700}
                      height={600}
                      className="rounded-lg object-contain"/>
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Como Funciona</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  O LAZE utiliza tecnologias emergentes e colaboração cidadã para alertar sobre enchentes
                </p>
              </div>
            </div>
            <div className="grid-cols-1 md:grid-cols-3 gap-8 py-12">
              <div className="flex w-full flex-col items-center justify-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Mapeamento Colaborativo</h3>
                <p className="text-gray-500">
                  Usuários podem marcar áreas alagadas no mapa em tempo real, criando uma rede colaborativa de informações georreferenciadas.
                </p>
              </div>
            </div>
                        <div className="flex justify-center">
              <Image
                      src="/283shots_so.png"
                      alt="Imagem do App2"
                      width={700}
                      height={600}
                      className="rounded-lg object-contain"/>
             
            </div>
          </div>
        </section>

        <section id="ods" className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Alinhamento com ODS</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  O projeto LAZE está alinhado com o Objetivo de Desenvolvimento Sustentável 11 da ONU
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] rounded-full bg-white border border-gray-200 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-5xl font-bold text-blue-600 mb-2">11</div>
                    <div className="text-xl font-bold text-gray-800">Cidades e Comunidades Sustentáveis</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Meta 11.5</h3>
                  <p className="text-gray-500">
                    Reduzir significativamente o número de mortes e o número de pessoas afetadas por desastres, com
                    ênfase na proteção de populações vulneráveis.
                  </p>
                </div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Meta 11.3</h3>
                  <p className="text-gray-500">
                    Aumentar a urbanização inclusiva e sustentável e melhorar a capacidade de planejamento e gestão
                    participativa.
                  </p>
                </div>
                <div className="rounded-lg border bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-bold mb-2">Contribuição do LAZE</h3>
                  <p className="text-gray-500">
                    Ao integrar tecnologia, participação social e sustentabilidade, o aplicativo LAZE contribui para a
                    construção de cidades mais seguras e resilientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="objetivos" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Objetivos do Projeto</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  O LAZE foi desenvolvido com objetivos claros para melhorar a resiliência urbana
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <Smartphone className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold">Aplicativo Mobile</h3>
                <p className="text-gray-500 text-center">
                  Desenvolvimento de um aplicativo com geolocalização, alertas em tempo real e mapa colaborativo.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <MapPin className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold">Centralização de Dados</h3>
                <p className="text-gray-500 text-center">
                  Integrar múltiplas fontes de dados em uma única plataforma, disponibilizando informações confiáveis
                  sobre enchentes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <Users className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold">Conscientização</h3>
                <p className="text-gray-500 text-center">
                  Campanhas de conscientização comunitária para estimular o uso do aplicativo e o envio de informações.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <Shield className="h-10 w-10 text-blue-600" />
                <h3 className="text-xl font-bold">Capacitação</h3>
                <p className="text-gray-500 text-center">
                  Capacitação de voluntários para validar as fases iniciais de implementação do programa para uso
                  cotidiano.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-blue-600"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
                <h3 className="text-xl font-bold">Colaboração</h3>
                <p className="text-gray-500 text-center">
                  Permitir que os usuários reportem ocorrências de alagamentos em tempo real, colaborando com os órgãos
                  de resposta.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-10 w-10 text-blue-600"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                <h3 className="text-xl font-bold">Planejamento Urbano</h3>
                <p className="text-gray-500 text-center">
                  Registrar dados históricos de eventos de alagamento para apoiar o planejamento preventivo e melhorias
                  na drenagem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="feedback" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ajude-nos a Melhorar</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Sua opinião é fundamental para aprimorarmos o LAZE. Compartilhe suas sugestões e ideias conosco.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl py-12">
              <FeedbackForm />
            </div>
          </div>
        </section>

        <section id="download" className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6 mx-auto">

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Baixe Agora</h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Faça parte desta iniciativa e ajude a melhorar a resiliência urbana de Palmas.
                </p>
              </div>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z" />
                    <path d="m12 19-7 3V8a7 7 0 0 1 7-7 7 7 0 0 1 7 7v14l-7-3Z" />
                    <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M12 12v7" />
                  </svg>
                  Google Play
                </Button>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-5 w-5"
                  >
                    <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
                    <path d="M10 2c1 .5 2 2 2 5" />
                  </svg>
                  App Store
                </Button>
              </div>
            </div>
            <div className="mx-auto flex max-w-5xl items-center justify-center py-12">
              <Image
                      src="/294shots_so.png"
                      alt="Imagem do App2"
                      width={1200}
                      height={1200}
                      className="rounded-lg object-contain"/>
              
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6 mx-auto">

          <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
            <div className="flex items-center gap-2">
              <Image
                      src="/Frame 42.svg"
                      alt="Imagem do App2"
                      width={40}
                      height={40}
                      className="rounded-lg object-contain"/>
              <span className="text-lg font-bold">LAZE</span>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-sm hover:underline">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-sm hover:underline">
                Contato
              </Link>
            </div>
            <div className="text-sm text-gray-500">© 2025 LAZE. Todos os direitos reservados.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
