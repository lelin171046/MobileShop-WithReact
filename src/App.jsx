import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mobile from './Component/Mobile';

function App() {
  const [mobiles, setMobile] = useState([]);
  useEffect(()=>{
    fetch('mobil.json')
    .then(res => res.json())
    .then(data => setMobile(data))
  },[])

  return (
    <>
     {
      mobiles.map(mobiles=> <Mobile key={mobiles.id} mobiles={mobiles}></Mobile>)
     }
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
