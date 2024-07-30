import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

export const SwiperComponent4 = ({swiperImage}) => {
    return (
        <>
            <Swiper
                style={{width:"370px" , marginTop:"30px"}}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {swiperImage.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img style={{width: "370px"}} src={img.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    );
}
