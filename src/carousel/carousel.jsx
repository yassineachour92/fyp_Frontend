import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel  className="carousel" autoPlay infiniteLoop  >
                <div>
                    <img src="https://static.wixstatic.com/media/a8b38e_2e5f7723d19440269d6a611822a80943~mv2.jpg/v1/fill/w_1340,h_689,al_c,q_85,usm_0.66_1.00_0.01/a8b38e_2e5f7723d19440269d6a611822a80943~mv2.webp" />
                    <p className="legend">Prises du mois
                    </p>
                </div>
                <div>
                    <img src="https://static.wixstatic.com/media/a8b38e_c86dcfa812ab4b3790778b288ea2e092~mv2.jpg/v1/fill/w_1340,h_689,al_c,q_85,usm_0.66_1.00_0.01/a8b38e_c86dcfa812ab4b3790778b288ea2e092~mv2.webp" />
                    <p className="legend">Prises du mois
                    </p>
                </div>

            </Carousel>
        );
    }
};
export default DemoCarousel;
