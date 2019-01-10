import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native'

export default class Question extends React.Component {
	static propTypes = {
		category: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.array,
		]),
		nr: PropTypes.number,
		total: PropTypes.number,
		question: PropTypes.string,
	}

	render() {
		const { category, nr, total, question } = this.props;

		return (
			<View>
				<View>
					<Text style={styles.answerText}>Category: {decodeURIComponent(category)}</Text>
					<Text style={styles.answerText}>Question # {nr} of {total}</Text>
				</View>
				<View>
					<Text style={styles.questionText}>{decodeURIComponent(question)}</Text>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	questionText: {
		fontSize: 30,
		marginBottom: 20,
		color: "#4A4A4A"
	},
	answerText: {
		marginBottom: 6,
		fontSize: 20,
		lineHeight: 25,
		color: "#4A4A4A",
	}
})