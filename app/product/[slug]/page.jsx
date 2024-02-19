import { client, urlFor } from '@/app/lib/sanity'
import Image from 'next/image'
import AddToCartBtn from '@/components/AddToCartBtn'
import Link from 'next/link'

import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from 'lucide-react'


const getData = async (slug)=> {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    images,
    price,
    price_id,
    name,
    description,
    "slug": slug.current,
    "category": categories->{name}
  }`;
  const data = await client.fetch(query);
  return data;
}

const ProductDetails = async ({params}) => {

  const bike = await getData(params.slug)
  console.log(bike); 
  return (
    <div>Product Details Page</div>
  )
}

export default ProductDetails