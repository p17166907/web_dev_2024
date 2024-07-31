

/**
 * Movie component to display individual movie information.
 * @param {Object} props - Component properties.
 * @param {Object} props.movie - Movie object to display.
 * @returns {React.JSX.Element} - The rendered movie item.
 */
export function Movie({ movie, handleSelectMovie }) {

    return (
        <li onClick={() => handleSelectMovie(movie.imdbID)}>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
            <h3>{movie.Title}</h3>
            <div> <p> <span>🗓</span> <span>{movie.Year}</span> </p> </div>
        </li>
    )
}