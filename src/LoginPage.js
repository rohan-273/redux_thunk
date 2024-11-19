import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginRequestAction,
  loginRequestFail,
  loginRequestSucess,
} from "./Redux/Action/authAction";
import axios from "axios";

export default function Loginpage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    let data = { email: email, password: password };
    dispatch(loginRequestAction());
    axios
      .post("http://localhost:3001/api/noAuth/users/login", data)
      .then((res) => {
        if (res.status === 200) {
          navigate("/stateList");
          dispatch(loginRequestSucess(res.data.data));          
        }
      })
      .catch((err) => {
        dispatch(loginRequestFail(err));
        console.log(err);
      });
  }
  return (
    <div className="center">
      {/* <div>
        <h1>SwachhBharat </h1>
      </div> */}
      <form className="container " onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
