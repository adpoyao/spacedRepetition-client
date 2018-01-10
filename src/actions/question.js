import { TOGGLE_EXAMPLE, ATTACH_QUESTIONS, EVALUATE_ANSWER, 
  NEXT_QUESTION, NEXT_QUESTION_ERROR, NEXT_QUESTION_REQUEST, 
  NEXT_QUESTION_SUCCESS } from './actionType';

export const toggleExample = boolean => ({
  type: TOGGLE_EXAMPLE,
  boolean
});

export const attachQuestions = questions => ({
  type: ATTACH_QUESTIONS,
  questions
})

export const evaluateAnswer = (questionAnswered, answeredCorrectly) => ({
  type: EVALUATE_ANSWER,
  questionAnswered,
  answeredCorrectly
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
export const nextQuestion = (user, boolean) => dispatch => {
  dispatch(nextQuestionRequest());
  return console.log('user: ', user, 'boolean: ', boolean)
};

// export const registerUser = user => dispatch => {
//   return fetch(`${API_BASE_URL}/users`, {
//       method: 'POST',
//       headers: {
//           'content-type': 'application/json'
//       },
//       body: JSON.stringify(user)
//   })
//       .then(res => normalizeResponseErrors(res))
//       .then(res => res.json())
//       // .then(res => dispatch(attachQuestions(res.questions)))
//       .catch(err => {
//           const {reason, message, location} = err;
//           if (reason === 'ValidationError') {
//               // Convert ValidationErrors into SubmissionErrors for Redux Form
//               return Promise.reject(
//                   new SubmissionError({
//                       [location]: message
//                   })
//               );
//           }
//       });