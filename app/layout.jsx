import { Rajdhani } from "next/font/google"
import "./globals.css"
import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CartProvider from "@/components/CartProvider"
import { Toaster } from "@/components/ui/toaster"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
})

export const metadata = {
  title: "DMarks | Locação de móveis",
  description:
    "A D'Marks Locações, fundada em 2002 em Curitiba/PR, é especializada na locação de móveis para feiras e eventos. Com profissionais capacitados e materiais de alta qualidade, nossa missão é satisfazer as necessidades dos clientes, garantindo atendimento de excelência e inovação constante.",
  url: "https://dmarkslocacoes.com.br",
  image: "/thumb.png",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        {/* Open Graph meta tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content="website" />
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>
      <body className={rajdhani.variable}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
