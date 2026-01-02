import { useDispatch } from "react-redux";
import { setNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_MOVIES_URL } from "../utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES_URL,API_OPTIONS);
        const json = await data.json();
        dispatch(setNowPlayingMovies(json.results));
    }
    useEffect(()=>{
        getNowPlaying();
    },[]);
}

export default useNowPlayingMovies;