import {combineReducers} from 'redux';
import AuthReducer from './authReducer';
import TweetListReducer from './tweetListReducer'
import myTweetListReducer from './myTweetListReducer';

export default combineReducers({
    auth: AuthReducer,
    tweetList: TweetListReducer,
    myTweetList: myTweetListReducer
});

