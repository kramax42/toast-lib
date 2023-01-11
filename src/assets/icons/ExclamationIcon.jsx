import PropTypes from 'prop-types';
import React from 'react';

export function ExclamationIcon({ color, width, height, ...props }) {
  return (
    <svg
      fill={color}
      viewBox="0 0 16 16"
      height={`${width}px`}
      width={`${height}px`}
      {...props}
    >
      <path d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 4a.905.905 0 00-.9.995l.35 3.507a.552.552 0 001.1 0l.35-3.507A.905.905 0 008 4zm.002 6a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  );
}

ExclamationIcon.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
