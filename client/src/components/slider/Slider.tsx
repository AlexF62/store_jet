"use client"
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import './slider.scss';

const SimpleSlider = () => {
  const imageSlide = '/images/slider-image/image-slider.jpg'; 
  const images = Array(5).fill(imageSlide);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='banner-section__slider'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="banner-section__slider-item" key={index}>
            <Image className='banner-section__slider-img' src={image} width={870} height={400} alt='image-slider' />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;

