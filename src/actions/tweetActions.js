import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import _ from 'lodash'
import history from '../history'

const SEND_TWEET = 'SEND_TWEET';
const DELETE_TWEET = 'DELETE_TWEET';
const UPDATE_TWEET = 'UPDATE_TWEET';
export const FETCH_ALL_TWEETS = 'FETCH_ALL_TWEETS';
export const FETCH_MY_TWEETS = 'FETCH_MY_TWEETS';
const REF_DATABASE = '/tweets';

export const sendTweet = ({tweet}) => {
    return dispatch => {
        const email = firebase.auth().currentUser.email;
        const date = new Date().toString();

        firebase.database().ref(REF_DATABASE)
        .push({email, date, tweet})
        .then(()=>{
            history.push("/");
            dispatch({ type: SEND_TWEET })
        })
    }
}

export const deleteTweet = (uid) => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE + '/' + uid)
        .remove().then(()=>{
            history.push('/');
            dispatch({type: DELETE_TWEET})
        })
    }
}

export const updateTweet = (email, date, uid, tweet) => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE + '/' + uid)
        .set({tweet, date, email})
        .then(()=> {
            history.push('/');
            dispatch({type: UPDATE_TWEET});
        })
    }
}

export const fetchAllTweet = () => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE)
        .on('value', snapshot => {
            const result = _.map(snapshot.val(),(val, uid)=>{
                return {...val, uid};
            }).sort((a,b)=>a-b)
            dispatch({type: FETCH_ALL_TWEETS, payload:result})
        })
    }
}

export const fetchMyTweet = (email) => {
    return dispatch => {
        firebase.database().ref(REF_DATABASE)
        .orderByChild('email').equalTo(email)
        .on('value', snapshot => {
            const result = _.map(snapshot.val(),(val, uid)=>{
                return {...val, uid};
            }).sort((a,b)=>a-b)
            dispatch({type: FETCH_MY_TWEETS, payload:result})
        })
    }
}


