import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Category from './Components/category'
// import Category from './Components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <Header />
 <Category />
 </>
  )
}

export default App
