import { client } from '@/app/lib/sanity';
import Link from 'next/link'
import React from 'react'
import ItemsCarousel from './ItemsCarousel';

// puxando data

const getData = async () => {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)]{
        _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[]-> {
            name 
        } 
    }`;
    const data = await client.fetch(query);
    return data;
}

const Popular = async () => {

    const bikes = await getData();

    return (
        <section className='py-2'>
            <div className='container mx-auto'>
                <h2 className='text-center'>Mais populares</h2>
                <p className='text-center mb-2 sm:mb-4 md:mb-6 lg:mb-8'>
                    Nossos produtos mais escolhidos
                </p>
                <ItemsCarousel bikes={bikes} />
                <Link href='/produtos'>
                    <button className='btn btn-accent mx-auto'>
                        Veja todos nossos produtos
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Popular
