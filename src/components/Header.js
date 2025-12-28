import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearUser, setUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    // console.log("REDUX USER:", user);
    const handleSignOut = () =>{
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in
            const {uid, email, displayName, photoURL} = user;
            dispatch(setUser({uid, email, displayName, photoURL}));
            navigate('/browse');
          } else {
            // User is signed out
            dispatch(clearUser());
            navigate('/');
          }
        });
        return ()=> unsubscribe();
      },[]);
    return(
        <div className="absolute p-4 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
            src={LOGO_URL} alt="logo" />
            {user && <div className="flex items-center gap-4">
                <img className="w-10 h-10"
                src={user?.photoURL} alt="usericon"/>
                <button onClick={handleSignOut} className="bg-red-600 p-2 rounded text-white text-lg font-semibold">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;