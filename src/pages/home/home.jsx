import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Poster from '../home/Poster/Poster'
import Category from './Catalog/Catalog';



function Home(){
  return (
    <>
    <Header/>
      <Poster/>
      <Category/>
      <Footer/>
    </>
  );
} 


export default Home
  