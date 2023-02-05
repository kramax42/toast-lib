import { defaultToastConfig } from '@/constants/default-toast-config';
import { TOAST_POSITIONS } from '@/constants/toast-configs';
import { themes } from '@/styles/themes';

export class ToastManager {
  #MAX_TOASTS_ON_SCREEN = 3;

  #MAX_MESSAGE_LENGTH = 20;

  #lastToastId = 0;

  #toasts = new Map();

  #containerRefs = new Map();

  static getInstance() {
    if (!this.instance) {
      this.instance = new ToastManager();
    }
    return this.instance;
  }

  constructor() {
    Object.values(TOAST_POSITIONS).forEach((position) => {
      this.#toasts.set(position, []);
      this.#containerRefs.set(position, null);
    });
  }

  #generateToastId = () => {
    return this.#lastToastId + 1;
  };

  #formatMessage = (message) => {
    if (typeof message === 'string') {
      if (message.length <= this.#MAX_MESSAGE_LENGTH) {
        return message;
      }
      return message.slice(0, this.#MAX_MESSAGE_LENGTH);
    }
    return '';
  };

  #updateToasts = (position) => {
    this.#containerRefs
      .get(position)
      .current.updateToasts(
        this.#toasts.get(position).slice(0, this.#MAX_TOASTS_ON_SCREEN),
      );
  };

  bindContainerRef = ({ containerRef, position, previousPosition }) => {
    if (this.#toasts.has(previousPosition)) {
      this.#toasts.set(previousPosition, []);
    }

    if (this.#containerRefs.has(previousPosition)) {
      this.#containerRefs.set(previousPosition, null);
    }

    if (this.#containerRefs.has(position)) {
      this.#containerRefs.set(position, containerRef);
      this.#containerRefs
        .get(position)
        .current.updateToasts(this.#toasts.get(position));
    }
  };

  getMaxToastsOnScreen = () => {
    return this.#MAX_TOASTS_ON_SCREEN;
  };

  createToast = ({
    theme = defaultToastConfig.theme,
    variant = defaultToastConfig.variant,
    message = defaultToastConfig.message,
    animation = defaultToastConfig.animation,
    duration = defaultToastConfig.duration,
    isAutoClose = defaultToastConfig.isAutoClose,
    indent = defaultToastConfig.indent,
    position = defaultToastConfig.position,
    customColorConfig = {},
  }) => {
    const { colorConfig } = themes[theme].variants[variant];
    this.#lastToastId = this.#generateToastId();
    const newToast = {
      theme,
      variant,
      duration,
      isAutoClose,
      animation,
      indent,
      position,
      message: this.#formatMessage(message),
      id: this.#lastToastId,
      colorConfig: {
        background: customColorConfig.background || colorConfig.background,
        text: customColorConfig.text || colorConfig.text,
        icon: customColorConfig.icon || colorConfig.icon,
        progressBar: customColorConfig.progressBar || colorConfig.progressBar,
      },
    };

    this.#toasts.get(position).push(newToast);
    if (this.#toasts.get(position).length <= this.#MAX_TOASTS_ON_SCREEN) {
      this.#updateToasts(position);
    }
  };

  removeToast = ({ position, id }) => {
    this.#toasts.set(
      position,
      this.#toasts.get(position).filter((toast) => toast.id !== id),
    );
    this.#updateToasts(position);
  };
}

export const toastManager = ToastManager.getInstance();
