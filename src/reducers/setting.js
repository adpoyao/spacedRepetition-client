import { TOGGLE_SETTING, TOGGLE_ROMAJI, TOGGLE_HIRAGANA, TOGGLE_KATAKANA } from '../actions/actionType';

const initialState = {
  showSetting: false,
  showRomaji: false,
  showHiragana: true,
  showKatakana: false
};

export const reducer = (state=initialState, action) => {
  switch(action.type){
    case TOGGLE_SETTING:
      return Object.assign({}, state, {
        showSetting: action.boolean
      });
    case TOGGLE_ROMAJI:
      return Object.assign({}, state, {
        showRomaji: action.boolean
      });
      case TOGGLE_HIRAGANA:
      return Object.assign({}, state, {
        showHiragana: action.boolean
      });
      case TOGGLE_KATAKANA:
      return Object.assign({}, state, {
        showKatakana: action.boolean
      });
  }
  return state
}