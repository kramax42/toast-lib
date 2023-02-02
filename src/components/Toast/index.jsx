import PropTypes from 'prop-types';
import { forwardRef, useEffect, useState } from 'react';

import { ProgressBar } from '@/components/ProgressBar';
import { ToastIcon } from '@/components/ToastIcon';
import {
  ANIMATION_VARIANTS,
  TOAST_ENTER_EXIT_DURATION_MS,
} from '@/constants/animation';
import { SCALE_MIN_SPACE_TO_REMOVE_TOAST } from '@/constants/drag-n-drop';
import { useDrag, useElementSize } from '@/hooks';
import { getAnimation } from '@/utils/animation';

import {
  CloseButton,
  Content,
  Message,
  RemoveToastAnimationWrapper,
  ToastWrapper,
} from './styled';

export const Toast = forwardRef(
  (
    {
      duration,
      isAutoClose,
      message,
      variant,
      removeToast,
      animationVariant,
      id,
      colorConfig,
    },
    ref,
  ) => {
    const { width: toastWidth } = useElementSize(ref);

    const animation = getAnimation(animationVariant);
    const [isAnimationEnter, setIsAnimationEnter] = useState(true);

    const removeToastHandler = () => {
      setIsAnimationEnter(false);
      setTimeout(() => {
        removeToast();
      }, TOAST_ENTER_EXIT_DURATION_MS);
    };

    const { handleDragStart, handleDragMove, handleDragEnd } = useDrag({
      ref,
      removeToast: removeToastHandler,
      minSpaceToRemove: toastWidth * SCALE_MIN_SPACE_TO_REMOVE_TOAST,
    });

    useEffect(() => {
      let timeout = null;
      if (isAutoClose) {
        timeout = setTimeout(() => {
          removeToastHandler();
        }, duration);
      }

      return () => {
        if (isAutoClose) {
          clearTimeout(timeout);
        }
      };
    }, []);

    return (
      <RemoveToastAnimationWrapper ref={ref}>
        <ToastWrapper
          data-test={`toast-${id}`}
          backgroundColor={colorConfig.background}
          textColor={colorConfig.text}
          animation={animation}
          animationDuration={TOAST_ENTER_EXIT_DURATION_MS}
          isAnimationEnter={isAnimationEnter}
          onTouchStart={handleDragStart}
          onTouchMove={handleDragMove}
          onTouchEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onDrag={handleDragMove}
          onDragEnd={handleDragEnd}
        >
          <Content>
            <ToastIcon variant={variant} color={colorConfig.icon} />
            <Message value={variant}>{message}</Message>
            <CloseButton onClick={removeToastHandler} />
          </Content>

          {isAutoClose && (
            <ProgressBar
              duration={duration}
              width={toastWidth}
              color={colorConfig.progressBar}
            />
          )}
        </ToastWrapper>
      </RemoveToastAnimationWrapper>
    );
  },
);

Toast.propTypes = {
  id: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  isAutoClose: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  removeToast: PropTypes.func.isRequired,
  animationVariant: PropTypes.oneOf(Object.values(ANIMATION_VARIANTS))
    .isRequired,
  colorConfig: PropTypes.shape({
    background: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    progressBar: PropTypes.string.isRequired,
  }).isRequired,
};
