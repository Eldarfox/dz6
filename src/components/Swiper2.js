import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export const SwiperComponent2 = ({swiperImage}) => {
    return (
        <>
            <Swiper
                style={{width: "300px", marginTop:"30px"}}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                {swiperImage.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img style={{width: "300px"}} src={img.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
        </>
    )
}