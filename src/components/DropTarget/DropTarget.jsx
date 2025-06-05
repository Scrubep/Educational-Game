import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";

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
    if (!currentItem) return <span style={{ color: '#00ffcc', fontWeight: 'bold' }}>______</span>;

    if (currentItem.contentType === "word") {
      return currentItem.value;
    }

    return <img src={currentItem.value} alt="drop" style={{ maxHeight: 40 }} />;
  };

  return (
    <span
      ref={drop}
      style={{
        display: 'inline-block',
        minWidth: '70px',
        margin: '0 5px',
        borderBottom: '2px solid #00ffcc',
        padding: '2px 6px',
        verticalAlign: 'middle',
        cursor: 'pointer',
        color: currentItem?.isCorrect ? 'lightgreen' : 'red',
        fontWeight: 'bold',
        userSelect: 'none',
      }}
    >
      {renderContent()}
    </span>
  );
}

export default DropTarget;