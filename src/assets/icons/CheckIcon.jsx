import PropTypes from 'prop-types';
import React from 'react';

export function CheckIcon({ color, width, height, ...props }) {
  return (
    <svg
      fill={color}
      viewBox="0 0 512 512"
      height={`${width}px`}
      width={`${height}px`}
      {...props}
    >
      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0 0 114.6 0 256s114.6 256 256 256zm113-303L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </svg>
  );
}

CheckIcon.propTypes = {
  color: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};
