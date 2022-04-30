import React from 'react';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner4 from '../../assets/banner4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css';


const FeedCarousel1 = () => {
    
    return (
        <>
        <Carousel 
            className='carousel1'
            showThumbs={false} 
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={1000}
            showStatus={false}
            showIndicators={false}
        >
            <div>
                <img src={banner1} alt="banner"/>
            </div>
            <div>
                <img src={banner2} alt="banner"/>
            </div>
            <div>
                <img src={banner4} alt="banner"/>
            </div>
            
        </Carousel>
        </>
    );
};


export default FeedCarousel1;