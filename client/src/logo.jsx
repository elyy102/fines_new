import { useState } from 'react'
import './App.css'

function Logo() {
  const [count, setCount] = useState(0)

  return (
    <>
    <a href="/" id='logo_a'><h1 className='logo'>Штрафам <span>ДА</span>!</h1></a>
    </>
  )
}

export default Logo