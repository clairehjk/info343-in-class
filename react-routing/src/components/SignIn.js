import React from 'react';

// import SignUpView from './SignUp';
import constants from './constants';
import {Link} from 'react-router-dom';

export default class SignInView extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            firstName: "",
            lastName: "",
            email: "",
            password:""
        };
    }
    handleSubmit(evt) {
        evt.preventDefault();
        console.log("creating user with credentials: %s, %s, %s, %s", 
            this.state.firstName, this.state.lastName, this.state.email, this.state.password);
        this.setState({firstName:"",lastName:"",email:"",password:""});
    }
	render() {
        return (
            <div>
                <h1>Sign In</h1>
                <form onSubmit={evt => this.handleSubmit(evt)}>
                    <div className="form-group">    
                        <label htmlFor="lastName">Email</label>
                        <input id="email" type="email" className="form-control" 
                        placeholder="enter your email" value={this.state.email}
                        onInput={evt => this.setState({email: evt.target.value})}/>    
                    </div>
                    <div className="form-group">    
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" className="form-control" 
                        placeholder="enter your last password" value={this.state.password}
                        onInput={evt => this.setState({password: evt.target.value})}/>    
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Sign In!</button>
                    </div>
                </form>
                <p>Don't yet have an account? <Link to={constants.routes.signup}>Sign Up!</Link></p>
                <p><Link to="/channels/claireChannel">Claire's Channel</Link></p>
            </div>
        );
    }   
}