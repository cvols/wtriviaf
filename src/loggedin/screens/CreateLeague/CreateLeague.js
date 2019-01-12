import React from 'react';
import {
  Image,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Picker,
  ScrollView, 
  Modal, 
  TouchableHighlight,
} from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons';

import styles from './styles';
import Screen from '../../../ui/components/Screen';
import { Button } from '../../../ui/components/common/Button';
import Icon from '../../../ui/components/Icon';
import API from '../../../util/API';
import InviteModal from '../../../ui/components/InviteModal';
import { ref, firebaseAuth } from '../../../App';

import RNFirebaseLogo from '../../../../assets/RNFirebase512x512.png';

export default class CreateLeague extends React.Component {
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
    this.inviteModal = this.inviteModal.bind(this);
  }

  componentWillMount() {
    const { categories } = this.state;

    categories.sort();
  }

  handleChangeText = leagueName => this.setState({
    leagueName,
  });

  handleChangeCategory = category => this.setState({
    category,
  });

  inviteModal = () => this.refs.inviteModal.showAddModal();

  inviteFriends = () => this.props.navigation.navigate('InviteFriends');

  onPress = () => {
    const { leagueName, category } = this.state;
    console.log('leagueName: ', leagueName, 'category: ', category);

    if (leagueName === '')
      console.log('lol, dude your shit is empty');
    // set up alert to tell user that they need to input a league name and choose a category
    else {
      API.createQuizQuestions(category)
        .then((res) => {
          console.log('res: ', res.results);

          this.setState({ questions: res.results });

          console.log('this.state.questions: ', this.state.questions);

          let authUser = firebaseAuth().currentUser;

          ref.child('quizzes/').push(
            {
              questions: res.results,
              leagueName,
              createdId: authUser.uid,
              createdBy: authUser.displayName,
            }
          ).then(() => {
            console.log("Created quiz in DB successfully");

            // this.inviteModal()
            this.inviteFriends();
          }).catch((error) => {
            console.log(error);
          })
        })
        .catch((err) => console.log('catch: ', err));
      // this.props.navigation.navigate('InviteFriends');
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

              <InviteModal ref={'inviteModal'} >

              </InviteModal>
              {/* </KeyboardAvoidingView> */}
            </View>
          </TouchableWithoutFeedback>
        </Screen>
      </ScrollView>
    );
  }
}

// <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? 'padding' : null} enabled>


