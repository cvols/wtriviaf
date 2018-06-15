/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text, StyleSheet, Platform, TextInput } from 'react-native'

import { Button } from '../../ui/components/common/Button'

import firebase from 'react-native-firebase'

import Screen from '../../ui/components/Screen'

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

export default class FindLeague extends React.Component<*> {
    constructor(props) {
        super(props)
        this.state = {
            quizId: '',
        }
    }

    handleChangeText = (quizId) => this.setState({ quizId })

    onPress = () => {
        console.log(this.state.quizId)
        firebase.database().ref('quizzes/' + this.state.quizId).once('value', (data) => {
            console.log(data)
        })
    }

    render() {
        return (
            <Screen>
                <View>
                    <Text>Find a Leauge</Text>

                    <View style={styles.labelContainer}>
                        <View style={styles.labelBgColor}>
                            <Text style={styles.labelText}>League Name:</Text>
                            <TextInput
                                style={styles.labelInput}
                                onChangeText={this.handleChangeText}
                                underlineColorAndroid="transparent"
                                placeholder="Quiz Id..."
                                value={this.state.quizId}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button onPress={this.onPress} text="Find a League" />
                    </View>
                </View>
            </Screen>
        )
    }
}