import React, { useEffect } from 'react'
import Swal from 'sweetalert2';

const CartTable = ({cart, idx, carts, setCarts}) => {
    const {_id, name, price, image} = cart

    // const handleDelete = (id) => {
    //     console.log(id)
    //     useEffect(() => {
    //       fetch(`http://localhost:5000/carts/${id}`,
    //      {
    //         method: 'DELETE'
    //      }
    //       )
    //         .then(res => res.json())
    //         .then(data => {
    //             art
    //         })
    
    //     }, [])
    //   }

      const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                        console.log(data);
                        if (data.acknowledged === true) {
                            Swal.fire(
                                'Deleted!',
                                'Your Cart has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cart => cart._id !== _id);
                            setCarts(remaining);
                            console.log(remaining)

                        }
                    })

            }else{
                Swal.fire('Cancelled', 'Your coffee is safe :)', 'error')
            }
        })
    }

      
  return (
    <>
        <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{idx + 1}</div>
            </div>
          </div>
        </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>
        {name}
        </td>
        <td>{price}</td>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
        </th>
      </tr>
    </>
  )
}

export default CartTable