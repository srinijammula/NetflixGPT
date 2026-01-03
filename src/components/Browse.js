import { useSelector } from "react-redux";
import useTitleMovies from "../hooks/useTitleMovies";
import { NOW_PLAYING_MOVIES_URL, POPULAR_MOVIES_URL, TOP_RATED_MOVIES_URL, UPCOMING_MOVIES_URL } from "../utils/constants";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{
    useTitleMovies(NOW_PLAYING_MOVIES_URL,"NowPlaying");
    useTitleMovies(POPULAR_MOVIES_URL,"Popular");
    useTitleMovies(TOP_RATED_MOVIES_URL,"TopRated");
    useTitleMovies(UPCOMING_MOVIES_URL,"Upcoming");
    const gptState = useSelector((store) => store.gpt);


    return (
        <div>
            <Header/>
            {gptState.showGptSearch ? (<GptSearch/>):
            (
            <>
            <MainContainer/>
            <SecondaryContainer/>
            </>
            )
            }
        </div>
    )
}

export default Browse;