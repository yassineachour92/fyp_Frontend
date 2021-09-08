import React, { useState } from 'react'
import CarouselService from '../CarouselService.css/CarouselService'
import './service.scss'
const data = [{
    img: "https://static.wixstatic.com/media/a8b38e_853619c2da9c476ca69e5dcc02e69d02~mv2.jpg/v1/fill/w_341,h_345,q_90/a8b38e_853619c2da9c476ca69e5dcc02e69d02~mv2.webp",
    title: "Particulier",
    subtitle: "PORTRAIT",
},
{
    img: "https://static.wixstatic.com/media/a8b38e_883b6d391a534af0a40877abd73249f2~mv2.jpg/v1/fill/w_341,h_345,q_90/a8b38e_883b6d391a534af0a40877abd73249f2~mv2.jpg",

    title: "Particulier",
    subtitle: "MARIAGE",
},
{
    img: "https://static.wixstatic.com/media/a8b38e_99fd581bd23a4e3bacd0ef35a8ffceee~mv2.jpg/v1/fill/w_341,h_345,fp_0.49_0.46,q_90/a8b38e_99fd581bd23a4e3bacd0ef35a8ffceee~mv2.webp",

    title: "Particulier",
    subtitle: "GRADUATION",
},
{
    img: "https://static.wixstatic.com/media/a8b38e_b9bc92afbd914291b704899f4eee0cb5~mv2.jpg/v1/fit/w_776,h_336,q_90/a8b38e_b9bc92afbd914291b704899f4eee0cb5~mv2.webp",

    title: "Particulier",
    subtitle: "ANNIVERSAIRE",
},
{
    img: "https://static.wixstatic.com/media/a8b38e_e21d8c9372df4d14a16728f195c82322~mv2.jpg/v1/fit/w_776,h_336,q_90/a8b38e_e21d8c9372df4d14a16728f195c82322~mv2.jpg",

    title: "Particulier",
    subtitle: "FIANÇAILLES",
},
{
    img: "https://static.wixstatic.com/media/a8b38e_0429b5d9144c4e3293ad9a7ee7d7e2a3~mv2.jpg/v1/fit/w_776,h_336,q_90/a8b38e_0429b5d9144c4e3293ad9a7ee7d7e2a3~mv2.jpg",

    title: "Particulier",
    subtitle: "SESSIONS PHOTO/VIDÉO PRIVÉES",
},
]

export default function Service() {
    const [titleIndex, setTileIndex] = useState(0)
console.log("object",titleIndex)
    return (
        <div className="service">
            <div className="service__title">NOS SERVICES </div>
            <div className="service__block">

                <div className="service__block__carousel">

                    <CarouselService img={data.map(el => el.img)} onChange={(index, node) => setTileIndex(index)} />


                    <div className="service__block__title">
                        {data.map((el, index) => {
                            if (index === titleIndex) {
                                return el.title
                            }
                        })}
                    </div>
                    <div className="service__block__subtitle">
                        {data.map((el, index) => {
                            if (index === titleIndex) {
                                return el.subtitle
                            }
                        })}
                    </div>
                </div>
                <div className="service__block__carousel secondone">
                    <CarouselService img={data.map(el => el.img)} onChange={(index, node) => setTileIndex(index)} />

                    <div className="service__block__title">
                        Particulier
                    </div>
                    <div className="service__block__subtitle">
                        MARIAGE
                    </div>
                </div>
                <div className="service__block__carousel">
                    <CarouselService img={data.map(el => el.img)} onChange={(index, node) => setTileIndex(index)} />
                    <div className="service__block__title">
                        Particulier
                    </div>
                    <div className="service__block__subtitle">
                        MARIAGE
                    </div>
                </div>
            </div>
        </div>
    )
}
