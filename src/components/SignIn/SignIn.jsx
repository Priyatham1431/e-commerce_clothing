import React from "react";
import "./SignIn.scss";
import { useState } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../Firebase/firebase.utils";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log("Error at signInEmail");
    }
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
        <p>
          New User? <Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
