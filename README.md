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

  export function Example() {
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
}
```

## List of config values:
- message: string,
- isAutoClose: boolean,
- duration: number,
- indent: number
- toastsGap: number
- theme: THEME_VARIANTS = { dark, colored, light }
- position: TOAST_POSITIONS = { topRight, topLeft, bottomRight, bottomLeft }
- variant: TOAST_VARIANTS = { success, info, danger, warning }
- aniamtion: ANIMATION_VARIANTS = { slide, fade, scale }
- customColorConfig: { background: string, text: string, icon: string, progressBar: string}