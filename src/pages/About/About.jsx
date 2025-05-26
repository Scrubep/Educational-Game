import { useEffect } from 'react';
import './About.css';

function About() {
    
    useEffect(() => {
        document.title = 'About | Educational Game';
        return () => {
            document.title = 'Educational Game';
        }
    }, []);

    return (
        <div className='container about-container'>
            <h1>About</h1>
        </div>
    )
}

export default About;