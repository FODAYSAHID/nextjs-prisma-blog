import { ActionType } from '../action-types';
import {Action} from '../actions/types';

export const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    register_success: false
}

type State = typeof initialState

export const authReducer = (state: State = initialState, action: Action) => {

    switch(action.type){
        case ActionType.REGISTER_SUCCESS:
            return {
                ...state,
                register_success: true
            }
        case ActionType.REGISTER_FAIL:
            return {
                ...state,
            }
        default:
            return state;
    }
}