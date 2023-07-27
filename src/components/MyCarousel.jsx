import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'


import asset1 from "../assets/asset1.jpeg"
import asset6 from "../assets/asset6.jpeg"
import asset7 from "../assets/asset7.jpeg"
import asset5 from "../assets/asset5.jpeg"
import asset8 from "../assets/asset8.jpeg"

const MyCarousel = () => {
    
const handleItemClick = () => {
    // Perform any actions you want on item click
    console.log(`Item clicked:`);
  };
  return (
    <Carousel stopOnHover={false}
    
       autoPlay={true} showIndicators={true} showStatus={false} showArrows={false} showThumbs={false} interval={1000} infiniteLoop ={true}>
    <div style={{ pointerEvents: 'none' }} >
        <img src={asset1} />
        
    </div>
    <div style={{ pointerEvents: 'none' }}  >
        <img src={asset5} />
    
    </div>
    <div style={{ pointerEvents: 'none' }} >
        <img src={asset6} />
    
    </div>
    <div style={{ pointerEvents: 'none' }} >
        <img src={asset7} />
       
    </div>
    <div style={{ pointerEvents: 'none' }} >
        <img src={asset8} />
        
    </div>
</Carousel>
  )
}

export default MyCarousel