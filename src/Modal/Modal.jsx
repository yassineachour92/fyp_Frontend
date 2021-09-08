import React, { useState } from 'react'
import { ImageDemo } from '../Image/image'

import { Carousel } from 'react-responsive-carousel';
import './modal.scss'
const data = ["PORTRAIT", "MARIAGE", "GRADUATION", "ANNIVERSAIRE", "FIANÇAILLES", "SESSIONS PHOTO/VIDÉO PRIVÉES"]

function Modal({ isModalVisible, setIsModalVisible, title, img, onChange }) {
  const [textIndex, setTextIndex] = useState(0)
  return (
    <div className="modal">
      <div className="modal__carousel">
        {console.log("object", img)}

        <Carousel  showThumbs={false} showStatus={false} className="carousel" >
          {
            img.map(el => (
              <div>         
                       <ImageDemo img={el} />
              </div>
            ))
          }


        </Carousel>
      </div>
      <div className="modal__desc">

        <div className="modal__desc__title">
          {title}
        </div>
        <div className="modal__desc__type">
          {data.map((el, index) => {
            if (index === textIndex) {
              return el
            }
          })}
        </div>
        <div className="modal__desc__lien">
          Go to Page Particulier
        </div>
      </div>

      <div className="modal__button" onClick={() => setIsModalVisible(false)}>
        X

      </div>
    </div>

  )
}

export default Modal
