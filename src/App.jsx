import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header/header'
import DashBoard from './DashBoard/dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <DashBoard/>
  )
}

export default App
