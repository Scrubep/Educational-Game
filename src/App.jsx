import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Settings from './pages/Settings/Settings';
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
        <Router>
            <div className='app'>
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Routes>
                    <Route path='/' element={<div>Home Page</div>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;