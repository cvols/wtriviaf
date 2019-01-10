import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

import Screen from '../../ui/components/Screen'
import { Container, Card, Button, Spinner } from '../../ui/components/common'
import Popup from '../../ui/components/Popup'
import Question from '../../ui/components/Question'
import Answers from '../../ui/components/Answers'

import API from '../../util/API'

export default class PlayNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nr: 0,
      isAnswered: false,
      questions: [],
      question: '',
      correctAnswer: [],
      incorrectAnswers: [],
      gameOver: false,
      category: [],
      score: 0,
      total: 0,
    };
    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  componentWillMount() {
    API.playNow()
      .then((res) => {
        let { nr } = this.state;

        this.setState({
          questions: res.results,
          question: res.results[nr].question,
          correctAnswer: res.results[nr].correct_answer,
          incorrectAnswers: [res.results[nr].correct_answer, res.results[nr].incorrect_answers[0], res.results[nr].incorrect_answers[1], res.results[nr].incorrect_answers[2]],
          total: res.results.length,
          category: res.results[nr].category,
          nr: nr + 1,
        });
        console.log('this.state.questions: ', this.state.questions);
        console.log('correctAnswer: ', this.state.correctAnswer);
        this.shuffle();
      })
      .catch((err) => console.log('catch: ', err));
  }

  shuffle() {
    const { incorrectAnswers } = this.state;
    const array = incorrectAnswers;

    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

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

      return array;
    }

    shuffle(array);

    this.setState({
      incorrectAnswers: array
    });
  }

  nextQuestion() {
    const { nr, total } = this.state;

    if (nr === total) {
      this.setState({ gameOver: true, });
    } else {
      this.pushData(nr);
      this.setState({ isAnswered: false });
      this.shuffle();
    }
  }

  pushData(nr) {
    this.setState({
      question: this.state.questions[nr].question,
      incorrectAnswers: [this.state.questions[nr].correct_answer, this.state.questions[nr].incorrect_answers[0], this.state.questions[nr].incorrect_answers[1], this.state.questions[nr].incorrect_answers[2]],
      correctAnswer: this.state.questions[nr].correct_answer,
      category: this.state.questions[nr].category,
      nr: this.state.nr + 1,
    });
  }

  handleClickButton() {
    this.setState({ isAnswered: true });
  }

  increaseScore() {
    const { score } = this.state;

    this.setState({
      score: score + 1,
    });
  }

  goBack = () => this.props.navigation.goBack();

  gameStart() {
    const { questions, category, nr, total, question, incorrectAnswers, correctAnswer, isAnswered } = this.state;

    return (
      <View>
        {questions ?
          <View>
            <Question
              category={category}
              nr={nr}
              total={total}
              question={question}
            />
            <Answers
              incorrectAnswers={incorrectAnswers}
              correctAnswer={correctAnswer}
              nextQuestion={this.nextQuestion}
              isAnswered={isAnswered}
              increaseScore={this.increaseScore}
              clickButton={this.handleClickButton}
              shuffle={this.shuffle}
            />
          </View>
          : <Spinner size="large" />}
      </View>
    )
  }

  gameOver() {
    const { score, total } = this.state;

    return (
      <View>
        <Text>Game Over</Text>
        <Text>You got {score} of {total} questions right!</Text>
        <Button text="Go Home" onPress={this.goBack} />
      </View>
    )
  }

  render() {
    const { gameOver } = this.state;

    return (
      <Screen>
        {gameOver ? this.gameOver() : this.gameStart()}
      </Screen>
    )
  }
}