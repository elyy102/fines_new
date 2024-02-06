import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'

function Accept(props) {
  const [status, setStatus] = useState('')

  const token = useSelector((state) => state.auth.token)

  async function add(status) {
    const data = {
      'status': 'Принята',
      id: props.id
    }
    await fetch("http://localhost:3000/status/", {
      method: 'POST',
      mode: 'cors',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    setStatus('')

  }

  return (
    <>
          <button onClick={(e) => {e.preventDefault()
          add()}} type="submit" className='card_admin_btn_1'>Принять</button>
    </>
  )
}

export default Accept
