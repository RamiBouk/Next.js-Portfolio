import * as React from 'react';
import {useState} from "react";
import ReactPlayer from 'react-player'
import Button from '@mui/material/Button';



export function Titel(team1,team2){
  return <div className=' font-bold  text-3xl pt-16 pb-8 bold'>
        <span className="text-[#AD1500]"> {team1} </span>
         vs
        <span className="text-[#AD1500]"> {team2}</span>
      </div>
}

export default function AlertDialog() {
  const [playing, setPlaying] = useState(true);
  

  return (<>


    <center>


    <h5 className="pt-8 mb-4 italic font-medium text-[#004AADff] text-4xl flex justify-center  ">
            ETOILES ATLETIC SETIF
        </h5> 
      {Titel("CEAS", 'MSK')}
      {Titel("CEAS", 'NEB')}
      {Titel("CEAS", 'CMB')}
      {Titel("CEAS", 'MSK')}


    </center>











    <div className={`fixed ${playing?"":"hidden"} opacity-90  top-0
      bg-black h-screen w-screen z-30 flex`}
    >
    </div>
    <div className={`fixed ${playing?"":"hidden"} h-screen w-screen 
      top-0 z-30 flex
      justify-center items-center`}
    >
        <ReactPlayer 
          loop={true}
          playing={true}
          width={1000}
          height={1900}
          url='vid.mp4'
        />
    </div>
    <button className={`fixed ${playing?"":"hidden"} text-white top-0 z-40`}
      onClick={()=>{setPlaying(!playing)}}
    >
      <svg xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      fill="currentColor" 
      class="bi bi-x" 
      viewBox="0 0 16 16"> 
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>
      </button>
  </>

  );
}
