import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    margin: 4,
  },
});

export default class LinkButton extends React.Component {
  static propTypes = {
    // The optional children to include within the link
    children: PropTypes.node,
    // The optional style for the link container
    containerStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    // The optional text to show as part of the link
    text: PropTypes.string,
    // The optional style for the link text
    textStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.number,
    ]),
    // The action to call when the link is pressed
    onPress: PropTypes.func,
  }

  render() {
    const { children, containerStyle, text, textStyle, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, containerStyle]}
      >
        {text
          ? <Text style={textStyle}>{text}</Text>
          : children
        }
      </TouchableOpacity>
    );
  }
};
