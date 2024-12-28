import React, { useState } from 'react'
import del from '../assets/images/icon-delete.svg'
import image from '../assets/images/image-product-1-thumbnail.jpg'

const Cart = ({count, setCount}) => {
  
  const remove = () => {
    setCount(0);
  };

  return (
    <div className='w-[360px] h-[260px] absolute top-[60px] laptop:top-[40px] left-[-285px] bg-white shadow-2xl rounded-xl z-40'>
        <div className='w-[100%] h-[20%] px-5 py-3 font-semibold border-b-[1px]'>Cart</div>
        { count === 0 ? (
            <div className='w-full h-[80%] flex justify-center items-center text-DarkGrayishBlue font-semibold'>Your cart is empty.</div>
        ) : (
            <div className='w-[90%] mx-auto'>
                <div className='flex justify-between items-center my-8'>
                    <div className='flex gap-4'>
                        <img className='w-14 h-14 rounded-md' src={image} alt="Item" />
                        <div>
                            <p className='text-DarkGrayishBlue'>Fall Limited Edition Sneakers</p>
                            <div className='flex gap-2'>
                                <p className='text-DarkGrayishBlue'>$125.00 x {count}</p>
                                <p className='font-semibold'>${(125.00 * count).toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <img className='cursor-pointer' src={del} alt="Delete" onClick={remove} />
                </div>
                <button className='w-full py-4 text-[18px] bg-Orange hover:bg-orange-400 font-semibold rounded-xl' onClick={remove}>Checkout</button>
            </div>
        )}
    </div>
  )
}

export default Cart