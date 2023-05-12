
import React from 'react';
import Image from "next/image";
import 'react-slideshow-image/dist/styles.css'
import Slider from "react-slick";
import BigSlider from '@/components/BigSlider';
import NewsCard from '@/components/news_card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import SmallSlider from '@/components/SmallSlider';
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

export default function Scores() {
    
    let a=<Fade>	  
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
      </Fade>;
      
  return ( a
  );
}
