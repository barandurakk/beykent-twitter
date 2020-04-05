import React from 'react'
import DecideDate from './decideDate'
import history from '../../history'
import { withRouter } from 'react-router-dom'

class MyTweet extends React.Component{

    render(){
        const tweet = this.props.myTweet;
        return(
            
            <div className='tweet-wrapper event' onClick={()=>{
                history.push({
                    pathname: '/edittweet',
                    state: {tweet}
                })
            }}>
            <div className="content">
                <div className="summary">
                <strong> {tweet.email} </strong>
                <div className="date">
                    <DecideDate date={tweet.date} />
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

export default withRouter(MyTweet)