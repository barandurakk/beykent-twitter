import React from 'react'
import './newtweet.css'
import {sendTweet, deleteTweet, updateTweet} from '../../../actions' 
import {connect} from 'react-redux'


class NewTweet extends React.Component{

    constructor(props){
        super(props);
        const tweet = props.location.state ? props.location.state.tweet : null;
        
        this.state ={
            tweet: tweet ? tweet.tweet : ''
        }
        
        this.onChange = this.onChange.bind(this);
        this.renderButtons = this.renderButtons.bind(this);
    }

    onChange(event){
        this.setState({
        [event.target.name]: event.target.value
    })
    }

    renderButtons(){
        const tweet = this.props.location.state ? this.props.location.state.tweet : null;
        
        return tweet ? (
            <div>
            <button className="ui red basic button"
                    onClick={()=>{
                    this.props.deleteTweet(tweet.uid);
                    }}>Sil</button>
            <button className="ui yellow basic button"
                    onClick={()=>{
                    this.props.updateTweet(tweet.email, tweet.date, tweet.uid, this.state.tweet);
                    }}>Güncelle</button>
            </div>
        ):(
            <div>
            <button className="ui positive basic button"
                    onClick={()=>{
                    this.props.sendTweet(this.state);
                    }}>Gönder</button>
            </div>
        )
    }

    render(){
        return(
            <div className='new-tweet-container'>
               <div className='ui form new-tweet-wrapper'>
                   <div className='field'>
                       <textarea
                       placeholder='Bir şeyler paylaş...'
                       value={this.state.tweet}
                       name='tweet'
                       onChange={this.onChange}/>
                       {this.renderButtons()}
                   </div>
               </div>
               
            </div>
            
        )
    }
}

export default connect(null, {sendTweet, deleteTweet, updateTweet})(NewTweet)