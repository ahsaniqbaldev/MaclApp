import React from 'react'

const OrderDetails = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-[#f4f4f4]'>
      <div className='my-10'>
        <h1 className='text-4xl font-semibold'>Order Details</h1>
      </div>
      <div className='container w-[50%] mx-auto bg-white'>
        <div className='flex flex-col items-center justify-center py-5'>
          <img src='/imgs/Card-1.png' alt='food'/>
          <h2 className='text-2xl font-medium my-2'>Food Name here</h2>
          <p className='text-lg font-medium mb-2'>Price Here$10.00</p>
        </div>
      </div>
    </div>
  )
}

export default OrderDetails