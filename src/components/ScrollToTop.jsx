import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component to guarantee that the user will start at the top
// of the page when navigating to a different route.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;