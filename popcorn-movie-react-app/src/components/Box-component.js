
/**
 * Box Component to display content with toggle functionality.
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Children components to render inside the box.
 * @returns {React.JSX.Element} - The rendered Box component.
 */
export function Box({ children }) {
    return (
        <div className="box">
            <button className="btn-toggle" onClick={() => { }}></button>
            {children}
        </div>
    )
}