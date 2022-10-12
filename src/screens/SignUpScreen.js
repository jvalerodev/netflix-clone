import React, { useRef, useState } from 'react';
import './SignUpScreen.css';

import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import Alert from '../components/Alert';

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [message, setMessage] = useState('');

  const register = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userAuth => {
        console.log(userAuth);
      })
      .catch(error => {
        showAlert(error.message);
        console.error(error.message);
      });
  };

  const signIn = e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    signInWithEmailAndPassword(auth, email, password)
      .then(userAuth => {
        console.log(userAuth);
      })
      .catch(error => {
        showAlert(error.message);
        console.error(error.message);
      });
  };

  const showAlert = msg => {
    setMessage(msg);

    setTimeout(() => {
      setMessage('');
    }, 4000);
  };

  return (
    <div className="signUpScreen">
      {message && <Alert msg={message} />}

      <form onSubmit={signIn}>
        <h1>Sign In</h1>

        <input type="email" placeholder="Email" ref={emailRef} />

        <input type="password" placeholder="Password" ref={passwordRef} />

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