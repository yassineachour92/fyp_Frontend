import React, { useState, useEffect, useContext } from 'react'
import './navBar.scss'
import BurgerMenu from 'react-burger-menu'
import { useMediaPredicate } from 'react-media-hook'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'antd';
import LoginPage from '../Admin/Login/Login'
import axios from "axios";
import { useHistory } from 'react-router'
// import { useRouter } from 'next/router'

// const { SubMenu } = Menu;


export default function NavBar({ isMenuOpen, setIsMenuOpen }) {
    const mobile = useMediaPredicate('(max-width: 992px)')
    const [isMobile, setIsMobile] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: '',
    });
    const { push } = useHistory()
    const [error, setError] = useState()

    const showModal = () => {
        setError(200)
        setIsModalVisible(true);
    };

    const handleOk = async () => {
        // setIsModalVisible(false);
        console.log(userDetails)

        try {
            const result = await axios.post('http://localhost:5000/users/login', {
                email: userDetails.email,
                password: userDetails.password,
            })
            localStorage.setItem('token', result.data.token)
            push('/admin')
        } catch (error) {
            // console.log(" catch ", error.)
            setError(400)
        }
        console.log(error)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const openPage = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSdoH-cowherTvPQqmGP1Yc6Ud0JcY1H0ozwMACxcCbDF8623w/viewform');

    }
    // useEffect(() => {
    //     if (mobile !== isMobile) {
    //         setIsMobile(mobile)
    //     }
    // }, [mobile])

    //   if (isMobile) {
    return (
        <>
            <>
                <Modal visible={isModalVisible} onOk={handleOk} okText="Login" onCancel={handleCancel}>
                    <LoginPage setUserDetails={setUserDetails} userDetails={userDetails} error={error} />
                </Modal>
            </>
            <div className="web_burger_menu">
                <div className="navbar">
                    <div className="navbar__items">
                        <Link to="/particular"  >
                            <div className="navbar__items__container">Particulier</div>
                        </Link>
                        <Link to="/Professional"  >
                            <div className="navbar__items__container">Professionnels / Business</div>
                        </Link>
                        <Link to="/about" >

                            <div className="navbar__items__container">À propos</div>
                        </Link>
                    </div>
                    <Link to="/">
                        <img src="https://static.wixstatic.com/media/a8b38e_8f1f930d061746aabc3e403a494da10c~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01/fyp%20black.webp"
                            className="navbar__img" alt="img" />
                    </Link>
                    <div className="navbar__button">

                        <div className="navbar__button__element reserver" type="primary" shape="round"  >
                            <div className="buttomname"
                                onClick={openPage}
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdoH-cowherTvPQqmGP1Yc6Ud0JcY1H0ozwMACxcCbDF8623w/viewform?usp=sf_link"
                                target="_blank" rel="noreferrer"
                            >Réserver </div>
                        </div>
                        <div className="navbar__items__findimg">
                            <div className="navbar__element" onClick={showModal}> Déjà client</div>
                            <div className="navbar__button__element" type="primary" shape="round">
                                <div className="buttomname" onClick={showModal}>Find Tour Photos</div>
                            </div>

                            <div className="navbar__items__icons">
                                <a href="https://www.instagram.com/fyp_photography_services/">
                                    <img src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp" alt="" />
                                </a >
                                <a href="https://www.facebook.com/Fypphotographyservices">
                                    <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp" alt="" />
                                </a>
                                <a href="https://www.linkedin.com/company/fyp-services-photographiques?trk=public_profile_topcard-current-company&originalSubdomain=tn">
                                    <img src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01/48a2a42b19814efaa824450f23e8a253.webp" alt="" />
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className="mobile_burger_menu">
                <div className="menu_bar">
                    {isMenuOpen ?
                        <img onClick={() => setIsMenuOpen(!isMenuOpen)} className="icon" src="img/cancel.png" alt="" />
                        :
                        <img onClick={() => setIsMenuOpen(!isMenuOpen)} className="icon" src="img/menu.png" alt="" />
                    }
                    <Link to="/">
                        <img src="https://static.wixstatic.com/media/a8b38e_8f1f930d061746aabc3e403a494da10c~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01/fyp%20black.webp"
                            className="navbar__img logo" alt="img" />
                    </Link>
                </div>
                {isMenuOpen &&
                    <div className="navbar">
                        <div className="navbar__items">
                            <Link to="/particular" onClick={() => setIsMenuOpen(false)} >
                                <div className="navbar__items__container">Particulier</div>
                            </Link>
                            <Link to="/Professional" onClick={() => setIsMenuOpen(false)} >

                                <div className="navbar__items__container">Professionnels / Business</div>
                            </Link>
                            <Link to="/about" onClick={() => setIsMenuOpen(false)} >

                                <div className="navbar__items__container">À propos</div>
                            </Link>
                        </div>

                        <div className="navbar__button navbar__items">

                            <div className="navbar__button__element reserver" type="primary" shape="round"  >
                                <div className="buttomname">Réserver </div>
                            </div>
                            <div className="navbar__items__findimg">
                                <div className="navbar__element"> Déjà client</div>


                                <div className="navbar__button__element" type="primary" shape="round"  >
                                    <div className="buttomname">Find Tour Photos</div>
                                </div>

                                <div className="navbar__items__icons">
                                    <a href="https://www.instagram.com/fyp_photography_services/">
                                        <img src="https://static.wixstatic.com/media/9f9c321c774844b793180620472aa4f1.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01/9f9c321c774844b793180620472aa4f1.webp" alt="" />
                                    </a>
                                    <a href="https://www.facebook.com/Fypphotographyservices">
                                        <img src="https://static.wixstatic.com/media/e316f544f9094143b9eac01f1f19e697.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01/e316f544f9094143b9eac01f1f19e697.webp" alt="" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/fyp-services-photographiques?trk=public_profile_topcard-current-company&originalSubdomain=tn">
                                        <img src="https://static.wixstatic.com/media/48a2a42b19814efaa824450f23e8a253.png/v1/fill/w_23,h_23,al_c,q_85,usm_0.66_1.00_0.01/48a2a42b19814efaa824450f23e8a253.webp" alt="" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                }

            </div>


        </>
    )

}
