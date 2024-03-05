import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AddState() {
  const [countryName, setCountryName] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate("");

  const { loginStatus } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { country: countryName, stateTitle: state };

    axios
      .post("http://localhost:3001/api/state/", data, {
        headers: {
          Authorization: `Bearer ${loginStatus}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          navigate("/stateList");
        }
      })
      .catch((err) => {
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
