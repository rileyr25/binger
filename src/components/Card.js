import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import noPoster from '../images/no-poster.jpg'
import * as FaIcons from 'react-icons/fa'

import '../styles/style.scss'



function Card({ movieObj }) {
    const { addMovieToFavourites, removeFromFavourites, favlist } = useContext(GlobalContext);

    let storedMovie = favlist.find(obj => obj.id === movieObj.id);

    const inFavourites = storedMovie ? true : false;

    //card style logic

    let charLimitSummary = 70;
    let charLimitTitle = 23;
    let fullTitle = movieObj.title;
    let fullSummary = movieObj.overview;
    let summary = '';
    let cardTitle = '';
    let ratingClass = '';

    if (fullSummary.length > charLimitSummary) {
        summary = fullSummary.slice(0, charLimitSummary) + '...'
    } else {
        summary = fullSummary
    }

    if (fullTitle.length > charLimitTitle) {
        cardTitle = fullTitle.slice(0, charLimitTitle) + '...'
    } else {
        cardTitle = fullTitle
    }

    if(movieObj.vote_average >= 8) {
        ratingClass = "movie-rating green"
    } else if (movieObj.vote_average >= 6.8) {
        ratingClass = "movie-rating yellow"
    } else if (movieObj.vote_average >= 6) {
        ratingClass = "movie-rating orange"
    } else {
        ratingClass = "movie-rating red"
    }


    return (
            <div className="movie-card">
                <div className="movie-display">
                    <div className="movie-poster">
                        {movieObj.poster_path === null ?
                            <img src={noPoster} alt="No poster available" /> :
                            <img src={`https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`} alt={`${movieObj.title} Poster`} />
                
                        }
                    </div>
                    <div className="movie-info">
                
                        <div className="top-info">
                            <p className="movie-release">
                                {movieObj.release_date ? movieObj.release_date.substring(0, 4) : "--"}
                            </p>
                            <span className={ratingClass}>{movieObj.vote_average}</span>
                        </div>
                        <p className="movie-summary">{summary}</p>
                
                        <Link to={`/single-movie/${movieObj.id}`} className="movie-link" ><p >View More →</p></Link>
                        {inFavourites ? <button onClick={() => removeFromFavourites(movieObj.id)} className="remove-btn cardbtn"><FaIcons.FaHeart/> <span>Remove</span></button> :
                                    <button onClick={() => addMovieToFavourites(movieObj)} className="fav-btn cardbtn"><FaIcons.FaRegHeart/> <span>Favourite</span></button>
                        }
                

                    </div>
                    </div>
                    <div className="movie-title">
                        <Link to={`/single-movie/${movieObj.id}`} className="title-link"><h3>{cardTitle}</h3></Link> 
                    </div>
            </div>
    )
}
export default Card;
