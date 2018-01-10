import {TOGGLE_EXAMPLE,ATTACH_QUESTIONS, EVALUATE_ANSWER, NEXT_QUESTION, NEXT_QUESTION_REQUEST, NEXT_QUESTION_ERROR, NEXT_QUESTION_SUCCESS } from '../actions/actionType';

const initialState = {
  question: null,
  resource: 'https://jisho.org/search/未来',
  showExample: false,
  questionAnswered: false,
  answeredCorrectly: null,
  loading: false,
  error: false
};

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case TOGGLE_EXAMPLE:
      return Object.assign({}, state, {
        showExample: action.boolean
      });
    case NEXT_QUESTION:
      return console.log('Pressed Next Button');
    case ATTACH_QUESTIONS:
      return Object.assign({}, state, {
        question: action.questions
      });
    case EVALUATE_ANSWER:
      return Object.assign({}, state, {
        questionAnswered: action.questionAnswered,
        answeredCorrectly: action.answeredCorrectly
      });
    case NEXT_QUESTION_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false
      });
    case NEXT_QUESTION_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });
    case NEXT_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        question: action.question
      });
  }
  return state
}