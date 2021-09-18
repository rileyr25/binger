import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import SlickCarousel from './SlickCarousel';


function Home() {

    const [movieData, setMovieData] = useState(null);
    
            //Search Bar Change
    const [sort, setSort] = useState("popular");
        const onChange = (e) => {
            setSort(e.target.value);
        }

    //API Call

    useEffect(() => {
        const fetchMovies = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/${sort}?&api_key=77aaca50c36a99915c39b41a386a0424&language=en-US&page=1`);
            
            let responseData = await response.json();
            responseData = responseData.results.splice(0, 24);
            if(responseData.length > 0) {
                setMovieData(responseData)
            }
            
        }
        fetchMovies();
    }, [sort])
    

    
    return (
        <main>
            <SlickCarousel/>
            <div className="select-section">
            <h1>Movies</h1>
            <select name="sort" id="sort" onChange={onChange}>
                <option value="popular">Popular</option>
                <option value="top_rated">Top Rated</option>
                <option value="now_playing">Now Playing</option>
                <option value="upcoming">Upcoming</option>
            </select>
            </div>
            {movieData !== null && <Movie movieData={movieData}/>}
        </main>
    )
}

export default Home