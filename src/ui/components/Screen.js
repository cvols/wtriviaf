// The Screen component acts as a wrapper for all our screens so that any styles can be applied 
// consistently across all screens
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import * as Theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.SCREEN_BACKGROUND_COLOR,
    flex: 1,
  },
});

export default class Screen extends React.Component {
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
