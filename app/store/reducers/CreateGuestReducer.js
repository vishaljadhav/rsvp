import * as types from '../types';
import { setInitialState } from '../initial_state';
import { act } from 'react-test-renderer';


const INITIAL_SATE = setInitialState({
    data: null
});

export default function (state = INITIAL_SATE, action) {
    switch (action.type) {
        case types.CREATE_GUEST_REQUEST:
            return {
                ...state,
                isFetching: false
            };
        case types.CREATE_GUEST_RECEIVE:
            return {
                ...state,
                isFetching: true,
                isSuccess: true,
                data: action.payload.success
            };
        case types.CREATE_GUEST_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                data: action.payload
            };
        case types.RESET_CREATE_GUEST:
            return {
                ...state,
                isFetching: false,
                isSuccess: false,
                isError: false,
                data: null
            }
        default:
            return {
                ...state
            }
    }
}