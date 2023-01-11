# React toast library

## Usage example:

```
import {
  createToast,
  ToastsContainer,
  THEME_VARIANTS,
  TOAST_POSITIONS,
  TOAST_VARIANTS,
  ANIMATION_VARIANTS
} from 'toast-lib-react-kra';

  export function CreateToast() {
    const onClickMakeToast = () => {
        createToast({
        message: 'Hello, World!',
        isAutoClose: true,
        duration: 6000,
        theme: THEME_VARIANTS.dark,
        variant: TOAST_VARIANTS.info,
        animation: ANIMATION_VARIANTS.slide,
        position: TOAST_POSITIONS.bottomRight,
        customColorConfig: {
            background: 'dark',
            text: 'white',
            icon: 'white,
            progressBar: 'white',
        },
        });
  };

  return (
    <>
      <button onClick={onClickMakeToast}>
        Create Toast
      </button>
      <ToastsContainer
        position={position}
        indent={indent}
        toastsGap={toastsGap}
      />
    </>
  );
}```