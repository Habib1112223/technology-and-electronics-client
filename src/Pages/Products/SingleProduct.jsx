import React, { useContext, useEffect } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../providers/AuthProvider'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { AiOutlineStar } from 'react-icons/ai'
import Swal from 'sweetalert2'

const SingleProduct = () => {
    const product = useLoaderData()
    const {user} = useContext(AuthContext);
    const nagivate = useNavigate()
    const {rating} = product
    console.log(product)

    const ratingStar = Array.from({length: 5}, (star, i) => {
        let number = i + 0.5;
    
        return (
            <span key={i}>
                {rating >= i + 1 ? 
                (<FaStar className='text-yellow-500'></FaStar>) : 
                rating >= number ? 
                (<FaStarHalfAlt className='text-yellow-500'></FaStarHalfAlt>) : 
                (<AiOutlineStar className='text-yellow-500'></AiOutlineStar>)}
            </span>
        )
    })


    const handleAddToCart = () => {
        const cartItem = {
            name: product.name,
            productId: product._id,
            user: user?.email,
            image: product.image,
            quantity: 1,
            price: product.price * 1,
            createdAt: new Date().getTime(),
        };

        // Call your function to add to the cart here
        console.log(cartItem);
        
        fetch(`http://localhost:5000/carts`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(`Product added successfully`);
                    nagivate('/my-carts', {replace: true})
                }
            })
    };
    
  

  return (
    <div className='w-10/12 mx-auto py-10'>
        <div className='flex gap-5'>
            <div className='w-1/2'>
                <img src={product.image} alt="" />
            </div>
            <div className='w-1/2 flex items-center'>
                <div>
                <h3 className='text-2xl'>{product.name}</h3>
                <span className='py-2'>Price: ${product.price}</span><br />
                <p className='flex gap-1'>{ratingStar}</p>
                <p className='my-2'>{product.description}</p>
                <button className='px-4 py-1 bg-orange-500 rounded-md text-white' onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct