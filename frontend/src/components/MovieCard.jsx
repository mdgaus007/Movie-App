import { FaHeart } from "react-icons/fa";
import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {

    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext()
    const favorite = isFavorite(movie.id)

    function OnFavoriteClick(e) {
        e.preventDefault()

        if(favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    return (
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button
                            className={`favorite-btn ${favorite ? "active" : ""} ` } onClick={OnFavoriteClick}
                        style={{ background: "transparent", border: "none", cursor: "pointer" }}
                        >
                        <FaHeart size={20} />
                    </button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{new Date(movie.release_date).toLocaleDateString()}</p>
                {/* <p>{movie.release_date.split("-")[0]}</p> */}
            </div>
        </div >
        </>
    )

}

export default MovieCard;