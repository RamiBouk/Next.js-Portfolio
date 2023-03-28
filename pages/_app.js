import '../styles/global.css';
import NavBar from '../components/navbar';
export default function App({Component, pageProps}){
  return <>
    <NavBar/>

    <Component {...pageProps}/></>;
}
