import { TOGGLE_EXAMPLE, NEXT_QUESTION, ATTACH_QUESTIONS } from './actionType';

export const toggleExample = boolean => ({
  type: TOGGLE_EXAMPLE,
  boolean
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION
});

export const attachQuestions = questions => ({
  type: ATTACH_QUESTIONS,
  questions
})