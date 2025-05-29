import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";
import DraggableItem from "../DraggableItem/DraggableItem";

function DropTarget({ index, onDropItem, currentItem, expectedItemId }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.DRAG_ITEM,
    drop: (item) => {
        const isCorrect = item.id === expectedItemId;
        onDropItem(index, item, isCorrect);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const renderContent = () => {
    if (!currentItem) return "______";

    const base = currentItem.contentType === "word"
      ? currentItem.value
      : <img src={currentItem.value} alt="drop" style={{ maxHeight: 40 }} />;

    return (
      <DraggableItem item={currentItem}>
        <span style={{ color: currentItem.isCorrect ? "green" : "red" }}>
          {base}
        </span>
      </DraggableItem>
    );
  };

  return (
    <span ref={drop} style={{
        display: 'inline-block'
    }}>
        {renderContent()}
    </span>
  )
}

export default DropTarget;