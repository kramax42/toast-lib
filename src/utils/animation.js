import { keyframes } from 'styled-components';

import { ANIMATION_PARAMS, ANIMATION_VARIANTS } from '@/constants/animation';

const slide = {
  enter: keyframes`
        from {
            opacity: ${ANIMATION_PARAMS.slide.opacity.inactive};
            transform: translateX(${ANIMATION_PARAMS.slide.translateX.inactive}%);
        }
        to {
            opacity: ${ANIMATION_PARAMS.slide.opacity.active};
            transform: translateX(${ANIMATION_PARAMS.slide.translateX.active}%);

        }`,
  exit: keyframes`
        from {
            opacity: ${ANIMATION_PARAMS.slide.opacity.active};
            transform: translateX(${ANIMATION_PARAMS.slide.translateX.active}%);
        }
        to {
            opacity: ${ANIMATION_PARAMS.slide.opacity.inactive};
            transform: translateX(${
              -1 * ANIMATION_PARAMS.slide.translateX.inactive
            }%);
        }`,
};

const fade = {
  enter: keyframes`
        from {
            opacity: ${ANIMATION_PARAMS.fade.opacity.inactive};
        }
        to {
            opacity: ${ANIMATION_PARAMS.fade.opacity.active};
        }`,
  exit: keyframes`
        from {
            opacity: ${ANIMATION_PARAMS.fade.opacity.active};
        }
        to {
            opacity: ${ANIMATION_PARAMS.fade.opacity.inactive};
        }`,
};

const scale = {
  enter: keyframes`
        from {
            opacity: ${ANIMATION_PARAMS.scale.opacity.inactive};
            transform: scale(${ANIMATION_PARAMS.scale.scale.inactive});
        }
        to {
            opacity: ${ANIMATION_PARAMS.scale.opacity.active};
            transform: scale(${ANIMATION_PARAMS.scale.scale.active});
        }`,
  exit: keyframes`
        from {
            opacity: ${ANIMATION_PARAMS.scale.opacity.active};
            transform: scale(${ANIMATION_PARAMS.scale.scale.active});
        }
        to {
            opacity: ${ANIMATION_PARAMS.scale.opacity.inactive};
            transform: scale(${ANIMATION_PARAMS.scale.scale.inactive});
        }`,
};

const animations = {
  [ANIMATION_VARIANTS.fade]: fade,
  [ANIMATION_VARIANTS.slide]: slide,
  [ANIMATION_VARIANTS.scale]: scale,
};

export const getAnimation = (animationVariant) => {
  return {
    enter: animations[animationVariant].enter,
    exit: animations[animationVariant].exit,
  };
};
