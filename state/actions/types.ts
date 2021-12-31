import { ActionType } from "../action-types";

export interface REGISTER_SUCCESS{
    type: ActionType.REGISTER_SUCCESS
}
export interface REGISTER_FAIL{
    type: ActionType.REGISTER_FAIL
}

export interface SET_AUTH_LOADING{
    type: ActionType.SET_AUTH_LOADING
}

export interface REMOVE_AUTH_LOADING{
    type: ActionType.REMOVE_AUTH_LOADING
}


export interface LOAD_USER_SUCCESS{
    type: ActionType.LOAD_USER_SUCCESS
}

export interface LOAD_USER_FAIL{
    type: ActionType.LOAD_USER_FAIL 
}

export type Action = REGISTER_SUCCESS | REGISTER_FAIL


/*
export const LOGIN_SUCCESS:string  = 'LOGIN_SUCCESS';
export const LOGIN_FAIL:string  = 'LOGIN_FAIL';
export const LOGOUT_SUCCESS:string  = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL:string  = 'LOGOUT_FAIL';

export const AUTHENTICATED_SUCCESS:string  = 'AUTHENTICATED_SUCCESS';
export const AUTHENTICATED_FAIL:string  = 'AUTHENTICATED_FAIL';
export const REFRESH_SUCCESS:string  = 'REFRESH_SUCCESS';
export const REFRESH_FAIL:string  = 'REFRESH_FAIL';
export const REMOVE_AUTH_LOADING:string  = 'REMOVE_AUTH_LOADING';
*/