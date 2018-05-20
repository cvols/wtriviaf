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


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default class InviteFriends extends React.Component<*> {
    // Set the navigation options for `react-navigation`
    static navigationOptions = {
        headerTitle: 'Invite Friends',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <ScrollView>
            <Screen>
                <View style={styles.container}>
                    
                </View>
            </Screen>
            // </ScrollView>
        );
    }
}


// <KeyboardAvoidingView behavior={(Platform.OS === 'ios') ? 'padding' : null} enabled>
