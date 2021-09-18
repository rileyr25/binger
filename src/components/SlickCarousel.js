import React, { useState, useEffect} from 'react'
import Slider from 'react-slick'
import Slide from './Slide'


function SlickCarousel() {
const [movieData, setMovieData] = useState([]);
    
https://api.themoviedb.org/3/movie/now_playing?api_key=77aaca50c36a99915c39b41a386a0424&language=en-US&page=1

    useEffect(() => {
        const fetchFeatured = async () => {

            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=77aaca50c36a99915c39b41a386a0424&language=en-US&page=1`);
            
            let responseData = await response.json();
            responseData = responseData.results.splice(0, 5)
            console.log(responseData)
            if(responseData.length > 0) {
                setMovieData(responseData);
            }
        }
        fetchFeatured();

    }, [])


    const settings = {
        className: 'carousel-slide',
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        slide: 'Slide',
    }

    
    return (
        <section className="carousel-section">
            <Slider {...settings} className='carousel-component'>
                {movieData.map((oneSlide, i) => {return <Slide key={i} movieObj={oneSlide}/>})}
            </Slider>
        </section>
    )
}

export default SlickCarousel
