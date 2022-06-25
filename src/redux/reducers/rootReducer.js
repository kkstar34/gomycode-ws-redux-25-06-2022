import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { postReducer } from './postReducer';

export const rootReducer = combineReducers({
    postReducer: postReducer,
    userReducer : userReducer
})