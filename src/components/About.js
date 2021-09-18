import React from 'react'
import '../styles/style.scss'
import TMDB from '../images/tmdb-logo.svg'
function About() {
    return (
        <main>
            <section className="about-message">
                <h1>About Us</h1>
                <p>Binger is a simple movie database app designed and developed by Riley Robertson. Explore a vast library of movies and add the best to your favourites list!</p>
                <span>Happy Binging!</span>
            </section>
            <div className="tmdb">
                <p>This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
                <a href="https://www.themoviedb.org/" target="_blank"><img src={TMDB} alt="TMDB Logo" /></a>   
            </div>
        </main>
    )
}

export default About
