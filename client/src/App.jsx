import { useState } from 'react'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Drag from "./components/Drag.jsx";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(true)

  const [userName, setUserName] = useState('');

  const [race, setRace] = useState([])
  const [emotion, setEmotion] = useState([])
  const [gender, setGender] = useState([])
  const [minAge, setMinAge] = useState(0)
  const [maxAge, setMaxAge] = useState(100)

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  const [faces, setFaces] = useState()

  const getFacesFromDB = async () => {
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
                <>
                  <button onClick={() => handleOpen(Modal)}
                    className='flex items-center justify-center h-12 p-6 font-bold text-white bg-blue-500 rounded-xl'>
                    Add new face to library
                  </button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Drag />
                    </Box>
                  </Modal>

                </>
                :
                <>
                </>
              }

            </>
            :
            < Login setIsAdmin={setIsAdmin} setIsLogged={setIsLogged} setUserName={setUserName} />
          }
        </div>
      </div>
    </div>
  )
}

export default App
