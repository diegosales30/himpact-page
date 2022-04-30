import React from 'react';
import banner1 from '../../assets/banner1.png';
import banner2 from '../../assets/banner2.png';
import banner4 from '../../assets/banner4.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './index.css';


const FeedCarousel2 = () => {
    
    return (
        <Carousel 
            className='carousel2'
            showThumbs={false} 
            showArrows={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={1000}
            showStatus={false}
            showIndicators={false}
            dynamicHeight={true}
            centerSlidePercentage={50}
        >
            <div>
                <img src={banner4} alt="banner"/>
            </div>
            <div>
                <img src={banner1} alt="banner"/>
            </div>
            <div>
                <img src={banner2} alt="banner"/>
            </div>
            
        </Carousel>
    );
};


export default FeedCarousel2;