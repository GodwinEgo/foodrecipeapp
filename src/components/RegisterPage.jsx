import React, { useState } from 'react';
import firebase from './Firebase';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registration successful, handle the registered user
        const user = userCredential.user;
        // Redirect or perform additional actions
      })
      .catch((error) => {
        // Handle registration error
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
