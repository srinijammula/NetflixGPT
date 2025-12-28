import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearUser, setUser } from "../utils/userSlice";

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
        onAuthStateChanged(auth, (user) => {
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
      },[]);
    return(
        <div className="absolute p-4 w-screen bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
            {user && <div className="flex items-center gap-4">
                <img className="w-10 h-10"
                src={user?.photoURL} alt="usericon"/>
                <button onClick={handleSignOut} className="bg-red-600 p-2 rounded text-white text-lg font-semibold">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;