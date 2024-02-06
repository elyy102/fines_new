import React from 'react'
import { useDispatch } from 'react-redux'
import { logOut } from './redux/authSlice'
import { useSelector } from 'react-redux'
import Profile_admin from './profile_admin'
import Profile from './profile'

const MainPage = () => {

    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const role = useSelector((state) => state.auth.role)

    return (
        <>
            {
                role === "ADMIN" ? 
                <Profile_admin />
                : 
                <Profile />
            }
            <button id='logout_btn' onClick={() => {
                dispatch(logOut())
            }}>Выйти</button>
        </>
    )
}

export default MainPage