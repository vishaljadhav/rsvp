import { RSAA } from 'redux-api-middleware';
import { API_ENDPOINT, AUTH_HEADERS } from '../../utils/constants';
import * as types from '../types';

export const creatGuest = (body) => {
    return {
        [RSAA]: {
            endpoint: API_ENDPOINT + '/guest/create',
            method: 'POST',
            headers: {
                ...AUTH_HEADERS,
            },
            body: JSON.stringify(body),
            types: [types.CREATE_GUEST_REQUEST,
            types.CREATE_GUEST_RECEIVE, {
                type: types.CREATE_GUEST_FAILURE,
                meta: (action, state, res) => {
                    return (action, state, res);
                }
            }]
        }
    }
};

export const resetCreatGuest = () => {
    return {
        type: types.RESET_CREATE_GUEST,
        payload: null
    }
};
