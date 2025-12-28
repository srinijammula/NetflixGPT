import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES_URL,API_OPTIONS);
        const json = await data.json();
        console.log("Now Playing:", json.results);
        dispatch(setNowPlayingMovies(json.results));
    }
    useEffect(()=>{
        getNowPlaying();
    },[]);
}

export default useNowPlayingMovies;