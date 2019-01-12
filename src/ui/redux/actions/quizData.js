export const SAVE_QUIZ_DATA = 'SAVE_QUIZ_DATA';

export const saveQuizData = quiz => ({
    type: SAVE_QUIZ_DATA,
    quiz,
});
