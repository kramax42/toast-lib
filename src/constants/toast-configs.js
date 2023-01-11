import { CheckIcon } from '@/assets/icons/CheckIcon';
import { ExclamationIcon } from '@/assets/icons/ExclamationIcon';
import { InfoIcon } from '@/assets/icons/InfoIcon';

export const THEME_VARIANTS = {
  dark: 'dark',
  light: 'light',
  colored: 'colored',
};

export const TOAST_VARIANTS = {
  success: 'success',
  info: 'info',
  danger: 'danger',
  warning: 'warning',
};

export const TOAST_POSITIONS = {
  topRight: 'top-right',
  topLeft: 'top-left',
  bottomRight: 'bottom-right',
  bottomLeft: 'bottom-left',
};

export const TOAST_ICONS = {
  [TOAST_VARIANTS.success]: CheckIcon,
  [TOAST_VARIANTS.danger]: ExclamationIcon,
  [TOAST_VARIANTS.warning]: ExclamationIcon,
  [TOAST_VARIANTS.info]: InfoIcon,
};
