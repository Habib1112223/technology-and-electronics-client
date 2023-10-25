import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';


const AddProduct = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [categories, setCategories] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const description = form.description.value;
        const price = form.price.value;
        const category = form.categoryId.value;
        const image = form.image.files[0];
        const rating = form.rating.value;

        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=4c3e6074504856ce38dceca8159f65af`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const image = imgData.data.url

                    const newProduct = {
                        name,
                        image,
                        price,
                        description,
                        category,
                        rating
                    };



                    fetch(`https://tech-and-electro.vercel.app/product`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                console.log(`Product added successfully`);
                                Swal.fire(
                                    'Added New Product',
                                    'Product added successfully',
                                    'success'
                                )
                                window.location.reload()
                            }
                        })

                   
                }
            })
            .catch(error => {
                console.error('Error uploading image to ImgBB:', error);

            })
    };

    

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedImage(e.target.result);
            };
            reader.readAsDataURL(file);
        }
    };


    useEffect(() => {
        fetch('https://tech-and-electro.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='w-10/12 mx-auto py-5 px-2'>
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="p-6 flex gap-5">
                <div className='w-9/12'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name:</label>
                        <input
                            type="text"
                            id="name"
                            required
                            name="name"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700">Description:</label>
                        <textarea
                            id="description"
                            required
                            name="description"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>


                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700">Price:</label>
                        <input
                            type="number"
                            id="price"
                            required
                            name="price"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>

                    {/* Publish button */}
                    <div className="">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
                        >
                            Add Product
                        </button>
                    </div>
                </div>

                <div className='w-3/12'>

                    {/* Category */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700">Category:</label>
                        <select name='categoryId' className='w-full border rounded px-3 py-2'>
                            <option value="">Select Category</option>
                            {
                                categories.map(category => {
                                    return <option key={category._id} value={category._id}>{category.title}</option>
                                })
                            }
                        </select>
                    </div>

                    {/* Product Brand */}
                    {/* <div className="mb-4">
            <label htmlFor="brand" className="block text-gray-700">Brand:</label>
            <input
              type="text"
              id="brand"
              required
              name="brand"
              className="w-full border rounded px-3 py-2"
            />
          </div> */}

                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-gray-700">Rating:</label>
                        <input
                            type="number"
                            id="rating"
                            required
                            name="rating"
                            className="w-full border rounded px-3 py-2"
                        />
                    </div>



                    <div className="mb-4">
                        <input
                            type="file"
                            accept="image/*"
                            id="image"
                            name='image'
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                        <label
                            htmlFor="image"
                            className="cursor-pointer w-full h-48 bg-gray-200 rounded border-dashed border-2 border-gray-400 flex items-center justify-center"
                        >
                            {selectedImage ? (
                                <img src={selectedImage} alt="Product" className="max-h-48 max-w-full" />
                            ) : (
                                <span className="text-gray-600 text-xl">Upload Product Image</span>
                            )}
                        </label>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default AddProduct