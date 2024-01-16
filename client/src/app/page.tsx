import Slider from '@/components/slider/Slider'
import './globals.scss'
import Banner from '@/components/banner/Banner'

export default function Page() {
  return <section className="banner-section">
    <div className="container">
      <div className="banner-section__inner">
            <Slider/>
            <Banner/>
      </div>
    </div>
  </section>
}
 