import React, { useState, useEffect, useContext } from 'react'
import { Input } from 'antd';
import './signUpForm.scss'
function SignUpForm({ setUserInfo, userInfo, setPasswordConfirmed, setPassword, passwordConfirmed, password }) {
    const [passwordInput, setPasswordInput] = useState()
    useEffect(() => {
        setPasswordInput()
    })
    return (
        <div className="signup">

            <Input placeholder="name" value={userInfo.firstName}
                onChange={e => setUserInfo({ ...userInfo, firstName: e.target.value })}
            />
            <Input placeholder="email"  value={userInfo.email}
                onChange={e => setUserInfo({ ...userInfo, email: e.target.value })}
            />
            <Input placeholder="Phone" type="number" value={userInfo.phone}
                onChange={e => setUserInfo({ ...userInfo, phone: e.target.value })}
            />
            <Input
                placeholder="Password"
                // value={passwordInput}
                onChange={
                    e => {
                        setPassword(e.target.value)
                         setPasswordInput(e.target.value)
                        setUserInfo({ ...userInfo, password: e.target.value })
                    }

                }

                type="password"  value={userInfo.password}/>
            <Input
                placeholder="Confirmation mot de passe " onChange={e => setPasswordConfirmed(e.target.value)}
                type="password" value={passwordConfirmed} />
            {passwordConfirmed == password ? "" :
                <h6 className="passwordMsg">Ces mots de passe ne correspondent pas. Veuillez réessayer.
                </h6>}
        </div>
    )
}

export default SignUpForm
