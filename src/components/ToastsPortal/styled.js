import styled, { css } from 'styled-components';

const directions = ['top', 'bottom', 'left', 'right'];

const isPositionIncludesDirection = (position, direction) => {
  return position.split('-').includes(direction);
};

const getDirection = (position, direction) => {
  return isPositionIncludesDirection(position, direction) ? direction : '';
};

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ toastsGap }) => toastsGap}px;
  ${directions.map((direction) => {
    return css`
      ${({ position, indent }) =>
        `${getDirection(position, direction)}: ${indent}px;`}
    `;
  })}
`;
