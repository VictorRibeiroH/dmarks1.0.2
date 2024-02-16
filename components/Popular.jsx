import { client } from '@/app/lib/sanity';
import React from 'react'

// puxando data

const getData = async ()=> {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Sofás']._id, categories)]{
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
    console.log(bikes);

  return (
    <div>Popular</div>
  )
}

export default Popular