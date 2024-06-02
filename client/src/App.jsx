import { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  return (
    <div className='flex flex-col items-center w-screen h-screen'>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className='lg:w-2/3 lg:h-4/5 lg:flex lg:flex-col lg:items-center lg:justify-around'>
          {isLogged === true ?
            <>
              <Filter />
              <Dashboard />
            </> :
            <Login isLogged={isLogged} setIsLogged={setIsLogged} />
          }
        </div>
      </div>
    </div>
  )
}

export default App
