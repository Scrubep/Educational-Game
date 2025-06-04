import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Settings from './pages/Settings/Settings';
import Game1 from './pages/Game1/Game1';
import Navbar from './components/Navbar';
import './App.css';

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
            <Router>
                <div className='app'>
                    <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/game1' element={<Game1/>}/>
                        {/* <Route path='/game2' element={<Game2/>}/>
                        <Route path='/game3' element={<Game3/>}/> */}
                    </Routes>
                </div>
            </Router>
            
            <footer>
                <div className='footer-container'>
                    <p>&copy; 2025 Joey Choi</p>
                </div>
            </footer>
        </>
    )
}

export default App;