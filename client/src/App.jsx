import { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [race, setRace] = useState([""])
  const [emotion, setEmotion] = useState([""])
  const [minAge, setMinAge] = useState(0)
  const [maxAge, setMaxAge] = useState(100)


  return (
    <div className='flex flex-col items-center w-screen h-screen'>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className='lg:h-4/5 lg:flex lg:flex-col lg:items-center lg:justify-around'>
          {isLogged === true ?
            <>
              <Filter setRace={setRace} setEmotion={setEmotion} setMinAge={setMinAge} setMaxAge={setMaxAge} />
{/*              <Dashboard race={race} emotion={emotion} minAge={minAge} maxAge={maxAge}/>*/}
              <button className='flex items-center justify-center h-12 p-6 font-bold text-white rounded-xl bg-emerald-600'>
                Add new face to library
              </button>
            </>
            :
            <Login isLogged={isLogged} setIsLogged={setIsLogged} />
          }
        </div>
      </div>
    </div>
  )
}

export default App
