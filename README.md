# React toast library

## Usage example:

```jsx
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

## List of config values:

- message: string,
- isAutoClose: boolean,
- duration: number,
- THEME_VARIANTS: { dark, colored, light }
- TOAST_POSITIONS: { topRight, topLeft, bottomRight, bottomLeft }
- TOAST_VARIANTS: { success, info, danger, warning }
- ANIMATION_VARIANTS: { slide, fade, scale }
- customColorConfig: { background: colorString, text: colorString, icon: colorString, progressBar: colorString}