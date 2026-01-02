import { useDispatch } from "react-redux";
import * as movieActions from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS} from "../utils/constants";

const useTitleMovies = (movies_url,title) => {
    const dispatch = useDispatch();

    const getMovies = async () => {
        const data = await fetch(movies_url,API_OPTIONS);
        const json = await data.json();
        const action_name="set"+title+"Movies";
        dispatch(movieActions[action_name](json.results));
    }
    useEffect(()=>{
        getMovies();
    },[]);
}

export default useTitleMovies;