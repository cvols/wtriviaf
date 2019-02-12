// This file configures the Redux store

// 1) `redux-form` integration
// 2) Basic UI state, i.e. the loading modal
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import uiReducer from '../ui/redux/uiReducer';
import quizDataReducer from '../ui/redux/reducers/quizDataReducer';

const rootReducer = combineReducers({
  form: formReducer,
  ui: uiReducer,
  quizData: quizDataReducer,
});

// const initialState = {
//   quizData: {}
// }

// const reducer = (state = initialState, action) => {
//   console.log('reducer running', action);

//   switch (action.type) {
//     case 'SAVE_QUIZ_DATA':
//       return Object.assign({}, state, { quizData: action.payload });
//     default:
//       return state;
//   }
// }

const store = createStore(rootReducer);

// const store = createStore(reducer);

export default store;
