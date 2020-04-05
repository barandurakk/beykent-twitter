import React from 'react'
import './tweets.css'
import DecideDate from './decideDate'

class Tweet extends React.Component{



    render(){
        const tweet = this.props.tweet;
        return(
            <div className='tweet-wrapper event'>
            <div className="content">
                <div className="summary">
                <strong> {tweet.email} </strong>
                <div className="date">
                <DecideDate date={tweet.date}/>
                </div>
                </div>
                <div className="extra text">
                {tweet.tweet}
                </div>
          </div>
          </div>
        )
    }
}

export default Tweet;