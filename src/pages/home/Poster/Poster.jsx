import  { useRef, useEffect } from 'react';
import Flickity from 'flickity';
import 'flickity/css/flickity.css'; 

import page from '../../../components/Images/model1.jpg';
import pageTwo from '../../../components/Images/model2.jpg';
import pageThree from '../../../components/Images/model3.jpg';

import styles from './Poster.module.css'; 

const Poster = () => {
  const flickityRef = useRef(null);

  useEffect(() => {
    flickityRef.current = new Flickity('.carousel', {
      autoPlay: true, 
      wrapAround: true 
    });

    return () => {
      flickityRef.current.destroy();
    };
  }, []);

  return (
    <div className={`${styles.carousel} carousel`}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={page} alt="Page 1" />
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={pageTwo} alt="Page 2" />
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={pageThree} alt="Page 3" />
      </div>
    </div>
  );
};

export default Poster;
