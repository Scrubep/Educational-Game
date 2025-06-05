import { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "../../DraggableItem/DraggableItem";
import DropTarget from "../../DropTarget/DropTarget";
import SourceList from '../../SourceList/SourceList';
import './WordDropGame.css';

function WordDropGame({ onComplete }) {
    const [filledSlots, setFilledSlots] = useState([null, null, null, null, null]);

    const choices = [
        { id: 1, contentType: 'word', value: 'banana' },
        { id: 2, contentType: 'word', value: 'school' },
        { id: 3, contentType: 'word', value: 'rain' },
        { id: 4, contentType: 'word', value: 'dog' },
        { id: 5, contentType: 'word', value: 'cake' },
    ];

    const handleDropItem = (index, item, isCorrect) => {
        setFilledSlots(prev => {
            const cleaned = prev.map(slot => (slot?.id === item.id ? null : slot));
            const updated = [...cleaned];
            updated[index] = { ...item, isCorrect };
            return updated;
        });
    };

    useEffect(() => {
        const allFilled = filledSlots.every(slot => slot !== null);
        const allCorrect = filledSlots.every(slot => slot?.isCorrect);
        if (allFilled && allCorrect) {
            onComplete();
        }
    }, [filledSlots, onComplete]);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="worddrop-container">
                <p>Fill in the Blanks!</p>
                <p>1. I ate a <DropTarget
                    key={filledSlots[0]?.id || "empty-0"}
                    index={0}
                    expectedItemId={1}
                    onDropItem={handleDropItem}
                    currentItem={filledSlots[0]}
                    className="drop-slot"
                /> for breakfast.</p>

                <p>2. We go to <DropTarget
                    key={filledSlots[1]?.id || "empty-1"}
                    index={1}
                    expectedItemId={2}
                    onDropItem={handleDropItem}
                    currentItem={filledSlots[1]}
                    className="drop-slot"
                /> to learn.</p>

                <p>3. I wear a coat when it starts to <DropTarget
                    key={filledSlots[2]?.id || "empty-2"}
                    index={2}
                    expectedItemId={3}
                    onDropItem={handleDropItem}
                    currentItem={filledSlots[2]}
                    className="drop-slot"
                />.</p>

                <p>4. The <DropTarget
                    key={filledSlots[3]?.id || "empty-3"}
                    index={3}
                    expectedItemId={4}
                    onDropItem={handleDropItem}
                    currentItem={filledSlots[3]}
                    className="drop-slot"
                /> barked at the mailman.</p>

                <p>5. She baked a chocolate <DropTarget
                    key={filledSlots[4]?.id || "empty-4"}
                    index={4}
                    expectedItemId={5}
                    onDropItem={handleDropItem}
                    currentItem={filledSlots[4]}
                    className="drop-slot"
                />.</p>

                <div className="source-bank">
                    <SourceList>
                        {choices
                            .filter(choice => !filledSlots.some(slot => slot?.id === choice.id))
                            .map((item) => (
                                <DraggableItem key={item.id} item={item} className="draggable-item" />
                        ))}
                    </SourceList>
                </div>
            </div>
        </DndProvider>
    );
}

export default WordDropGame;
