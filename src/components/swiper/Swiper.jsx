import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import "./Swiper.scss";
import img1 from "../../assets/images/kubi-screenshot.webp";
import img2 from "../../assets/images/kubi-screenshot1.webp";
import img3 from "../../assets/images/kubi-screenshot2.webp";
import img4 from "../../assets/images/kubi-screenshot3.webp";
import img5 from "../../assets/images/kubi-screenshot4.webp";

// Import Swiper styles
import 'swiper/css';

export default () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            grabCursor={true}
            pagination={{clickable:true}}
            modules={[Pagination]} 
            className='mySwiper'
        >
            <SwiperSlide><img src={ img1 } alt="Kubi slider 1" className='swiper__img'/></SwiperSlide>
            <SwiperSlide><img src={ img2 } alt="Kubi slider 2" className='swiper__img'/></SwiperSlide>
            <SwiperSlide><img src={ img3 } alt="Kubi slider 3" className='swiper__img'/></SwiperSlide>
            <SwiperSlide><img src={ img4 } alt="Kubi slider 4" className='swiper__img'/></SwiperSlide>
            <SwiperSlide><img src={ img5 } alt="Kubi slider 5" className='swiper__img'/></SwiperSlide>
        </Swiper>
    )
};