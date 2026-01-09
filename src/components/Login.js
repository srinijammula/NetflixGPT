import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import Header from "./Header";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../utils/userSlice";
import { BACKGROUND_URL, PHOTO_URL } from "../utils/constants";

const Login = () =>{
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        console.log(email.current.value, password.current.value);
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(!message){
            //Proceed with sign in or sign up
            if (!isSignInForm){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: PHOTO_URL
                        }).then(() => {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(setUser({uid, email, displayName, photoURL}));
                        }).catch((error) => {
                            // An error occurred
                            setErrorMessage(error.message);
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
            }
            else{
                // Sign in logic to be implemented
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log("User signed in:", user);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage);
                });
            }
        }
    }

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }
return(
    <div>
        <Header/>
        <img className="fixed h-full w-full object-cover -z-10"
        src={BACKGROUND_URL}/>
    <div className="">
    <form onSubmit={(e)=>{e.preventDefault();}} className="p-6 md:p-12 bg-black bg-opacity-75 text-white absolute w-full md:w-1/3 top-24 mx-auto right-0 left-0">
        <h1 className="text-4xl font-bold p-2 mx-2 mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input ref={name} type="Name" placeholder="Full Name" className="p-3 m-3 w-full rounded-md bg-gray-700"/>}
        <input ref={email} type="email" placeholder="Email or phone number" className="p-3 m-3 w-full rounded-md bg-gray-700"/>
        <input ref={password} type="password" placeholder="Password" className="p-3 m-3 w-full rounded-md bg-gray-700"/>
        {errorMessage && <p className="p-3 text-red-600">{errorMessage}</p>}
        <button type="submit" onClick={handleButtonClick} className="p-3 m-3 bg-red-600 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="p-3 text-xl cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up" : "Already have an account? Sign In"}</p>
    </form>
    </div>
    </div>
)
}

export default Login;