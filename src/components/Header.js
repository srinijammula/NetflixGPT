import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearUser, setUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    //const gptState = useSelector((store) => store.gpt);
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

    const handleGPTSearch = () => {
        dispatch(toggleGptSearch());
        //console.log("GPT STATE:", gptState);
    }

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;  
        //console.log("Selected language:", selectedLanguage);
        dispatch(changeLanguage(selectedLanguage));
    }

    return(
        <div className="absolute p-4 w-full bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44"
            src={LOGO_URL} alt="logo" />
            {user && <div className="flex items-center gap-4">
                {showGptSearch &&<select className="bg-black bg-opacity-70 text-white p-2 rounded-lg" onChange={handleLanguageChange}>
                  {SUPPORTED_LANGUAGES.map((lang)=>(
                    <option key={lang.code} value={lang.code}>{lang.name}</option>
                  ))}
                </select>}
                <button onClick={handleGPTSearch} className="px-2 py-2 my-2 rounded-lg bg-purple-700 text-white">{showGptSearch ? "Home": "GPT Search"}</button>
                <img className="w-10 h-10"
                src={user?.photoURL} alt="usericon"/>
                <button onClick={handleSignOut} className="bg-red-600 p-2 rounded text-white text-lg font-semibold">Sign Out</button>
            </div>}
        </div>
    )
}

export default Header;