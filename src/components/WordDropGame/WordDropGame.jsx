import { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "../DraggableItem/DraggableItem";
import DropTarget from "../DropTarget/DropTarget";
import SourceList from '../SourceList/SourceList';

function WordDropGame({ onComplete }) {
    const [filledSlots, setFilledSlots] = useState([null, null, null]);

    const choices = [
        { id: 1, contentType: 'word', value: 'dog'},
        { id: 2, contentType: 'word', value: 'cat'},
        { id: 3, contentType: 'word', value: 'bear'}
    ];

    const handleDropItem = (index, item, isCorrect) => {
        setFilledSlots(prev => {
        // Remove item from any other slot
        const cleaned = prev.map(slot => (slot?.id === item.id ? null : slot));

        // Insert in new slot
        const updated = [...cleaned];
        updated[index] = { ...item, isCorrect };

        return updated;
        });
    };

    const handleReturnToBank = (item) => {
        // Remove from filledSlots
        setFilledSlots(prev => prev.map(slot => (slot?.id === item.id ? null : slot)));

        // Optionally: add back to the item bank
        setAvailableItems(prev => [...prev, item]);
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
            <p>
            The{" "}
            <DropTarget
                key={filledSlots[0]?.id || "empty-0"}
                index={0}
                expectedItemId={1}
                onDropItem={handleDropItem}
                currentItem={filledSlots[0]}
            />
            </p>
            <p>
            The{" "}
            <DropTarget
                key={filledSlots[1]?.id || "empty-1"}
                index={1}
                expectedItemId={2}
                onDropItem={handleDropItem}
                currentItem={filledSlots[1]}
            />
            </p>
            <p>
            The{" "}
            <DropTarget
                key={filledSlots[2]?.id || "empty-2"}
                index={2}
                expectedItemId={3}
                onDropItem={handleDropItem}
                currentItem={filledSlots[2]}
            />
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
            <SourceList onReturnItem={(item) => handleReturnToBank(item)}>
            {choices
                .filter(choice => !filledSlots.some(slot => slot?.id === choice.id))
                .map((item) => (
                    <DraggableItem key={item.id} item={item} />
            ))}
            </SourceList>
            </div>
        </DndProvider>
    );
}

export default WordDropGame;