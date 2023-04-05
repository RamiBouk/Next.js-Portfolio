import {useState} from "react";
import Link from "next/link";

export default function NavBar(){
  const [navbar, setNavbar] = useState();
  const [color, setColor] = useState("black");

  return  <nav className={'w-full bg-' +color +' shadow'}>
    <div className="
      transition transform ease-in-out duration-900
      bg-gray-800
      hover:bg-black

      justify-between px-4 mx-auto lg:max-w-21xl md:items-center md:flex md:px-8"

       >
      <div>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <h2 className="text-2xl text-white font-bold">
            <Link href="#"className="text-white">
              NEXT JS          </Link></h2>
          <div className="md:hidden">
            <button
              className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" onClick={() => {setNavbar(!navbar);}}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"treesitter nvim
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
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
              )}
            </button>
          </div>
        </div>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
        >
          <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            <li className="text-white">
              <Link href="/"className="text-white">
                Home
              </Link>
            </li>
            <li className="text-white">
              <Link href="/page2"className="text-white">
                Blogs
              </Link>
            </li>
            <li className="text-white">
              <Link href="/about" className="text-white">
                About US
              </Link>
            </li>
            <li className="text-white">
              <Link href="/contact"className="text-white">
                Contact US
              </Link>

            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>;
}
