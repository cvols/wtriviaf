import { SAVE_QUIZ_DATA } from '../actions/quizData';

const initialState = {
    quizData: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_QUIZ_DATA:
            return {
                ...state,
                quizData: action.quiz,
            }

        default:
            return state;
    }
}

const quizData = state => state.quizData;

export const QuizData = ({
    quizData,
});
