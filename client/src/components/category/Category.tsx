'use client'
import Link from 'next/link'
import './category.scss'
import useCategory from '@/hooks/useCategory'
import Image from 'next/image'

const Categories: React.FC = () => {
 const {isLoading, error, data} = useCategory()

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

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
            <Image className='categories__item-img' src={`/images/category/${encodeURIComponent(index.slug.replace(/\//g, ''))}.png`} alt="category-image" width={120} height={81} />
              </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;


