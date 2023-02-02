import { useRef } from 'react';

function getX(event) {
  return event.targetTouches && event.targetTouches.length >= 1
    ? event.targetTouches[0].clientX
    : event.clientX;
}

export const useDrag = ({ ref, removeToast, minSpaceToRemove = 100 }) => {
  const dragRef = useRef({
    startNodeX: 0,
    startDragX: 0,
    x: 0,
    deltaDrag: 0,
  });

  const handleDragStart = (event) => {
    dragRef.current.startNodeX = ref.current.getBoundingClientRect().x;
    dragRef.current.startDragX = getX(event);
  };

  const handleDragMove = (event) => {
    const newDragX = getX(event);
    if (newDragX > 0) {
      const deltaDrag = newDragX - dragRef.current.startDragX;
      dragRef.current.deltaDrag = deltaDrag;
      ref.current.style.transform = `translate(${deltaDrag}px, 0)`;
      ref.current.style.opacity = `${
        1 - Math.abs(deltaDrag / minSpaceToRemove)
      }`;
    }
  };

  const handleDragEnd = () => {
    if (Math.abs(dragRef.current.deltaDrag) > minSpaceToRemove) {
      removeToast();
    } else {
      ref.current.style.transform = 'translateX(0)';
      ref.current.style.opacity = '1';
    }
  };

  return {
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  };
};
