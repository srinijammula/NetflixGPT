import useTitleMovies from "../hooks/useTitleMovies";
import { NOW_PLAYING_MOVIES_URL, POPULAR_MOVIES_URL, TOP_RATED_MOVIES_URL, UPCOMING_MOVIES_URL } from "../utils/constants";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () =>{
    useTitleMovies(NOW_PLAYING_MOVIES_URL,"NowPlaying");
    useTitleMovies(POPULAR_MOVIES_URL,"Popular");
    useTitleMovies(TOP_RATED_MOVIES_URL,"TopRated");
    useTitleMovies(UPCOMING_MOVIES_URL,"Upcoming");


    return (
        <div>
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}

export default Browse;