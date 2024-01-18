import Link from 'next/link'
import React from 'react'
import categoriesData from '@/constans/categoriesData'
import './category.scss'

const Categories: React.FC = () => {
    return (
        <>
         <div className="categories__inner">
        {categoriesData.map((category, index) => (
          <Link className='categories__item' key={index} href="#">
            <div className="categories__item-info">
              <h4 className="categories__item-title">{category.title}</h4>
              <p  className="categories__item-text">
                Подробнее
              </p>
                </div>
              <div className="categories__item-img">
              <img
               src={category.imageUrl}
               alt={`categories-image-${index}`}  />
            </div>
          </Link>
        ))}
      </div>
        </>
    );
  };
  
export default Categories;







