import {
    userConstants
} from '../constants';

export const authActions = {
    loginRequest,
    loginSuccess,
    loginFailure,
    logout
};

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.email The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
function loginRequest(data) {
    return {type: userConstants.LOGIN_REQUEST, data}
}

function loginSuccess(user){
    return {type: userConstants.LOGIN_SUCCESS, user}
}

function loginFailure(error){
    return {type: userConstants.LOGIN_FAILURE, error}
}

function logout () {
    return {type: userConstants.LOGOUT}
}