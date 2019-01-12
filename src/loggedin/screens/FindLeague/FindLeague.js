import React from 'react';
import { View, Text, Platform, TextInput } from 'react-native';
import firebase from 'react-native-firebase';
import { connect } from 'react-redux';
import { QuizData } from '../../../ui/redux/reducers/quizData';

import styles from './styles';
import { Button } from '../../../ui/components/common/Button';
import Screen from '../../../ui/components/Screen';

export default class FindLeague extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			quiz: {
				quizId: '',
				createdBy: '',
				leagueName: '',
				questions: {},
			},
			quizData: {},
		}
	};

	handleChangeText = (quizId) => this.setState({
		quiz: {
			quizId,
		}
	});

	onPress = () => {
		const { quizId } = this.state.quiz;

		firebase.database().ref('quizzes/' + quizId).once('value', (data) => {
			this.setState({
				quiz: {
					createdBy: data._value.createdBy,
					leagueId: data._value.createdId,
					leagueName: data._value.leagueName,
					questions: data._value.questions,
				},
				quizData: data,
			});
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
