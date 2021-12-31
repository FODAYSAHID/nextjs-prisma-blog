import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from "./types";


export const registerUser = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.REGISTER_SUCCESS
        })
    }
}