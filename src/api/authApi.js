// src/api/authApi.js

const AuthApi = {
  login: async (credentials) => {
    try {
      const response = await fetch('api/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
      });
      return response.json();
    } catch (error) {
      throw new Error('Login failed');
    }
  }
};

export default AuthApi;