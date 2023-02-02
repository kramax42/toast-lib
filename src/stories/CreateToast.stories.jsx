import PropTypes from 'prop-types';

import { ToastsContainer } from '@/components/ToastsContainer';
import { ANIMATION_VARIANTS } from '@/constants/animation';
import { defaultToastConfig } from '@/constants/default-toast-config';
import {
  THEME_VARIANTS,
  TOAST_POSITIONS,
  TOAST_VARIANTS,
} from '@/constants/toast-configs';
import { toastManager } from '@/services/toast-manager.service';

import { Button, Container } from './styled';

export default {
  title: 'CreateToast',
  component: ToastsContainer,
  argTypes: {
    message: {
      control: 'text',
      defaultValue: defaultToastConfig.message,
    },
    isAutoClose: {
      control: 'boolean',
      defaultValue: defaultToastConfig.isAutoClose,
    },
    duration: {
      control: 'number',
      defaultValue: defaultToastConfig.duration,
    },
    indent: {
      control: 'number',
      defaultValue: defaultToastConfig.indent,
    },
    toastsGap: {
      control: 'number',
      defaultValue: defaultToastConfig.toastsGap,
    },
    variant: {
      options: Object.values(TOAST_VARIANTS),
      control: { type: 'radio' },
      defaultValue: defaultToastConfig.variant,
    },
    position: {
      options: Object.values(TOAST_POSITIONS),
      control: { type: 'radio' },
      defaultValue: defaultToastConfig.position,
    },
    animation: {
      options: Object.values(ANIMATION_VARIANTS),
      control: { type: 'radio' },
      defaultValue: defaultToastConfig.animation,
    },
    theme: {
      options: Object.values(THEME_VARIANTS),
      control: { type: 'radio' },
      defaultValue: defaultToastConfig.theme,
    },
    backgroundColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    iconColor: {
      control: 'color',
    },
    progressBarColor: {
      control: 'color',
    },
  },
};

export function CreateToast({
  duration,
  isAutoClose,
  animation,
  variant,
  message,
  indent,
  theme,
  position,
  toastsGap,
  backgroundColor,
  textColor,
  iconColor,
  progressBarColor,
}) {
  const onClickMakeToast = () => {
    toastManager.createToast({
      theme,
      variant,
      message,
      animation,
      duration,
      isAutoClose,
      position,
      customColorConfig: {
        background: backgroundColor || null,
        text: textColor || null,
        icon: iconColor || null,
        progressBar: progressBarColor || null,
      },
    });
  };

  return (
    <Container>
      <Button data-test="create-toast-btn" onClick={onClickMakeToast}>
        Create Toast
      </Button>
      <ToastsContainer
        position={position}
        indent={indent}
        toastsGap={toastsGap}
      />
    </Container>
  );
}

CreateToast.propTypes = {
  duration: PropTypes.number.isRequired,
  isAutoClose: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  indent: PropTypes.number.isRequired,
  toastsGap: PropTypes.number.isRequired,
  animation: PropTypes.oneOf(Object.values(ANIMATION_VARIANTS)).isRequired,
  theme: PropTypes.oneOf(Object.values(THEME_VARIANTS)).isRequired,
  position: PropTypes.oneOf(Object.values(TOAST_POSITIONS)).isRequired,
  variant: PropTypes.oneOf(Object.values(TOAST_VARIANTS)).isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  progressBarColor: PropTypes.string.isRequired,
};
