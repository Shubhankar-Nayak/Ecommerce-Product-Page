import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center font-KumbhSans'>
      <div className='fixed top-0 z-50'>
        <NavBar count={count} setCount={setCount} />
      </div>
      <Container count={count} setCount={setCount} />
    </div>
  )
}

export default App
