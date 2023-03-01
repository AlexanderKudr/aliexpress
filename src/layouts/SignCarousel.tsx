import { Outlet } from "react-router-dom";
import { Box, Header, Image } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import img1 from "../assets/images/signup-pic-1-2.jpg";
import img2 from "../assets/images/signup-pic-1-3.jpg";
import img3 from "../assets/images/sigup-picture-1-1.jpg";
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

  return (
    <Box className="container-carousel">
      <Outlet />
      <Box className="layout">
        <Swiper
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
          <SwiperSlide>
            <HandleSlides img1={img1} img2={img2} img3={img3} />
            <Box className="text">
              <Header variant={"h2"}>Lorem ipsum</Header>
              <p>Get new fashioned clothes with 50% sale every weekend</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <HandleSlides img1={img3} img2={img1} img3={img2} />
            <Box className="text">
              <Header variant={"h2"}>Lorem ipsum</Header>
              <p>Get new fashioned clothes with 50% sale every weekend</p>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
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
