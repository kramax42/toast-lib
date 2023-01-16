import { defaultToastConfig } from '@/constants/default-toast-config';
import { TOAST_POSITIONS } from '@/constants/toast-configs';
import { themes } from '@/styles/themes';

export class ToastManager {
  #MAX_TOASTS_ON_SCREEN = 3;

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

  generateToastId = () => {
    return this.#lastToastId + 1;
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
    this.#lastToastId = this.generateToastId();
    const newToast = {
      theme,
      variant,
      message,
      duration,
      isAutoClose,
      animation,
      indent,
      position,
      colorConfig: {
        background: customColorConfig.background || colorConfig.background,
        text: customColorConfig.text || colorConfig.text,
        icon: customColorConfig.icon || colorConfig.icon,
        progressBar: customColorConfig.progressBar || colorConfig.progressBar,
      },
      id: this.#lastToastId,
    };

    this.#toasts.get(position).push(newToast);
    this.#containerRefs
      .get(position)
      .current.updateToasts(this.#toasts.get(position));
  };

  removeToast = ({ position, id }) => {
    this.#toasts.set(
      position,
      this.#toasts.get(position).filter((toast) => toast.id !== id),
    );
    this.#containerRefs
      .get(position)
      .current.updateToasts(this.#toasts.get(position));
  };
}

export const toastManager = ToastManager.getInstance();
