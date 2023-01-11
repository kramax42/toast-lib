import { ToastsContainer } from '@/components/ToastsContainer';
import { ANIMATION_VARIANTS } from '@/constants/animation';
import {
  THEME_VARIANTS,
  TOAST_POSITIONS,
  TOAST_VARIANTS,
} from '@/constants/toast-configs';
import { toastManager } from '@/services/toast-manager.service';

const { createToast } = toastManager;

export {
  createToast,
  ToastsContainer,
  THEME_VARIANTS,
  TOAST_POSITIONS,
  TOAST_VARIANTS,
  ANIMATION_VARIANTS,
};
