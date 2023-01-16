import PropTypes from 'prop-types';

import { useVerticalAnimation } from '@/hooks';

export function VerticalAnimationList({ children }) {
  useVerticalAnimation(children);

  return children;
}

VerticalAnimationList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
