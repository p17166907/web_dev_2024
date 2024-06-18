

/**
 * Search componnet to handle movie search input
 * @returns {React.JSX.Element}
 */
export function Search({ query, setQuery }) {
    // console.log('Search query -->', query);
    return (
        <input className="search" type="text" placeholder="Search movies...." value={query} onChange={(e) => setQuery(e.target.value)} />
    )
}