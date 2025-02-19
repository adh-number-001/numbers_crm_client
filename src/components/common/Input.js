// src/components/common/Input.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  ...props
}) => (
  <TextInput
    style={[styles.input, style]}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    placeholderTextColor="#999"
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

CustomInput.defaultProps = {
  placeholder: '',
  secureTextEntry: false,
  style: {},
};

export default React.memo(CustomInput);