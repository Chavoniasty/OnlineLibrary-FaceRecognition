import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import FaceCard from './FaceCard';
import { useState } from 'react';

export default function Dashboard({ faces }) {
    const responsive = {

        max: {
            breakpoint: { max: 3000, min: 800 },
            items: 3
        },
        med: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        min: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const counter = () => {
        console.log(faces.length)
        console.log(faces[0].facedata)
    }


    return (
        <div className='flex flex-col justify-center w-full h-full'>
            <div className='lg:max-w-[1024px] h-full'>
                <h1 className="text-2xl font-bold" onClick={() => counter()}>Faces</h1>
                {faces.length > 2 ?
                    <Carousel responsive={responsive}
                        infinite={true}>
                        {faces.map(face => (
                            <FaceCard image={face.facedata} race={face.race} emotion={face.emotion} gender={face.gender} age={face.age} key={face.id} />
                        ))}
                    </Carousel>
                    :
                    <div className='w-[1024px] h-2/3 flex flex-col items-center justify-center bg-blue-100 rounded-xl '>
                        <div className='w-1/2 p-8 bg-white shadow-xl rounded-xl'>
                            <h1 className='text-3xl font-bold text-red-600'>ERROR ERROR ERROR</h1>
                            <p className='text-2xl font-bold '>Load at least 3 faces from database!</p>
                            <p>You need to load at least 3 faces from database so carousel won't crash the site. If your database is empty and you have admin privilages upload some faces via buttom underneath.</p>
                        </div>
                    </div>
                }
            </div>

        </div>
    )
}
