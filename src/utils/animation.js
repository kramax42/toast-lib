import { keyframes } from 'styled-components';

import { TRANSFORM_SCALE_VALUE } from '@/constants/animation';

const slide = {
  enter: keyframes`
        from {
            opacity: 0;
            transform: translateX(-100%);
        }
        to {
            opacity: 1;
            transform: translateX(0%);

        }`,
  exit: keyframes`
        from {
            opacity: 1;
            transform: translateX(0%);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }`,
};

const fade = {
  enter: keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }`,
  exit: keyframes`
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }`,
};

const scale = {
  enter: keyframes`
        from {
            opacity: 0;
            transform: scale(${TRANSFORM_SCALE_VALUE});
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }`,
  exit: keyframes`
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
            transform: scale(${TRANSFORM_SCALE_VALUE});
        }`,
};

const animations = {
  fade,
  slide,
  scale,
};

export const getAnimation = (animationVariant) => {
  return {
    enter: animations[animationVariant].enter,
    exit: animations[animationVariant].exit,
  };
};
