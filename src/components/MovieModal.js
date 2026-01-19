import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";


const MovieModal=({movie, OnClose})=>{
    const [trailerKey,setTrailerKey]=useState(null);
    const movieId=movie.id;

    useEffect(()=>{
        document.body.style.overflow="hidden";
        return () => {
            document.body.style.overflow="auto";
        }
    },[]);
    useEffect(()=>{
        const getVideoUrl = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
            const jsonData = await data.json();
            const filteredData = jsonData?.results?.filter(video => video.type === "Trailer")
            const trailer = filteredData?.length > 0 ? filteredData[0] : jsonData?.results[0];
            setTrailerKey(trailer.key);
        };
        getVideoUrl();
    },[movie?.id])
    
    return(
        <div className="fixed inset-0 text-white bg-black opacity-80 flex items-center justify-center">
            <button className="absolute top-5 right-5 text-3xl" onClick={OnClose}>❌</button>
            {trailerKey&&<iframe
                className="w-[90%] md:w-[70%] aspect-video"
                src={"https://www.youtube.com/embed/"+trailerKey+"?autoplay=1"}
                allow="autoplay; encrypted-media"
                allowFullScreen
            />}
        </div>
    )
}

export default MovieModal;
