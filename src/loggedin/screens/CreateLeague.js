/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Picker,
} from 'react-native';

import Screen from '../../ui/components/Screen';

import { Button } from '../../ui/components/common/Button';
import Icon from '../../ui/components/Icon';

import RNFirebaseLogo from '../../../assets/RNFirebase512x512.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'purple',
    // margin: 20,
  },
  container2: {
    flex: 1,
  },
  labelContainer: {
    backgroundColor: 'lightskyblue',
  },
  labelBgColor: {
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 4,
  },
  labelText: {
    flex: 2,
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 20,
    color: 'black',
  },
  labelInput: {
    flex: 3,
    fontSize: 14,
    color: 'black',
  },
  pickerBgColor: {
    flexDirection: 'column',
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 4,
  },
  pickerText: {
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 20,
  },
  pickerInput: {
    marginTop: -50,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'column',
  },
  iconContainer: {
    height: 5,
    width: 12,
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
});

export default class CreateLeague extends React.Component<*> {
  // Set the navigation options for `react-navigation`
  static navigationOptions = {
    headerTitle: 'Create a League',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      topic: '',
      fee: 0,
      topics: ['Basketball', 'Animated Movies', 'Baseball', 'Action Movies', 'Chemistry', 'Bible', 'Canada', 'Biology', 'Football', 'Greek Mythology', 'Movie Quotes', 'Hip Hop Music', 'Literature', "Music Quiz 1970's", "Music Quiz Pre 1960's", 'Number Ones', 'Movie Trivia', 'Physics', 'Rock Music', 'Science', 'TV Commercial', 'Sports', 'TV Trivia Cartoons', 'Random Trivia', 'TV Trivia', 'US Civil War', "TV Trivia 1990's", 'Vocabulary - I', 'Who Sings It (Country)', 'World History', 'US Presidents', 'Vampire', 'Vocabulary - II', 'Vocabulary - III', "Who Sings It (2000's)"]
    }
  }

  componentWillMount() {
    this.state.topics.sort()
  }

  handleChangeText = (text) => {
    this.setState({
      text: text,
    })
  }

  handleChangeTopic = (topic) => {
    this.setState({
      topic: topic,
    })
  }

  handleChangeFee = (fee) => {
    this.setState({
      fee: fee,
    })
  }

  render() {
    return (
      // <ScrollView>
        <Screen>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
              <KeyboardAvoidingView behavior="position">
                <View style={styles.labelContainer}>
                  <View style={styles.labelBgColor}>
                    <Text style={styles.labelText}>League Name:</Text>
                    <TextInput
                      style={styles.labelInput}
                      onChangeText={this.handleChangeText}
                      underlineColorAndroid="transparent"
                      placeholder="League name..."
                      value={this.state.text}
                    />
                  </View>
                </View>
                <View style={styles.labelContainer}>
                  <View style={styles.pickerBgColor}>
                    <Text style={styles.pickerText}>Topic:</Text>
                    <Picker
                      style={styles.pickerInput}
                      selectedValue={this.state.topic}
                      onValueChange={this.handleChangeTopic}
                    >
                      {this.state.topics.map((topic, i) => {
                        return <Picker.Item key={i} label={topic} value={topic} />
                      })}
                    </Picker>
                  </View>
                </View>
                <View style={styles.labelContainer}>
                  <View style={styles.labelBgColor}>
                    <Text style={styles.labelText}>League Fee:</Text>
                    <TextInput
                      style={styles.labelInput}
                      onChangeFee={this.handleChangeFee}
                      underlineColorAndroid="transparent"
                      placeholder="Fee to enter league"
                      value={this.state.fee}
                      keyboardType="numeric"
                      keyboardAppearance='dark'
                    />
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <Button>
                    <View style={styles.iconContainer}>
                      <Icon name="md-add" style={styles.icon} />
                    </View>
                    Create League
              </Button>
                </View>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </Screen>
      // </ScrollView>
    );
  }
}


// <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? 'padding' : null} enabled>
