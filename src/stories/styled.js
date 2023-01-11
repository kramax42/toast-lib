import styled from 'styled-components';

import { componentStyles } from '@/styles/components';
import { spaces } from '@/styles/sizes';

export const Container = styled.div`
  margin: ${spaces[8]}px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: ${componentStyles.button.width}px;
  height: ${componentStyles.button.height}px;
  margin: 0 auto;
  font-size: ${componentStyles.button.fontSize}px;
  background-color: ${componentStyles.button.color.background};
  color: ${componentStyles.button.color.text};
  border: none;
  border-radius: ${componentStyles.button.borderRadius}px;
  cursor: pointer;
  font-family: Arial, Helvetica, sans-serif;
`;
