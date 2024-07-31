

/**
 * Main component to wrap main content.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components.
 * @returns {JSX.Element}
 */
export function Main({ children }) { return (<main className="main"> {children} </main>) }