import {
    commonConstants
} from '../constants';

export const commonActions = {
    sendingRequest,
    initRequest,
    initResponse
};

function sendingRequest(sending) {
    return {type: commonConstants.SENDING_REQUEST, sending}
}

function initRequest(accessCode){
    return {type: commonConstants.INIT_REQUEST, accessCode: accessCode}
}

function initResponse(response) {
    return {type: commonConstants.INIT_RESPONSE, success: response.success, data: response.data}
}