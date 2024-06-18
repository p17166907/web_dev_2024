
/**
 * COmponnet to display the number of search results
 * @returns {React.JSX.Element}
 */
export function NumResults({ movies }) {
    return (<p className="num-results"> Found <strong>{movies.length}</strong> results</p>
    )
}