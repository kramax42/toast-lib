import React, { useEffect, useRef } from 'react';

export const usePrevious = (value) => {
  const previousChildrenRef = useRef();

  useEffect(() => {
    previousChildrenRef.current = value;
  }, [value]);

  return previousChildrenRef.current;
};
