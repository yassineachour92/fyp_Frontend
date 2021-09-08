import React from 'react'
import './about.scss'
function About() {
    return (
        <div className="about">
            <img className="about__img" src="img/bienvenu.png" alt="" />
            <div className="about__mission">
                <div className="about__mission__title">
                    NOTRE MISSION
                </div>
                <div className="about__mission__description">
                    FYP s’occupe de plusieurs types de photographie, tels que la
                    photographie Corporate , la photographie familiale, les sessions photos privées et personnalisées,
                    mais surtout la création des contenus visuels pour les canaux de communication
                    Votre image est notre métier, la notre c'est votre SATISFACTION
                </div>
            </div>
            <div className="about__vision">
                <div className="about__vision__title">
                NOTRE VISION 
                </div>
                <div className="about__vision__description">
                Notre approche est orientée vers vos besoins essentiels, c’est pour cela que nous
                 suivons toujours les nouvelles tendances et nous travaillons avec grande flexibilité
                  que ce soit au niveau du matériel demandé, au niveau de votre budget mais également
                   au niveau des conseils données et du suivi
                </div>
            </div>
            <img className="about__vision__img" src="https://static.wixstatic.com/media/a8b38e_796bb066372b456d81d51e951299f2ff~mv2.jpg/v1/fill/w_1349,h_409,al_c,q_85,usm_0.66_1.00_0.01/a8b38e_796bb066372b456d81d51e951299f2ff~mv2.webp" alt="" srcset="" />
        </div>
    )
}

export default About
