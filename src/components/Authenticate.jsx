import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import { Message } from "semantic-ui-react";
import auth from "../modules/auth";
import { useDispatch } from "react-redux";

const Authenticate = () => {
  const [message, setMessage] = useState();
  let history = useHistory();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const response = await auth.signIn(email, password);

      if (response.data.role == "journalist") {
        dispatch({
          type: "AUTHENTICATE",
          payload: {
            authenticated: response.success,
            currentUser: response.data,
          },
        });

        history.replace({ pathname: "/" });
      } else {
        localStorage.removeItem("J-tockAuth-Storage");
        setMessage("Sorry, you don't have the necessary permission");
      }
    } catch (error) {
      debugger;
      setMessage(error.response.data.errors[0]);
    }
  };

  return (
    <>
      <LoginForm login={login} />
      {message && (
        <Message negative data-cy="message">
          <Message.Header>{message}</Message.Header>
        </Message>
      )}
    </>
  );
};

export default Authenticate;
