import styled, { css } from 'styled-components';

import { CrossIcon } from '@/assets/icons/CrossIcon';
import { componentStyles } from '@/styles/components';
import { fontSizes, spaces } from '@/styles/sizes';

const { toast } = componentStyles;

export const ToastWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border-radius: ${spaces[1]}px;

  animation: ${({ isAnimationEnter, animation, animationDuration }) =>
    css`
      ${isAnimationEnter ? animation.enter : animation.exit}
      ${animationDuration}ms ease-in-out forwards
    ` || ''};
`;

export const CloseButton = styled(CrossIcon)`
  display: block;
  width: ${toast.closeButton.width}px;
  height: ${toast.closeButton.height}px;
  opacity: ${toast.closeButton.opacity.inActive};
  cursor: pointer;

  &:active,
  &:hover {
    opacity: ${toast.closeButton.opacity.active};
  }
`;

export const RemoveToastAnimationWrapper = styled.div``;

export const Content = styled.div`
  cursor: auto;
  padding: ${spaces[2]}px ${spaces[3]}px;
  width: max-content;
  min-height: ${toast.minHeight}px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${spaces[3]}px;
`;

export const Message = styled.p`
  flex: auto;
  max-width: ${toast.message.maxWidth}px;
  font-size: ${fontSizes[3]}px;
  font-family: inherit;
  word-break: break-all;
  hyphens: auto;
`;
