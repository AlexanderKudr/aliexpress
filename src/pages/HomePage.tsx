import img11 from '../assets/images/homepage-before-one.png'
import img12 from '../assets/images/img12-homepage1.jpg'
import img13 from '../assets/images/img13-homepage1.jpg'
import img14 from '../assets/images/backgroundimg-homepage1-14.jpg'
import arrow from '../assets/images/arrow-home.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import apple from '../assets/images/outline-apple.png'
import laptop from '../assets/images/laptop-home-1.png'
import Shoe from '../assets/images/shoeheel.png'
import coffeegroup from '../assets/images/coffeegroup.png'
import bearCar from '../assets/images/bearandcar.png'
import notebook from '../assets/images/notebooklaptop.png'
import money from '../assets/images/$4200.png'
import hearticon from '../assets/images/hearticon.png'
import shoppingcartred from '../assets/images/shoppingcartred.png'
import star from '../assets/images/starticon.png'
import windowsizehook from '../hooks/Windowsizehook'
import couch from '../assets/images/sofahome.png'
import { Logo } from '../components/icons'


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
                <div className="flex-con-home-2">
                    <button className="goto">
                        <img src={arrow} alt="" />
                    </button>
                    <p className="shoe-par">10% off 
                    <br />
                    <span className='span-shoe'>The most fashoined shoes with low price</span></p>
                    <img src={Shoe} alt="" className="shoe" />
                </div>

                <div className="flex-con-home-2">
                    <button className="goto">
                        <img src={arrow} alt="" />
                    </button>
                    <img src={apple} alt="" className="apple" />
                    <img src={laptop} alt="" className='laptop' />
                    <p className='paragraph-lap'><span className="percent-home"> 5% off</span>
                    <br />
                     Every sort of laptops based on your requirements</p>
                </div>

                <div className="flex-con-home-2">
                    <button className="goto">
                        <img src={arrow} alt="" />
                    </button>
                    <img src={coffeegroup} alt="" className="coffegroup" />
                    <p className="coffeepar">Drink the most well known and delicious coffee </p>
                </div>

                <div className="flex-con-home-2">
                    <button className="goto">
                        <img src={arrow} alt="" />
                    </button>
                    <img src={bearCar} alt="" className="carandbear" />
                    <p className="carandbearp"><span className="percent-home">15% off</span>
                    <br />
                     Every type of toys that make your children happy</p>
                </div>

            </div>
        </div>
        </>
    )
}

const Product = ()=>{
    return(
        <>
        <div className="product-con">
            <div className="picture-div-home">
                <img src={notebook} alt="" className="img-con-home" />
                <img src={hearticon} alt="" className="hearticon" />
            </div>
            <div className="numberheading">
                <h6 className="h6products">$3500</h6>
                <img src={money} alt="" className="money" />
            </div>
            <div className="paragraph-home-prod">
                <p>Apple macbook pro 512 GB ssd ram 64 GB...</p>
            </div>
            <div className="buttons-home">
                <button className='button-bottom-1'>
                    <img src={star} alt="" className="star" />
                    <p className="fifty">50</p>
                </button>
                <p className="p-product-home">Sold 100</p>
                <img src={shoppingcartred} alt="" className="redshopping" />
            </div>
        </div>
        </>
    )
}

const ProductsHome = ()=>{
    const widthcustom = windowsizehook()
    return(
        <>
        <h1 className="product-heading">Popular Products</h1>
        <div className="products-con-2">
            <Swiper
               modules={[Navigation, Pagination, Scrollbar, A11y]}
             spaceBetween={-40}
             pagination={{ clickable: true }}
             slidesPerView={widthcustom.width < 1174 ? widthcustom.width < 600 ? 2 : 3 : 5}
            >
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                {/* -------- */}
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
                <SwiperSlide>
                    <Product/>
                </SwiperSlide>
            </Swiper>
        </div>
        <br />
        </>
    )
}

const NewArivals = ()=>{
    return(
        <>
        <div className="flex-3-con">
        <h1 className="newh1">New Arrivals</h1>
        <div className="flex-3">
            <div className="flexchild3"></div>
            <div className="flexchild3"></div>
            <div className="flexchild3"></div>
            <div className="flexchild3"></div>
        </div>
        </div>
        </>
    )
}
 

const BigCouch = ()=>{
    return(
        <>
         <div className="block">
        <div className="coutchcontainer">
            <div className="coutchheaddings">
                <h1 className="wedo">We Provide You the best experience</h1>
                <div className="grid5">
                    <div className="gridflex">
                <h6 className="stats">
                    Years Of 
                    <br />
                    Experience
                    <br />
                    <br />
                    <span className="numbercoutch">15+</span>
                </h6>

                <h6 className="stats">
                    Awards 
                    <br />
                    Owned
                    <br />
                    <br />
                    <span className="numbercoutch">95</span>
                </h6>

                <h6 className="stats">
                    Furnature 
                    <br />
                    Sold
                    <br />
                    <br />
                    <span className="numbercoutch">500</span>
                </h6>
                </div>
                </div>
            </div>
            {/* ---------------------------------- */}
            <p className="coutchhome-1">Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum</p>
            <img src={couch} alt="" className="sofa" />
        </div>
        </div>
        </>
    )
}

const BumperBottom = ()=>{
    return(
        <>
        <div className="bumpercontainerhome">
            <div className="gridstartbumper1">
                <div className="bumperalex">
                    <Logo/>
                    <h3 className="alextextbumper">AlexShop</h3>
                    
                </div>
            </div>
            <div className="gridstartbumper2"></div>
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
      </div>
      <ProductsHome/>
      <NewArivals/>
        <BigCouch/>
        <BumperBottom/>
        </>
     );
}

export default Homepage;

