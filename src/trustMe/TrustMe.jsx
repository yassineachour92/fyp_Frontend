import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react";
import './trustMe.scss'

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };
const images = [
    "https://static.wixstatic.com/media/a8b38e_2f2945ed39624bc8ad2867076f7bd0af~mv2.png/v1/fill/w_181,h_181,al_c,q_85,usm_0.66_1.00_0.01/a8b38e_2f2945ed39624bc8ad2867076f7bd0af~mv2.webp",
    "https://static.wixstatic.com/media/a8b38e_912d652c7d384e359ebf9f5c7f64ef44~mv2.jpg/v1/fill/w_181,h_181,al_c,q_80,usm_0.66_1.00_0.01/a8b38e_912d652c7d384e359ebf9f5c7f64ef44~mv2.webp",
    "https://static.wixstatic.com/media/a8b38e_2b7b13f3ba4b476abbfb94ff282b5f7a~mv2.jpg/v1/fill/w_181,h_181,al_c,q_80,usm_0.66_1.00_0.01/a8b38e_2b7b13f3ba4b476abbfb94ff282b5f7a~mv2.webp",
    "https://static.wixstatic.com/media/a8b38e_b681e9568d3c4ecbbdbd211b8783dfd2~mv2.png/v1/fill/w_181,h_181,al_c,q_85,usm_0.66_1.00_0.01/a8b38e_b681e9568d3c4ecbbdbd211b8783dfd2~mv2.webp",
    
  ];
const TrustMe = ({ deviceType }) => {
    return (
        <div className="trustMe">
            <div className="trustMe__title">
            ILS NOUS ONT FAIT CONFIANCE
            </div>
      <Carousel
      className="trustMe__carousel"
        ssr
        partialVisbile
      
        responsive={responsive}
        draggable={false}
        infinite={true}
        autoPlaySpeed={1000}
        transitionDuration={500}
      >
        {images.slice(0, 5).map(image => {
          return (
            <Image
            className="trustMe__img"
              draggable={false}
              src={image}
            />
          );
        })}
      </Carousel>
      </div>
    );
  };
export default TrustMe
