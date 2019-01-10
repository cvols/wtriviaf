import React from 'react';
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native';
import firebase from 'react-native-firebase';

import { Button } from '../../ui/components/common/Button';
import Screen from '../../ui/components/Screen';

export default class FindLeague extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quiz: {
				quizId: '',
				createdBy: '',
				leagueName: '',
				questions: {},
			}
		}
	};

	handleChangeText = (quizId) => this.setState({ quiz: { quizId } });

	onPress = () => {
		const { quizId } = this.state.quiz;

		firebase.database().ref('quizzes/' + quizId).once('value', (data) => {
			console.log('data._value', data._value.questions[0].question)
			this.setState({
				quiz: {
					createdBy: data._value.createdBy,
					leagueId: data._value.createdId,
					leagueName: data._value.leagueName,
					questions: data._value.questions,
				}
			})
		});
	}

	startQuiz = () => {
		this.props.navigation.navigate('Duel');
	}

	showFoundQuizzes = () => {
		const { createdBy, leagueId, leagueName, questions } = this.state.quiz;

		return (
			<View>
				<Text>Created By: {createdBy}</Text>
				<Text>League Name: {leagueName}</Text>

				<View>
					<Button onPress={this.startQuiz} text="Start Quiz" />
				</View>
			</View>
		)
	}

	render() {
		const { quizId, createdBy } = this.state.quiz;

		return (
			<Screen>
				<View>
					<View style={styles.labelContainer}>
						<View style={styles.labelBgColor}>
							<Text style={styles.labelText}>League Name:</Text>
							<TextInput
								style={styles.labelInput}
								onChangeText={this.handleChangeText}
								underlineColorAndroid="transparent"
								placeholder="Quiz Id..."
								value={quizId}
							/>
						</View>
					</View>

					<View style={styles.buttonContainer}>
						<Button onPress={this.onPress} text="Find a League" />
					</View>

					{createdBy ? this.showFoundQuizzes() : null}
				</View>
			</Screen>
		)
	}
}

const styles = StyleSheet.create({
	container: {
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
