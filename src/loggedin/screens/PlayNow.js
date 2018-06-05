/**
 * @flow
 *
 * The Logged In Home screen is a simple screen indicating that the user has logged in.
 */
import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import Screen from '../../ui/components/Screen'
import { Container, Card, Button, Spinner } from '../../ui/components/common'
import Popup from '../../ui/components/Popup'
import Question from '../../ui/components/Question'
import Answers from '../../ui/components/Answers'

import API from '../../util/API'

export default class PlayNow extends Component<*> {
    constructor(props) {
        super(props)
        this.state = {
            nr: 0,
            questionAnswered: false,
            questions: [],
            question: '',
            correct_answer: [],
            incorrect_answers: [],
            gameOver: false,
            category: [],
            score: 0,
            total: 0,
        }
        this.nextQuestion = this.nextQuestion.bind(this)
        this.handleClickButton = this.handleClickButton.bind(this)
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this)
        this.handleClickButton = this.handleClickButton.bind(this)
        this.shuffle = this.shuffle.bind(this)
    }

    componentWillMount() {
        API.playNow()
            .then((res) => {
                let { nr } = this.state

                this.setState({
                    questions: res.results,
                    question: res.results[nr].question,
                    correct_answer: res.results[nr].correct_answer,
                    incorrect_answers: [res.results[nr].correct_answer, res.results[nr].incorrect_answers[0], res.results[nr].incorrect_answers[1], res.results[nr].incorrect_answers[2]],
                    total: res.results.length,
                    category: res.results[nr].category,
                    nr: this.state.nr + 1,
                })
                console.log('this.state.questions: ', this.state.questions)
                console.log('correct_answer: ', this.state.correct_answer)
                this.shuffle()
            })
            .catch((err) => console.log('catch: ', err))
    }

    shuffle() {
        console.log('first: ', this.state.incorrect_answers)

        const array = this.state.incorrect_answers

        function shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex)
              currentIndex -= 1
          
              // And swap it with the current element.
              temporaryValue = array[currentIndex]
              array[currentIndex] = array[randomIndex]
              array[randomIndex] = temporaryValue
            }
          
            return array
          }
          
          shuffle(array)

          this.setState({
              incorrect_answers: array
          })

          console.log('state: ', this.state.incorrect_answers)
    }

    nextQuestion() {
        if (this.state.nr === this.state.total) {
            this.setState({ gameOver: true, })
        } else {
            this.pushData(this.state.nr)
            this.setState({
                questionAnswered: false,
            })
            this.shuffle()
        }
    }

    pushData(nr) {
        this.setState({
            question: this.state.questions[nr].question,
            incorrect_answers: [this.state.questions[nr].correct_answer, this.state.questions[nr].incorrect_answers[0], this.state.questions[nr].incorrect_answers[1], this.state.questions[nr].incorrect_answers[2]],
            correct_answer: this.state.questions[nr].correct_answer,
            category: this.state.questions[nr].category,
            nr: this.state.nr + 1,
        })
    }

    handleClickButton() {
        this.setState({
            questionAnswered: true,
        })
    }

    handleIncreaseScore() {
        this.setState({
            score: this.state.score + 1,
        })
    }

    goBack = () => this.props.navigation.goBack()

    gameStart = () => {
        return (
            <View>
                { this.state.questions ? 
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
                        isAnswered={this.state.questionAnswered}
                        increaseScore={this.handleIncreaseScore}
                        clickButton={this.handleClickButton}
                        shuffle={this.shuffle}
                    />
                </View> 
                : <Spinner size="large" /> }
            </View>
        )
    }

    gameOver = () => {
        return (
            <View>
                <Text>Game Over</Text>
                <Text>You got {this.state.score} of {this.state.total} questions right!</Text>
                <Button text="Go Home" onPress={this.goBack} />
            </View>
        )
    }

    render() {
        return (
            <Screen>
                { this.state.gameOver ? this.gameOver() : this.gameStart() }
            </Screen>
        )
    }
}