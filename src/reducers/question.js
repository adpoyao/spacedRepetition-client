import {TOGGLE_EXAMPLE } from '../actions/actionType';

const initialState = {
  vocab: '未来',
  example: 'あなたの未来に乾杯！',
  showExample: false
};

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case TOGGLE_EXAMPLE:
    return Object.assign({}, state, {
      showExample: action.boolean
    })
  }
  return state
}