import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { client } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { setGptMovies } from "../utils/gptSlice";

const GptSearchBar = () =>{
    const language = useSelector((store) => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch();
    
    const searchMovieTmdb = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const jsonData = await data.json();
        return jsonData.results;
    }

    const handleGptSearch = async () => {
        console.log(searchText.current.value);
        const response = await client.responses.create({
            model: 'gpt-4o',
            instructions: 'You are NetflixGPT, an AI assistant that helps users discover movies. Respond with movie recommendations based on the user search intent. Only give 5 movie names in the response. Example : Inception, The Matrix, Interstellar, The Terminator, Back to the Future. If movie name is given, give full movie name and 4 other similar movies in same format. Do not add any additional text.',
            input: searchText.current.value,
        });
        const gptMovies = response.output_text.split(',').map(movie => movie.trim());
        const data = await Promise.all(gptMovies.map((movie) => searchMovieTmdb(movie)));
        dispatch(setGptMovies({movieNames: gptMovies, movieResults: data}));
    }

    return(
        <div className="pt-20 flex justify-center">
            <form className="bg-black rounded-lg p-2 grid grid-cols-12 w-1/2" onSubmit={(e) => e.preventDefault()}>
                <input ref={searchText}type="text" placeholder={lang[language].gptSearchPlaceholder} className="p-4 m-2 text-lg col-span-8"/>
                <button type="submit" onClick={handleGptSearch} className="m-3 bg-red-700 text-white px-4 py-2 rounded col-span-4">{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;