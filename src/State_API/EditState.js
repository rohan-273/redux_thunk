import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditState() {
  const [countryName, setCountryName] = useState("");
  const [state, setState] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { loginStatus } = useSelector((state) => state.login);

  const handleUpdate = (e) => {
    e.preventDefault();
    let data = { country: countryName, stateTitle: state };

    axios
      .put(`http://localhost:3001/api/state/${location.state._id}`, data, {
        headers: {
          Authorization: `Bearer ${loginStatus}`,
        },
      })
      .then((res) => {
        console.log(res, "resEdit");
        navigate("/stateList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (location.state) {
      setCountryName(location.state.country);
      setState(location.state.stateTitle);
    }
  }, [location.state]);
  return (
    <div>
      <div>EditState</div>
      <form onSubmit={handleUpdate}>
        <label>Country</label>
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
          style={{border: "1px solid black"}}
        />
        <label>State Title</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{border: "1px solid black"}}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
