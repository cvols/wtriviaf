/**
 * @flow
 *
 * The PhoneSignUp component allows the user to sign up with a phone number.
 */
import React from 'react';
import firebase from 'react-native-firebase';

import PhoneAuth from './PhoneAuth';

/**
 * Called when the user has successfully signed up.
 */
const onSuccess = (user: Object, name?: string) => {
  // We set the display name of the user based on what was entered on the registration screen
  user.updateProfile({ displayName: name });
  // FirebaseAnalytics: Tell Analytics that a user has registered by phone number
  firebase.analytics().logEvent('sign_up', {
    sign_up_method: 'phone',
  });

  let authUser = firebase.auth().currentUser;
  let uName, email, photoUrl, uid, emailVerified, totalScore, quizesTaken;

  if (authUser != null) {
    uName = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                    // this value to authenticate with your backend server, if
                    // you have one. Use User.getToken() instead.
    totalScore = 0;
    quizesTaken = 0;

  }
 firebase.database().ref('users/' + uid).set(
    {
      uName: uName,
      email: email,
      photoUrl: photoUrl,
      emailVerified: emailVerified,
      uid: uid,
      totalScore: totalScore,
      quizesTaken: quizesTaken
    }
  ).then(() => {
    console.log("Created profile in DB successfully")
  }).catch((error) => {
    console.log(error)
  });
};

// We make use of the standard PhoneAuth component to manage the flow
export default () => (
  <PhoneAuth
    buttonText="SIGN UP"
    collectName
    onSuccess={onSuccess}
    type="register"
  />
);
