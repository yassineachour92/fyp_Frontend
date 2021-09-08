import React from 'react'
import './description.scss'

function Description() {
    return (
        <div className="description">
            <div className="description__title">
                FYP
            </div>
            <div className="description__slogan">
                Find Your Photos

            </div>
            <div className="description__desc">
                <div>FYP est une agence spécialisée dans les services de la photographie et la réalisation des vidéos. Elle s’occupe</div>
                <div>de plusieurs types de photographie, tels que la photographie corporate , la photographie familiale , les </div>
                <div>sessions photos privées et personnalisées, mais surtout la création des contenus visuels pour les canaux de</div>
                <div> communication</div>

            </div>
            <a href="/about" >

                <button className="description__button button"    >
                    READ MORE
                </button>
            </a>
        </div>
    )
}

export default Description
