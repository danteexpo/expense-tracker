import { useState } from 'react';
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { useAuthContext } from './useAuthContext';

const useLogout = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);

    await signOut(auth)
      .then(() => {
        dispatch({ type: 'LOGOUT' });
      })
      .catch((err) => {
        setError(err.message);
      });

    setIsPending(false);
  };

  return { error, isPending, logout };
};

export default useLogout;
