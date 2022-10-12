import React from 'react';
import './SignUpScreen.css';

const SignUpScreen = () => {
  const register = e => {
    e.preventDefault();

    console.log('REGISTRO');
  };

  const signIn = e => {
    e.preventDefault();

    console.log('HOLA');
  };

  return (
    <div className="signUpScreen">
      <form onSubmit={signIn}>
        <h1>Sign In</h1>

        <input type="email" placeholder="Email" />

        <input type="password" placeholder="Password" />

        <button type="submit">Sign In</button>

      </form>

      <h4 className="signUpScreen__bottom">
        <span className="signUpScreen__gray">New to Netflix? </span>

        <span className="signUpScreen__link" onClick={register}>Sign up now.</span>
      </h4>
    </div>
  );
};

export default SignUpScreen;