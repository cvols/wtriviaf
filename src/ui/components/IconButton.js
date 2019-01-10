import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Icon from './Icon';

export default class IconButton extends React.Component {
  static propTypes = {
    // The optional style for the button container
    containerStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    // The icon to display
    icon: PropTypes.string.isRequired,
    // The optional style for the button icon
    iconStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    // The action to call when the button is pressed
    onPress: PropTypes.func.isRequired,
  }

  render() {
    const { containerStyle, icon, iconStyle, onPress } = this.props;

    return(
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, containerStyle]}
      >
        <Icon active name={icon} style={[styles.icon, iconStyle]} />
      </TouchableOpacity>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 22.5,
    height: 45,
    justifyContent: 'center',
    margin: 4,
    width: 45,
  },
  icon: {
    fontSize: 30,
    height: 30,
    lineHeight: 30,
  },
});
