/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import Screen from '../../ui/components/Screen';
import Button from '../../ui/components/Button';
import API from '../../util/API';

import RNFirebaseLogo from '../../../assets/RNFirebase512x512.png';

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

export default class Home extends React.Component<*> {
  constructor(props) {
    super(props)
    this.state = {
      quizQuestions: [],
    }
  }
  render() {
    return (
      <Screen>
        <View style={styles.welcome}>
          <Image source={RNFirebaseLogo} style={styles.image} />
          <Text style={styles.welcomeText}>
            Logged in
          </Text>
          <Button
            onPress={this.onCreateLeague}
            text="Create a League"
          />
          <Button
            onPress={this.onFindLeague}
            text="Find a League"
          />
          <Button
            onPress={this.onPlayNow}
            text="Play Now"
          />
        </View>
      </Screen>
    );
  }
  /**
   * Called when the Create a Leauge button is pressed
   */
  onCreateLeague = () => this.props.navigation.navigate('CreateLeague')

  onFindLeague = () => this.props.navigation.navigate('FindLeague')

  onPlayNow = () => this.props.navigation.navigate('PlayNow') 
}
