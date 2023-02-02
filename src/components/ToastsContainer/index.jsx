import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ToastsPortal } from '@/components/ToastsPortal';
import { usePrevious } from '@/hooks';
import { toastManager } from '@/services/toast-manager.service';

export function ToastsContainer({ position, toastsGap, indent }) {
  const { bindContainerRef } = toastManager;
  const containerRef = useRef();
  const previousPosition = usePrevious(position || null);

  useEffect(() => {
    if (containerRef && position !== previousPosition) {
      bindContainerRef({ containerRef, position, previousPosition });
    }
  }, [bindContainerRef, containerRef, position, previousPosition]);

  return (
    <ErrorBoundary>
      <ToastsPortal
        ref={containerRef}
        position={position}
        indent={indent}
        toastsGap={toastsGap}
      />
    </ErrorBoundary>
  );
}

ToastsContainer.propTypes = {
  position: PropTypes.string.isRequired,
  toastsGap: PropTypes.number.isRequired,
  indent: PropTypes.number.isRequired,
};
