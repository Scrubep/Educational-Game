import { useDrag } from 'react-dnd';
import { ItemTypes } from "../constants";

function DraggableItem({ item }) {
    const [{isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.DRAG_ITEM,
        item: { ...item },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }));

    const renderContent = () => {
        if (item.contentType === 'word') return <span>{item.value}</span>;
        if (item.contentType === 'image')
            return <img src={item.value} alt='drag' />;
        return null;
    };

    return (
        <div ref={drag}>
            {renderContent()}
        </div>
    );
}

export default DraggableItem;