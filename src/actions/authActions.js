import firebase from 'firebase/app'
import 'firebase/auth'
import history from '../history'
export const LOGIN = 'LOGIN'
export const LOGGED_IN = 'LOGGED_IN'
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN'
export const LOG_OUT = 'LOG_OUT'
export const PASS_DONT_MATCH = 'PASS_DONT_MATCH'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'

const loginSuccess= (response, dispatch) => {
    console.log(response);
    history.push("/");
    dispatch({type: LOGIN, payload: response.user})
}

const errorMessage = (err, dispatch) =>{
    dispatch({type: ERROR_MESSAGE, payload: err.message})
}


export const login = (email, password)=>{

    return (dispatch) => {
    //firebase sorgusu
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) =>{
        loginSuccess(response, dispatch);
    })
    .catch((err)=>{
        errorMessage(err, dispatch);
    })
}
}

export const isLoggedIn = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                dispatch({
                    type: LOGGED_IN,
                    payload: user
                })
            }else{
                dispatch({type: NOT_LOGGED_IN})
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        firebase.auth().signOut()
        .then(()=>{
            dispatch({type: LOG_OUT})
        })
    }
}

export const signup = (email,password,repass) => {
    return (dispatch) => {
        if(password === repass){
        //firebase üye olma
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((response)=>{
            loginSuccess(response, dispatch)
        })
        .catch((err) =>{
            errorMessage(err, dispatch);
        });
    }else{
        dispatch({type: PASS_DONT_MATCH})
    }
    }}
