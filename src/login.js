import { connect } from 'react-redux';
import React, { Component } from 'react';
import userActions from './userActions';
import './App.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };

        // this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const {name,value} = e.target;
        this.setState({
            [name]:value
        });
    }
   
    handleSubmit(){
        const {username,password} = this.state;
       
        if(username === "Luke Skywalker" && password === "19BBY"){
            this.props.history.push("/mainPage");            
           localStorage.setItem("status",true);  // localStorage being used to manage session
            this.props.login(true);
        }
        else{
            this.setState({valid:false});
        }
    }
    render(){
       return(
        <div>
            <ul className='loginContainer'>
            <li><input name="username" type="text" onChange = {this.handleChange.bind(this)} placeholder="username"/> </li>
            <li><input name="password" type="text" onChange = {this.handleChange.bind(this)} placeholder="password"/> </li>
            <li><button  onClick={this.handleSubmit}> login </button></li>
            </ul>
            {!(this.state.valid) && <p className="error">Invalid username and password</p>}
        </div> 
       )
    }
}

function mapStateToProps(state){
    const {username,password} = state;
    return{
        username,
        password
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: (status) =>
          dispatch({
            type: 'LOGIN',
            data:status
          })
      }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);