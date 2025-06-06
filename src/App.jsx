import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Settings from './pages/Settings/Settings';
import Game1 from './pages/GamePages/Game1/Game1';
import Game2 from './pages/GamePages/Game2/Game2';
import Game3 from './pages/GamePages/Game3/Game3';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// The base of the website where all the routing is defined.
// App also defines the template of the website with the navbar on
// top, the main content in the middle, and the footer at the end.
function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
        if (darkTheme) {
            document.body.classList.add('dark-theme');
        }
        else {
            document.body.classList.remove('dark-theme');
        }
    }, [darkTheme]);

    return (
        <>
        <div className='app'>
            <Router>
                <ScrollToTop />
                <div className='main-content'>
                    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/game1' element={<Game1/>}/>
                        <Route path='/game2' element={<Game2/>}/>
                        <Route path='/game3' element={<Game3/>}/>
                    </Routes>
                </div>
            </Router>
        </div>
            
            <footer>
                <div className='footer-container'>
                    <p>&copy; 2025 Joey Choi</p>
                </div>
            </footer>

        </>
    )
}

export default App;