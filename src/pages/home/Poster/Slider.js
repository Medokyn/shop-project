import styles from './Poster.module.css'
import  './Flickity.module.css'

import Flickity from 'flickity'

const  flickityOptions = {
    initialIndex: 2
}

const Poster = () => {
    return (
<div className={styles.Poster}>
  <Flickity
  className='Slider'
  elementType='div'
  disableImagesLoaded={false}
  options={flickityOptions}
  reloadOnUpdate>
  

  </Flickity>

</div>
        
      )




}

export default Poster




