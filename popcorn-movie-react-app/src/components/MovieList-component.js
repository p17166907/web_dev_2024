
import { Movie } from "./Movie-component"

/**
 * MovieList component to display a list of movies.
 * @param {Object} props - Component properties.
 * @param {Array} props.movies - Array of movie objects to display.
 * @returns {React.JSX.Element} - The rendered list of movies.
 */
export function MovieList({ movies, handleSelectMovie }) {
    return (
        <ul className="list list-movies">{movies?.map((movie, index) =>
            (<Movie key={movie.imdbID} movie={movie} handleSelectMovie={handleSelectMovie} />))}
        </ul>
    )
}