import {useState} from "react";
import Link from "next/link";
import logo from "../public/EAS_logo.png";
import Image from "next/image";




export default function NavBar(){
  const [navbar, setNavbar] = useState();
  const [color, setColor] = useState("black");

  const routes=[
    {name:"Home",url:"/",children:[]},
    {name:"Matches",url:"/scores_page",children:[]},
    {name:"About US",url:"/scores_page",children:[]},
    {name:"Contact Us",url:"/vid_page",children:[]},
  ]
  return  <nav className={'w-full bg-' +color +' z-30 shadow sticky top-0'}>
    <div className="
      transition transform ease-in-out duration-900
      bg-[#004AADff]
      justify-between px-4 mx-auto lg:max-w-21xl md:items-center md:flex md:px-8"

       >
      <div>
        <div className="flex items-center justify-between py-1 md:py-1 md:block">
          <Link href="/"className="hover:no-underline text-white">
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li>
            <Image
            src={logo}
              className="h-[4rem] w-[4rem] "
            />
            </li>
            <li className="hidden no-underline md:block">
              <h2 className={'text-2xl hover:text-white text-['+
                (color=='black'?('#FFFFFFFF'):('#FFFF01ff'))+
                '] font-bold'}>
              
              EAS          </h2>
            </li>
          </ul>

          </Link>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              onClick={() => {setNavbar(!navbar);}}
            >
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 
          md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              } 
`}
        >
          <ul className="items-center justify-center
            space-y-0 md:flex  md:space-y-0">

            {routes.map(route => 
              (<li className="text-white w-30 md:w-[7rem] '} ">
              <div className={`${navbar?'':'w-[7rem] '} flex  
                items-center justify-center  `}>
              <Link href={route.url} className={`h-16  
              flex w-screen w-[18rem] text-xl text-[#FFFF01] items-center
                ${navbar?'':'justify-center'}`} onClick={()=>{
                if(navbar)
                  setNavbar(!navbar)
                }}>
              <div >
                {route.name}
                </div>
              </Link>
                </div>
            </li>)
            )}
          </ul>
        </div>
      </div>
    </div>
  </nav>;
}
