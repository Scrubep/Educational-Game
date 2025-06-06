import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReflexGame from '../../../components/Games/ReflexGame/ReflexGame';
import MemoryGame from '../../../components/Games/MemoryGame/MemoryGame';
import TransitionScreen from '../../../components/TransitionScreen/TransitionScreen';

// Game 2 where the user can play the reflex game and the
// memory card game.
function Game2() {
    
    const [stage, setStage] = useState('transition0');

    const handleTransition0 = () => setStage('reflex');
    const handleReflexComplete = () => setStage('transition1');
    const handleTransition1 = () => setStage('memory');
    const handleMemoryComplete = () => setStage('transition2');
    const handleTransition2 = () => setStage('end');

    return (
        <>
        <div className='name-container'>
            <h1>Exploring the Ruins!</h1>
        </div>
        <div className='game-container'>
            <div className='play-area'>
                {stage === 'transition0' && (
                    <TransitionScreen 
                    message="You're trapped in the ruins but don't worry, they taught you
                    what to do in astronaut school. You turn on your flashlight and walk around until you enter
                    a room full of space rocks that can be used to power your spaceship!
                    You run into the room but you begin to hear a countdown. Try to collect
                    all the space rocks before time is up!" 
                    onContinue={handleTransition0} />
                )}
                {stage === 'reflex' && <ReflexGame onComplete={handleReflexComplete} />}
                {stage === 'transition1' && (
                    <TransitionScreen 
                    message="Phew! You manage to grab all the rocks before the timer was up! You run
                    out of the room and you hear the timer go to zero. But nothing really happens since
                    the aliens who made these ruins were actually pretty nice. You decide to go back to the
                    entrance but you realize you're lost! Luckily, you have your space GPS but you need
                    to solve a puzzle before turning it on. Astronaut technology is pretty annoying, isn't it?" 
                    onContinue={handleTransition1} />
                )}
                {stage === 'memory' && <MemoryGame onComplete={handleMemoryComplete} />}
                {stage === 'transition2' && (
                    <TransitionScreen 
                    message="You got the GPS working! You should really talk to
                    your boss about this gps system when you go back home. You make your
                    way out of the ruins." 
                    onContinue={handleTransition2} />
                )}
                {stage === 'end' && (
                    <div className='end-container'>
                        <p>
                            You reach the entrance once again but since it took a while
                            to figure out how to use your GPS, your alien friends opened the
                            door for you. Thank you aliens! Now it's time to fix up your ship
                            and get back to your mission!
                        </p>
                        <Link to='/'>
                            <button className='home-button'>Back to Home</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>\
        </>
    );
}

export default Game2;