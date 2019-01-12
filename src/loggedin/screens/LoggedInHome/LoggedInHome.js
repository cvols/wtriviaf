import React from 'react';
import { Image, Text, View } from 'react-native';

import styles from './styles';
import Screen from '../../../ui/components/Screen';
import Button from '../../../ui/components/Button';
import API from '../../../util/API';
import RNFirebaseLogo from '../../../../assets/RNFirebase512x512.png';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quizQuestions: [],
    };
  };

  // navigation
  onCreateLeague = () => this.props.navigation.navigate('CreateLeague');

  onFindLeague = () => this.props.navigation.navigate('FindLeague');

  onPlayNow = () => this.props.navigation.navigate('PlayNow');

  render() {
    return (
      <Screen>
        <View style={styles.welcome}>
          <Image source={RNFirebaseLogo} style={styles.image} />
          <Text style={styles.welcomeText}>Logged in</Text>
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
}
