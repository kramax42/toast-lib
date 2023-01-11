import React, { useState } from 'react';

import { useEventListener } from '@/hooks/event-listener.hook';
import { useIsomorphicLayoutEffect } from '@/hooks/isomorphic-layout-effect.hook';

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
