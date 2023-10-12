import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormControlLabel, Checkbox, Link } from '@mui/material';
import './logins.css';
import * as FaIcons from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Loginsadmin = ({ errorMessages, loggedIn, login, loginError }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [localErrorMessages, setLocalErrorMessages] = useState({});
  const navigate = useNavigate();
  const errors = {
    email: 'Invalid username',
    password: 'Invalid password',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    // Simplified validation (you can customize this as needed)
    const isEmailValid = email.trim() !== ''; // Basic email validation
    const isPasswordValid = password.trim() !== ''; // Basic password validation

    if (isEmailValid && isPasswordValid) {
      setIsSubmitted(true);
      setEmail(email);
      login();
    } else {
      const errorMessages = {};

      if (!isEmailValid) {
        errorMessages.email = errors.email;
      }

      if (!isPasswordValid) {
        errorMessages.password = errors.password;
      }

      setLocalErrorMessages(errorMessages);
      loginError(errorMessages);
    }
  };

  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };

  const renderErrorMessage = (name) => (
    name in localErrorMessages && <div className="error">{localErrorMessages[name]}</div>
  );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-containers">
          <label>User Name</label>
          <input type="text" style={{ borderBottom: '2px solid #9c6990', borderTop: '2px solid white', borderLeft: '2px solid white', borderRight: '2px solid white' }} name="email" required />
          {renderErrorMessage('email')}
        </div>
        <br /><br />
        <div className="input-containers">
          <label>Password</label>
          <input
            type="password"
            style={{ borderBottom: '2px solid #9c6990', borderTop: '2px solid white', borderLeft: '2px solid white', borderRight: '2px solid white' }}
            className="pass1"
            name="password"
            required
          />
          {renderErrorMessage('password')}
        </div>
        <div className="checkbox-container">
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
            label="Remember me"
          />
          <Link href="Forgot Password">Forgot Password?</Link>
        </div>
        <div className="button-container">
          <input className="letin" type="submit" style={{ outline: 'none' }} value="Sign In" />
        </div>
      </form>
    </div>
  );

  const renderSuccessMessage = (
    <div>
      <div>Welcome !<h6><b>{email}</b><FaIcons.FaHandSparkles /></h6></div>
      You've Successfully logged in..
      
    </div>
  );

  return (
    <div className="app4">
      <div className="login-form">
        <div className="title">
          <b>
            <center>Login as User</center>
          </b>
        </div>
        {isSubmitted ? (
          <>
            {renderSuccessMessage}
            <h5><Link href="/home1" style={{ textDecoration: "none" }}>Next</Link><Link to="/home"><FaIcons.FaArrowRight style={{ marginLeft: "20px", color: "#9c6990" }} /></Link></h5>
          </>
        ) : (
          <>
            {renderForm}
            <br />
            <div className="dd">
              Not a member? <Link href="./signup">Register</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  errorMessages: state.errorMessages,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: 'LOGIN' }),
  loginError: (errorMessages) => dispatch({ type: 'LOGIN_ERROR', payload: errorMessages }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Loginsadmin);
