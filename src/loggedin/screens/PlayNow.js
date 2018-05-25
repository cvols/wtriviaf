/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Screen from '../../ui/components/Screen'
import { Container, Card } from '../../ui/components/common'
import Popup from '../../ui/components/Popup'
import Question from '../../ui/components/Question'
import Answers from '../../ui/components/Answers'

import API from '../../util/API'

const styles = StyleSheet.create({
    questionText: {
        fontSize: 30,
        marginBottom: 20,
        fontFamily: "quicksand-light",
        color: "#4A4A4A"
    },
    answerText: {
        marginBottom: 6,
        fontSize: 20,
        lineHeight: 25,
        color: "#4A4A4A",
        fontFamily: "quicksand-regular"
    }
})

export default class PlayNow extends Component<*> {
    constructor(props){
        super(props)
        this.state = {
            nr: 0,
            questionAnswered: false,
            questions: [],
            question: '',
            correct_answer: [],
            incorrect_answers: [],
            gameOver: false,
            category: '',
            score: 0,
            total: 0,
        }
        this.nextQuestion = this.nextQuestion.bind(this)
    }

    componentWillMount() {
        API.playNow()
            .then((res) => {
                let { nr } = this.state

                this.setState({
                    questions: res.results,
                    question: res.results[nr].question,
                    correct_answer: res.results[nr].correct_answer,
                    incorrect_answers: [res.results[nr].incorrect_answers[0], res.results[nr].incorrect_answers[1], res.results[nr].incorrect_answers[2]],
                    total: res.results.length,
                    category: res.results[nr].category,
                    nr: this.state.nr + 1,
                })
                console.log('this.state.questions: ', this.state.questions)
                console.log('correct_answer: ', this.state.correct_answer)
            })
            .catch((err) => console.log('catch: ', err))
    }

    nextQuestion() {
        if (this.state.nr === this.state.total) {
            this.setState({
                gameOver: true,
            })
        } else {
            this.pushData(this.state.nr)
            this.setState({
                questionAnswered: false,
            })
        }
    }

    pushData(nr) {
        this.setState({
            question: this.state.questions[nr].question,
            incorrect_answers: [this.state.questions[nr].incorrect_answers[0], this.state.questions[nr].incorrect_answers[1], this.state.questions[nr].incorrect_answers[2]],
            correct_answer: this.state.questions[nr].correct_answer,
            nr: this.state.nr + 1,
        })
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1,
        })
        console.log('score: ', this.state.score)
    }

    render() {
        return (
            <Screen>
                <View>
                    <Question 
                        category={this.state.category}
                        nr={this.state.nr}
                        total={this.state.total}
                        question={this.state.question}
                    />
                    <Answers
                        incorrect_answers={this.state.incorrect_answers}
                        correct_answer={this.state.correct_answer}
                        nextQuestion={this.nextQuestion}
                    />
                </View>
            </Screen>
        )
    }
}