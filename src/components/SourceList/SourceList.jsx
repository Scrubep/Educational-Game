import { useDrop } from "react-dnd";
import { ItemTypes } from "../constants";

// Word/item bank for draggable items.
function SourceList({ onReturnItem, children }) {
  const [, drop] = useDrop(() => ({
    accept: ItemTypes.DRAG_ITEM,
    drop: (item) => {
      onReturnItem(item);
    },
  }));

  return (
    <div ref={drop}>
      <h3>Item Bank</h3>
      {children}
    </div>
  );
}

export default SourceList;