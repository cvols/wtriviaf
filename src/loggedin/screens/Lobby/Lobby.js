import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import Screen from '../../../ui/components/Screen';
import RNFirebaseLogo from '../../../../assets/RNFirebase512x512.png';

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
