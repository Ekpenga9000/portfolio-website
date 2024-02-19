import { Swiper, SwiperSlide } from 'swiper/react';
import "./Swiper.scss";
import img1 from "../../assets/images/kubi-screenshot.png";
import img2 from "../../assets/images/kubi-screenshot1.png";
import img3 from "../../assets/images/kubi-screenshot2.png";
import img4 from "../../assets/images/kubi-screenshot3.png";
import img5 from "../../assets/images/kubi-screenshot4.png";

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <Swiper
            loop={ true }
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src={ img1 } alt="" className='swiper__img'/></SwiperSlide>
            <SwiperSlide><img src={ img2 } alt="" className='swiper__img'/></SwiperSlide>
            <SwiperSlide><img src={ img3 } alt="" className='swiper__img'/></SwiperSlide>
            <SwiperSlide><img src={ img4 } alt="" className='swiper__img'/></SwiperSlide>
            <SwiperSlide><img src={ img5 } alt="" className='swiper__img'/></SwiperSlide>
        </Swiper>
    )
};