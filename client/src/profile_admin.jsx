import { useState } from 'react'

import './App.css'
import Logo from './logo'
import Card from './card'
import Card_admin from './card_admin'

function Profile_admin() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="wrapper">

    <Logo />
    <div className="profile">
        <h1 className='login_rectangle_h1'>Личный кабинет администратора</h1>
        <div className="profile_data">
            <div className="profile_pa">
                <p className="profile_p">Иванов Иван Иванович</p>
                <a href="">редактировать</a>  
            </div>
            <div className="profile_pa">
                <p className="profile_p">ivanov@gmail.com</p>
                <a href="">редактировать</a>  
            </div>
            <div className="profile_pa">
                <p className="profile_p">89501856384</p>
                <a href="">редактировать</a>  
            </div>  
        </div>
        <div className="profile_myapplications">
            <Card_admin />
        </div>
    </div>

    </div>
    </>
  )
}

export default Profile_admin
