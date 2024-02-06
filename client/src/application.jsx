import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Logo from './logo'
import { useSelector } from 'react-redux'

function Application() {
  const [date, setDate] = useState('')
  const [place, setPlace] = useState('')
  const [car_number, setCarNumber] = useState('')
  const [imageValue, setImageValue] = useState('')
  const [image, setImage] = useState()

  const token = useSelector((state) => state.auth.token)

  async function add(date1, place1, car_number1, image1) {
    const data = new FormData();

    data.append('date', date)
    data.append('place', place)
    data.append('car_number', car_number)
    data.append('image', image[0])
    // const data = {
    //   'violation_date': violation_date,
    //   'violation_place': violation_place,
    //   'car_number': car_number,
    //   'image': image
    // }
    console.log(data)
    console.log(image)
    await fetch("http://localhost:3000/add/", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: data
    });
    setDate('')
    setPlace('')
    setCarNumber('')
    setImage()
    setImageValue('')

  }
  return (
    <>
    <Logo />
    <div className="login">
      <div className="login_rectangle">
      <h1 className='login_rectangle_h1'>Заявка</h1>
      <form encType='multipart/form-data' onSubmit={(e) => {
        e.preventDefault()
        console.log("gut")
        add(date, place, car_number, image)

      }}>
        <input className='login_input' type="date" placeholder='Введите дату нарушения...' value={date} onChange={(e) => {
            setDate(e.target.value)
          }} required />
        <input className='password_input' type="text" placeholder='Введите место нарушения...' value={place} onChange={(e) => {
            setPlace(e.target.value)
          }} required />
        <input className='login_input' type="text" placeholder='Введите номер машины...' value={car_number} onChange={(e) => {
            setCarNumber(e.target.value)
          }} required />
        <input className='password_input' type="file" placeholder='Прикрепите фото/видео...' value={imageValue} onChange={(e) => {
            setImageValue(e.target.value)
            setImage(e.target.files)
          }} required />
        <input className='login_btn' type="submit" value="Отправить" />
      </form>
      </div>
    </div>
    </>
  )
}

export default Application
