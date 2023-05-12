
import {useState} from "react";
import Link from "next/link";
import logo from "../public/EAS_logo.png";
import Image from "next/image";
import pic1 from '../public/eas4.webp';
export default function NewsCard(props){
	return( 
	<div className="flex flex-row items-center  
      rounded-lg pb-10 tracking-wide  max-w-4xl 
     ">
      <Image className="object-cover  h-30  w-48 md:h-30  md:w-48 
      rounded-lg" src={props.img} alt=""/>

    <div className="  text-left float-left  pl-4 ">
        <h5 className="mb-2 h-30 text-2xl tracking-wide   ">
            {props.title}

        </h5>
        <p class="mb-3 text-xl font-thin text-gray-700 dark:text-gray-400">
            {props.content}
        </p>
    </div>
</div>
    )
}

