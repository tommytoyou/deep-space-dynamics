import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, let the browser handle scrolling to the element
    // Otherwise, scroll to top
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant', // Use instant for route changes, smooth can feel slow
      });
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
