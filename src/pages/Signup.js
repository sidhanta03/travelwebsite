import React, { useState } from 'react';
import './Signup.css';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,signOut} from 'firebase/auth';

const Signup = () => {
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User signed up:', user);
      // You may want to redirect the user or perform additional actions here
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      const user = userCredential.user;
      console.log('User signed in with Google:', user);
      // You may want to redirect the user or perform additional actions here
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };


  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />

        <label>Password:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />

        <button type="submit">Sign Up</button>
      </form>

      <div className="or-divider">or</div>

      <button className="google-signin-btn" onClick={handleGoogleSignIn}>
        Sign In with Google
      </button>

      <div className="sign-out">
        <button onClick={handleSignOut}>Sign Out</button>
      </div>

    </div>
  );
};

export default Signup;

