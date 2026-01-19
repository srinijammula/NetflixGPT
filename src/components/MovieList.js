import { useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

const MovieList = ({ title, movies }) => {
    const [selectedMovie, setSelectedMovie] = useState(null);
    //console.log(selectedMovie);

    return (
        <div>
        <div className="p-1 md:p-6">
            <h1 className="text-xl md:text-3xl py-1 md:py-4 text-white">{title}</h1>
            <div className="overflow-x-auto scrollbar-hidden">
            <div className="flex flex-nowrap gap-4">
                {movies.map((movie)=>(<MovieCard key={movie.id} poster={movie.poster_path} onClick={() => setSelectedMovie(movie)} />))}
            </div>
            </div>
        </div>
        {selectedMovie && <MovieModal movie={selectedMovie} OnClose={() => setSelectedMovie(null)} />}
        </div>
    )
}

export default MovieList;