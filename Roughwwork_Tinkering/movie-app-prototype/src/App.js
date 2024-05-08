import './styles.css';
import { useEffect, useState } from 'react';
import { NavBar } from './components/NavBar-component'
import { Logo } from './components/Logo-component';
import { Search } from './components/Search-component';
import { NumResults } from './components/NumResults-component';

function App() {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true)
    setError('')
    const fetchMovies = async () => {
      try {
        console.log('query', query);

        const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&s=${query}`)
        console.log(res);

        if (!res.ok) throw new Error("Something went wrong with fetching movies")

        const data = await res.json()
        console.log(data);

        if (data.Response === "False") throw new Error("Movie not found!")

        setMovies(data.Search)
        console.log('App, data', data);

      } catch (error) { console.error(error.message); setError(error.message) } finally { setIsLoading(false) }

    }
    fetchMovies()
  }, [query])

  const KEY = '54fc20b1'

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <NumResults />
      </NavBar>

    </>
  );
}

export default App;
