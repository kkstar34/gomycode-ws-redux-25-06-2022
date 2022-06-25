import { actionsConstants } from './../constants/actions-constants';

const initialState = {

    sucess: false,
    users: [
        {
            name : 'John',
            id : 1,
        }, 
        {
            name : 'Doe',
            id : 2,
        }, 
        {
            name : 'Karim',
            id : 3,
        }, 
    ]
};


export function userReducer(state = initialState, action){
    switch(action.type){
        case actionsConstants.DELETE_USER: {
            const userId = parseInt(action.payload);
            const index = state.users.findIndex(user => user.id === userId);
            state.users.splice(index, 1);
            return {
                ...state,
                users : [...state.users]
            };
        }
        default: return state;
    }
}