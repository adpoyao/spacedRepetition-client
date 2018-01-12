import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

import { TOGGLE_EXAMPLE, ATTACH_QUESTIONS, EVALUATE_ANSWER, 
  NEXT_QUESTION, NEXT_QUESTION_ERROR, NEXT_QUESTION_REQUEST, 
  NEXT_QUESTION_SUCCESS, SELECT_ANSWER } from './actionType';

export const toggleExample = boolean => ({
  type: TOGGLE_EXAMPLE,
  boolean
});

export const attachQuestions = questions => ({
  type: ATTACH_QUESTIONS,
  questions
})

export const selectAnswer = selectedAnswer => ({
  type: SELECT_ANSWER,
  selectedAnswer
})

export const evaluateAnswer = (questionAnswered, answeredCorrectly) => ({
  type: EVALUATE_ANSWER,
  questionAnswered,
  answeredCorrectly,
})

// Sync --
export const nextQuestionRequest = () => ({
  type: NEXT_QUESTION_REQUEST,
})

export const nextQuestionError = (error) => ({
  type: NEXT_QUESTION_ERROR,
  error
})

export const nextQuestionSuccess = (question) => ({
  type: NEXT_QUESTION_SUCCESS,
  question
})

// Async --
export const nextQuestion = (username, boolean) => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/users/answer`, {
    method: 'POST',
    body: JSON.stringify({username, boolean}),
    headers: {
			'Content-Type': 'application/json', 
      'Accept': 'application/json',
      'Authorization': `Bearer ${authToken}` 
    }
  }).then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    // .then(res => console.log('after res.json', res))
    .then(question => dispatch(nextQuestionSuccess(question)))
    .catch(err => {
      dispatch(nextQuestionError(err))     
    })
};