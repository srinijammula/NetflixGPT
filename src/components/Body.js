import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {onAuthStateChanged} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearUser, setUser } from "../utils/userSlice";


const Body = () =>{
    const dispatch = useDispatch();
    
    const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path:'/browse',
      element: <Browse />
    }
  ]);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const {uid, email, displayName, photoURL} = user;
        dispatch(setUser({uid, email, displayName, photoURL}));
      } else {
        // User is signed out
        dispatch(clearUser());
      }
    });
  },[]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default Body;