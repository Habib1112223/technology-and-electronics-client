import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from "react-icons/ai";

const StarRating = ({stars}) => {
    const ratingStar = Array.from({length: 5}, (star, i) => {
        let number = i + 0.5;

        return (
            <span key={i}>
                {stars >= i + 1 ? 
                (<FaStar className='text-yellow-500'></FaStar>) : 
                stars >= number ? 
                (<FaStarHalfAlt className='text-yellow-500'></FaStarHalfAlt>) : 
                (<AiOutlineStar className='text-yellow-500'></AiOutlineStar>)}
            </span>
        )
    })
    return (
        <div className='flex items-center gap-1'>
            {ratingStar}
            <p>({reviews} reviews)</p>
        </div>
    );
};

export default StarRating;