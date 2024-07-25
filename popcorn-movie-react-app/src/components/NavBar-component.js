import { Logo } from './Logo-component'

/**
 * Component to Display Navbar component  - Navbar wraps other components related / to be postioned in navigation
 * @param {Object} props - Properties
 * @param {React.ReactNode} props.children - Children Property 
 * @returns {React.JSX.Element} {React.JSX.Element} 
 */
export function NavBar({ children }) {
    return (
        <nav className='nav-bar'>
            <Logo />
            {children}
        </nav>
    )
}