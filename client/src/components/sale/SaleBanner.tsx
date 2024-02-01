import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './salebanner.scss'

const SaleBanner = () => {
  return (
    <div className='banner'>
      <div className="banner__inner">
      <div className="container">
        <Link href='/products'>
           <Image src='/images/banner.jpg' width={1170} height={165} alt='sale-banner'/>
        </Link>
      </div>
     </div>
    </div>
  )
}

export default SaleBanner