
import Image from 'next/image';

import React from 'react';
import { Slide, Zoom } from 'react-slideshow-image';
import Fade from 'react-reveal/Fade';
import 'react-slideshow-image/dist/styles.css'
import Slider from "react-slick";
import BigSlider from '@/components/BigSlider';
import NewsCard from '@/components/news_card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallSlider from '@/components/SmallSlider'
import pic1 from '../public/LNFF.jpeg';
import pic2 from '../public/LNFF2.jpeg';

export default function Home() {
  return (
<center>
  <Fade >
      <BigSlider />
    <h5 className="mb-2 italic text-[#004AADff] text-3xl tracking-tight ">
          Actuality
        </h5> 
      <div className='
      bg-[#004AADff]
        mb-4 mt-4
        max-w-2 mx-20 md:h-0.5 h-0.5'></div>
    <div className='grid grid-cols-1 lg:grid-cols-2 pl-8'>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
</div>
    <h5 className="mb-2 italic text-[#004AADff] text-3xl tracking-tight ">
      Match Results
        </h5> 
      <div className='
      bg-[#004AADff]
        mb-4 mt-8
        max-w-8 mx-20 md:h-0.5 h-0.5'></div>
    <SmallSlider/>
      <div className='
      bg-[#004AADff]
        mb-4 mt-8
        max-w-8 mx-20 md:h-0.5 h-0.5'></div>
    <center className='pb-16'>
      <div className='inline-grid grid-cols-2 gap-4'>
            <Image
              src={pic2}
              border="none"
              className=" pl-8 pr-8 h-[6rem] w-[10rem]  md:w-[16rem] md:h-[12rem]  object-cover"
            />
            <Image
              src={pic1}
              border="none"
              className=" pl-8 pr-8 h-[6rem] w-[10rem]  md:w-[16rem] md:h-[12rem]  object-cover"
            />
  </div>
    </center>
    </Fade>
</center>

  );
}
