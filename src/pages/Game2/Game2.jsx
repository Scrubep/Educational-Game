import { useState } from 'react';
import { Link } from 'react-router-dom';
import ReflexGame from '../../components/ReflexGame/ReflexGame';
import MemoryGame from '../../components/MemoryGame/MemoryGame';
import TransitionScreen from '../../components/TransitionScreen/TransitionScreen';

function Game2() {
    
    const [stage, setStage] = useState('transition0');

    const handleTransition0 = () => setStage('reflex');
    const handleReflexComplete = () => setStage('transition1');
    const handleTransition1 = () => setStage('memory');
    const handleMemoryComplete = () => setStage('transition2');
    const handleTransition2 = () => setStage('end');

    return (
        <div className='game2-container'>
            <h1>Game 2 Name</h1>
            {stage === 'transition0' && (
                <TransitionScreen message="Have fun!" onContinue={handleTransition0} />
            )}
            {stage === 'reflex' && <ReflexGame onComplete={handleReflexComplete} />}
            {stage === 'transition1' && (
                <TransitionScreen message="Nice job! Ready for the next challenge?" onContinue={handleTransition1} />
            )}
            {stage === 'memory' && <MemoryGame onComplete={handleMemoryComplete} />}
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

export default Game2;