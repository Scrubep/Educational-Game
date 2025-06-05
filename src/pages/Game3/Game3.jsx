import { useState } from 'react';
import { Link } from 'react-router-dom';
import SpaceshipGame from '../../components/SpaceshipGame/SpaceShipGame';
import MathGame from '../../components/MathGame/MathGame';
import TransitionScreen from '../../components/TransitionScreen/TransitionScreen';

function Game3() {
    
    const [stage, setStage] = useState('transition0');

    const handleTransition0 = () => setStage('spaceship');
    const handleSpaceshipComplete = () => setStage('transition1');
    const handleTransition1 = () => setStage('math');
    const handleMathComplete = () => setStage('transition2');
    const handleTransition2 = () => setStage('end');

    return (
        <div className='game3-container'>
            <h1>Game 3 Name</h1>
            {stage === 'transition0' && (
                <TransitionScreen message="Have fun!" onContinue={handleTransition0} />
            )}
            {stage === 'spaceship' && <SpaceshipGame onComplete={handleSpaceshipComplete} />}
            {stage === 'transition1' && (
                <TransitionScreen message="Nice job! Ready for the next challenge?" onContinue={handleTransition1} />
            )}
            {stage === 'math' && <MathGame onComplete={handleMathComplete} />}
            {stage === 'transition2' && (
                <TransitionScreen message="You finished both games!" onContinue={handleTransition2} />
            )}
            {stage === 'end' && (
                <div>
                    <p>Thanks for playing!</p>
                    <Link to='/'>
                        <button>Back to Home</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Game3;