import { useEffect, useState } from 'react';

const getBodyNode = (document) => document.getElementsByTagName('body')[0];

export const usePortal = (position) => {
  const portalId = `toast-portal-${position}`;
  const [isLoading, setIsLoading] = useState(true);
  const [portalNode, setPortalNode] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const node = document.getElementById(portalId);
    const body = getBodyNode(document);
    let div;
    if (node) {
      div = node;
    } else {
      div = document.createElement('div');
      div.setAttribute('id', portalId);
      body.appendChild(div);
    }

    setPortalNode(div);
    setIsLoading(false);

    return () => body.removeChild(div);
  }, [position, portalId]);

  return { isLoading, portalId, portalNode };
};
