import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import asset1 from "../assets/asset1.jpeg"
import asset6 from "../assets/asset6.jpeg"
import asset7 from "../assets/asset7.jpeg"
import asset5 from "../assets/asset5.jpeg"
import asset8 from "../assets/asset8.jpeg"
const Home = () => {
  return (
    <Carousel autoPlay="true" animationHandler={"fade"}showIndicators={true} showStatus={false} showArrows={false} showThumbs={false} interval={4000}nter infiniteLoop="true">
    <div>
        <img src={asset1} />
        
    </div>
    <div>
        <img src={asset5} />
    
    </div>
    <div>
        <img src={asset6} />
    
    </div>
    <div>
        <img src={asset7} />
       
    </div>
    <div>
        <img src={asset8} />
        
    </div>
</Carousel>
  )
}

export default Home