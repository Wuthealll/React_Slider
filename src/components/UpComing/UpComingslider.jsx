import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

function UpComingslider({ bgcolor }) {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={50}
                loop>

                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={`w-full ${bgcolor} h-52`}></div>
                </SwiperSlide>
                

            </Swiper>
        </div>
    )
}

export default UpComingslider