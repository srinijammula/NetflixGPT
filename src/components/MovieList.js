import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="p-1 md:p-6">
            <h1 className="text-xl md:text-3xl py-1 md:py-4 text-white">{title}</h1>
            <div className="overflow-x-auto scrollbar-hidden">
            <div className="flex flex-nowrap gap-4">
                {movies.map((movie)=>(<MovieCard key={movie.id} poster={movie.poster_path} />))}
            </div>
            </div>
        </div>
    )
}

export default MovieList;