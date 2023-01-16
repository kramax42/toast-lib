import PropTypes from 'prop-types';
import React, { createRef, useEffect } from 'react';

import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ToastsPortal } from '@/components/ToastsPortal';
import { usePrevious } from '@/hooks/previous.hook';
import { toastManager } from '@/services/toast-manager.service';

export function ToastsContainer({ position, toastsGap, indent }) {
  const { bindContainerRef } = toastManager;
  const containerRef = createRef();
  const previousPosition = usePrevious(position || null);

  useEffect(() => {
    if (containerRef) {
      bindContainerRef({ containerRef, position, previousPosition });
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
