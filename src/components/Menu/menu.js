import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from '../../actions'

class Menu extends React.Component {

     render(){
         const {isLoggedIn} = this.props.auth;

        return isLoggedIn===true ? (
            <div className="ui secondary pointing menu">
                <Link to='/newtweet' className="item"><i className="edit icon"></i>Yeni Tweet</Link>
                <Link to='/' className="item">Tweetler</Link>
                <Link to='/mytweets' className="item" >Benim Tweetlerim </Link>
                <div className="right menu">
                    <Link to='/' className="item" 
                    onClick={()=>{
                        this.props.logout();
                    }}>
                    Çıkış Yap </Link>
                </div>
          </div>
        ) :
        (
            <div className="ui secondary pointing menu">
                <Link to='/' className="item">Tweetler</Link>
                <div className="right menu">
                    <Link to='/login' className="item" >Giriş Yap </Link>
                    <Link to='/signup' className="item" >Üye Ol </Link>
                </div>
          </div>
         )
     }

}

const mapStatetoProps=(state) =>{
    return{
        auth: state.auth
    }
}

export default connect(mapStatetoProps, {logout})(Menu);