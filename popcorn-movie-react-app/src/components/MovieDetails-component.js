import { useState, useEffect } from "react"
import { Loader } from "./Loader-component"

/**
 * MovieDetails component to display detailed information about a selected movie.
 * @param {Object} props
 * @param {string} props.selectedId - The ID of the selected movie.
 * @returns {JSX.Element}
 */

export function MovieDetails({ isLoading, setIsLoading, KEY, selectedId }) {
    //!/States
    const [movie, setMovie] = useState({})

    //!/useEffects
    useEffect(() => {
        async function getMovieDetails() {
            setIsLoading(true);
            const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
            const data = await res.json();
            setMovie(data);
            setIsLoading(false);
        }
        getMovieDetails();
    }, [selectedId, setIsLoading]);

    console.log("selectedId");



    return (

        <div className="details">
            {(isLoading) ? <Loader /> :
                <>
                    <header>
                        <button className="btn-back" onClick={""}>&larr;</button>
                        <img src="poster" alt="poster of movie" />
                        <div className="details-overview">
                            <h2>{`title here`}</h2>
                            <p>{"released"} &bull; {"runtime"}</p>
                            <p>{'genre'}</p>
                            <p><span>⭐️</span>{"imdbRating"} IMDb rating</p>
                        </div>
                    </header>
                    <section>
                        <div className="rating">
                        </div>
                        <p><em>{'plot'}</em></p>
                        <p>Starring {"acotrs"}</p>
                        <p>Directed by {"directors"}</p>

                    </section>
                </>

            }
        </div>
    )
}