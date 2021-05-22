import React from "react";
import "./SignIn.scss";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import {signInWithGoogle} from '../../Firebase/firebase.utils';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
      e.preventDefault();
      setEmail('');
      setPassword('');
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit}>
      
        <FormInput
          type="email"
          value={email}
          onChange={handleEmail}
          className="email"
          label="Email"
          required
        />
        <FormInput
          type="password"
          value={password}
          onChange={handlePassword}
          className="password"
          label="Password"
          required
        />
        
        <CustomButton type="submit">Sign In</CustomButton>
        <CustomButton onClick={signInWithGoogle}>Sign in with Google</CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
