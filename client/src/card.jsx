import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { useSelector } from 'react-redux'

function Card() {
  const [count, setCount] = useState(0)

  const [date, setDate] = useState('')
  const [place, setPlace] = useState('')
  const [car_number, setCarNumber] = useState('')
  const [imageValue, setImageValue] = useState('')
  const [image, setImage] = useState()
  const [status, setStatus] = useState('')

  const [applications, setApplications] = useState([])


  const token = useSelector((state) => state.auth.token)

  useEffect(() => {
    fetch("http://localhost:3000/requests/", {
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
        applications.map(el =>
          <div className="profile_myapplication">
          <img src={el.image} alt="" />
          <p>Дата нарушения: {el.date}</p>
          <p>Место нарушения: {el.place}</p>
          <p>Номер машины: {el.car_number}</p>
          <p id='status' >{el.status}</p>
        </div>
        )
      }
    </>
  )
}

export default Card
