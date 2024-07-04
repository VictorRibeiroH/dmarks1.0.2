import Head from "next/head"
import Hero from "@/components/Hero"
import Popular from "@/components/Popular"

const metadata = {
  title: "DMarks | Locação de móveis",
  description:
    "A D'Marks Locações, fundada em 2002 em Curitiba/PR, é especializada na locação de móveis para feiras e eventos. Com profissionais capacitados e materiais de alta qualidade, nossa missão é satisfazer as necessidades dos clientes, garantindo atendimento de excelência e inovação constante.",
  url: "https://dmarkslocacoes.com.br",
  image: "https://dmarkslocacoes.com.br/thumb.png", // URL completa da imagem
}

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <main>
        <Hero />
        <Popular />
      </main>
    </>
  )
}
