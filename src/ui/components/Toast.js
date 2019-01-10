// The Toast component wraps the `react-native-root-toast` Toast component to allow you to easily replace this with an alternative Toast implementation if required
// It exposes a number of helper methods to show standard error, info and warning messages
import Toast from 'react-native-root-toast';
import * as Theme from '../../theme';

export const showError = error => {
  Toast.show(error, {
    backgroundColor: Theme.TOAST_ERROR_BACKGROUND_COLOR,
    duration: 5000,
    position: 50,
    textColor: Theme.TOAST_TEXT_COLOR,
    type: 'danger',
  });
};

export const showMessage = message => {
  Toast.show(message, {
    backgroundColor: Theme.TOAST_MESSAGE_BACKGROUND_COLOR,
    duration: 5000,
    position: 50,
    textColor: Theme.TOAST_TEXT_COLOR,
  });
};

export const showWarning = warning => {
  Toast.show(warning, {
    backgroundColor: Theme.TOAST_WARNING_BACKGROUND_COLOR,
    duration: 5000,
    position: 50,
    textColor: Theme.TOAST_TEXT_COLOR,
  });
};
