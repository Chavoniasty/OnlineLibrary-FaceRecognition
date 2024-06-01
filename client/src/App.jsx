import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className='flex flex-col w-screen h-screen'>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
    </div>
  )
}

export default App
