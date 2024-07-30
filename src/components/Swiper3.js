import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

export const SwiperComponent3 = ({swiperImage}) => {
    return (
        <>
            <Swiper
                style={{marginTop:"30px"}}
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
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