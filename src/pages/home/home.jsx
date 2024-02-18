import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import styles from './Home.module.css'
import Poster from '../home/Poster/Poster'
import Category from './Category/Category';



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
  