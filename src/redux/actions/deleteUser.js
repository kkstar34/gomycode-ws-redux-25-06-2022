import { actionsConstants } from './../constants/actions-constants';

export const deleteUser = (id) => {
    return {
        type : actionsConstants.DELETE_USER,
        payload : id
    }
}