import { NavBar } from "./components/NavBar-component";
import { Search } from "./components/Search-component";
import { NumResults } from "./components/NumResults-component";
import { useEffect, useState } from "react";
import { Main } from "./components/Main-component";
import { Box } from "./components/Box-component";
import { Loader } from "./components/Loader-component";
import { ErrorMessage } from "./components/ErrorMessage-component";
import { MovieList } from "./components/MovieList-component";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} arr - Array of numbers.
 * @returns {number} - The average of the numbers.
 */
const average = (arr) => arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

const KEY = '54fc20b1'

/**
 * Main App component that renders the movie search and list functionalities.
 * @returns {React.JSX.Element} - The main application component.
 */
function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedId, setSelectedId] = useState(null)


  // Effect to fetch movies based on the query
  useEffect(() => {
    // Create an AbortController instance to cancel fetch requests if needed
    const controller = new AbortController();

    setIsLoading(true); setError('');

    /**
     * Fetches movies from the OMDB API based on the query.
     * Utilizes the AbortController to cancel the request if the component unmounts or query changes.
     */
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`, { signal: controller.signal });

        if (!res.ok) throw new Error("Something went wrong with fetching movies");

        const data = await res.json();

        if (data.Response === "False") throw new Error("Movie not found!");

        setMovies(data.Search);
        setError('');
      } catch (error) {
        // Only set the error if it wasn't an aborted request
        if (error.name !== "AbortError") { setError(error.message); }
      } finally { setIsLoading(false); }
    }

    // Fetch movies if the query length is sufficient
    if (query.length < 3) {
      setMovies([]);
      setError("");
      setIsLoading(false);
      return;
    }

    fetchMovies();

    // Cleanup function to abort the fetch request if the component unmounts or query changes
    return () => controller.abort();

  }, [query]); // Dependency array ensures the effect runs only when `query` changes


  const handleSelectMovie = (id) => {
    setSelectedId((currSelectedId) => (id === currSelectedId ? null : id));
  }
  console.log('App, handleSelectMovie()', selectedId);

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && <MovieList movies={movies} handleSelectMovie={handleSelectMovie} />}
        </Box>
        <Box>
          {/* Additional content can be placed here */}
        </Box>
      </Main>
    </>
  );
}

export default App;
