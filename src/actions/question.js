import { TOGGLE_EXAMPLE, NEXT_QUESTION } from './actionType';

export const toggleExample = boolean => ({
  type: TOGGLE_EXAMPLE,
  boolean
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION
});