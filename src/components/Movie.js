import Card from './Card'
import '../styles/style.scss'

function Movie({ movieData }) {

    return (
        <section className="movies-container">
                {movieData.map((oneMovie, i) => { return <Card key={i} movieObj={oneMovie} movieData={movieData}/>})}
        </section>
    )
}

export default Movie
