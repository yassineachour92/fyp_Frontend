import React, { Component, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './CarouselService.css'
import { ImageDemo } from '../Image/image';
import Modal from '../Modal/Modal';

export default function CarouselService({ onChange, img }) {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [title, setTilte] = useState("false");
    const [indexModal, setIndexModal] = useState(0);


    return (
        <>
            <Carousel  showThumbs={false} showStatus={false} className="carousel" >
                {
                    img.map(el => (
                        <div onClick={() => { setIsModalVisible(true); setTilte("Particulier") }}
                        >
                            <ImageDemo img={el} />
                        </div>
                    ))
                }


            </Carousel>

            {isModalVisible && <Modal onChange={(index, node) => setIndexModal(index)} title={title} img={img} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} />
            }

        </>
    );
};

