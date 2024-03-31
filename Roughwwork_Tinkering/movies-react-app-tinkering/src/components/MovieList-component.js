import { Movie } from "./Movie-component";


export function MovieList({ movies }) {
    console.log('MovieList', movies);

    return (

        <ul className="list">
            {movies?.map((movie, index) => <Movie key={index} movie={movie} />)}
        </ul>
    )
}



