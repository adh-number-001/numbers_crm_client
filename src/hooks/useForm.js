// src/hooks/useForm.js
// 폼 관리를 위한 커스텀 훅
import { useState, useCallback } from 'react';

export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((name) => (value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
    // 에러 상태 초기화
    setErrors(prev => ({
      ...prev,
      [name]: null
    }));
  }, []);

  const handleSubmit = useCallback((onSubmit) => async () => {
    try {
      await onSubmit(values);
    } catch (error) {
      setErrors(error.errors || {});
    }
  }, [values]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};