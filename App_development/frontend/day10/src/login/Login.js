import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import './loginpg.css';

const SignUp = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'It should be a valid Email address!',
      label: 'Email',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special Character!',
      label: 'Password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send data to the backend
    // For this example, we're just logging the form values
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="wrapp1">
      <div className="app1">
        <form onSubmit={handleSubmit} className="for1">
          <div className="reg">
            <h1 className="h11">Registration Form</h1>
            {inputs.map((input) => (
              <Form
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <h6 className="h111">
              Already Have An Account?{' '}
              <Link to="/login" className="loglin">
                Login
              </Link>
            </h6>
            <button className="google">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNBFaWfLGLcxy9wQ3jFfKa87DLrQ_rv7v2UQ&usqp=CAU"
                className="googleimg"
                alt="Google Logo"
              />
              Sign In with Google
            </button>
            <button className="signbttn1" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
