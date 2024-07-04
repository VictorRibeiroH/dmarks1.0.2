import { client } from "@/app/lib/sanity"
import Categories from "@/components/Categories"
import Head from "next/head"

// Data
const getData = async () => {
  const query = `*[_type == 'product' ]{
        _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[]-> {name}
    }`
  const data = await client.fetch(query)
  return data
}

const page = async () => {
  const bikes = await getData()

  // Ordena os produtos por nome
  const sortedBikes = bikes.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <>
      <Head>
        <title>Produtos | DMarks Locação de Móveis</title>
        <meta
          name="description"
          content="Explore nossa ampla variedade de móveis disponíveis para locação para feiras e eventos. Qualidade e sofisticação para seu evento."
        />
      </Head>
      <div>
        <Categories bikes={sortedBikes} />
      </div>
    </>
  )
}

export default page
