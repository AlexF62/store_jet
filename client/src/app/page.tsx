import Slider from 'react-slick'
import './globals.scss'
import Banner from '@/components/banner/Banner'
import TabsPage from '@/components/tabs/Tabs'
import Categories from '@/components/category/Category'

export default function Page() {
  
  return (
       <><section className="banner-section page-section">
      <div className="container">
        <div className="banner-section__inner">
          {/* <Slider /> */}
          <Banner />
        </div>
      </div>
    </section>
    
    <section className="search page-section">
        <div className="container">
        <TabsPage/>
        </div>
      </section>
      
      <div className="section categories page-section">
        <div className="container">
       <Categories  />
        </div>
      </div>
      </>
)
  }
 
  
