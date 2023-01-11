import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import { Bar, Container, FilledBar } from './styled';

const MAX_PROGRESS = 100;

export function ProgressBar({ duration, width, color }) {
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((progress) =>
        progress < MAX_PROGRESS ? progress + 1 : progress,
      );
    }, duration / MAX_PROGRESS);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (progress >= MAX_PROGRESS) {
      return () => clearInterval(intervalRef.current);
    }
  }, [progress]);

  return (
    <Container
      aria-valuemax={MAX_PROGRESS}
      aria-valuemin={0}
      aria-valuenow={progress}
      role="progressbar"
      width={width}
    >
      <Bar>
        <FilledBar width={progress} color={color} />
      </Bar>
    </Container>
  );
}

ProgressBar.propTypes = {
  duration: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};
