import React from 'react';
import { Zoom } from 'react-slideshow-image';
 
const images = [
'http://www.borkholderfurniture.com/wp-content/uploads/sites/3/2017/10/slide-bedroom.jpg',
'https://azcd.domayne.com.au/media/catalog/category/cache/25/image/1260x/17f82f742ffe127f42dca9de82fb58b1/gp917532-furniture-hero.jpg',
'https://www.mattblatt.com.au/media/catalog/product/i/i/ii-cha-005_001.jpg'
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 1000,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <div className="slide-container">
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}
export default Slideshow;


// 'http://www.borkholderfurniture.com/wp-content/uploads/sites/3/2017/10/slide-bedroom.jpg',
// 'https://azcd.domayne.com.au/media/catalog/category/cache/25/image/1260x/17f82f742ffe127f42dca9de82fb58b1/gp917532-furniture-hero.jpg',
// 'https://www.mattblatt.com.au/media/catalog/product/i/i/ii-cha-005_001.jpg'