import { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Dashboard from './components/Dashboard'
import Login from './components/Login'

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const [race, setRace] = useState([])
  const [emotion, setEmotion] = useState([])
  const [gender, setGender] = useState([])
  const [minAge, setMinAge] = useState(0)
  const [maxAge, setMaxAge] = useState(100)


  const [faces, setFaces] = useState()

  const getFacesFromDB = async () => {
    console.log(race)
    console.log(emotion)
    console.log(gender)
    console.log(minAge)
    console.log(maxAge)
    try {
      const response = await fetch(`http://localhost:3000/faces?${new URLSearchParams({
        ageLeft: minAge,
        ageRight: maxAge,
        race: race,
        gender: gender,
        emotion: emotion,
        offset: 0
      })}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const data = await response.json();
      console.log(data);
      setFaces(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }

  }

  return (
    <div className='flex flex-col items-center w-screen h-screen'>
      <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />
      <div className='flex flex-col items-center justify-center w-screen h-screen'>
        <div className='lg:h-4/5 lg:flex lg:flex-col lg:items-center lg:justify-around'>
          {isLogged === true ?
            <>
              <Filter setRace={setRace} setEmotion={setEmotion} setGender={setGender} setMinAge={setMinAge} setMaxAge={setMaxAge} getFacesFromDB={getFacesFromDB} />
              <Dashboard faces={faces} />
              {isAdmin ?
                <button className='flex items-center justify-center h-12 p-6 font-bold text-white bg-blue-500 rounded-xl'>
                  Add new face to library
                </button>
                :
                <>
                </>
              }

            </>
            :
            < Login isLogged={isLogged} setIsLogged={setIsLogged} />
          }
        </div>
      </div>
    </div>
  )
}

export default App
