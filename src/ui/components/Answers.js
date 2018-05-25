/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default class Answers extends React.Component<*> {
    constructor(props) {
        super(props)
        this.state = {
            isAnswered: false,
        }
    }

    checkAnswer = (e) => {
        if (!this.state.isAnswered) {
            console.log(e)

            const answer = e.target

            if (answer === 184) {
                console.log('that is correct')
            } else {
                console.log('that is wrong')
            }

            setTimeout(() => {
                this.props.nextQuestion()
            }, 1000)
        }
    }

    render() {
        return (
            <View>
                <View>
                    {this.props.incorrect_answers.map((answer, i) => {
                        return (
                            <TouchableOpacity key={answer} onPress={this.checkAnswer}>
                                <Text key={i}>{answer}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    <TouchableOpacity onPress={this.checkAnswer}>
                        <Text>{this.props.correct_answer}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}