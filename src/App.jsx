import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Category from './Components/category'
import TopRestaurent from './Components/TopRestaurent'
import OnlineDelivery from './Components/OnlineDelivery'

// import Category from './Components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Header />
 <Category />
 <TopRestaurent />
 <OnlineDelivery />

 </>
  )
}

export default App
