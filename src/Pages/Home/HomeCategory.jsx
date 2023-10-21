import React from 'react';
import { Link } from 'react-router-dom';

const HomeCategory = ({ category }) => {
    const { title, cate_image, _id } = category;


    return (
        <div className="card bg-base-100 shadow-xl rounded-lg">
            <div className="card-body p-0">
                <Link to={`/category/${_id}`}>
                <div className='flex justify-center'>
                    <img className='h-[200px]' src={cate_image} alt={title} />
                </div>
                <div className="card-actions justify-center py-5">
                        <h1 className='text-2xl mb-2 text-center font-bold'>{title}</h1>
                    {/* <div>
                        <Link to={`/category/${_id}`}><button className="btn btn-secondary w-full">View Details</button></Link>
                    </div> */}
                </div>
                </Link>
            </div>
        </div>
    );
};

export default HomeCategory;