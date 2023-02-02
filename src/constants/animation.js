export const ANIMATION_VARIANTS = {
  slide: 'slide',
  fade: 'fade',
  scale: 'scale',
};

export const TOAST_ENTER_EXIT_DURATION_MS = 500;
export const PROGRESS_BAR_TRANSITION_MS = 350;
export const TOAST_VERICAL_TRANSFORM_DURATION = 200;

export const ANIMATION_PARAMS = {
  [ANIMATION_VARIANTS.slide]: {
    translateX: {
      inactive: -100,
      active: 0,
    },
    opacity: {
      inactive: 0,
      active: 1,
    },
  },
  [ANIMATION_VARIANTS.fade]: {
    opacity: {
      inactive: 0,
      active: 1,
    },
  },
  [ANIMATION_VARIANTS.scale]: {
    scale: {
      inactive: 0.8,
      active: 1,
    },
    opacity: {
      inactive: 0,
      active: 1,
    },
  },
};
