/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Question extends React.Component<*> {
    render() {
        return (
            <View>
                <View>
                    <Text style={styles.answerText}>Category: {decodeURIComponent(this.props.category)}</Text>
                    <Text style={styles.answerText}>Question # {this.props.nr} of {this.props.total}</Text>
                </View>
                <View>
                    <Text style={styles.questionText}>{decodeURIComponent(this.props.question)}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    questionText: {
        fontSize: 30,
        marginBottom: 20,
        // fontFamily: "sans-serif",
        color: "#4A4A4A"
    },
    answerText: {
        marginBottom: 6,
        fontSize: 20,
        lineHeight: 25,
        color: "#4A4A4A",
        // fontFamily: "sans-serif"
    }
})