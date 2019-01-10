// The ListHeader component can be used as a header in the list
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import * as Theme from '../../../theme';

const styles = StyleSheet.create({
  header: {
    backgroundColor: Theme.PRIMARY,
    borderColor: Theme.BORDER_COLOR_DARK,
    padding: 16,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default class ListHeader extends React.Component {
  static propTypes = {
    text: PropTypes.string,
  }

  render() {
    const { text } = this.props;
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
      </View>
    )
  }
}
