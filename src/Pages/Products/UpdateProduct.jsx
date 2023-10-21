import React, { useEffect, useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import Swal from 'sweetalert2';


const UpdateProduct = () => {
    const product = useLoaderData();
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [categories, setCategories] = useState([])

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const form = e.target;
  //   const name = form.name.value;
  //   const description = form.description.value;
  //   const price = form.price.value;
  //   const category = form.categoryId.value;
  //   const image = form.image.files[0]
  //   const rating = form.rating.value;

  //   console.log(price)

  //       const formData = new FormData();
  //       formData.append('image', image)
  //       const url = `https://api.imgbb.com/1/upload?key=4c3e6074504856ce38dceca8159f65af`;
  //       fetch(url, {
  //           method: 'POST',
  //           body: formData
  //       })
  //           .then(res => res.json())
  //           .then(imgData => {
  //               if (imgData.success) {
  //                   console.log(imgData.data.url);
  //                   const image = imgData.data.url

  //                   const updateProduct = {
  //                       name,
  //                       image,
  //                       price,
  //                       description,
  //                       category,
  //                       rating
  //                   };



  //                   fetch(`http://localhost:5000/product/${product._id}`, {
  //                       method: 'PUT',
  //                       headers: {
  //                           'content-type': 'application/json'
  //                       },
  //                       body: JSON.stringify(updateProduct)
  //                   })
  //                       .then(res => res.json())
  //                       .then(data => {
  //                           if (data.acknowledged) {
  //                             console.log(`Product added successfully`);
  //                             Swal.fire(
  //                                 'Updated Product',
  //                                 'Product updated successfully',
  //                                 'success'
  //                             )
  //                             window.location.reload()
  //                           }
  //                       })

                   
  //               }
  //           })
  //           .catch(error => {
  //               console.error('Error uploading image to ImgBB:', error);

  //           })
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    const category = form.categoryId.value;
    const rating = form.rating.value;
    
    const image = form.image.files[0];
  
    // Check if a new image is uploaded
    if (image) {
      const formData = new FormData();
      formData.append('image', image);
  
      const imgbbUrl = `https://api.imgbb.com/1/upload?key=4c3e6074504856ce38dceca8159f65af`;
      
      try {
        const imgResponse = await fetch(imgbbUrl, {
          method: 'POST',
          body: formData,
        });
  
        if (imgResponse.ok) {
          const imgData = await imgResponse.json();
          if (imgData.success) {
            const newProduct = {
              name,
              image: imgData.data.url, 
              price,
              description,
              category,
              rating,
            };
  
            
            const newProductResponse = await fetch(`http://localhost:5000/product/${product._id}`, {
              method: 'PUT',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(newProduct),
            });
  
            if (newProductResponse.ok) {
              const data = await newProductResponse.json();
              if (data.acknowledged) {
                console.log('Product added successfully');
                Swal.fire('Added New Product', 'Product added successfully', 'success');
                window.location.reload();
              }
            }
          }
        }
      } catch (error) {
        console.error('Error uploading image to ImgBB:', error);
      }
    } else {
      const existingImage = selectedImage; 
  
      const existingProduct = {
        name,
        image: existingImage,
        price,
        description,
        category,
        rating,
      };
  
      // Send a POST request to add the new product
      try {
        const existingProductResponse = await fetch(`http://localhost:5000/product/${product._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(existingProduct),
        });
  
        if (existingProductResponse.ok) {
          const data = await existingProductResponse.json();
          if (data.acknowledged) {
            console.log('Product added successfully');
            Swal.fire('Added New Product', 'Product added successfully', 'success');
            window.location.reload();
          }
        }
      } catch (error) {
        console.error('Error adding product:', error);
      }
    }
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
    fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])




  return (
    <div className='w-10/12 mx-auto py-5 px-2'>
      <h2 className="text-2xl font-bold mb-4 lg:p-6">Update Product - </h2>
      <form onSubmit={handleSubmit} className="p-6 flex gap-5">
        <div className='w-9/12'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Name:</label>
            <input
              type="text"
              id="name"
              required
              name="name"
              defaultValue={product.name}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div className="mb-4 form-control">
            <label htmlFor="description" className="block text-gray-700">Description:</label>
            <textarea
              id="description"
              required
              name="description"
              defaultValue={product.description}
              className="w-full border rounded px-3 py-2 h-[200px]"
            />
          </div>


          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700">Price:</label>
            <input
              type="number"
              id="price"
              required
              name="price"
              defaultValue={product.price}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          {/* Publish button */}
          <div className="">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            >
              Update Product
            </button>
          </div>
        </div>

        <div className='w-3/12'>

          {/* Category */}
          <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700">Category:</label>
                        <select name='categoryId' className='w-full border rounded px-3 py-2'>
                            {
                                categories.map(category => {
                                    return <option key={category._id} value={category._id}>{category.title}</option>
                                })
                            }
                        </select>
                    </div>

          <div className="mb-4">
            <label htmlFor="rating" className="block text-gray-700">Rating:</label>
            <input
              type="number"
              id="rating"
              required
              name="rating"
              defaultValue={product.rating}
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

export default UpdateProduct;