import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HdIcon from '@mui/icons-material/Hd';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function Slider() {
    return (
        <div>
            <Swiper slidesPerView={1}>
                
                <SwiperSlide>
                    <div className='h-screen bg-no repeat bg-center bg-cover' style={{ backgroundImage: `url("https://themebeyond.com/html/movflx/img/banner/banner_bg01.jpg")` }}>
                        <div className='flex justify-center flex-col h-full container mx-auto'>
                            <span className='text-main-yellow text-3xl font-black'>MetaFlix</span>
                            <span className='text-white  text-5xl font-black w-3/6 my-5'>Lorem, ipsum dolor <span className='text-main-yellow'>sit amet</span> consectetur adipisicing elit.</span>
                            <div className='text-white'>
                                <span><GTranslateIcon /></span>
                                <span>Az,Ru,En</span>
                                <span><HdIcon /></span>
                                <span><CalendarMonthIcon />13.10.1997</span>
                                <span><AccessTimeIcon />40</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-screen bg-no repeat bg-center bg-cover' style={{ backgroundImage: `url("https://www.hdwallpaperslife.com/wp-content/uploads/2019/02/pubg_playerunknowns_battlegrounds_4k_5.jpg")` }}>
                        <div className='flex justify-center flex-col h-full container mx-auto'>
                            <span className='text-main-yellow text-3xl font-black'>MetaFlix</span>
                            <span className='text-white  text-5xl font-black w-3/6 my-5'>Lorem, ipsum dolor <span className='text-main-yellow'>sit amet</span> consectetur adipisicing elit.</span>
                            <div className='text-white'>
                                <span><GTranslateIcon /></span>
                                <span>Az,Ru,En</span>
                                <span><HdIcon /></span>
                                <span><CalendarMonthIcon />13.10.1997</span>
                                <span><AccessTimeIcon />40</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Slider
