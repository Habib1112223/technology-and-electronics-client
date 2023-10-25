import React, { useEffect, useState } from 'react';
import HomeCategory from './HomeCategory';

const HomeCategories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('https://tech-and-electro.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='w-10/12 mx-auto'>
            <div className='container lg:py-20 py-10'>
                <h2 className='text-4xl text-center font-bold'>Product Categories</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-10'>
                    {
                        categories.slice(0, 6).map(category => <HomeCategory
                            key={category._id}
                            category={category}
                        ></HomeCategory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeCategories;