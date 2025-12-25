import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        console.log(email.current.value, password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);

    }
    
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }
return(
    <div>
        <Header/>
        <img className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/8e4a7625-f942-48f5-a9b0-d470b772bc8c/web/US-en-20251215-TRIFECTA-perspective_222a4d2f-dd7e-4533-9a42-1497998bfb4e_small.jpg"/>
    <form onSubmit={(e)=>{e.preventDefault();}} className="p-12 bg-black bg-opacity-75 text-white absolute w-1/3 top-24 mx-auto right-0 left-0">
        <h1 className="text-4xl font-bold p-2 mx-2 mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="Name" placeholder="Full Name" className="p-3 m-3 w-full rounded-md bg-gray-700"/>}
        <input ref={email} type="email" placeholder="Email or phone number" className="p-3 m-3 w-full rounded-md bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-3 m-3 w-full rounded-md bg-gray-700"/>
        {errorMessage && <p className="p-3 text-red-600">{errorMessage}</p>}
        <button type="submit" onClick={handleButtonClick} className="p-3 m-3 bg-red-600 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-3 text-xl cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}</p>
    </form>
    </div>
)
}

export default Login;