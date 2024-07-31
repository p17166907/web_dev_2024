
/**
 * Component to Display ErrorMessage component
 * @param {Object} props - Properties
 * @param {React.ReactNode} props.message - Message Property
 * @returns {React.JSX.Element} {React.JSX.Element}
 */
export function ErrorMessage({ message }) { return (<p className="error"> <span>⛔️</span> {message} </p>) }
