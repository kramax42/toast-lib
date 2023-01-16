import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { TOAST_VERICAL_TRANSFORM_DURATION } from '@/constants/animation';
import { useIsomorphicLayoutEffect, usePrevious } from '@/hooks';
import { calculateBoundingBoxes } from '@/utils/calculate-bounding-boxes';

export function VerticalAnimationList({ children }) {
  const [boundingBox, setBoundingBox] = useState({});
  const [prevBoundingBox, setPrevBoundingBox] = useState({});
  const prevChildren = usePrevious(children);

  useIsomorphicLayoutEffect(() => {
    const newBoundingBox = calculateBoundingBoxes(children);
    setBoundingBox(newBoundingBox);
  }, [children]);

  useIsomorphicLayoutEffect(() => {
    const prevBoundingBox = calculateBoundingBoxes(prevChildren);
    setPrevBoundingBox(prevBoundingBox);
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox = Object.keys(prevBoundingBox).length;

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, (child) => {
        const domNode = child.ref.current;
        const firstBox = prevBoundingBox[child.key];

        const lastBox = boundingBox[child.key];
        let changeInY = 0;
        if (firstBox) {
          changeInY = firstBox.top - lastBox.top;
        }

        if (changeInY) {
          requestAnimationFrame(() => {
            domNode.style.transform = `translateY(${changeInY}px)`;
            domNode.style.transition = 'transform 0ms';

            requestAnimationFrame(() => {
              domNode.style.transform = '';
              domNode.style.transition = `transform ${TOAST_VERICAL_TRANSFORM_DURATION}ms`;
            });
          });
        }
      });
    }
  }, [boundingBox, prevBoundingBox, children]);

  return children;
}

VerticalAnimationList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
