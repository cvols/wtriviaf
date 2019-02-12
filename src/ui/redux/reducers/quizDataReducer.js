// import { SAVE_QUIZ_DATA } from '../actions/quizData';

const initialState = {
    quizData: {},
}

export default (state = initialState, action) => {
  console.log('reducer running', action);

  switch (action.type) {
    case 'SAVE_QUIZ_DATA':
      return Object.assign({}, state, { quizData: action.payload });
    default:
      return state;
  }
}

const quizData = state => state.quizData;

export const Store = ({
    quizData,
});
