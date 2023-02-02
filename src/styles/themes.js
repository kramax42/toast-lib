import { TOAST_VARIANTS } from '@/constants/toast-configs';

import { colors } from './colors';

const defaultThemes = {
  light: {
    background: colors.light,
    text: colors.dark,
  },
  dark: {
    background: colors.dark,
    text: colors.light,
  },
  colored: {
    text: colors.light,
    progressBar: colors.transparent,
    icon: colors.light,
  },
};

const lightTheme = {
  variants: {
    [TOAST_VARIANTS.success]: {
      colorConfig: {
        background: defaultThemes.light.background,
        text: defaultThemes.light.text,
        progressBar: colors.green,
        icon: colors.green,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: defaultThemes.light.background,
        text: defaultThemes.light.text,
        progressBar: colors.red,
        icon: colors.red,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: defaultThemes.light.background,
        text: defaultThemes.light.text,
        progressBar: colors.yellow,
        icon: colors.yellow,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: defaultThemes.light.background,
        text: defaultThemes.light.text,
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
        background: defaultThemes.dark.background,
        text: defaultThemes.dark.text,
        progressBar: colors.green,
        icon: colors.green,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: defaultThemes.dark.background,
        text: defaultThemes.dark.text,
        progressBar: colors.red,
        icon: colors.red,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: defaultThemes.dark.background,
        text: defaultThemes.dark.text,
        progressBar: colors.yellow,
        icon: colors.yellow,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: defaultThemes.dark.background,
        text: defaultThemes.dark.text,
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
        text: defaultThemes.colored.text,
        progressBar: defaultThemes.colored.progressBar,
        icon: defaultThemes.colored.icon,
      },
    },
    [TOAST_VARIANTS.danger]: {
      colorConfig: {
        background: colors.red,
        text: defaultThemes.colored.text,
        progressBar: defaultThemes.colored.progressBar,
        icon: defaultThemes.colored.icon,
      },
    },
    [TOAST_VARIANTS.warning]: {
      colorConfig: {
        background: colors.yellow,
        text: defaultThemes.colored.text,
        progressBar: defaultThemes.colored.progressBar,
        icon: defaultThemes.colored.icon,
      },
    },
    [TOAST_VARIANTS.info]: {
      colorConfig: {
        background: colors.blue,
        text: defaultThemes.colored.text,
        progressBar: defaultThemes.colored.progressBar,
        icon: defaultThemes.colored.icon,
      },
    },
  },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  colored: coloredTheme,
};
