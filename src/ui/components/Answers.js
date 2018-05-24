/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text } from 'react-native'

export default class Answers extends React.Component<*> {
    render() {
        let { incorrect_answers, correct_answer } = this.props

        return (
            <View>
                <View>
                    {incorrect_answers.map((answer, i) => {
                        return <Text key={i}>{answer}</Text>
                    })}
                    <Text>{correct_answer}</Text>
                </View>
            </View>
        )
    }
}