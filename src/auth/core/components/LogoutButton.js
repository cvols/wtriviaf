// The LogoutButton component triggers a logout from Firebase and any third party providers.
import React from 'react';
import { Button } from 'react-native';
import { LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';

import * as Theme from '../../../theme';

export default class LogoutButton extends React.Component {
  logout() {
    // Logout from Firebase
    firebase.auth().signOut();
    // Logout from Facebook
    LoginManager.logOut();
    // Logout from Google
    GoogleSignin.signOut();
  };

  render() {
    return (
      <Button
        color={Theme.PRIMARY}
        onPress={this.logout}
        title="Logout"
      />
    )
  }
}
