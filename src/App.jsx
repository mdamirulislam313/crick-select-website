import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componenst/Header'
import Banner from './componenst/banner/Banner'
import PlayerCard from './Players'




function App() {
  const [count, setCount] = useState(0)

  return (
    < >
      <div>
      <Header></Header>
      <Banner></Banner>
      <PlayerCard></PlayerCard>
      </div>

     
      
    </>
  )
}

export default App
