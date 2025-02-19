// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PropTypes from 'prop-types'; // prop-types 추가
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

// 스크린 컴포넌트들의 PropTypes 정의
const screenProps = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

SplashScreen.propTypes = screenProps;
LoginScreen.propTypes = screenProps;

const App = () => (  // 화살표 함수에서 바로 반환
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="Splash" 
      screenOptions={{ 
        headerShown: false,
        presentation: 'card',
      }}
    >
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
      />
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

// displayName 추가
App.displayName = 'App';

export default App;