import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Answers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: null,
    };
  };

  checkAnswer = (answer, i) => {
    const { correctAnswer, isAnswered, increaseScore, clickButton, nextQuestion } = this.props;
  
    console.log('user answer: ', answer);
    console.log('this.props.correctAnswer: ', correctAnswer);
    console.log('this.props: ', this.props);
    console.log('this.props.isAnswered: ', isAnswered);

    let correct = false;

    if (answer === correctAnswer) {
      console.log('that is correct');

      correct = true;

      increaseScore();
    }

    this.setState({
      bgColor: {
        index: i,
        correct,
      }
    });

    clickButton();

    setTimeout(() => {
      this.setState({ 
        bgColor: null,
      });
      nextQuestion();
    }, 1000);
  };

  render() {
    const { bgColor } = this.state;
    const { incorrectAnswers } = this.props;

    return (
      <View>
        {incorrectAnswers.map((answer, i) => {
          let style = styles.answer;
          console.log('bgColor: ', {bgColor, i});

          if (bgColor && bgColor.index === i) {
            console.log('isTrue');
            style = bgColor.correct ? styles.answerCorrect : styles.answerWrong;
          }

          console.log('style: ', style);

          return (
            <TouchableOpacity key={answer} onPress={() => this.checkAnswer(answer, i)}>
              <View style={styles.container}>
                <View style={style}>
                  <Text key={i} style={styles.text}>{decodeURIComponent(answer)}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }
};

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
    backgroundColor: 'orange',
  },
  answerCorrect: {
    height: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'green',
  },
  answerWrong: {
    height: 30,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'red',
  },
});
