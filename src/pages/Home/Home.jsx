import { Link } from 'react-router-dom';
import './Home.css';

// Should function as a route page for the different game pages
function Home() {
    return(
        <>
            <section>
                <div className='welcome-container'>
                    <h1>Welcome to Space!</h1>
                    <p>My name is [insert name] and welcome to my adventure! We’re gonna have 
                        an exciting time exploring the cosmos. However, my spaceship crash landed 
                        on planet [something] and I need your help fixing it! Let’s go!</p>
                </div>
            </section>

            <section>
                <div>
                    <Link to='game1'>
                        <img src='https://placehold.co/200x200/png'/>
                    </Link>
                    <p>Game 1</p>
                </div>
            </section>

            <section>
                <div>
                    <Link to='game2'>
                        <img src='https://placehold.co/200x200/png'/>
                    </Link>
                    <p>Game 2</p>
                </div>
            </section>

            <section>
                <div>
                    <Link to='game3'>
                        <img src='https://placehold.co/200x200/png'/>
                    </Link>
                    <p>Game 3</p>
                </div>
            </section>
        </>
    );
}

export default Home;