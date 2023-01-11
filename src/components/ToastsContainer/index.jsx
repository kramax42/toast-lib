import PropTypes from 'prop-types';
import React, { createRef, useEffect, useRef } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ToastsPortal } from '@/components/ToastsPortal';
import { toastManager } from '@/services/toast-manager.service';

export function ToastsContainer({ position, toastsGap, indent }) {
  const { bindContainerRef } = toastManager;
  // const containerRef = useRef(null);
  const containerRef = createRef();

  useEffect(() => {
    if (containerRef) {
      bindContainerRef({ containerRef, position });
    }
  }, [bindContainerRef, containerRef, position]);

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
