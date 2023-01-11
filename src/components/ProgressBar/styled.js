import styled from 'styled-components';

import { PROGRESS_BAR_TRANSITION_MS } from '@/constants/animation';
import { componentStyles } from '@/styles/components';
import { themes } from '@/styles/themes';

const { progressBar } = componentStyles.toast;

export const Bar = styled.div`
  width: 100%;
  height: ${progressBar.height}px;
  border-bottom-right-radius: ${progressBar.borderRadius.bottomRight}px;
  border-bottom-left-radius: ${progressBar.borderRadius.bottomLeft}px;
`;

export const FilledBar = styled(Bar)`
  width: ${({ width }) => width}%;
  height: ${progressBar.height}px;
  border-bottom-right-radius: ${progressBar.borderRadius.bottomRight}px;
  border-bottom-left-radius: ${progressBar.borderRadius.bottomLeft}px;
  background: ${({ color }) => color};
  transition: width ${PROGRESS_BAR_TRANSITION_MS}ms ease-out;
`;

export const Container = styled.div`
  width: ${({ width }) => width}px;
`;
