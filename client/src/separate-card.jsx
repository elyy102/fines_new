import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Car1 from './assets/car-1.jpeg'
import Logo from './logo'

function Separate_card() {
  const [count, setCount] = useState(0)
  const [date, setDatel] = useState('')
  const [place, setPlace] = useState('')
  const [car_number, setCarNumber] = useState('')
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
        <Logo />

{
        applications.map(el =>
          <div className="separate_card">
          <div className="separate_card_content">
            <img src={el.image} alt="" />
              <p>Дата нарушения: {el.date}</p>
              <p>Место нарушения: {el.place}</p>
              <p>Номер машины: {el.car_number}</p>
          <div className="separate_card_btn">
             <button className='separate_card_btn_1'>Принять</button>
             <button className='separate_card_btn_2'>Отклонить</button> 
          </div>  
          </div>
          
        </div>
        )
      }

    </>
  )
}

export default Separate_card
