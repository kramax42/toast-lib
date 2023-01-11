import PropTypes from 'prop-types';
import React from 'react';

import { TOAST_ICONS } from '@/constants/toast-configs';
import { componentStyles } from '@/styles/components';

export function ToastIcon({ variant, color }) {
  const { width, height } = componentStyles.toast.icon;
  const Icon = TOAST_ICONS[variant];

  return <Icon width={width} height={height} color={color} />;
}

ToastIcon.propTypes = {
  variant: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
