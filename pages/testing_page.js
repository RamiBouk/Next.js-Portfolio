
import React from 'react';
import { Slide, Fade, Zoom } from 'react-slideshow-image';
import Image from "next/image";
import 'react-slideshow-image/dist/styles.css'
import Slider from "react-slick";
import BigSlider from '@/components/BigSlider';
import NewsCard from '@/components/news_card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SmallSlider from '@/components/SmallSlider';
import logo1 from '../public/logos/logo1.png';
import logo2 from '../public/logos/logo2.png';
import logo3 from '../public/logos/logo3.png';
import logo4 from '../public/logos/logo4.png';


export function makeTitle(title) {
  
  return <div className='flex flex-row mb-8

    '> 
        <div className=' basis-[20%]'>
          <center>
    <h5 className=" italic
      text-[#994444] text-3xl tracking-tight ">
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
export function makeResutls(date,city,stadium,team1,logo1,team2,logo2,score) {
  return <div class="grid grid-rows-9 grid-flow-col gap-2  ">
    <div class="col-span-4 hidden md:block minh-10 ml-4  block md:block">
    <h5 className="mb-2 text-xl tracking-tight ">
      {date} 
        </h5> 
    <h5 className="  text-[#539434] text-xl tracking-tight ">
      {city}
        </h5> 
    <h5 className="mb-1  text-[#539434] text- tracking-tight ">
      {stadium}    
        </h5> 
  </div>
  <div class="col-span-4  
    flex screen justify-end items-center ">
    <h5 className="mb-2 text-xl tracking-tight ">
      {team1}
        </h5> 
  </div>
  <div class="col-span-1 mb-2 
    flex screen justify-center items-center  ">
            <Image
            src={logo1}
              className=" aspect-[5/6] w-[3rem] md:w-[4rem]"
            />
  </div>
  <div class="col-span-2  text-3xl flex  justify-center items-center  ">
    {score}
  </div>
  <div class="col-span-1  flex  justify-center items-center  ">
            <Image
            src={logo2}
              className=" aspect-[5/6] w-[3rem] md:w-[4rem]  "
            />
  </div>
  <div class="col-span-4  
    flex screen justify-start items-center ">
    <h5 className="mb-2 text-xl tracking-tight ">
      {team2}
        </h5> 
  </div>
</div>
  
}

export default function TestingPage() {
  return (
    <>
      <center>
    <h5 className="mt-4 mb-12 italic font-medium text-[#004AADff] text-4xl flex justify-center  ">

            ETOILES ATLETIC SETIF
        </h5> 
      </center>
        {makeTitle('Febuary 2023')}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
      {makeResutls("FRI 10 MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo3,
      '0-2'
      )}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo3,
      '0-2'
      )}
        {makeTitle('Febuary 2023')}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
        {makeTitle('Febuary 2023')}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
      {makeResutls("FRI 10MAR",'Setif','8 Mai 45 Stadium',
      'CE ATLETIC SETIF',logo1,
      'CE ATLETIC SETIF',logo2,
      '0-2'
      )}
    </>
  );
}
