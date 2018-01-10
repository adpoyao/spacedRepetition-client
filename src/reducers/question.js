import {TOGGLE_EXAMPLE, NEXT_QUESTION, ATTACH_QUESTIONS } from '../actions/actionType';

const initialState = {
  questions: null,
  vocab: '未来',
  hiragana: 'みらい',
  katakana: 'ミライ',
  romaji: 'mirai',
  example: 'あなたの未来に乾杯！',
  correctAnswer: 'future',
  resource: 'https://jisho.org/search/未来',
  showExample: false
};

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case TOGGLE_EXAMPLE:
    return Object.assign({}, state, {
      showExample: action.boolean
    });
    case NEXT_QUESTION:
    console.log('Pressed Next Button');
    case ATTACH_QUESTIONS:
    return Object.assign({}, state, {
      questions: action.questions
    });
  }
  return state
}