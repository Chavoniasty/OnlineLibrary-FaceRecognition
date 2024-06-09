export default function Login({ isLogged, setIsLogged }) {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="w-[600px] bg-blue-300 h-1/3 flex flex-col justify-around p-4 rounded-xl shadow-2xl">
                <h1 className="mb-4 font-semibold text-white">Please log in to browse <p className="text-4xl font-bold text-white ">Library of Faces</p></h1>
                <input type="text" placeholder="Username" id="username" className="px-2 py-1 rounded-xl" />
                <input type="password" placeholder="Password" id="password" className="px-2 py-1 rounded-xl" />
                <button className="py-2 font-bold text-white bg-blue-500 rounded-xl" onClick={() => setIsLogged(!isLogged)}>Log in</button>
            </div>
        </div >
    )
}
