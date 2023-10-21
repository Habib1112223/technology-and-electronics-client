import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import ProductCards from '../../components/Cards/ProductCards';
import Carousel from '../../components/Carousel/Carousel';

const SingleCategory = () => {
    const category = useLoaderData();
    const [products, setProducts] = useState(null)
    const { _id, title, slider_image } = category;

    useEffect(() => {
        fetch(`http://localhost:5000/category-products/${_id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    return (
        <div className='w-full'>
            <Carousel></Carousel>
            <div className='w-10/12 mx-auto p-6'>
            <h1 className='text-3xl text-center'>{title}</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 my-20'>
                {
                    products?.map(product => {
                        return <ProductCards key={product._id} product={product}></ProductCards>
                    })
                }
            </div>
            </div>
        </div>
    );
}

export default SingleCategory