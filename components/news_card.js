
import {useState} from "react";
import Link from "next/link";
import logo from "../public/EAS_logo.png";
import Image from "next/image";
import pic1 from '../public/eas4.webp';
export default function NewsCard(){
	return( 
	<div class="flex flex-col items-center  
      rounded-lg  md:flex-row md:max-w-2xl 
     ">
      <Image class="object-cover w-full md:h-30  md:w-48  rounded-lg" src={pic1} alt=""/>

    <div class="flex flex-col text-left justify-between p-4 leading-normal">
        <h5 class="mb-2 text-l font-medium tracking-tight ">
            ALGERIAN CUP 2023 :<br/>
CE ATLETIC SETIF  2-0  OLYMPIQUE M’CHEDALLAH


        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</div>)
}

