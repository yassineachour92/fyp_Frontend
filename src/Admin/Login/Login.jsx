import React, { useState } from 'react'
import { Input } from 'antd';
import './login.scss'
export default function LoginPage({ setUserDetails, userDetails,error }) {

    return (
        <div className="login">
            <img className="login__logo" src="https://static.wixstatic.com/media/a8b38e_8f1f930d061746aabc3e403a494da10c~mv2.png/v1/fill/w_91,h_91,al_c,q_85,usm_0.66_1.00_0.01/fyp%20black.webp" alt="" />
            <div>
                <div className="login__title">Se connecter </div>
                <div className="login__subtitle">Nouveau sur ce site ?
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoH-cowherTvPQqmGP1Yc6Ud0JcY1H0ozwMACxcCbDF8623w/viewform?usp=sf_link" 
                    target="_blank" rel="noreferrer"
                    >  S'inscrire</a>
                </div>
            </div>
            <Input placeholder="Email"
                onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} />
            <Input placeholder="Password" onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="password" />
           {error ===400 && <h6 className="passwordLoginMsg">Email ou Mot de passe entré est incorrect
                </h6>}
        </div>
    )
}
