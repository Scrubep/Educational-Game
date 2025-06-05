import { useState } from 'react';
import { Link } from 'react-router-dom';
import SpaceshipGame from '../../../components/Games/SpaceshipGame/SpaceShipGame';
import MathGame from '../../../components/Games/MathGame/MathGame';
import TransitionScreen from '../../../components/TransitionScreen/TransitionScreen';

function Game3() {
    
    const [stage, setStage] = useState('transition0');

    const handleTransition0 = () => setStage('spaceship');
    const handleSpaceshipComplete = () => setStage('transition1');
    const handleTransition1 = () => setStage('math');
    const handleMathComplete = () => setStage('transition2');
    const handleTransition2 = () => setStage('end');

    return (
        <>
        <div className='name-container'>
            <h1>Fixing The Spaceship!</h1>
        </div>
        <div className='game-container'>
            <div className='play-area'>
                {stage === 'transition0' && (
                    <TransitionScreen 
                    message="Now that you have your space rocks, you can power
                    your spaceship and get going! Unfortunately, it looks like your
                    spaceship broke into pieces when you crash landed! Luckily, you
                    know how to fix it because of astronaut school." 
                    onContinue={handleTransition0} />
                )}
                {stage === 'spaceship' && <SpaceshipGame onComplete={handleSpaceshipComplete} />}
                {stage === 'transition1' && (
                    <TransitionScreen 
                    message="Your spaceship is looking good and new! You say goodbye to your alien
                    friends and then hop on your spaceship. But before you launch, you need to figure
                    out your password to your spaceship by solving a few questions. Seriously, who knew
                    you had to do this many puzzles as an astronaut?" 
                    onContinue={handleTransition1} />
                )}
                {stage === 'math' && <MathGame onComplete={handleMathComplete} />}
                {stage === 'transition2' && (
                    <TransitionScreen 
                    message="You figured out the password! You hear your rocket engines
                    turn on and you fly back into space! You wonder what other adventures
                    await you on this journey." 
                    onContinue={handleTransition2} />
                )}
                {stage === 'end' && (
                    <div className='end-container'>
                        <p>
                            <b>Thanks for playing! See you next time!</b>
                        </p>
                        <Link to='/'>
                            <button className='home-button'>Back to Home</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Game3;