import { TOGGLE_SETTING, TOGGLE_ROMAJI, TOGGLE_HIRAGANA, TOGGLE_KATAKANA } from './actionType';

export const toggleSetting = boolean => ({
  type: TOGGLE_SETTING,
  boolean
})

export const toggleRomaji = boolean => ({
  type: TOGGLE_ROMAJI,
  boolean
})

export const toggleHiragana = boolean => ({
  type: TOGGLE_HIRAGANA,
  boolean
})

export const toggleKatakana = boolean => ({
  type: TOGGLE_KATAKANA,
  boolean
})