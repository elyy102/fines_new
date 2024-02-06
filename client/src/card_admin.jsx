import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function Card_admin() {
  const [imageValue, setImageValue] = useState('')
  const [image, setImage] = useState()

  const [applications, setApplications] = useState([])


  useEffect(() => {
    fetch("http://localhost:3000/requests/", {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(data => data.json())
      .then(data => setApplications(data))
  }, [])

  return (
    <>
{
        Array.isArray(applications) && applications.map(el =>
          <div className="profile_myapplication">
          <Link to={'/separate_card'}>
            <img src={el.image} alt="" />
          </Link>
              <div className="card_admin_btn">
                 <button className='card_admin_btn_1'>Принять</button>
                 <button className='card_admin_btn_2'>Отклонить</button> 
              </div>
            </div>
        )
      }
    </>
  )
}

export default Card_admin