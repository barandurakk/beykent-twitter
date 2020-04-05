import React from 'react'
import { connect } from 'react-redux'
import { fetchAllTweet } from '../../actions'
import Tweet from './tweet'
import './tweets.css'

class Tweets extends React.Component{

    componentDidMount(){
        this.props.fetchAllTweet();
    }

    render(){
        return(
            <div className='ui feed tweets-container'>
                {this.props.tweetList.map(tweet =>(
                    <Tweet key={tweet.uid} tweet={tweet}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        tweetList: state.tweetList
    }
}

export default connect(mapStateToProps, { fetchAllTweet })(Tweets);