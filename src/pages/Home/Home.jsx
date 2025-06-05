import { Link } from 'react-router-dom';
import './Home.css';

// Should function as a route page for the different game pages
function Home() {
    return(
        <div className='home-body'>
            <section>
                <div className='welcome-container'>
                    <h1>Welcome to Space!</h1>
                    <p>
                        You are an astronaut who's been sent to space in order to explore
                        the cosmos! After you make sure that your dog has enough food, you
                        go off on your spaceship ready to go. However, you forgot to charge your
                        spaceship before leaving! You look for fuel but all you found is a bag
                        of dog treats. You ruin out of fuel and crash into a mysterious planet and now 
                        have to find a way to escape!
                        <br/><br/>
                        Good luck astronaut!
                    </p>
                </div>
            </section>

           <Link to='/game1' style={{ textDecoration: 'none', color: 'inherit' }}>
                <section className='game-section'>
                    <div>
                    <img src='https://placehold.co/400x300/png' alt='Into the Alien Ruins!' />
                    <p><b>Into the Alien Ruins!</b></p>
                    </div>
                </section>
            </Link>

            <Link to='/game2' style={{ textDecoration: 'none', color: 'inherit' }}>
                <section className='game-section'>
                    <div>
                    <img src='https://placehold.co/400x300/png' alt='Back to the Ship!' />
                    <p><b>Exploring the Ruins!</b></p>
                    </div>
                </section>
            </Link>

            <Link to='/game3' style={{ textDecoration: 'none', color: 'inherit' }}>
                <section className='game-section'>
                    <div>
                    <img src='https://placehold.co/400x300/png' alt='Fixing The Spaceship!' />
                    <p><b>Fixing The Spaceship!</b></p>
                    </div>
                </section>
            </Link>
        </div>
    );
}

export default Home;