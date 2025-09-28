import { useState } from "react";

export default function useDrag(initialItems) {
  const [items, setItems] = useState(initialItems);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragEnter = (index) => {
    if (draggedIndex === null || draggedIndex === index) return;

    const updatedItems = [...items];
    const draggedItem = updatedItems[draggedIndex];

    updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(index, 0, draggedItem);

    setItems(updatedItems);
    setDraggedIndex(index);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  const dragProps = (index) => ({
    draggable: true,
    onDragStart: () => handleDragStart(index),
    onDragEnter: () => handleDragEnter(index),
    onDragEnd: handleDragEnd,
  });

  return [items, dragProps, draggedIndex];
}
