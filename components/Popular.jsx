import { client } from '@/app/lib/sanity';
import Link from 'next/link'
import React from 'react'

// puxando data

const getData = async ()=> {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'popular']._id, categories)]{
        _id,
          name,
          description,
          images,
          price,
          price_id,
          "slug": slug.current,
          "categories": categories[]-> {
          name } 
      }`;
    const data = await client.fetch(query);
    return data;
}

const Popular = async () => {

    const bikes = await getData();

  return (
    <section className='py-24'>
      <div className='container mx-auto'>
        <h2 className='text-center'>Mais populares</h2>
        <p className='text-center mb-[30px]'>
          Nossos produtos mais escolhidos
        </p>
        <div>Carousel</div>
        <Link href='/our-bikes'>
          <button>
            Veja todos nossos produtos
          </button>
        </Link>  
      </div> 
    </section>
  )
}

export default Popular