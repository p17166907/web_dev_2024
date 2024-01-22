import logo from '../images/logo.png'; // Adjust the path as necessary

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="/home"> <img src={logo} alt="logo" /> </a>
                </div>
                <div className='main-menu'>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/login"><i className="fas fa-user" /> Log in</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}