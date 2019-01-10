import React, { Component } from 'react';
import { Text, TouchableHighlight, View, StyleSheet, Platform, Dimensions, Alert } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

let screen = Dimensions.get('window');

export default class InviteModal extends Component {
    showAddModal = () => {
        this.refs.myModal.open();
    }

    closeModal = () => {
        this.refs.myModal.close();
    }

    render() {
        return (
            <Modal
                ref={'myModal'}
                style={styles.myModal}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // Alert.alert(
                    //     'Alert Title',
                    //     'My Alert msg',
                    //     [
                    //         { text: 'Ask me later' },
                    //         { text: 'Ask me sooner' },
                    //         { text: 'Ask me now' },
                    //     ],
                    //     { cancelable: false }
                    // )
                    // alert('ask me now')
                }}
            >
                <Text style={styles.text}>Congrats! You've just created a Quiz.  Send to your friends or return back home.</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        containerStyle={styles.containerButton}
                        style={styles.button}
                        onPress={() => {
                            this.closeModal()
                        }}>
                        Home
                    </Button>
                    <Button
                        containerStyle={styles.containerButton}
                        style={styles.button}
                        onPress={() => {
                            console.log('invite friends')
                        }}>
                        Invite Friends
                    </Button>
                </View>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    myModal: {
        justifyContent: 'center',
        borderRadius: Platform.OS === 'ios' ? 30 : 0,
        shadowRadius: 10,
        width: screen.width - 80,
        height: 280,
    },
    text: {
        height: 60,
        borderBottomColor: 'gray',
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
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
