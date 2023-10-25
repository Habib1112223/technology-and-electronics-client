import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import StarRating from '../RatingStar/StarRating';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { AuthContext } from '../../providers/AuthProvider';

const ProductCards = ({ product }) => {
  const { _id, name, image, price, rating } = product;
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);

  const ratingStar = Array.from({ length: 5 }, (star, i) => {
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

  const redirectToLogin = () => {
    navigate('/login', {replace: true})
  }


  return (
    <div className='card bg-base-100 shadow-xl p-2' data-aos="zoom-in-right">
      <img className='h-[300px]' src={image} alt="Product Image" />
      <div className='p-2'>
        <h2 className='mb-2'>{name}</h2>
        <p className='py-1'>Price: ${price}</p>
        <p className='flex gap-1 py-2'>{ratingStar}</p>
        <div className='flex justify-between'>
         {
          user?.uid ? <>
             <Link className='px-4 py-1 bg-orange-500 rounded-md text-white' to={`/product/${_id}`}>View Details</Link>
          <Link className='px-4 py-1 bg-orange-500 rounded-md text-white' to={`/update-products/${_id}`}>Update</Link>
          </> :
          <button className='px-4 py-1 bg-orange-500 rounded-md text-white' onClick={redirectToLogin}>View Details</button>
         }
        </div>
      </div>
    </div>
  )
}

export default ProductCards