import React, { useState } from 'react'
import cart from '../assets/images/icon-cart.svg'
import plus from '../assets/images/icon-plus.svg'
import minus from '../assets/images/icon-minus.svg'

const Details = ({count, setCount}) => {
  const add = () => {
    if(count === 0){
      setCount(1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(Math.max(0, count - 1));
  };

  return (
    <div className='w-[90%] laptop:w-[50%] mx-auto laptop:mx-0'>
        <p className='text-DarkGrayishBlue my-3 font-medium uppercase'>Sneaker Company</p>
        <h1 className='text-[30px] laptop:text-[40px] laptop:mt-5 laptop:mb-8 font-bold leading-9'>Fall Limited Edition Sneakers</h1>
        <p className='text-[18px] text-GrayishBlue my-3'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='flex flex-row laptop:flex-col justify-between laptop:items-start items-center laptop:gap-2 laptop:mb-3'>
            <div className='flex items-center gap-5'>
                <h1 className='text-[30px] font-semibold'>$125.00</h1>
                <div className='bg-[black] h-fit px-2 rounded-md'>
                    <p className='text-[18px] text-white font-semibold'>50%</p>
                </div>
            </div>
            <p className='text-[18px] text-DarkGrayishBlue font-semibold line-through'>$250.00</p>
        </div>
        <div className='flex flex-col laptop:flex-row laptop:justify-between laptop:items-center'>
          <div className='w-full laptop:w-[40%] bg-LightGrayishBlue my-5 px-6 py-4 flex justify-between items-center font-semibold rounded-xl'>
              <img className='w-4 cursor-pointer' src={minus} alt="minus" onClick={decrease} />
              {count}
              <img className='w-4 cursor-pointer' src={plus} alt="plus" onClick={increase} />
          </div>
          <button className='w-full laptop:w-[55%] h-fit bg-Orange hover:bg-orange-400 py-4 text-[18px] flex justify-center gap-3 font-medium rounded-xl shadow-2xl shadow-PaleOrange' onClick={add}><img src={cart} alt="Cart" /> Add to cart</button>
        </div>
    </div>
  )
}

export default Details