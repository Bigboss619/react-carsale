import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import PageLoader from './components/loader/PageLoader.jsx';
import { useLocation } from 'react-router-dom';
import { UserAuth } from './context/AuthContext.jsx';

function App() {
  // const [loading, setLoading] = useState(true);
  const { loading } = UserAuth();
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);

    const maxTimer = setTimeout(() => {
      setShowLoader(false);
    }, 5000); // Simulate loading delay
      if(!loading){
        setShowLoader(false);
        clearTimeout(maxTimer);
      }

    return () => clearTimeout(maxTimer);
  }, [location.pathname, loading]);

  return (
    <>
      {showLoader && <PageLoader />}

      {!showLoader && (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}

export default App;
