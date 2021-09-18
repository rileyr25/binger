import React, {useEffect, useState} from 'react'
import { GlobalContext } from '../context/GlobalState';
import {useParams} from 'react-router-dom'
import Single from './Single';
import '../styles/style.scss'

function SinglePage() {
    const { id } = useParams();
    const [movieData, setMovieData] = useState(null);

    //https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    useEffect(() => {
        const fetchMovie = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=77aaca50c36a99915c39b41a386a0424&language=en-US`);
            
            let responseData = await response.json();
            setMovieData(responseData)
        }
        fetchMovie(); 
    }, [])
    
    return (
        
        <main>
            {movieData !== null && <Single movieObj={movieData}/>}
        </main>
    )
}

export default SinglePage
