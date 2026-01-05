import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
    const {movieNames, movieResults} = useSelector((store) => store.gpt);
    if(movieNames.length === 0 || movieResults.length === 0){
        return null;
    }
    return (
        <div className="p-4 m-4 bg-black bg-opacity-15">
            {movieResults.map((movies, index) => (<MovieList key={movies.id} title={movieNames[index]} movies={movies} />))}
        </div>
    )
}

export default GptMovieSuggestions;