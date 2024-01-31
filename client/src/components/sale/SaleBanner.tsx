import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SaleBanner = () => {
  return (
    <div className='banner'>
      <div className="container">
        <Link href='/products'>
           <Image src='/images/banner.jpg' width={1170} height={165} alt='sale-banner'/>
        </Link>
      </div>
    </div>
  )
}

export default SaleBanner
