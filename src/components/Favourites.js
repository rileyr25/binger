import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Link } from 'react-router-dom'
import Card from './Card'
import '../styles/style.scss'
import * as GoIcons from 'react-icons/go'


function Favourites({  }) {
    const {favlist} = useContext(GlobalContext)
    return (
        <main className="fav-page">
            <h1>Favourites</h1>
        {favlist.length !== 0 ? 
        <div className="movies-container">
            {favlist.map((movie) => (
                <Card key={movie.id} movieObj={movie}/>
            ))}
        </div>: 
        <section className="no-favs">
            <h2>No Favourites</h2>
            <p>You have no movies in your favourites list!</p>
            <Link to="/search" className="find-movie"><GoIcons.GoSearch/> Find a Movie</Link>
        </section>
        }
        </main>
    )
}

export default Favourites
