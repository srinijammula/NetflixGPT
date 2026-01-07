import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setTrailer } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const movieTrailer = useSelector((store) => store.movies.trailer);


const getVideoUrl = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const jsonData = await data.json();
        const filteredData = jsonData?.results?.filter(video => video.type === "Trailer")
        const trailer = filteredData?.length > 0 ? filteredData[0] : jsonData?.results[0];
        dispatch(setTrailer(trailer));
    }

    useEffect(()=>{
        !movieTrailer && getVideoUrl();
    },[])
}

export default useMovieTrailer;