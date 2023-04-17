

import React from 'react';
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slider from "react-slick";
import SimpleSlider from '@/components/SimpleSlider';
import NewsCard from '@/components/news_card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
<center>
  <>
      <SimpleSlider />
    <h5 class="mb-2 text-[#004AADff] text-2xl tracking-tight ">
          Actuality
        </h5> 
      <div className='
      bg-[#004AADff]
        mb-4 mt-4
        max-w-8 mx-20 md:h-1 h-0.5'></div>
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </>
</center>

  );
}
