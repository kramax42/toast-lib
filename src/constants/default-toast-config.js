import { ANIMATION_VARIANTS } from '@/constants/animation';
import {
  THEME_VARIANTS,
  TOAST_POSITIONS,
  TOAST_VARIANTS,
} from '@/constants/toast-configs';
import { themes } from '@/styles/themes';

export const defaultToastConfig = {
  message: 'Hello, World!',
  duration: 5000,
  isAutoClose: true,
  indent: 25,
  toastsGap: 15,
  variant: TOAST_VARIANTS.info,
  position: TOAST_POSITIONS.topRight,
  animation: ANIMATION_VARIANTS.slide,
  theme: THEME_VARIANTS.dark,
  colorConfig:
    themes[THEME_VARIANTS.dark].variants[TOAST_VARIANTS.info].colorConfig,
};
