import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { regThunk } from '../redux/regSlice'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Logo from '../logo'


const Reg = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const [password, setPassword] = useState("")

    const regState = useSelector((state) => state.reg)
    const dispatch = useDispatch()

    const nav = useNavigate()

    useEffect(() => {
        if (regState.message) {
            nav('/auth')
        }
    }, [regState])

    return (
            regState.loading ? <p>Loading...</p> :
                <div className='wrapper'>
                    <Logo />
                    <div className="login">
                        <div className="login_rectangle">
                            <h1 className='login_rectangle_h1'>Регистрация</h1>
                            <input className='login_input' placeholder='Введите имя...' value={username} onChange={(e) => {
                                setUsername(e.target.value)
                            }} type="text" />
                            <input className='login_input' placeholder='Введите email...' value={email} onChange={(e) => {
                                setEmail(e.target.value)
                            }} type="email" />
                            <input className='login_input' placeholder='Введите номер телефона..' value={phone_number} onChange={(e) => {
                                setPhoneNumber(e.target.value)
                            }} type="text" />
                            <input  className='password_input' placeholder='Введите пароль...' value={password} onChange={(e) => {
                                setPassword(e.target.value)
                            }} type="password" />
                            <button className='login_btn' onClick={() => {
                                dispatch(regThunk({
                                    username: username,
                                    email: email,
                                    phone_number: phone_number,
                                    password: password
                                }))
                            }}>Зарегистрироваться</button>
                                    <p className='login_p'>Уже есть аккаунт?
                                    <Link to={'/auth'}>Войти</Link>
                                    </p>
                        </div>
                        {
                            regState.error ? <p>{regState.error}</p> : <></>
                        }
                    </div>
                </div>
    )
}

export default Reg