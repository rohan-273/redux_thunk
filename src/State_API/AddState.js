import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  stateAddFailure,
  stateAddRequest,
  stateAddSuccess,
} from "../Redux/Action/stateAction";

export default function AddState() {
  const { loginStatus } = useSelector((state) => state.login);
  const navigate = useNavigate("");
  const dispatch = useDispatch();

  const [countryName, setCountryName] = useState("");
  const [state, setState] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { country: countryName, stateTitle: state };
    dispatch(stateAddRequest());
    axios
      .post("http://localhost:3001/api/state/", data, {
        headers: {
          Authorization: `Bearer ${loginStatus}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          dispatch(stateAddSuccess(res.data.data));
          navigate("/stateList");
        }
      })
      .catch((err) => {
        dispatch(stateAddFailure(err));
        console.log(err);
      });
  };
  return (
    <div>
      <div>AddState</div>
      <form onSubmit={handleSubmit}>
        <label>Country</label>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />

        <label>State Title</label>
        <input
          style={{ border: "1px solid black" }}
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
