

/**
 * Search componnet to handle movie search input
 * @returns {React.JSX.Element}
 */
export function Search() {
    return (
        <input className="search" type="text" placeholder="Search movies...." value={''} onChange={(e) => 'setterFunction()'} />
    )
}