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
} from 'react-native';
import Button from 'react-native-button';

import styles from './styles';
import Screen from '../../../ui/components/Screen';


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
