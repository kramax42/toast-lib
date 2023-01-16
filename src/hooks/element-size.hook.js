import React, { useState } from 'react';

import { useEventListener, useIsomorphicLayoutEffect } from '@/hooks';

export function useElementSize(ref) {
  const [height, setHeight] = useState(ref?.current?.offsetHeight || 0);
  const [width, setWidth] = useState(ref?.current?.offsetHeight || 0);

  const handleSize = () => {
    setHeight(ref.current?.offsetHeight);
    setWidth(ref.current?.offsetWidth);
  };

  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener('resize', handleSize);

  return { height, width };
}
