import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Category from './Components/category'
import TopRestaurent from './Components/TopRestaurent'
import OnlineDelivery from './Components/OnlineDelivery'
import Bestplaces from './Components/Bestplaces'
import BestCuisines from './Components/BestCuisines'
import ExploreRes from './Components/ExploreRes'
import Footer from './Components/Footer'


// import Category from './Components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Header />
 <Category />
 <TopRestaurent />
 <OnlineDelivery />
<Bestplaces />
<BestCuisines />
<ExploreRes />
<Footer />
 </>
  )
}

export default App
