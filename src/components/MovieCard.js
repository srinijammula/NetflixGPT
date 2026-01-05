import { IMG_CDN } from "../utils/constants";

const MovieCard = ({poster}) => {
    if(!poster){
        return null;
    }
    return (
        <div className="w-48 shrink-0">
            <img src={IMG_CDN + poster} alt="movieimage"/>
        </div>
    )
}       

export default MovieCard;