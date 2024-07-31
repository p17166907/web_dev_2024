/**
 * Search componnet to handle movie search input
 * @returns {React.JSX.Element}
 */
export function Search({ query, setQuery }) {
    return (
        <input className="search"
            type="text"
            placeholder="Search movies...."
            value={query}
            onChange={(e) => { setQuery(e.target.value) }}
        />
    )
}