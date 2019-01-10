import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Button from '../../ui/components/Button';
import LinkButton from '../../ui/components/LinkButton';
import Screen from '../../ui/components/Screen';
import RNFirebaseLogo from '../../../assets/RNFirebase512x512.png';

export default class Home extends React.Component {
  // Set the navigation options for `react-navigation`
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <Screen>
        <View style={styles.welcome}>
          <Image source={RNFirebaseLogo} style={styles.image} />
          <Text style={styles.welcomeText}>
            Wine, Trivia, Friends!
          </Text>
        </View>
        <View style={styles.loginOptions}>
          <Button
            onPress={this.onLogin}
            text="Login"
          />
          <LinkButton
            containerStyle={styles.linkContainer}
            onPress={this.onSignUp}>
            <Text>Don't have an account yet? <Text style={styles.signUpText}>Sign Up</Text></Text>
          </LinkButton>
        </View>
      </Screen>
    );
  }

  onLogin = () => this.props.navigation.navigate('Login');

  onSignUp = () => this.props.navigation.navigate('SignUp');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 250,
    width: 250,
  },
  linkContainer: {
    alignSelf: 'center',
    height: 45,
  },
  loginOptions: {
    padding: 8,
  },
  signUpText: {
    fontWeight: '700',
  },
  welcome: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  welcomeText: {
    fontSize: 20,
    marginTop: 24,
    textAlign: 'center',
  },
});
