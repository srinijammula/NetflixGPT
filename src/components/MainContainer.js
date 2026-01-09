import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if(!movies || movies.length===0) return;
    //console.log("Now Playing Movies in MainContainer:", movies);
    const mainMovie=movies[0];
    const {original_title, id, overview} = mainMovie;


  return (
    <div className="pt-32 md:pt-0 bg-black">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
    );
};

export default MainContainer;