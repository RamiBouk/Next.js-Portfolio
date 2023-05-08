
import React from 'react';
import Image from "next/image";
import 'react-slideshow-image/dist/styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from 'react-reveal/Fade';
import logo1 from '../public/logos/logo1.png';
import logo2 from '../public/logos/logo2.png';
import logo3 from '../public/logos/logo3.png';



export default function TestingPage() {
  return (<div>
  <div className="col-span-4 
    screen justify-end items-cennavbarter float-center ">
    <div className="
      justify-items-end  float-center ">
            <Image
            src={logo1}
              className=" aspect-[5/6] w-[3rem] md:w-[4rem]"
            />
      <div>
        ldklsdkaj;dfljs;lafkj;
      </div>
    </div>
  </div>
    </div>
    
  );
}
