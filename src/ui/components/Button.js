import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Icon from './Icon';
import * as Theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: Theme.BUTTON,
    borderRadius: 22.5,
    flexDirection: 'row',
    height: 45,
    justifyContent: 'center',
    margin: 4,
  },
  disabled: {
    backgroundColor: Theme.BUTTON_DISABLED,
  },
  icon: {
    color: '#fff',
    margin: 4,
    width: 45,
  },
  text: {
    color: '#fff',
    marginLeft: 8,
  },
});


export default class Button extends React.Component {
  static propTypes = {
    // The optional style for the button container
    containerStyle: PropTypes.shape({}),
    // Whether the button is disabled
    disabled: PropTypes.bool,
    // The optional icon to show as part of the button
    icon: PropTypes.string,
    // The optional style for the button icon
    iconStyle: PropTypes.shape({}),
    // The action to call when the button is pressed
    onPress: PropTypes.func,
    // The optional text to show as part of the button
    text: PropTypes.string,
    // The optional style for the button text
    textStyle: PropTypes.shape({}),
  }

  static defaultProps = {
    containerStyle: null,
    disabled: false,
    icon: null,
    iconStyle: null,
    onPress: null,
    text: null,
    textStyle: null,
  }

  render() {
    const { containerStyle, disabled, icon, iconStyle, onPress, text, textStyle } = this.props;

    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.container, disabled && styles.disabled, containerStyle]}
      >
        {icon && <Icon active name={icon} style={[styles.icon, iconStyle]} />}
        {text && <Text style={[styles.text, textStyle]}>{text}</Text>}
      </TouchableOpacity>
    );
  }
};
