import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signuppg.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [selectedRole, setSelectedRole] = useState('USER');
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, email, password }));

    // Removed backend API call
    // Instead, you can perform any client-side actions here, like form validation and navigation.
    if (Object.keys(errors).length === 0) {
      setName('');
      setEmail('');
      setPassword('');
      setSelectedRole('USER');
      navigate('/');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Username is required';
    }

    if (values.email.trim() === '') {
      errors.email = 'Email is required';
    }

    if (values.password.trim() === '') {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  return (
    <>
      <div className='login'>
        <center>
          <form className='login_form' onSubmit={handleSubmit}>
            <br />
            <h1>Register</h1>
            <div className='gogo'>
              <div className='gogo'>
                <br />
                <label htmlFor='nm'>Username</label>
                <br />
                <input
                  type='name'
                  className='in'
                  placeholder='username'
                  value={name}
                  id='nm'
                  onChange={handleName}
                  required
                />
              </div>
              <span className='span'>{errors.name}</span>
            </div>
            <div className="gogo">
              <div className='gogo'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='in'
                  placeholder='email'
                  id='email'
                  value={email}
                  onChange={handleEmail}
                  required
                />
              </div>
            </div>
            {errors.email && <span className='span'>{errors.email}</span>}
            <div className='loginbox'>
              <div className="gogo">
                <div className='gogo'>
                  <label htmlFor='pwd'>Password</label>
                  <input
                    type='password'
                    className='in'
                    placeholder='password'
                    id='pwd'
                    value={password}
                    onChange={handlePassword}
                    required
                  />
                </div>
                {errors.password && <span>{errors.password}</span>}
              </div>
            </div>
            <div className='loginbox'>
              <div className="chec23">
                <div className='gogo'>
                  <label htmlFor='role'>Role</label>
                  <select
                    name='role'
                    id='role'
                    value={selectedRole}
                    onChange={handleRoleChange}
                  >
                    <option value='USER'>USER</option>
                    <option value='TEAM_LEADER'>TEAM LEADER</option>
                    <option value='TEAM_MEMBER'>TEAM MEMBER</option>
                  </select>
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='btn btn-secondary'
              style={{
                background: 'black',
                color: 'white',
                width: 180,
                height: 50,
                margin: 40,
              }}
            >
              Sign Up
            </button>
          </form>
        </center>
      </div>
    </>
  );
};

export default SignUp;