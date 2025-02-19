// src/screens/LoginScreen.js
import colors from '../styles/colors';
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../components/auth/LoginForm';
import SocialLoginButtons from '../components/auth/SocialLoginButtons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
});

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLoginSuccess = useCallback((userData) => {
    // 로그인 성공 후 처리
    navigation.replace('Main');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LoginForm onLoginSuccess={handleLoginSuccess} />
      <SocialLoginButtons />
    </View>
  );
};

export default LoginScreen;