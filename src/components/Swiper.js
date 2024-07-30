import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-creative';

export const SwiperComponent = ({swiperImage}) => {
    return(
        <Swiper style={{width: "300px", marginTop:"30px"}}
            effect={"cards"}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            {swiperImage.map((img, idx) =>
                <SwiperSlide key={idx}>
                    <img style={{width: "300px"}} src={img.url} alt=""/>
                </SwiperSlide>
            )}
        </Swiper>


    )
}