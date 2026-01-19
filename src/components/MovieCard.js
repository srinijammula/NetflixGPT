import { IMG_CDN } from "../utils/constants";

const MovieCard = ({poster, onClick}) => {
    if(!poster){
        return null;
    }
    return (
        <div className="cursor-pointer" onClick={onClick}>
            <div className="w-28 md:w-48 shrink-0">
                <img src={IMG_CDN + poster} alt="movieimage" className="transition-transform duration-300 hover:scale-110"/>
            </div>
        </div>
    )
}       

export default MovieCard;