import { Link } from 'react-router-dom';

const Navbar = function Navbar({darkTheme, setDarkTheme}) {
    return (
        <nav className='navbar'>
            <div className='logo'>The Great Space Escape!</div>
            <ul className='nav-links'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/settings'>Settings</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
            <button 
                className='theme-toggle'
                onClick={() => setDarkTheme(!darkTheme)}
            >
                {darkTheme ? '☀' : '🌙 '}
            </button>
        </nav>
    );
}

export default Navbar;