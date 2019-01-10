import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

export default class SubmitButton extends React.Component {
  static propTypes = {
    // Whether the button should be disabled
    disabled: PropTypes.bool,
    // If the form is currently loading / processing
    loading: PropTypes.bool,
    // The action to perform when the button is pressed
    onPress: PropTypes.func,
    // The text to show on the submit button
    text: PropTypes.string,
  }

  render() {
    const { disabled, loading, onPress, text } = this.props;

    return (
      <Button
        disabled={disabled || loading}
        onPress={onPress}
        text={text}
      />
    )
  }
}
