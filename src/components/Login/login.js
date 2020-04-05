import React from 'react'
import './login.css'
import { connect } from 'react-redux'
import {login} from '../../actions'

class Login extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
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


        return(
            
            <div className="login-container">
                <div className="login-wrapper">

                
                <div className="ui input login-item">
                    <input type="text" 
                    placeholder="Kullanıcı Adı"
                    name='email'
                    value={this.state.email}
                    onChange={this.onChange}
                    />
                    </div>
                    <div className="ui input login-item">
                    <input type="password" 
                    placeholder="Parola"
                    name='password'
                    value={this.state.password}
                    onChange={this.onChange}/>
                    </div>
                    <button className="ui primary button login-item"
                            onClick={()=>{
                                const {email, password} = this.state;
                                this.props.login(email, password)
                            }}
                            >
                        Giriş Yap
                    </button>
                    <div className={`ui red horizontal label${this.props.auth.display}`}>{this.props.auth.errMessage}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.auth
    }
}

export default connect(mapStateToProps, {login})(Login);