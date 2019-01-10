import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Screen from '../../ui/components/Screen';
import RNFirebaseLogo from '../../../assets/RNFirebase512x512.png';

export default class Lobby extends React.Component {
  // Set the navigation options for `react-navigation`
  static navigationOptions = {
    headerTitle: 'Lobby',
  };

  render() {
    return (
      <Screen>
        <View style={styles.welcome}>
          <Image source={RNFirebaseLogo} style={styles.image} />
          <Text style={styles.welcomeText}>
            Lobby
          </Text>
        </View>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
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
