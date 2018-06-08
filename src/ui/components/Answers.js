/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const getOverlayStyles = (isTrue, isFalse) => {
    const s = [styles.answer]

    if (isTrue) {
        s.push(styles.answerCorrect)
    } else if (isFalse) {
        s.push(styles.answerWrong)
    }

    return s
}

export default class Answers extends React.Component<*> {
    constructor(props){
        super(props)
        this.state = {
            style: {
                height: 30,
                borderRadius: 15,
                borderColor: 'black',
                borderWidth: 1,
                marginTop: 5,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 10,
                backgroundColor: 'lightskyblue',
            }
        }
    }
    
    checkAnswer = (answer, i) => {
        console.log('answer: ', answer)
        console.log('hhhhhhhhhhhhhhhhhhhhh: ', this.props.correct_answer)

        if (!this.props.isAnswered) {
            let isTrue = Boolean 
            let isFalse = Boolean

            if (answer === this.props.correct_answer) {
                isTrue = true
                isFalse = false 
                console.log('that is correct')
                this.props.increaseScore()
            } else {
                isFalse = true
                isTrue = false
                console.log('that is wrong')
            }

            // this.getOverlayStyles(isTrue, isFalse, i)
            getOverlayStyles(isTrue, isFalse, i)

            this.props.clickButton()

            setTimeout(() => {
                this.props.nextQuestion()
            }, 1000)
        }
    }

    getOverlayStyles(isTrue, isFalse, i) {
        console.log('i: ', i)
        
            if (isTrue) {
                this.setState({
                    style: {
                        height: 30,
                        borderRadius: 15,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginTop: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        backgroundColor: 'green',
                    }
                })
                console.log('HELLO ')
            } else if (isFalse) {
                this.setState({
                    style: {
                        height: 30,
                        borderRadius: 15,
                        borderColor: 'black',
                        borderWidth: 1,
                        marginTop: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingHorizontal: 10,
                        backgroundColor: 'red',
                    }
                })
                console.log('GOODBYE ')
            }
        }



    render() {
        return (
            <View>
                <View>
                    {this.props.incorrect_answers.map((answer, i) => {
                        return (
                            <TouchableOpacity key={answer} onPress={() => this.checkAnswer(answer, i)}>
                                <View style={styles.container}>
                                <View style={getOverlayStyles()}>
                                        <Text key={i} style={styles.text}>{decodeURIComponent(answer)}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    answer: {
        height: 30,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'lightskyblue',
    },
    answerCorrect: {
        backgroundColor: 'green',
    },
    answerWrong: {
        backgroundColor: 'red',
    },
})