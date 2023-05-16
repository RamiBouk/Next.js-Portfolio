import '../styles/global.css';
import NavBar from '../components/navbar';
import mobilis from '../public/mobilis.png';
import Link from "next/link";
import jumia from '../public/joma.png';
import fb from '../public/fb.png';
import inst from '../public/inst.png';
import whats from '../public/whats.png';
import Image from 'next/image';
import {mobileStepperClasses} from '@mui/material';
export default function App({Component, pageProps}){
  return <>
    <Component className='minh-[40rem]' {...pageProps} />
  <footer className='h-50 text-white bg-[#004AADff]'>
    <center>
    CE ATLETIC SETIF
      <div class="grid grid-cols-2 gap-4">
  <div class="col-span-2 ...">04</div>
  <div class="...">Main Sponsers Of The Club</div>
  <div class="...">Contact</div>
  <div class="...">            <Image
              src={mobilis}
              border="none"
              className=" 
  w-[auto] h-auto]  "
            />
    </div>
        <div class="row-span-3 ">
          <div className='grid grid-cols-2 gap-4'>
              <Link
                href="https://www.facebook.com/people/Etoile-Atletic-Setif/100086581266430/?paipv=0&eav=AfZsVJn5ahbQYy0WBgfVQcqUcamQKz2U7xi9fdEuoStfPqyIAs7oxFfj6zSMhRF2Pyw&_rdr"
                className=' '
              >
            <div>
            <Image 
              className="float-right" 
              src={fb}/>
            </div>
              </Link>
              <Link
                href="https://www.facebook.com/people/Etoile-Atletic-Setif/100086581266430/?paipv=0&eav=AfZsVJn5ahbQYy0WBgfVQcqUcamQKz2U7xi9fdEuoStfPqyIAs7oxFfj6zSMhRF2Pyw&_rdr"
                className='text-white flex text-left
              items-center 
'
              >
                @etoile_atletic_setif
                </Link>
              <Link
                href=""
                className=' '
              >
            <div>
            <Image 
              className="float-right" 
              src={inst}/>
            </div>
              </Link>
              <Link
                href="https://www.instagram.com/etoiles_atletic_setif/"
                className='text-white flex text-left
              items-center 
'
              >
              @etoile_atletic_setif
                </Link>
              <Link
                href=""
                className=' '
              >
            <div>
            <Image 
              className="float-right" 
              src={whats}/>
            </div>
              </Link>
              <Link
                href="https://wa.me/+213797079219"
                className='text-white flex text-left
              items-center 
'

              >
                +213 797079219
                </Link>
            </div>
        <div>
        </div>
  </div>
  <div class="...">
  <div class="...">            <Image
              src={jumia}
              border="none"
              className=" 
  w-[auto] h-auto]  "
            />

  </div>
    </div>
</div>
      </center>
    </footer></>;

}
