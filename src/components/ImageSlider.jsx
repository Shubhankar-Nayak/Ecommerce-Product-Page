import React, { useState } from 'react'
import next from '../assets/images/icon-next.svg'
import previous from '../assets/images/icon-previous.svg'
import image1 from '../assets/images/image-product-1.jpg'
import image2 from '../assets/images/image-product-2.jpg'
import image3 from '../assets/images/image-product-3.jpg'
import image4 from '../assets/images/image-product-4.jpg'
import image1t from '../assets/images/image-product-1-thumbnail.jpg'
import image2t from '../assets/images/image-product-2-thumbnail.jpg'
import image3t from '../assets/images/image-product-3-thumbnail.jpg'
import image4t from '../assets/images/image-product-4-thumbnail.jpg'
import close from '../assets/images/icon-close.svg'

const slides = [
  {
    image : image1,
    thumbnail : image1t
  },
  {
    image : image2,
    thumbnail : image2t
  },
  {
    image : image3,
    thumbnail : image3t
  },
  {
    image : image4,
    thumbnail : image4t
  },
]

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const length = slides.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const selectSlide = (index) => {
    setCurrent(index);
  };
  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  };

  const openCarousel = (index) => {
    if (window.innerWidth >= 1024) { 
      setCurrent(index);
      setIsCarouselOpen(true);
    }
  };

  const closeCarousel = () => {
    setIsCarouselOpen(false);
  };
    
  return (
    <section className='laptop:w-[40%] flex flex-col justify-center items-center relative'>
      {/* Main Image Section */}
      <div className='relative flex justify-center items-center'>
        <div className='absolute top-[45%] right-[25px] laptop:hidden bg-white rounded-full px-4 py-3 cursor-pointer'>
          <img src={next} alt="Next Icon" onClick={nextSlide} />
        </div>
        <div className='absolute top-[45%] left-[25px] laptop:hidden bg-white rounded-full px-4 py-3 cursor-pointer'>
          <img src={previous} alt="Previous Icon" onClick={prevSlide} />
        </div>
        {slides.map((slide, index) => {
          return (
            <div
              className={`laptop:h-[450px] h-[350px] overflow-hidden flex justify-center items-center laptop:rounded-xl ease-in-out duration-[1s] ${index === current ? "opacity-1" : "opacity-0" }`}
              key={index}
            >
              {index === current && (
                <img 
                  src={slide.image} 
                  alt='travel image' 
                  className='laptop:w-full laptop:h-full object-cover aspect-square cursor-pointer'
                  onClick={() => openCarousel(index)} 
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Thumbnails Section */}
      <div className="laptop:w-[100%] hidden laptop:flex laptop:justify-between mt-4 space-x-2">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.thumbnail}
            alt={`Thumbnail ${index}`}
            className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${
              index === current ? "ring-4 ring-Orange opacity-50" : "hover:opacity-70"
            }`}
            onClick={() => selectSlide(index)}
          />
        ))}
      </div>

      {isCarouselOpen && (
        <div className='w-full h-full fixed top-0 left-0 flex flex-col justify-center items-center bg-black bg-opacity-50 z-50'>
          <div className='w-[600px] flex justify-end'>
            <img className='cursor-pointer' src={close} alt="close" onClick={closeCarousel} />
          </div>

            <div className='relative flex justify-center items-center'>
            {slides.map((slide, index) => {
              return (
                <div
                  className={`laptop:h-[450px] h-[350px] overflow-hidden flex justify-center items-center laptop:rounded-xl ease-in-out duration-[1s] ${index === current ? "opacity-1" : "opacity-0" }`}
                  key={index}
                >
                  {index === current && (
                    <img 
                      src={slide.image} 
                      alt='travel image' 
                      className='laptop:w-full laptop:h-full object-cover aspect-square'
                      onClick={() => openCarousel(index)} 
                    />
                  )}
                </div>
              );
            })}
            </div>

          <div className="w-[400px] flex justify-between mt-4">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.thumbnail}
                alt={`Thumbnail ${index}`}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${
                index === current ? "ring-4 ring-Orange opacity-50" : "hover:opacity-70"
                }`}
                onClick={() => selectSlide(index)}
              />
            ))}
          </div>    

        </div>
      )}
    </section>
  )
}

export default ImageSlider