import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';

import { EffectCreative } from 'swiper/modules';

export const SwiperComponent5 = ({swiperImage}) => {
    return (
        <>
            <Swiper
                style={{width:"370px" , marginTop:"30px"}}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper"
            >
                {swiperImage.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img style={{width: "370px"}} src={img.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
            <Swiper
                style={{width:"370px" , marginTop:"30px"}}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-120%', 0, -500],
                    },
                    next: {
                        shadow: true,
                        translate: ['120%', 0, -500],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper2"
            >
                {swiperImage.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img style={{width: "370px"}} src={img.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
            <Swiper
                style={{width:"370px" , marginTop:"30px"}}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-20%', 0, -1],
                    },
                    next: {
                        translate: ['100%', 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper3"
            >
                {swiperImage.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img style={{width: "370px"}} src={img.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
            <Swiper
                style={{width:"370px" , marginTop:"30px"}}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -800],
                        rotate: [180, 0, 0],
                    },
                    next: {
                        shadow: true,
                        translate: [0, 0, -800],
                        rotate: [-180, 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper4"
            >
                {swiperImage.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img style={{width: "370px"}} src={img.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
            <Swiper
                style={{width:"370px" , marginTop:"30px"}}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: ['-125%', 0, -800],
                        rotate: [0, 0, -90],
                    },
                    next: {
                        shadow: true,
                        translate: ['125%', 0, -800],
                        rotate: [0, 0, 90],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper5"
            >
                {swiperImage.map((img, idx) =>
                    <SwiperSlide key={idx}>
                        <img style={{width: "370px"}} src={img.url} alt=""/>
                    </SwiperSlide>
                )}
            </Swiper>
            <Swiper
                style={{width:"370px" , marginTop:"30px"}}
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        origin: 'left center',
                        translate: ['-5%', 0, -200],
                        rotate: [0, 100, 0],
                    },
                    next: {
                        origin: 'right center',
                        translate: ['5%', 0, -200],
                        rotate: [0, -100, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper6"
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