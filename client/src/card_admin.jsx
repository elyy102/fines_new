import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Accept from './accept_btn'
import NotAccept from './not_accept_btn'
import { useSelector } from 'react-redux'

function Card_admin() {
  const [imageValue, setImageValue] = useState('')
  const [image, setImage] = useState()

  const [applications, setApplications] = useState([])

  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    fetch("http://localhost:3000/requests_all/", {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
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
            <img src={el.image} alt="" />
              <div className="card_admin_btn">
                 <Accept id={el.id} />
                 <NotAccept id={el.id} />
              </div>
            </div>
        )
      }
    </>
  )
}

export default Card_admin
