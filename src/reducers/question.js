import {TOGGLE_EXAMPLE, NEXT_QUESTION } from '../actions/actionType';

const initialState = {
  vocab: '未来',
  hiragana: 'みらい',
  katakana: 'ミライ',
  romaji: 'mirai',
  example: 'あなたの未来に乾杯！',
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
  }
  return state
}