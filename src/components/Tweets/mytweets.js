import React from 'react'
import { connect } from 'react-redux'
import { fetchMyTweet } from '../../actions'
import MyTweet from './mytweet'


class MyTweets extends React.Component{

    componentDidMount(){
        this.props.fetchMyTweet(this.props.auth.email);
    }

    render(){
        return(
            <div className='ui feed tweets-container'>
                {this.props.myTweetList.map(myTweet => (
                    
                    <MyTweet key={myTweet.uid} myTweet={myTweet}/>
                    
                ))}
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        auth: state.auth,
        myTweetList: state.myTweetList
    }
}

export default connect(mapStateToProps, { fetchMyTweet })(MyTweets);
