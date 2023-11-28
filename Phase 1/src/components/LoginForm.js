import React, { Component } from 'react';
import { Button } from './Button';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    // Add your login logic here, e.g., make an API request
  }

  render() {
    return (
      <div className='login-container'>
        <video className="video-background" autoPlay loop muted>
          <source src="/videos/video-3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='login-form'>
          <form onSubmit={this.handleSubmit}>
            <h1 className='form-header'>Login</h1>

            <input
              type='text'
              name='username'
              placeholder='Email'
              value={this.state.username}
              onChange={this.handleInputChange}
            />

            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleInputChange}
            />

            <button id='loginPageButton' type='submit'>Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginForm;
