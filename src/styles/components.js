import { colors } from './colors';
import { fontSizes } from './sizes';

export const componentStyles = {
  button: {
    width: 140,
    height: 60,
    borderRadius: 5,
    fontSize: fontSizes[3],
    color: {
      background: colors.blue,
      text: colors.light,
    },
  },
  toast: {
    minHeight: 60,
    message: {
      maxWidth: 180,
    },
    closeButton: {
      width: 26,
      height: 26,
      opacity: {
        inActive: 0.8,
        active: 1,
      },
    },
    icon: {
      width: 30,
      height: 30,
    },
    progressBar: {
      height: 5,
      borderRadius: {
        bottomRight: 0,
        bottomLeft: 4,
      },
    },
  },
};
