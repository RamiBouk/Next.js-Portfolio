
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
import pic1 from '../public/eas1.jpg';
import pic2 from '../public/eas2.jpg';
import pic3 from '../public/eas3.webp';
import pic4 from '../public/eas4.webp';

import pic5 from '../public/LNFF.jpeg';
import pic6 from '../public/LNFF2.jpeg';

export default function Home() {
  return (
<center>
  <Fade >
      <BigSlider  />
    <h5 className="mb-2 italic text-[#004AADff] text-4xl tracking-tight ">
          Actuality
        </h5> 
      <div className='
      bg-[#004AADff]
        mb-4 mt-4
        max-w-2 mx-20 md:h-0.5 h-0.5'></div>
    <div className='grid grid-cols-1 lg:grid-cols-2 pl-8'>
      <NewsCard 
        img={pic1}
        title="ALGERIAN CUP 2023 :
CE ATLETIC SETIF  2-0  OLYMPIQUE M’CHEDALLAH"
      content="Etoile Atletic Setif vs Olympique M’chedallah | Round of 16 |
Algerian Cup 2023 | 25 Feb "/>


<NewsCard 
        img={pic2}
        title="TRAINING SESSION :
Our Team keeps working"
      content="Etoile Atletic Setif | Training Session | 
8mai45 Stadium"/>


<NewsCard 
        img={pic3}
        title="NATIONAL CHAMPIONSHIP 2023 :
CE ATLETIC SETIF  0-0  CM BATNA"
      content="Etoile Atletic Setif vs CM Batna | The first Leg of 
the Championship | 10 Mar"/>


<NewsCard 
        img={pic4}
        title="NATIONAL CHAMPIONSHIP 2023 :
A WIN AND THE LIGUE TITLE"
      content="CE ATLETIC SETIF is the Champion of the first leg"/>


<NewsCard 
        img={pic2}
        title="ALGERIAN CUP 2023 :
CE ATLETIC SETIF  1-4  ASE BEJAIA"
      content="Etoile Atletic Setif vs ASE BEJAIA | 8th Round |
Algerian Cup 2023 | 28 April "/>


</div>
    <h5 className="mb-2 italic text-[#004AADff] text-4xl tracking-tight ">
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
              src={pic5}
              border="none"
              className=" pl-8 pr-8 h-[6rem] w-[10rem]  md:w-[16rem] md:h-[12rem]  object-cover"
            />
            <Image
              src={pic6}
              border="none"
              className=" pl-8 pr-8 h-[6rem] w-[10rem]  md:w-[16rem] md:h-[12rem]  object-cover"
            />
  </div>
    </center>
    </Fade>
</center>

  );
}
