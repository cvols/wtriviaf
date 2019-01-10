// The EmailSignUp component allows the user to sign up with an email address.
import React from 'react';
import firebase from 'react-native-firebase';

import EmailAuth from './EmailAuth';

const onSuccess = (user, name) => {
  // We set the display name of the user based on what was entered on the registration screen
  user.updateProfile({ displayName: name });
  // FirebaseAnalytics: Tell Analytics that a user has registered by email address
  firebase.analytics().logEvent('sign_up', {
    sign_up_method: 'email',
  });

  let authUser = firebase.auth().currentUser;
  let uName, email, photoUrl, uid, emailVerified, notifcations;

  if (authUser != null) {
    uName = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    uid = user.uid;
    notifcations = 0;
  }
  firebase.database().ref('users/' + uid).set({
    uName: uName,
    email: email,
    photoUrl: photoUrl,
    emailVerified: emailVerified,
    uid: uid,
    notifcations: notifcations,
  })
    .then(() => {
      console.log("Created profile in DB successfully")
    }).catch((error) => {
      console.log(error)
    });
};

// We make use of the standard EmailAuth component to manage the flow
export default () => (
  <EmailAuth
    buttonText="SIGN UP"
    collectName
    onSuccess={onSuccess}
    type="register"
  />
);
