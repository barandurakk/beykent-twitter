import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions'
import './signup.css'

class SignUp extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
            repass:''
        }
        this.onChange = this.onChange.bind(this)
    }


    onChange(event){
        this.setState({
            [event.target.name]: event.target.value
            //inputtaki name state ile aynı inputtaki value'da değeri. Tek satırla iki state'de güncelleniyor
        })
    }


    render(){

        const {display} = this.props.auth;
        return(
            <div className="signup-container">
            <div className="signup-wrapper">

            
            <div className="ui input signup-item">
                <input type="text" 
                placeholder="Kullanıcı Adı"
                name='email'
                value={this.state.email}
                onChange={this.onChange}
                />
                </div>

                <div className="ui input signup-item">
                <input type="password" 
                placeholder="Parola"
                name='password'
                value={this.state.password}
                onChange={this.onChange}/>
                </div>
                
                <div className="ui input signup-item inline field">
                <input type="password" 
                placeholder="Parola Tekrarı"
                name='repass'
                value={this.state.repass}
                onChange={this.onChange}/>
                <div className={`ui left pointing red basic label ${display}`}>
                Şifreler Uyuşmuyor
                </div>
                </div>

                <button className="ui primary button signup-item"
                        onClick={()=>{
                            const {email, password, repass} = this.state;
                            this.props.signup(email, password, repass)
                        }}
                        >
                    Üye Ol
                </button>
                <div className={`ui red horizontal label${this.props.auth.display}`}>{this.props.auth.errMessage}</div>
            </div>
        </div>
        )
    }
}

const mapStateToProps=(state) => {
return{
    auth: state.auth
}
}

export default connect(mapStateToProps, {signup})(SignUp)