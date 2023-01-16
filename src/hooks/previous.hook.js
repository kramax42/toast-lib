import React, { useEffect, useRef } from 'react';

export const usePrevious = (value) => {
  const previousRef = useRef();

  useEffect(() => {
    previousRef.current = value;
  }, [value]);

  return previousRef.current;
};
