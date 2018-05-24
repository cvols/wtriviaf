/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text } from 'react-native'

export default class Popup extends React.Component<*> {
    constructor(props) {
        super(props)
        this.state = {
            time: 'start',
            title: 'Play Now',
            text: 'Select the correct answers from a list of random questions!',
            buttonText: 'Start now',
            id: '',
        }
        this.popupHandle = this.popupHandle.bind(this)
    }

    popupHandle() {
        let { time } = this.state

        if (time === 'start') {
            this.setState({
                time: 'end',
                title: 'Congratulations',
                buttonText: 'Return to the home page',
            })
            this.props.startQuiz()
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.total === 0) {
            this.setState({
                text: 'Good Luck!',
            })
        } else {
            this.setState({
                text: 'You got ' + this.props.score + ' out of ' + this.props.total + ' questions right!',
            })
        }
        console.log('score: ', this.props.score)
    }

    render() {
        let { title, text, buttonText } = this.state
        let { style, endQuiz, saveScore } = this.props

        return (
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}