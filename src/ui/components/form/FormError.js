/// The FormError component displays errors from `redux-form`
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

import * as Theme from '../../../theme';

const styles = StyleSheet.create({
  error: {
    color: Theme.ERROR_COLOR,
    lineHeight: 20,
    padding: 8,
    textAlign: 'center',
  },
  spacer: {
    height: 36,
  },
});

export default class FormError extends React.Component {
  static propTypes = {
    error: PropTypes.shape({
      message: PropTypes.string,
    }),
  }

  render() {
    const { error } = this.props;
    
    return (
      <View>
        {error ?
          <Text style={styles.error}>{error.message}</Text>
          :
          <View style={styles.spacer} />
        }
      </View>
    )
  }
}

