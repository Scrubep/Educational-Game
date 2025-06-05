import { useEffect, useState } from 'react';
import './MemoryGame.css'; // Optional styling file

function MemoryGame({ onComplete }) {
    const gridSize = 4;
    const totalCards = gridSize * gridSize;

    const [cards, setCards] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [matched, setMatched] = useState([]);
    const [lockBoard, setLockBoard] = useState(false);

    // Generate pairs of symbols
    const symbols = ['🚀','🪐','👨‍🚀','🌌','🌠','🛰️','☄️','🌙'];

    const shuffleCards = () => {
        const doubled = [...symbols, ...symbols];
        for (let i = doubled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [doubled[i], doubled[j]] = [doubled[j], doubled[i]];
        }
        return doubled.map((symbol, index) => ({
            id: index,
            symbol,
        }));
    };

    useEffect(() => {
        setCards(shuffleCards());
    }, []);

    useEffect(() => {
        if (flipped.length === 2) {
            const [first, second] = flipped;
            setLockBoard(true);
            setTimeout(() => {
                if (cards[first].symbol === cards[second].symbol) {
                    setMatched([...matched, cards[first].symbol]);
                }
                setFlipped([]);
                setLockBoard(false);
            }, 1000);
        }
    }, [flipped]);

    useEffect(() => {
        if (matched.length === symbols.length) {
            setTimeout(() => {
                if (onComplete) onComplete();
            }, 200);
        }
    }, [matched]);

    const handleClick = (index) => {
        if (lockBoard || flipped.includes(index)) return;

        setFlipped([...flipped, index]);
    };

    return (
        <div className="memory-game">
            <h2>Astronaut GPS</h2>
            <p>Match the Icons!</p>
            <div className="grid">
                {cards.map((card, index) => {
                    const isFlipped = flipped.includes(index) || matched.includes(card.symbol);
                    return (
                        <div
                            key={card.id}
                            className={`card ${isFlipped ? 'flipped' : ''}`}
                            onClick={() => handleClick(index)}
                        >
                            <div className="card-inner">
                                <div className="card-front">❓</div>
                                <div className="card-back">{card.symbol}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MemoryGame;