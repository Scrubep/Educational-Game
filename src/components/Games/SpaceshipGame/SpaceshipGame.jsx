import { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DraggableItem from "../../DraggableItem/DraggableItem";
import DropTarget from "../../DropTarget/DropTarget";
import SourceList from "../../SourceList/SourceList";
import "./SpaceshipGame.css";

const initialItems = [
  { id: "cockpit", contentType: "image", value: "https://placehold.co/100x100?text=Cockpit" },
  { id: "wing", contentType: "image", value: "https://placehold.co/100x100?text=Wing" },
  { id: "thruster", contentType: "image", value: "https://placehold.co/100x100?text=Thruster" },
];

const targetOrder = [
  { id: "cockpit", label: "Cockpit Silhouette" },
  { id: "wing", label: "Wing Silhouette" },
  { id: "thruster", label: "Thruster Silhouette" },
];

function SpaceshipGame({ onComplete }) {
  const [availableItems, setAvailableItems] = useState(initialItems);
  const [filledSlots, setFilledSlots] = useState([null, null, null]);

  const handleDropItem = (index, item, isCorrect) => {
    setFilledSlots(prevSlots => {
      // 1. Remove the dropped item from any other slot it occupies
      let newSlots = prevSlots.map(slot => (slot?.id === item.id ? null : slot));

      // 2. Capture the item currently at the target slot (to be displaced)
      const displacedItem = newSlots[index];

      // 3. Place the new item in the target slot
      newSlots[index] = { ...item, isCorrect };

      // 4. Update availableItems accordingly:
      setAvailableItems(prevItems => {
        // Remove the dropped item (since it's placed on a slot)
        let updatedItems = prevItems.filter(i => i.id !== item.id);

        // Add displaced item back to available items (if any)
        if (displacedItem && displacedItem.id !== item.id) {
          // Only add if not already present
          if (!updatedItems.some(i => i.id === displacedItem.id)) {
            updatedItems = [...updatedItems, displacedItem];
          }
        }

        return updatedItems;
      });

      return newSlots;
    });
  };

  const handleReturnItem = (item) => {
    setFilledSlots(prev =>
      prev.map(slot => (slot?.id === item.id ? null : slot))
    );
    setAvailableItems(prev =>
      prev.some(i => i.id === item.id) ? prev : [...prev, item]
    );
  };

  useEffect(() => {
    const allFilled = filledSlots.every(slot => slot !== null);
    const allCorrect = filledSlots.every(slot => slot?.isCorrect);
    if (allFilled && allCorrect && onComplete) {
      setTimeout(() => onComplete(), 500);
    }
  }, [filledSlots, onComplete]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="spaceship-game">
        <h2>Assemble the Spaceship</h2>

        <div className="target-row">
          {targetOrder.map((target, i) => (
            <div key={target.id} className="target-container">
              <DropTarget
                key={filledSlots[i]?.id || `empty-${i}`} // force remount when item changes
                index={i}
                expectedItemId={target.id}
                currentItem={filledSlots[i]}
                onDropItem={handleDropItem}
                />
              <div className="target-label">{target.label}</div>
            </div>
          ))}
        </div>

        <SourceList onReturnItem={handleReturnItem}>
          <div className="source-items">
            {availableItems.map(item => (
              <DraggableItem key={item.id} item={item} />
            ))}
          </div>
        </SourceList>
      </div>
    </DndProvider>
  );
}

export default SpaceshipGame;