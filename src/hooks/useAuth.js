// src/hooks/useAuth.js
import { useState, useCallback } from 'react';
import AuthApi from '../api/authApi';

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = useCallback(async (credentials) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await AuthApi.login(credentials);
      return response;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    login,
    isLoading,
    error,
  };
};