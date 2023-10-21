import React, { useContext, useEffect, useState } from 'react'
import CartTable from '../../components/Table/CartTable';
import { AuthContext } from '../../providers/AuthProvider';

const Carts = () => {
  const {user} = useContext(AuthContext)
  const [carts, setCarts] = useState(null);

  useEffect(()=>{
   fetch(`http://localhost:5000/carts/${user?.email}`)
   .then(res => res.json())
   .then(data => setCarts(data))
  },[])

  

  return (
    <div className='w-10/12 mx-auto py-10'>
      <h1 className='text-2xl font-semibold'>Your Cart : {carts?.length}</h1>
      <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>SN.</th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      {
          carts?.map((cart, idx) => {
            return <CartTable 
            key={cart._id} 
            idx={idx} cart={cart}
            carts={carts}
            setCarts={setCarts}
            ></CartTable>
          })
        }
    </tbody>
    </table>
        
    </div>
  )
}

export default Carts