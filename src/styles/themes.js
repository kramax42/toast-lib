import { TOAST_VARIANTS } from '@/constants/toast-configs';

import { colors } from './colors';

const lightTheme = {
  variants: {
    [TOAST_VARIANTS.success]: {
      colorConfig: {
        background: colors.light,
        text: colors.dark,
        progressBar: colors.green,
        icon: colors.green,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: colors.light,
        text: colors.dark,
        progressBar: colors.red,
        icon: colors.red,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: colors.light,
        text: colors.dark,
        progressBar: colors.yellow,
        icon: colors.yellow,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: colors.light,
        text: colors.dark,
        progressBar: colors.blue,
        icon: colors.blue,
      },
    },
  },
};

const darkTheme = {
  variants: {
    [TOAST_VARIANTS.success]: {
      colorConfig: {
        background: colors.dark,
        text: colors.light,
        progressBar: colors.green,
        icon: colors.green,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: colors.dark,
        text: colors.light,
        progressBar: colors.red,
        icon: colors.red,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: colors.dark,
        text: colors.light,
        progressBar: colors.yellow,
        icon: colors.yellow,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: colors.dark,
        text: colors.light,
        progressBar: colors.blue,
        icon: colors.blue,
      },
    },
  },
};

const coloredTheme = {
  variants: {
    [TOAST_VARIANTS.success]: {
      colorConfig: {
        background: colors.green,
        text: colors.light,
        progressBar: colors.transparent,
        icon: colors.light,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: colors.red,
        text: colors.light,
        progressBar: colors.transparent,
        icon: colors.light,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: colors.yellow,
        text: colors.light,
        progressBar: colors.transparent,
        icon: colors.light,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: colors.blue,
        text: colors.light,
        progressBar: colors.transparent,
        icon: colors.light,
      },
    },
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  colored: coloredTheme,
};
