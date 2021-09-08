import React from 'react'
import './card.scss'
export default function Card({ title, img, link }) {
    return (
        <div className="card">
            <div className="card__title">

                {title}
            </div>
            <div className="card__img">
                <img src={img} alt={title} />
            </div>
            <a href={link} target="_blank">
                <button className="button_seemore"  >
                    <div>
                        Voir plus
                    </div>

                </button>
            </a>
        </div>
    )
}
