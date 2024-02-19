import { client } from '@/app/lib/sanity'
import Categories from '@/components/Categories';

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
      }`;
      const data = await client.fetch(query)
      return data
}

const page = async () => {
    const bikes = await getData()
    
  return (
    <div>
        <Categories bikes={bikes}/>
    </div>
  )
}

export default page