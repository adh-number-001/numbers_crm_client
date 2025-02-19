// src/components/common/Button.js
import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  secondary: {
    backgroundColor: 'transparent',
    padding: 15,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  primaryText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: colors.text,
    fontSize: 16,
  },
});

const CustomButton = ({
  title,
  onPress,
  style,
  type = 'primary',
  disabled,
}) => (
  <TouchableOpacity
    style={[styles[type], style, disabled && styles.disabled]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles[`${type}Text`]}>{title}</Text>
  </TouchableOpacity>
);

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  type: 'primary',
  disabled: false,
  style: {},
};

export default React.memo(CustomButton);