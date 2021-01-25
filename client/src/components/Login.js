import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth"

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ','
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem("token", res.data.payload);
      props.history.push("/protected");
    })
    .catch(err => console.log(err))
  }
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            />
          <input 
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            />
            <button>Login</button>
        </form>
    </>
  );
};

export default Login;
