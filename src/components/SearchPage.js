
import React, { useState, useEffect } from 'react'
import { StrictMode } from 'react/cjs/react.production.min';
import Movie from './Movie';

function SearchPage() {

    const [movieData, setMovieData] = useState(null);

    //Search Bar Change
        const onChange = (e) => {
            e.preventDefault();

            setQuery(e.target.value);
        };

        const [query, setQuery] = useState(undefined);

        useEffect(() => {
            const fetchMovies = async () => {
                if(query === undefined) {
                    setMovieData([])
                } else {
                    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=77aaca50c36a99915c39b41a386a0424&language=en-US&page=1&include_adult=false&query="${query}"`);
                
                    let responseData = await response.json();
                    responseData = responseData.results.splice(0, 24)
                    if(responseData.length > 0) {
                        setMovieData(responseData);
                    }
                }
            }
            fetchMovies();

        }, [query])
//https://api.themoviedb.org/3/search/company?api_key=<<api_key>>&page=1




        
    return (
        <main className="search-main">
            <input type="text" placeholder="Search..." value={query} onChange={onChange} className="search-bar"/>
            {movieData !== null && <Movie movieData={movieData}/>}
        </main>
    )
}

export default SearchPage
