import React from 'react'
import noPoster from '../images/no-poster.jpg'
import { Link } from 'react-router-dom';

function Slide( {movieObj} ) {
    let charLimitSummary = 90;
    let fullSummary = movieObj.overview;
    let summary = '';

    if (fullSummary.length > charLimitSummary) {
        summary = fullSummary.slice(0, charLimitSummary) + '...'
    } else {
        summary = fullSummary
    }

    let mdSummary = fullSummary.slice(0, 150) + '...'
    let lgSummary = fullSummary.slice(0, 320) + '...'

    return (
        <div className="slide-div">

            {movieObj.poster_path === null ?
                <img src={noPoster} alt="No poster available" /> :
                <img src={`https://image.tmdb.org/t/p/w1280/${movieObj.backdrop_path}`} alt={`${movieObj.title} Poster`} />
            }
            <div className="slide-text">
                <p className="slide-title">{movieObj.title}<br /><span className="slide-release">{movieObj.release_date ? movieObj.release_date.substring(0, 4) : "--"}</span></p>
                <p  className="slide-overview sm">{summary}</p>
                <p  className="slide-overview md">{mdSummary}</p>
                <p  className="slide-overview lg">{lgSummary}</p>
                <Link to={`/single-movie/${movieObj.id}`} className="slide-movie-link" ><p >View More →</p></Link>
            </div>

        </div>
    )
}

export default Slide
