export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Product Description',
            type: 'string'
        },
        {
            name: 'price',
            title: 'Product Price',
            type: 'string'
        },
        {
            name: 'price_id',
            title: 'Stripe Product Price ID',
            type: 'string'
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{type: 'image'}],
        },
        {
            name: 'slug',
            title: 'Product slug',
            type: 'slug',
            options: {
                source :'name'
            }
        },
        {
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{type: 'reference', to: {type: 'category'}}]
        }
    ]
}