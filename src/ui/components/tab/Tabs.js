// The Tabs component acts as a wrapper around `Tab` components
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
});

export default class Tabs extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const { children } = this.props;

    return (
      <View style={styles.container}>
        {children}
      </View>
    )
  }
}
