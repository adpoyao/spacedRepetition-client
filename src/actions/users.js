import {SubmissionError, reset} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

import { 
    SAVE_PROGRESS_REQUEST, SAVE_PROGRESS_ERROR, SAVE_PROGRESS_SUCCESS, 
    FETCH_QUESTIONS, FETCH_QUESTIONS_SUCCESS, FETCH_QUESTIONS_ERROR, FETCH_QUESTIONS_REQUEST,
    ATTACH_QUESTIONS, ATTACH_QUESTIONS_ERROR, ATTACH_QUESTIONS_REQUEST, ATTACH_QUESTIONS_SUCCESS
} from './actionType';

// Sync --

// Save Progress
export const saveProgressRequest = () => ({
	type: SAVE_PROGRESS_REQUEST
});
export const saveProgressError = error => ({
	type: SAVE_PROGRESS_ERROR,
	error
});
export const saveProgressSuccess = () => ({
	type: SAVE_PROGRESS_SUCCESS,
});

// Fetch Questions
export const fetchQuestionsRequest = () => ({
    type: FETCH_QUESTIONS_REQUEST
});
export const fetchQuestionsError = (error) => ({
    type: FETCH_QUESTIONS_ERROR
});
export const fetchQuestionsSuccess = (data) => ({
    type: FETCH_QUESTIONS_SUCCESS,
    data
});

// Attach Questions
export const attachQuestionsRequest = () => ({
    type: ATTACH_QUESTIONS_REQUEST
});
export const attachQuestionsError = (error) => ({
    type: ATTACH_QUESTIONS_ERROR,
    error
});
export const attachQuestionsSuccess = (data) => ({
    type: ATTACH_QUESTIONS_SUCCESS,
    data
});

// Async --
export const registerUser = user => dispatch => {
    return fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

// Asyn

export const fetchQuestions = () => dispatch => {
    dispatch(fetchQuestionsRequest());
    // return console.log('Fetching questions from mlab')
    // return fetch(`${API_BASE_URL}/questions`)
    // .then(res => res.json())
    // .then(data => console.log(data));
}

export const saveProgress = userData => dispatch => {
    return console.log('Saving progress');
}