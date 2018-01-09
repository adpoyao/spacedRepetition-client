import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

import { SAVE_PROGRESS_REQUEST, SAVE_PROGRESS_ERROR, SAVE_PROGRESS_SUCCESS } from './actionType';

// Sync
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

// Async
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
export const saveProgress = userData => dispatch => {
    return console.log('Saving progress');
  }
