export default function Navbar({ isLogged, setIsLogged }) {
    return (
        <div className='flex flex-row justify-center items-center w-full h-12'>
            <div className='flex flex-row items-center justify-between lg:max-w-screen-xl lg:min-w-[1024px] font-bold'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='text-2xl font-bold'>Library of Faces</h1>
            </div>
            {isLogged === true ?
                <div className='flex flex-row items-center justify-center h-full gap-4'>
                    <div>
                        Hi, user_name
                    </div>
                    <button onClick={() => setIsLogged(false)}>
                        Sign out
                    </button>
                </div>
                :
                <div className='flex flex-row items-center justify-center h-full gap-4'>
                    <button onClick={() => setIsLogged(true)}>
                        Sign in
                    </button>
                    <div>
                        Sign up
                    </div>
                </div>}
            </div>
        </div>
    )
}
