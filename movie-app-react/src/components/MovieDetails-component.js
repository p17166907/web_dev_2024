import { useState, useEffect } from "react";
import { Loader } from "./Loader-component";

export function MovieDetails({ isLoading, setIsLoading, KEY, selectedId, watched, handleAddWatched }) {
    const [movie, setMovie] = useState({});
    const [userRating, setUserRating] = useState('');




    console.log('MovieDetails userRating', userRating);


    const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

    console.log('MovieDetails isWatched', isWatched);



    // Destructuring movie details
    const { Title: title, Year: year, Poster: poster, Runtime: runtime, imdbRating, Plot: plot,
        Released: released, Actors: actors, Director: director, Genre: genre } = movie;

    useEffect(() => {
        const getMovieDetails = async () => {
            setIsLoading(true);
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            setMovie(data);
            setIsLoading(false);
        }
        getMovieDetails();
    }, [selectedId, setIsLoading, KEY]);


    const handleAdd = () => {
        const newWatchedMovie = { imdbID: selectedId, title, year, poster, imdbRating: Number(imdbRating), runtime: Number(runtime.split(" ")[0]), userRating }
        handleAddWatched(newWatchedMovie)
    }
    console.log('MovieDetails watched', watched);

    return (
        <div>
            {isLoading ? (<Loader />) :
                (
                    <>
                        <header>
                            <button className="btn-back" >&larr;</button>
                            <img src={poster} alt={`Poster of ${title}`} />
                            <div className="details-overview">
                                <h2>{title}</h2>
                                <p>{released} &bull; {runtime}</p>
                                <p>{genre}</p>
                                <p><span>⭐️</span>{imdbRating} IMDb rating</p>
                            </div>
                        </header>
                        <section>
                            <div className="rating">
                                {/* Conditional rendering based on user rating */}
                                {(!isWatched) ? (
                                    <>
                                        {/* Assuming StarRating component exists */}
                                        {/* <StarRating maxRating={10} size={24} setMovieRating={setUserRating} /> */}
                                        <button className="btn-add" onClick={handleAdd}>+ Add to list</button> {/* Replace with actual logic */}
                                    </>
                                ) : (

                                    <p>You have rated this movie {userRating} <span>⭐️</span></p>

                                )}
                            </div>
                            <p><em>{plot}</em></p>
                            <p>Starring {actors}</p>
                            <p>Directed by {director}</p>
                        </section>
                    </>
                )
            }
        </div>
    );
}
