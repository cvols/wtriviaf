import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// import store from '../../../redux/store';
import Screen from '../../../ui/components/Screen';
import Question from '../../../ui/components/Question';
import Answers from '../../../ui/components/Answers';

class Duel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nr: 0,
      isAnswered: false,
      gameOver: false,
      score: 0,
      total: 0,
      question: '',
      incorrectAnswers: [],
      correctAnswer: [],
      category: [],
      questions: [],
    }

    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
    this.increaseScore = this.increaseScore.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  componentWillMount() {
    const { quizData } = this.props;
    const { nr } = this.state;    

    this.setState({
      questions: quizData.quizData._value,
      question: quizData.quizData._value.questions[nr].question,
      correctAnswer: quizData.quizData._value.questions[nr].correct_answer,
      incorrectAnswers: [quizData.quizData._value.questions[nr].correct_answer, quizData.quizData._value.questions[nr].incorrect_answers[0], quizData.quizData._value.questions[nr].incorrect_answers[1], quizData.quizData._value.questions[nr].incorrect_answers[2]],
      total: quizData.quizData._value.questions.length,
      category: quizData.quizData._value.questions[nr].category,
      nr: this.state.nr + 1,
    }, () => {
      this.shuffle();
    });
  }

  shuffle() {
    console.log('incorrect answer: ', this.state.incorrectAnswers)
    const { incorrectAnswers } = this.state;
    const array = incorrectAnswers;

    function shuffle(array) {
      let currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
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
      this.setState({ gameOver: true });
    } else {
      this.pushData(nr);
      this.setState({ isAnswered: false });
      this.shuffle();
    }
  }

  pushData(nr) {
    const { questions } = this.state;

    this.setState({
      question: questions.questions[nr].question,
      incorrectAnswers: [questions.questions[nr].correct_answer, questions.questions[nr].incorrect_answers[0], questions.questions[nr].incorrect_answers[1], questions.questions[nr].incorrect_answers[2]],
      correctAnswer: questions.questions[nr].correct_answer,
      category: questions.questions[nr].category,
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

  gameStart() {
    const { nr, total, isAnswered, incorrectAnswers, correctAnswer, category, question, questions } = this.state;

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
          : null
        }
      </View>
    )
  }

  gameOver() {
    const { score, total } = this.state;

    return (
      <View>
        <Text>Game Over Man</Text>
        <Text>You got {score} of {total} questions right</Text>
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

const mapStateToProps = (state, props) => {
  console.log('Duel mapStateToProps', state);

  return {
    quizData: state.quizData
  }
}

export default connect(mapStateToProps, {})(Duel);

