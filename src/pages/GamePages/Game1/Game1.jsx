import { useState } from 'react';
import { Link } from 'react-router-dom';
import RiddleGame from '../../../components/Games/RiddleGame/RiddleGame';
import WordDropGame from '../../../components/Games/WordDropGame/WordDropGame';
import TransitionScreen from '../../../components/TransitionScreen/TransitionScreen';
import '../GamePage.css';

// Game 1 of the website where the user can play the riddle game
// and the word drop game.
function Game1() {
    
    const [stage, setStage] = useState('transition0');

    const handleTransition0 = () => setStage('riddle');
    const handleRiddleComplete = () => setStage('transition1');
    const handleTransition1 = () => setStage('worddrop');
    const handleWordDropComplete = () => setStage('transition2');
    const handleTransition2 = () => setStage('end');

    return (
        <>
        <div className='name-container'>
            <h1>Into the Alien Ruins!</h1>
        </div>
        <div className='game-container'>
            <div className='play-area'>
                {stage === 'transition0' && (
                <TransitionScreen message="After crashing, you wander around a bit and meet some
                    aliens. You give them dog treats as a peace offering and you become quick friends 
                    with them. You ask them about where you can get fuel and they lead
                    you to some mysterious ruins. But to enter, you need to answer
                    a few questions."  
                onContinue={handleTransition0} />
                )}
                {stage === 'riddle' && <RiddleGame onComplete={handleRiddleComplete} />}
                {stage === 'transition1' && (
                    <TransitionScreen 
                    message="Nice job! After getting past those questions, the screen changes and
                    you find another puzzle. You begin to wonder why the aliens speak English but
                    you ignore that and keep going." 
                    onContinue={handleTransition1} />
                )}
                {stage === 'worddrop' && <WordDropGame onComplete={handleWordDropComplete} />}
                {stage === 'transition2' && (
                    <TransitionScreen 
                    message="After solving the puzzle, the doors open. You say goodbye to your alien friends
                    and go into the ruins to see if you can find anything that will help you get back to
                    your mission!" 
                    onContinue={handleTransition2} />
                )}
                {stage === 'end' && (
                    <div className='end-container'>
                        <p>
                            Right after walking through, the doors shut behind you. You can't
                            seem to open them so you have no choice but to turn on your flashlight and 
                            keep going. But I know you'll be fine!
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

export default Game1;