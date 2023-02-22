import img11 from '../assets/images/homepage-before-one.png'
import img12 from '../assets/images/img12-homepage1.jpg'
import img13 from '../assets/images/img13-homepage1.jpg'
import img14 from '../assets/images/backgroundimg-homepage1-14.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Newtop = ()=>{
    return(
        <>
        <div className="big2">
            <div className="text-home">
                <h1 className="big">Build your dream decoration</h1>
                <p className="par-1">Lorem ipsum is a placehloder that is used by developers</p>
            </div>
         <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
        spaceBetween={0}
         style={{
            "--swiper-pagination-color": "#FFBA08",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "16px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-navigation-color": "#FFBA08",
            "--swiper-navigation-size": "25px",
          }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="slide">
            <img src={img11} alt="" className="slideimg" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
            <img src={img12} alt="" className="slideimg" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
            <img src={img13} alt="" className="slideimg" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide">
            <img src={img14} alt="" className="slideimg" />
        </div>
      </SwiperSlide>

    </Swiper>
    </div>
        </>
    )
}

const Popularcatagory = ()=>{
    return(
        <>
        <div className="pop-container">
            <h1 className='pop'>Popular Categories</h1>
            <div className="flex2">
                <div className="flex-con-home-2"></div>
                <div className="flex-con-home-2"></div>
                <div className="flex-con-home-2"></div>
                <div className="flex-con-home-2"></div>
            </div>
        </div>
        </>
    )
}

const ProductsHome = ()=>{
    return(
        <>
        <div className="pop-container-1">
            <h1 className='pop-1'>Popular Products</h1>
            <div className="flex2-1">
                <div className="flex-con-home-2-2"></div>
                <div className="flex-con-home-2-2"></div>
                <div className="flex-con-home-2-2"></div>
                <div className="flex-con-home-2-2"></div>
            </div>
        </div>
        </>
    )
}

const Homepage = () => {


    return ( 
        <>
      <Newtop/>
      <div className="container-11">
      <Popularcatagory/>
      <ProductsHome/>
      </div>
        </>
     );
}
 
export default Homepage;

