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
import Button from 'react-native-button';

import Screen from '../../ui/components/Screen';


export default class InviteFriends extends React.Component {
	goHome = () => this.props.navigation.navigate('LoggedInHome');

	render() {
		return (
			<Screen>
				<View style={styles.container}>
					<Text>List of Friends</Text>
					<View style={styles.buttonContainer}>
						<Button
							containerStyle={styles.containerButton}
							style={styles.button}
							onPress={this.goHome}
						>
							Home
            </Button>
						<Button
							containerStyle={styles.containerButton}
							style={styles.button}
							onPress={() => console.log('invite friends')}
						>
							Invite Friends
            </Button>
					</View>
				</View>
			</Screen>
		);
	}
}

// <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? 'padding' : null} enabled>

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'tomato'
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',

	},
	containerButton: {
		padding: 8,
		height: 40,
		borderRadius: 6,
		backgroundColor: 'mediumseagreen',
	},
	button: {
		fontSize: 18,
		color: 'white',
	},
});
