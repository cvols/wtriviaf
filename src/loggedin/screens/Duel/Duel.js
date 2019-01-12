import React from 'react';
import { View, Text } from 'react-native';

export default class Duel extends React.Component {
	render() {
		console.log('Duel this.props: ', this.props);
		return (
			<View>
				<Text>Duel</Text>
			</View>
		)
	}
}