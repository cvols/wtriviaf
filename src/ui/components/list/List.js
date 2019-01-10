// The List component wraps a list of components
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import * as Theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderColor: Theme.BORDER_COLOR,
    borderTopWidth: StyleSheet.hairlineWidth,
    flex: 1,
    marginTop: 16,
  },
});

export default class List extends React.Component {
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
