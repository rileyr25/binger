import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import noPoster from '../images/no-poster.jpg'
import * as FaIcons from 'react-icons/fa'

function Single({ movieObj }) {
    const { addMovieToFavourites, removeFromFavourites, favlist } = useContext(GlobalContext);

    let storedMovie = favlist.find(obj => obj.id === movieObj.id);

    const inFavourites = storedMovie ? true : false;

    let ratingClass = '';
    if(movieObj.vote_average >= 8) {
        ratingClass = "movie-rating green"
    } else if (movieObj.vote_average >= 6) {
        ratingClass = "movie-rating orange"
    } else {
        ratingClass = "movie-rating red"
    }

    let rawDate = movieObj.release_date;

    let formattedDate = rawDate.replaceAll('-', '/')


    return (
        <div className="single-movie">
            <h1 className="single-title">{movieObj.title}</h1>
            <div className="single-display">
                <div className="movie-poster">
                    {movieObj.poster_path === null ?
                        <img src={noPoster} alt="No poster available" /> :
                        <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={`${movieObj.title} Poster`} />
                    }
                </div>
                <div className="movie-details">
                    <p className="single-ratings"><span className={ratingClass}>{movieObj.vote_average}<FaIcons.FaStar/></span> ({movieObj.vote_count} users)</p>
                    <p className="single-release">  {formattedDate}</p>
                    <p className="single-release">  {movieObj.production_companies.name}</p>
                    
                    <div className="widescreen-overview">
                        <h2>Overview:</h2>
                        <p className="description">{movieObj.overview}</p>
                    </div>

                    {inFavourites ? <button onClick={() => removeFromFavourites(movieObj.id)} className="remove-btn cardbtn"><FaIcons.FaHeart/> <span>Remove</span></button> :
                                    <button onClick={() => addMovieToFavourites(movieObj)} className="fav-btn cardbtn"><FaIcons.FaRegHeart/> <span>Favourite</span></button>
                        }
                </div>
                
            </div>  
            <div className="mobile-overview">
                <h2>Overview:</h2>
                <p className="description">{movieObj.overview}</p>
            </div>
        </div>
    )
}

export default Single
