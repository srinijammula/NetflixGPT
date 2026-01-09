import { BACKGROUND_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
    return (
        <div>
            <img className="fixed -z-10 h-full w-full object-cover"
            src={BACKGROUND_URL}/>
            <div className="">
            <GptSearchBar/>
            <GptMovieSuggestions/>
            </div>
        </div>
    )
}

export default GptSearch;