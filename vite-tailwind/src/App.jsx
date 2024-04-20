import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
     <div className='mb-5'>
      <h1 className='bg-pink-600 rounded-lg'>What is your name ?</h1>
      <input type="text" className='bg-yellow-200'/>
      <h1 className='bg-pink-600 rounded-lg'>what is your mobile number?</h1>
      <input type="password" name="" id="" className='bg-yellow-200'/>
     </div>

     <Card username = "Aman"></Card>        
     <Card username = "Raj"></Card>

    </>
  )
}

export default App
