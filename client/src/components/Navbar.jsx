import React from 'react'

export default function Navbar({ isLogged, setIsLogged }) {
    return (
        <ul className='flex flex-row justify-between w-full h-12 p-4 bg-emerald-600'>
            <li className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-2xl font-bold text-slate-200'>Library of Faces</h1>
            </li>
            {isLogged === true ?
                <li className='flex flex-row items-center justify-center h-full gap-4 text-slate-100'>
                    <div>
                        Hi, user_name
                    </div>
                    <button onClick={() => setIsLogged(false)}>
                        Sign out
                    </button>
                </li>
                :
                <li className='flex flex-row items-center justify-center h-full gap-4 text-slate-100'>
                    <button onClick={() => setIsLogged(true)}>
                        Sign in
                    </button>
                    <div>
                        Sign up
                    </div>
                </li>}

        </ul>
    )
}
