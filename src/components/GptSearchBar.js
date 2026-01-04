import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () =>{
    const language = useSelector((store) => store.config.lang);
    return(
        <div className="pt-20 flex justify-center">
            <form className="bg-black rounded-lg p-2 grid grid-cols-12 w-1/2">
                <input type="text" placeholder={lang[language].gptSearchPlaceholder} className="p-4 m-2 text-lg col-span-8"/>
                <button type="submit" className="m-3 bg-red-700 text-white px-4 py-2 rounded col-span-4">{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;