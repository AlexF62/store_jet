import Image from 'next/image'
import React from 'react'
import './banner.scss'

const Banner = () => {
  return <div className='banner-section__item sale-item'>
        <div className="sale-item__top">
            <p className="sale-item__info">акция</p>
             <div className="sale-item__price">
                <div className="price sale-item__price-new">190 000</div>
                <div className="price sale-item__price-old">226 000</div>
             </div>
        </div>
      <Image src='/images/banner-image.png' alt='banner-images' className='sale-item__img'width={200} height={200}/>
      <h5 className="sale-item__title">
        Лодочный мотор  Suzuki DF9.9BRS
      </h5>
      <p className="sale-item__footer">
          Акция действует до
          <span>31.08.2020</span>
      </p>
  </div>
}

export default Banner
