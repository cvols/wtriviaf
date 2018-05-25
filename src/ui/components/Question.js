/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text } from 'react-native'

export default class Question extends React.Component<*> {
    render() {
        return (
            <View>
                <View>
                    <Text>Category: {this.props.category}</Text>
                    <Text>Question #: {this.props.nr} of {this.props.total}</Text>
                </View>
                <View>
                    <Text>{this.props.question}</Text>
                </View>
            </View>
        )
    }
}