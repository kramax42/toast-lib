import { TOAST_VARIANTS } from '@/constants/toast-configs';

import { colors } from './colors';

const lightThemeDefault = {
  background: colors.light,
  text: colors.dark,
};

const lightTheme = {
  variants: {
    [TOAST_VARIANTS.success]: {
      colorConfig: {
        background: lightThemeDefault.background,
        text: lightThemeDefault.text,
        progressBar: colors.green,
        icon: colors.green,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: lightThemeDefault.background,
        text: lightThemeDefault.text,
        progressBar: colors.red,
        icon: colors.red,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: lightThemeDefault.background,
        text: lightThemeDefault.text,
        progressBar: colors.yellow,
        icon: colors.yellow,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: lightThemeDefault.background,
        text: lightThemeDefault.text,
        progressBar: colors.blue,
        icon: colors.blue,
      },
    },
  },
};

const darkThemeDefault = {
  background: colors.dark,
  text: colors.light,
};

const darkTheme = {
  variants: {
    [TOAST_VARIANTS.success]: {
      colorConfig: {
        background: darkThemeDefault.background,
        text: darkThemeDefault.text,
        progressBar: colors.green,
        icon: colors.green,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: darkThemeDefault.background,
        text: darkThemeDefault.text,
        progressBar: colors.red,
        icon: colors.red,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: darkThemeDefault.background,
        text: darkThemeDefault.text,
        progressBar: colors.yellow,
        icon: colors.yellow,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: darkThemeDefault.background,
        text: darkThemeDefault.text,
        progressBar: colors.blue,
        icon: colors.blue,
      },
    },
  },
};

const coloredThemeDefault = {
  text: colors.light,
  progressBar: colors.transparent,
  icon: colors.light,
};

const coloredTheme = {
  variants: {
    [TOAST_VARIANTS.success]: {
      colorConfig: {
        background: colors.green,
        text: coloredThemeDefault.text,
        progressBar: coloredThemeDefault.progressBar,
        icon: coloredThemeDefault.icon,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: colors.red,
        text: coloredThemeDefault.text,
        progressBar: coloredThemeDefault.progressBar,
        icon: coloredThemeDefault.icon,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: colors.yellow,
        text: coloredThemeDefault.text,
        progressBar: coloredThemeDefault.progressBar,
        icon: coloredThemeDefault.icon,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: colors.blue,
        text: coloredThemeDefault.text,
        progressBar: coloredThemeDefault.progressBar,
        icon: coloredThemeDefault.icon,
      },
    },
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  colored: coloredTheme,
};
