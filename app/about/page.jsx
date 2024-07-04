import About from "@/components/About"
import React from "react"
import Head from "next/head"

const page = () => {
  return (
    <>
      <Head>
        <title>Sobre Nós | DMarks Locação de Móveis</title>
        <meta
          name="description"
          content="Conheça a D'Marks Locações, empresa pioneira em Curitiba na locação de móveis para eventos, com foco em qualidade e inovação desde 2002."
        />
      </Head>
      <div>
        <About />
      </div>
    </>
  )
}

export default page
