/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const AUTH_TOKEN_KEY = 'auth-token';
export const AUTH_KEY = 'auth';
export const LOGIN_INIT = 'app/auth/LOGIN_INIT';
export const LOGIN_REQUEST = 'app/auth/LOGIN_REQUEST';
export const LOGIN_FAIL = 'app/auth/LOGIN_FAIL';
export const LOGIN_SUCCEEDED = 'app/auth/LOGIN_SUCCEEDED';
export const LOGOUT = 'app/auth/LOGOUT';
export const CHECK_LOGIN = 'app/auth/CHECK_LOGIN';
