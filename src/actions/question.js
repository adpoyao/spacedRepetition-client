import { TOGGLE_EXAMPLE, NEXT_QUESTION, FETCH_QUESTION, FETCH_QUESTION_ERROR, FETCH_QUESTION_REQUEST, FETCH_QUESTION_SUCCESS } from './actionType';

export const toggleExample = boolean => ({
  type: TOGGLE_EXAMPLE,
  boolean
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION
});

// Sync Action
export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
})

export const fetchQuestionError = (err) => ({
  type: FETCH_QUESTION_ERROR,
  err
})

export const fetchQuestionSuccess = (data) => ({
  // type: FETCH_QUESTION_Success,
  vocab: data.vocab,
  hiragana: data.hiragana,
  katakana: data.katakana,
  romaji: data.romaji,
  example: data.example,
  correctAnswer: data.correctAnswer
})

// Async Action
// export const fetchQuestion = (data) => (dispatch, getState) => ({
  
  
// })