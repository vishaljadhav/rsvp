import { combineReducers } from 'redux';

import CreateGuestReducer from './CreateGuestReducer';

const rootReducer = combineReducers({
    create_guest_reducer: CreateGuestReducer
});

export default rootReducer;