"use client"
import Image from 'next/image'
import React, { Component } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import './slider.scss'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return  (
       <div className='banner-section__slider'>
         <Slider {...settings}>
    <div className="banner-section__slider-item">
       <Image className='banner-section__slider-img' src='/images/image-slider.jpg' width={870} height={400} alt='image-slider'/>
    </div>
    <div className="banner-section__slider-item">
       <Image className='banner-section__slider-img' src='/images/image-slider.jpg' width={870} height={400} alt='image-slider'/>
    </div>
    <div className="banner-section__slider-item">
       <Image className='banner-section__slider-img' src='/images/image-slider.jpg' width={870} height={400} alt='image-slider'/>
    </div>
    <div className="banner-section__slider-item">
       <Image className='banner-section__slider-img' src='/images/image-slider.jpg' width={870} height={400} alt='image-slider'/>
    </div>
    <div className="banner-section__slider-item">
       <Image className='banner-section__slider-img' src='/images/image-slider.jpg' width={870} height={400} alt='image-slider'/>
    </div>
  </Slider>
   </div>
    )
    }
}
 