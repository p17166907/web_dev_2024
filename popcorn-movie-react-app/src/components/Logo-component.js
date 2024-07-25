
/**
Logo component renders the logo for the application on the navigation bar
*@returns {React.JSX.Element} JSX code that renders the logo
*/
export function Logo() {
    return (
        <div className="logo">
            {/* The role="img" attribute indicates that the <span> element should be treated as an image.  */}
            <span role="img">🍿</span>
            <h1>usePopcorn</h1>
        </div>
    )
}