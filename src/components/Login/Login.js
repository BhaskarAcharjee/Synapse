import React, { useState } from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import {
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

import "./Login.css";

function Login() {
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { username, email, password } = Object.fromEntries(formData);

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("username", "==", username));
    const querySnapshot = await getDocs(q);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", res.user.uid), {
        username,
        email,
        id: res.user.uid,
        blocked: [],
      });
      await setDoc(doc(db, "userchats", res.user.uid), { chats: [] });
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setIsLogin(true);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Synapse!</h2>
        {isLogin ? (
          <>
            <h3>Welcome back,</h3>
            <form onSubmit={handleLogin}>
              <input type="email" placeholder="Email" name="email" required />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              <button className="login-button" disabled={loading}>
                {loading ? "Signing in.." : "Sign In"}
              </button>
            </form>
            <p>
              New to Synapse?{" "}
              <span className="link" onClick={() => setIsLogin(false)}>
                Create an Account
              </span>
            </p>
          </>
        ) : (
          <>
            <h3>Create an Account</h3>
            <form onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
              />
              <input type="email" placeholder="Email" name="email" required />
              <input
                type="password"
                placeholder="Password"
                name="password"
                required
              />
              <button className="signup-button" disabled={loading}>
                {loading ? "Signing up.." : "Sign Up"}
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <span className="link" onClick={() => setIsLogin(true)}>
                Sign In
              </span>
            </p>
          </>
        )}
        <div className="social-login-buttons">
          <div className="login-button google" onClick={handleGoogleSignIn}>
            <GoogleOutlined /> Sign In with Google
          </div>
          {/* <div className="login-button facebook" onClick={handleFacebookSignIn}>
            <FacebookOutlined /> Sign In with Facebook
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Login;
