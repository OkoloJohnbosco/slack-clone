import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { motion } from "framer-motion";
import logo from "./slack-logo.svg";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [, dispatch] = useStateValue();
  const loginUser = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <motion.div
        className="login__inner"
        initial={{ opactity: 0, y: "200px" }}
        animate={{ opactity: 1, y: 0 }}
      >
        <div className="login__image">
          <img alt="slack" src={logo} />
        </div>
        <h1>Sign in to your workspace</h1>
        <h4>Enter your workspace’s Slack URL</h4>
        <div className="login__button">
          <Button fullWidth onClick={loginUser}>
            <h3>Sign in with Google</h3>
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
