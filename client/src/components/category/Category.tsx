'use client'
import Link from 'next/link'
import './category.scss'
import Image from 'next/image'
import { useGetAllQuery } from '@/services/category.service';

const Categories = () => {
const { data} =  useGetAllQuery() 

return (
    <div className='categories__inner'>
      {data?.map((index) => (
        <div className="categories__items" key={index.id}>
          <Link href="#" className="categories__item">
            <div className="categories__item-info">
              <h4 className="categories__item-title">{index.name}</h4>
              <a className="categories__item-text">Подробнее</a>
            </div>
            <div className="categories__item-img">
            <Image className='categories__item-img' src={`/images/category/${encodeURIComponent(index.slug.replace(/\//g, ''))}.png` } alt="category-image" width={120} height={81} /> 
              </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;