import { useState, useEffect } from 'react';
import './ReflexGame.css';

function ReflexGame({ onComplete }) {
    const totalSpots = 20;
    const totalTargets = 10;
    const timeLimit = 10;

    const [targets, setTargets] = useState([]);
    const [clicked, setClicked] = useState(new Set());
    const [timeLeft, setTimeLeft] = useState(timeLimit);
    const [gameOver, setGameOver] = useState(false);
    const [key, setKey] = useState(0); // used to force re-render

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const allIds = Array.from({ length: totalSpots }, (_, i) => i);
        const shuffled = shuffleArray(allIds).slice(0, totalTargets);
        setTargets(shuffled);
        setClicked(new Set());
        setTimeLeft(timeLimit);
        setGameOver(false);

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setGameOver(true);
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [key]); // re-run this effect when `key` changes

    useEffect(() => {
        if (clicked.size === totalTargets) {
            setGameOver(true);
            onComplete();
        }
    }, [clicked]);

    const handleRetry = () => {
        setKey(prev => prev + 1); // triggers re-run of useEffect
    };

    const handleClick = (id) => {
        if (!gameOver && targets.includes(id) && !clicked.has(id)) {
            setClicked(new Set([...clicked, id]));
        }
    };

    return (
        <div className="reflex-game">
            <h2>Click all the targets!</h2>
            <p>Time left: {timeLeft}s</p>
            <div className="grid">
                {Array.from({ length: totalSpots }, (_, id) => {
                    const isTarget = targets.includes(id);
                    const isClicked = clicked.has(id);
                    return (
                        <div
                            key={id}
                            className={`grid-item ${isTarget ? 'target' : ''} ${isClicked ? 'clicked' : ''}`}
                            onClick={() => handleClick(id)}
                        >
                            {isTarget && !isClicked ? '🎯' : ''}
                        </div>
                    );
                })}
            </div>

            {gameOver && clicked.size < totalTargets && (
                <div className="result">
                    <p>⏰ Time's up! Try again.</p>
                    <button onClick={handleRetry}>Retry</button>
                </div>
            )}
        </div>
    );
}

export default ReflexGame;