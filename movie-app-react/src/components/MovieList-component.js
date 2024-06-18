import { Movie } from "./Movie-component";



export function MovieList({ movies, handleSelectMovie }) {
    return (
        <ul className="list list-movies"> {movies?.map((movie, index) =>
            (<Movie key={movie.imdbID} movie={movie} handleSelectMovie={handleSelectMovie} />))}
        </ul>
    )
}