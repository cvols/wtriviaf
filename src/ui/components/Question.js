/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text } from 'react-native'

export default class Question extends React.Component<*> {
    render() {
        let { category, nr, total, question } = this.props

        return (
            <View>
                <View>
                    <Text>Category: {category}</Text>
                    <Text>Question #: {nr} of {total}</Text>
                </View>
                <View>
                    <Text>{question}</Text>
                </View>
            </View>
        )
    }
}