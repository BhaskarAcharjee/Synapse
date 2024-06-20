import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import { signInWithRedirect, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { auth } from "../firebase";

function Login() {
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Synapse!</h2>

        <div className="login-button google" onClick={handleGoogleSignIn}>
          <GoogleOutlined /> Sign In with Google
        </div>

        <br />
        <br />

        <div className="login-button facebook" onClick={handleFacebookSignIn}>
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}

export default Login;
