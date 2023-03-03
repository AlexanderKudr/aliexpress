import { Outlet } from "react-router-dom";
import { Box, Header, Image } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  SwiperOptions,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import img1 from "../assets/images/signup-pic-1-2.jpg";
import img2 from "../assets/images/signup-pic-1-3.jpg";
import img3 from "../assets/images/sigup-picture-1-1.jpg";
import { CSSProperties } from "react";

//todo: after text and images will be filled, map through slides
export default function SignCarousel() {
  const HandleSlides = ({ img1, img2, img3 }: { img1: string; img2: string; img3: string }) => (
    <Box className="pictures">
      <Box className="top-img">
        <Image src={img1} alt="first pic" width={140} height={130} />
        <Image src={img2} alt="second pic" width={140} height={130} />
      </Box>
      <Image className="bottom-img" src={img3} alt="third pic" width={140} height={130} />
    </Box>
  );
  const swiperStyles = {
    main: {
      width: "100%",
      height: "100vh",
      "--swiper-pagination-bullet-inactive-color": "#ffffff",
      "--swiper-pagination-bullet-inactive-opacity": "0.7",
      "--swiper-pagination-bullet-opacity": "1",
      "--swiper-pagination-bullet-width": "14px",
      "--swiper-pagination-bullet-height": "14px",
      "--swiper-pagination-color": "#ffbf85",
      "--swiper-pagination-bottom": "80px",
    } as CSSProperties,
    slides: { display: "flex", flexDirection: "column", justifyContent: "center" } as CSSProperties,
  };
  return (
    <Box className="sign-carousel-container">
      <Outlet />
      <Box className="carousel-container">
        <Swiper
          style={swiperStyles.main}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          rewind={true}
        >
          <SwiperSlide style={swiperStyles.slides}>
            <HandleSlides img1={img1} img2={img2} img3={img3} />
            <Box className="text">
              <Header variant={"h2"}>Lorem ipsum</Header>
              <p>Get new fashioned clothes with 50% sale every weekend</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={swiperStyles.slides}>
            <HandleSlides img1={img3} img2={img1} img3={img2} />
            <Box className="text">
              <Header variant={"h2"}>Lorem ipsum</Header>
              <p>Get new fashioned clothes with 50% sale every weekend</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide style={swiperStyles.slides}>
            <HandleSlides img1={img2} img2={img1} img3={img3} />
            <Box className="text">
              <Header variant={"h2"}>Lorem ipsum</Header>
              <p>Get new fashioned clothes with 50% sale every weekend</p>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
}
