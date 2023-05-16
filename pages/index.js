
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
import dynamic from 'next/dynamic'


import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo1 from '../public/logos/logo1.png';
import logo2 from '../public/logos/logo2.png';
import logo3 from '../public/logos/logo3.png';
import logo4 from '../public/logos/logo4.png';
import logo5 from '../public/logos/logo5.png';
import logo6 from '../public/logos/logo6.png';
import logo7 from '../public/logos/logo7.png';
import logo8 from '../public/logos/logo8.png';
import leage1 from '../public/leages/National_champ.png';
import leage2 from '../public/leages/alg_cup.png';
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
export function makeTitle(title) {
  
  return <div className='flex flex-row mt-12 mb-8

    '> 
        <div className=' basis-[40%] justify-start'>
          <center>
    <h5 className=" italic 
      text-[#994444] text-6xl ">
     {title} 
    </h5>

          </center>
        </div>
<div className='basis-[90%]'>
        <div className='
      bg-[#994444]
        mb-4 mt-4 mr-8
          md:h-1 h-1'></div>

        </div>

      </div> 

}
export function makeResutls(date,city,stadium,leage,team1,logo1,team2,logo2,score) {
  return <div class="flex mb-4 items-start ">
    <div 
      class="w-1/3 hidden md:block 
      minh-10 ml-4 mb-8 block md:block">
    <h5 className="mb-2 text-4xl tracking-tight ">
      {date} 
        </h5> 
    <h5 className="  text-[#539434] text-3xl  ">
      {city}
        </h5> 
    <h5 className="mb-1  text-[#539434] text-3xl  ">
      {stadium}    
        </h5> 
  </div>
  <div class="w-1/3  justify-start items-center  ">
            <Image
            src={leage}
              className=" aspect-[5/6] w-[5rem] md:w-[5rem]"
            />
  </div>
  <div class="w-1/3  
     screen justify-start items-center float-center ">

    <div className="grid justify-items-center
       items-center float-center ">
            <Image
            src={logo1}
              className=" aspect-[5/6] w-[3rem] md:w-[4rem]"
            />
        <div>
          {team1}
        </div>
    </div>
  </div>
  <div class="w-[11rem]  text-5xl flex  justify-center items-center  ">
    {score}
  </div>
  <div class="w-1/4  
     screen justify-start items-center float-center ">

    <div className="grid justify-items-center
       items-center float-center ">
            <Image
            src={logo2}
              className=" aspect-[5/6] w-[3rem] md:w-[4rem]"
            />
        <div>
          {team2}
        </div>
    </div>
  </div>
</div>
  
}
export default function Home() {

  const homeRef = useRef(null)
  const actualiyRef = useRef(null)
  const matchesRef = useRef(null)
  const scoresRef = useRef(null)

  const scrollHome = () => homeRef.current.scrollIntoView(
    { behavior: 'smooth', block: 'start' }
  )  
  const scrollActuality = () => actualiyRef.current.scrollIntoView(
    { behavior: 'smooth', block: 'start' }
  )  
  const scrollMatches = () => matchesRef.current.scrollIntoView(
    { behavior: 'smooth', block: 'start' }
  )  
  const scrollScores = () => {
    scoresRef.current.scrollIntoView(
      { behavior: 'smooth',block:'start' })


  }
  const a= <ReactPlayer 
          loop={true}
          playing={true}
        controls={true}
        volume={true}
    pip={true}
          url='vid0.mp4'
        />
    
  return (<center>

    {NavBar(
    ()=>{scrollHome()},
    ()=>{scrollActuality()},
    ()=>{scrollMatches()},
    ()=>{scrollScores()}
    )}
    
    <div ref={homeRef} className='scroll-my-[30rem] md:scroll-my-[20rem]' />
    <div className='absolute z-0  '>
      <Fade>
    <h5   className="pt-8 
      bg-gradient-to-r from-black 
      absolute  z-10 
      italic  md:h-[33rem] h-[18rem] w-screen
      text-white md:text-9xl text-7xl  
      flex justify-start  text-left ">
      ETOILES<br/> ATLETIC<br/>SETIF

        </h5> 
      </Fade>
      <div className='blur-[2px] w-screen  overflow-hidden'>
      <BigSlider />
      </div>
    </div>
      
    <div className='h-[14rem] md:h-[24rem]'>
      
    </div>
  <Fade >
    <div className='z-20 bg-white'>
      <h5 ref={actualiyRef} className="mb-2 pt-[5rem]
        text-[#004AADff] text-6xl
      justify-start  mt-[4rem] scroll-my-[20rem] md:scroll-my-[0rem]">
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
    <h5 ref={matchesRef} className="mb-2 mt-[2rem] text-[#004AADff] text-6xl  pt-[5rem] scroll-my-[20rem] md:scroll-my-[0rem]
     ">
      Recent Games
        </h5> 
      <div className='
      bg-[#004AADff]
        mb-4 mt-8
        max-w-8 mx-20 md:h-1 h-1'></div>
    <div className='h-[20rem]'>
      {a}
      </div>
    <SmallSlider/>
      <h5 ref={scoresRef} className="mb-2 
        mt-[4rem] t text-[#004AADff] text-6xl  pt-[5rem] scroll-my-[20rem] md:scroll-my-[0rem] ">

      Match Results
        </h5> 
      <div className='
      bg-[#004AADff]
        mb-4 mt-8
        max-w-8 mx-20 md:h-0.5 h-0.5'></div>
  	<>  
{makeTitle('May 2023')}
      {makeResutls("FRI 12 MAY",'Setif','8 Mai 45 Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'A SETIF',logo8,
      'VS'
      )}
      {makeResutls("FRI 05 MAY",'Khroub','Hamdani Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'MS KHROUB',logo2,
      '6 - 0'
      )}
	  {makeResutls("MON 01 MAY ",'Setif','8 Mai 45 Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'NE BORJ',logo5,
      '8 - 0'
      )}
{makeTitle('April 2023')}
      {makeResutls("FRI 28 APR",'Bejai','Naceria Stadium',
        leage2,
      'CE ATLETIC SETIF',logo1,
      'ASE BEJAIA',logo6,
      '1 - 4'
      )}
{makeTitle('March 2023')}
      {makeResutls("FRI 17 MAR",'Setif','8 Mai 45 Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'MS KHROUB',logo2,
      '6 - 0'
      )}
      {makeResutls("FRI 10 MAR",'Batna','Tamchit Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'CM BATNA',logo3,
      '0 - 0'
      )}
      {makeResutls("FRI 03 MAR",'Setif','8 Mai 45 Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'NE BOUIRA',logo4,
      '9 - 1'
      )}
{makeTitle('February 2023')}
      {makeResutls("SAT 25 FEB",'Bouira','Mchdallah',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'O M\'CHDALLAH',logo7,
      '2 - 0'
      )}
      {makeResutls("FRI 17 FEB",'Setif','8 Mai 45 Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'A SETIF',logo8,
      '4 - 0'
      )}
      {makeResutls("FRI 03 FEB",'Borj ','20 Aout 55 Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'NE BORJ',logo5,
      '3 - 0'
      )}
	  
	  
{makeTitle('January 2023')}
      {makeResutls("SAT 28 JAN",'Setif','8 Mai 45 Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'A SETIF',logo8,
      '10 - 0'
      )}
      {makeResutls("FRI 13 JAN",'Setif','500 Stadium',
        leage2,
      'CE ATLETIC SETIF',logo1,
      'NE BORJ',logo5,
      '11 - 0'
      )}
	  
	  {makeTitle('December 2022')}

      {makeResutls("TUE 27 DEC",'Setif','8 Mai 45 Stadium',
        leage1,
      'CE ATLETIC SETIF',logo1,
      'CM BATNA',logo3,
      '2 - 0'
      )}
      </>;
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
