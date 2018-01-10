// import { FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR, FETCH_QUESTIONS_REQUEST,
//   ATTACH_QUESTIONS, ATTACH_QUESTIONS_ERROR, ATTACH_QUESTIONS_REQUEST, ATTACH_QUESTIONS_SUCCESS } from '../actions/actionType';

// const initialState = {
//   userQuestions: null,
//   loading: false,
//   error: false
// };

// export const reducer = (state=initialState, action) => {
//   switch(action.type){
//     case FETCH_QUESTIONS_REQUEST:
//     case ATTACH_QUESTIONS_REQUEST:
//     return Object.assign({}, state, {
//       loading: true,
//       error: false
//     });
//     case FETCH_QUESTIONS_ERROR:
//     case ATTACH_QUESTIONS_ERROR:
//     return Object.assign({}, state, {
//       loading: false,
//       // TODO: expand on this error
//       error: true
//     })
//     case FETCH_QUESTIONS_SUCCESS:
//     return Object.assign({}, state, {
//       userQuestions: action.data
//     })
//   }
//   return state
// }