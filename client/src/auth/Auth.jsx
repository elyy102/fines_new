import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loginThunk } from '../redux/authSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../logo'

const Log = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const authState = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const nav = useNavigate()

    return (
        authState.error ? <p>{authState.error}</p> :
            authState.loading ? <p>Loading...</p> :
                <div className='wrapper'>
                    <Logo />
                    <div className="login">
                        <div className="login_rectangle">
                        <h1 className='login_rectangle_h1'>Вход</h1>
                            <input  className='login_input' value={username} onChange={(e) => {
                                setUsername(e.target.value)
                            }} type="text" />
                            <input className='password_input'  value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} type="password" />
                            <button className='login_btn' onClick={() => {
                                dispatch(loginThunk({
                                    username: username,
                                    password: password
                                }))
                            }}>Войти</button>
                            <p className='login_p'>Еще нет аккаунта?
                                <Link to={'/Reg'}>
                                Зарегистрироваться
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
    )
}

export default Log