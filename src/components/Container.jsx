import React, { useState } from 'react'
import ImageSlider from './ImageSlider'
import Details from './Details'

const Container = ({count, setCount}) => {

  return (
    <div className='mt-[8vh] laptop:max-w-[1040px] laptop:w-[80%] laptop:h-[570px] flex flex-col laptop:flex-row justify-between items-center'>
        <ImageSlider />
        <Details count={count} setCount={setCount} />
    </div>
  )
}

export default Container