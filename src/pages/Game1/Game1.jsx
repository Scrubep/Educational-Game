import { useState } from 'react';
import RiddleGame from '../../components/RiddleGame/RiddleGame';
import WordDropGame from '../../components/WordDropGame/WordDropGame';
// Adding more

function Game1() {
    const [stage, setStage] = useState(0);

    const nextStage = () => setStage(stage + 1);

    return (
        <div className='game1-container'>
            <h1>Game 1 Name</h1>
            {stage === 0 && <RiddleGame onComplete={nextStage} />}
            {stage === 1 && <WordDropGame onComplete={nextStage} />}
            {/* {stage === 2 && <WordPairing onComplete={nextStage} />} */}
        </div>
    )
}

export default Game1;