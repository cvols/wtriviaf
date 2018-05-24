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
  ScrollView,
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

import Screen from '../../ui/components/Screen';
import { Button } from '../../ui/components/common/Button';
import Icon from '../../ui/components/Icon';
import API from '../../util/API';

import RNFirebaseLogo from '../../../assets/RNFirebase512x512.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'purple',
    // margin: 20,
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
  pickerLabel: {
    fontSize: 14,
    paddingLeft: 10,
    paddingVertical: 20,
  },
  pickerInput: {
    marginTop: (Platform.OS === 'ios') ? -50 : 5,
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
    color: 'black',
  },
});

export default class CreateLeague extends React.Component<*> {
  constructor(props) {
    super(props);
    this.state = {
      leagueName: '',
      category: '',
      difficulty: '',
      questions: [],
      // fee: 0,
      categories: ['General Knowledge', 'Books', 'Film', 'Music', 'Musicals & Theatres', 'Television', 'Video Games', 'Board Games', 'Science & Nature', 'Computers', 'Mathematics', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Comics', 'Gadgets', 'Japanese Anime & Manga', 'Cartoons & Animations'],
      difficulties: ['Easy', 'Medium', 'Hard'],
    }
  }

  componentWillMount() {
    this.state.categories.sort()
  }

  handleChangeText = (leagueName) => this.setState({ leagueName })

  handleChangeCategory = (category) => this.setState({ category })

  onPress = () => {
    console.log('leagueName: ', this.state.leagueName, 'category: ', this.state.category, 'difficulty: ', this.state.difficulty)

    if (this.state.leagueName === '')
      console.log('lol, dude your shit is empty')
    // set up alert to tell user that they need to input a league name and choose a category
    else {
      API.createQuizQuestions(this.state.category)
        .then((res) => {
          console.log('res: ', res)
          this.setState({
            questions: res.results,
          })
          console.log('this.state.questions: ', this.state.questions)
        })
        .catch((err) => console.log('catch: ', err))
      // this.props.navigation.navigate('InviteFriends')
    }
  }

  render() {
    return (
      <ScrollView>
        <Screen>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
              {/* <KeyboardAvoidingView behavior="position"> */}

              <View style={styles.labelContainer}>
                <View style={styles.labelBgColor}>
                  <Text style={styles.labelText}>League Name:</Text>
                  <TextInput
                    style={styles.labelInput}
                    onChangeText={this.handleChangeText}
                    underlineColorAndroid="transparent"
                    placeholder="League name..."
                    value={this.state.leagueName}
                  />
                </View>
              </View>

              <View style={styles.labelContainer}>
                <View style={styles.pickerBgColor}>
                  <Text style={styles.pickerLabel}>Category:</Text>
                  <Picker style={styles.pickerInput}
                    selectedValue={this.state.category}
                    onValueChange={this.handleChangeCategory}
                  >
                    {this.state.categories.map((category, i) => {
                      return <Picker.Item key={i} label={category} value={category} />
                    })}
                  </Picker>
                </View>
              </View>

              {/* <View style={styles.labelContainer}>
                <View style={styles.pickerBgColor}>
                  <Text style={styles.pickerLabel}>Difficulty:</Text>
                  <Picker style={styles.pickerInput}
                    selectedValue={this.state.difficulty}
                    onValueChange={this.handleChangeDifficulty}
                  >
                    {this.state.difficulties.map((difficulty, i) => {
                      return <Picker.Item key={i} label={difficulty} value={difficulty} />
                    })}
                  </Picker>
                </View>
              </View> */}

              {/* <View style={styles.labelContainer}>
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
              </View> */}

              <View style={styles.buttonContainer}>
                <Button onPress={this.onPress} text="Create a League" />
              </View>
              {/* </KeyboardAvoidingView> */}
            </View>
          </TouchableWithoutFeedback>
        </Screen>
      </ScrollView>
    );
  }
}


// <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? 'padding' : null} enabled>
