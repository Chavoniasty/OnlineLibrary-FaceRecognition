export default function Login({ isLogged, setIsLogged }) {
    return (
        <div>
            <h1>Please log in to browse <p>Library of Faces</p></h1>
            <input type="text" placeholder="username" id="username" />
            <input type="password" placeholder="password" id="password" />
            <button className="text-white rounded bg-emerald-500" onClick={() => setIsLogged(!isLogged)}>Log in</button>
        </div>
    )
}
