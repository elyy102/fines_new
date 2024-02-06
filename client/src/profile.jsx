import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Logo from './logo'
import Card from './card'
import { useSelector } from 'react-redux'

function Profile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
  
    const [my_info, setMyInfo] = useState([])
  
    const token = useSelector((state) => state.auth.token)

    useEffect(() => {
        fetch("http://localhost:3000/user_info/", {
          method: 'GET',
          mode: 'cors',
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
          }
        })
          .then(data => data.json())
          .then(data => setMyInfo(data))
      }, [])

  return (
    <>

{
        my_info.map(el =>
            <div className="wrapper">

            <Logo />
            <div className="profile">
                <h1 className='login_rectangle_h1'>Личный кабинет</h1>
                <div className="profile_data">
                    <div className="profile_pa">
                        <p className="profile_p">{el.name}</p>
                        <a href="">редактировать</a>  
                    </div>
                    <div className="profile_pa">
                        <p className="profile_p">{el.email}</p>
                        <a href="">редактировать</a>  
                    </div>
                    <div className="profile_pa">
                        <p className="profile_p">{el.phone_number}</p>
                        <a href="">редактировать</a>  
                    </div> 
                    <Link to={'/Application'}>
                        <button className='separate_card_btn_2'>Добавить заявку</button>
                    </Link> 
                </div>
                <div className="profile_myapplications">
                    <Card />
                </div>
            </div>
        
            </div>
        )
      }
    
    </>
  )
}

export default Profile
