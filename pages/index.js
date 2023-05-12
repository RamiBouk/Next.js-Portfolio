
import Image from 'next/image';
import { useState, useEffect, useRef } from "react";
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
import Scores from '@/components/scores'
import pic1 from '../public/eas1.jpg';
import pic2 from '../public/eas2.jpg';
import pic3 from '../public/eas3.webp';
import pic4 from '../public/eas4.webp';
import NavBar from '../components/navbar';

import pic5 from '../public/LNFF.jpeg';
import pic6 from '../public/LNFF2.jpeg';

export default function Home() {
  const homeRef = useRef(null)
  const actualiyRef = useRef(null)
  const matchesRef = useRef(null)
  const scoresRef = useRef(null)

  const scrollHome = () => homeRef.current.scrollIntoView(
    { behavior: 'smooth', block: 'center' }
  )  
  const scrollActuality = () => actualiyRef.current.scrollIntoView(
    { behavior: 'smooth', block: 'center' }
  )  
  const scrollMatches = () => matchesRef.current.scrollIntoView(
    { behavior: 'smooth', block: 'center' }
  )  
  const scrollScores = () => {
    scoresRef.current.scrollIntoView(
      { behavior: 'smooth',block:'start' })


  }
    
  return (<center>

    {NavBar(
    ()=>{scrollHome()},
    ()=>{scrollActuality()},
    ()=>{scrollMatches()},
    ()=>{scrollScores()}
    )}
    
  <Fade >
    <div className='absolute z-0 '>
      <Fade>
    <h5   className="pt-8 
      bg-gradient-to-r from-black 
      absolute  z-10 
      italic  h-[33rem] w-screen
      text-white text-9xl  scroll-my-[6rem]  flex justify-start  text-left ">
      ETOILES<br/> ATLETIC<br/>SETIF

        </h5> 
      </Fade>
      <div className='blur-[2px] w-[95%] overflow-hidden'>
      <BigSlider />
      </div>
    </div>
      
    <div ref={homeRef} className='h-[24rem]'>
      
    </div>
    <div className='z-20 bg-white'>
    <div ref={homeRef} />
    <h5 ref={actualiyRef} className="mb-2 scroll-mb-[61rem]  text-[#004AADff] text-6xl
      justify-start  mt-[4rem]">
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
    <h5 ref={matchesRef} className="mb-2 mt-[2rem] text-[#004AADff] text-6xl scroll-mb-[61rem] ">
      Recent Games
        </h5> 
      <div className='
      bg-[#004AADff]
        mb-4 mt-8
        max-w-8 mx-20 md:h-0.5 h-0.5'></div>
    <SmallSlider/>
    <h5 ref={scoresRef} className="mb-2 scroll-my-[6rem] mt-[4rem] t text-[#004AADff] text-6xl  ">
      Match Results
        </h5> 
      <div className='
      bg-[#004AADff]
        mb-4 mt-8
        max-w-8 mx-20 md:h-0.5 h-0.5'></div>
      <Scores/>
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
      </div>
    </Fade>
</center>

  );
}
