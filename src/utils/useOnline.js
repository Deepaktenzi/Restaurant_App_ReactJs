import { useState, useEffect } from 'react';

const useOnline = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    addEventListener('offline', (e) => {
      setStatus(false);
    });
    addEventListener('online', (e) => {
      setStatus(true);
    });
  }, []);

  return status; // Return either True / False
};
export default useOnline;
