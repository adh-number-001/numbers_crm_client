// src/components/auth/LoginForm.js
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../common/Button';
import CustomInput from '../common/Input';
import { useAuth } from '../../hooks/useAuth';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  errorText: {
    color: colors.error,
    marginTop: 10,
  },
});

const LoginForm = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    id: '',
    password: '',
  });

  const { login, isLoading, error } = useAuth();

  const handleChange = useCallback((name) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleLogin = useCallback(async () => {
    try {
      const result = await login(formData);
      if (onLoginSuccess) {
        onLoginSuccess(result);
      }
    } catch (err) {
      // 에러 처리는 useAuth 내부에서 처리됨
    }
  }, [formData, login, onLoginSuccess]);

  return (
    <View style={styles.container}>
      <CustomInput
        value={formData.id}
        onChangeText={handleChange('id')}
        placeholder="ID"
        testID="login-id-input"
      />
      <CustomInput
        value={formData.password}
        onChangeText={handleChange('password')}
        placeholder="Password"
        secureTextEntry
        testID="login-password-input"
      />
      <CustomButton
        title="로그인"
        onPress={handleLogin}
        disabled={isLoading}
        testID="login-submit-button"
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

LoginForm.propTypes = {
  onLoginSuccess: PropTypes.func,
};

export default React.memo(LoginForm);