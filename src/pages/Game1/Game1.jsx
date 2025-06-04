import { useState } from 'react';
import { Link } from 'react-router-dom';
import RiddleGame from '../../components/RiddleGame/RiddleGame';
import WordDropGame from '../../components/WordDropGame/WordDropGame';
import TransitionScreen from '../../components/TransitionScreen/TransitionScreen';

function Game1() {
    
    const [stage, setStage] = useState('transition0');

    const handleTransition0 = () => setStage('riddle');
    const handleRiddleComplete = () => setStage('transition1');
    const handleTransition1 = () => setStage('worddrop');
    const handleWordDropComplete = () => setStage('transition2');
    const handleTransition2 = () => setStage('end');

    return (
        <div className='game1-container'>
            <h1>Game 1 Name</h1>
            {stage === 'transition0' && (
                <TransitionScreen message="Have fun!" onContinue={handleTransition0} />
            )}
            {stage === 'riddle' && <RiddleGame onComplete={handleRiddleComplete} />}
            {stage === 'transition1' && (
                <TransitionScreen message="Nice job! Ready for the next challenge?" onContinue={handleTransition1} />
            )}
            {stage === 'worddrop' && <WordDropGame onComplete={handleWordDropComplete} />}
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

export default Game1;