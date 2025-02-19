// src/components/auth/SocialLoginButtons.js
import React, { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import CustomButton from '../common/Button';

const SocialLoginButtons = () => {
  const handleSocialLogin = useCallback((provider) => async () => {
    try {
      console.log(`${provider} login`);
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      {['kakao', 'google', 'naver'].map(provider => (
        <CustomButton
          key={provider}
          title={`${provider} 로그인`}
          type="secondary"
          onPress={handleSocialLogin(provider)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
    marginBottom: 20,
  },
});

export default React.memo(SocialLoginButtons);