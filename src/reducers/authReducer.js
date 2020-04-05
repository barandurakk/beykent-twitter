import {LOGIN, LOGGED_IN, LOG_OUT, PASS_DONT_MATCH, ERROR_MESSAGE} from '../actions'


const INITIAL_STATE = {
    email: '',
    isLoggedIn: false,
    display: 'hidden',
    errMessage: ''
}

export default (state = INITIAL_STATE, action) => {
    if(action.type === LOGIN || action.type === LOGGED_IN){
        return {
            email: action.payload.email,
            isLoggedIn: true,
            display: 'hidden'
        }
    }else if(action.type === LOG_OUT){
        return INITIAL_STATE;
    }else if(action.type === PASS_DONT_MATCH){
        return{
            display: ''
        }
    }else if(action.type === ERROR_MESSAGE){
        console.log('aksiyonun içindeyiz')
        return{
            display:'',
            errMessage: action.payload
        }
    }
    return state;
}