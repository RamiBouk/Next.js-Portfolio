import '../styles/global.css';
import NavBar from '../components/navbar';
export default function App({Component, pageProps}){
  return <>
    <NavBar/>
    <Component {...pageProps}/>
  <footer className='h-40 bg-[#004AADff]'>
    <center>
    footer
      </center>
    </footer></>;

}
