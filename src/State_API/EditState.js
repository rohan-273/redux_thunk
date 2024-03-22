import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  stateEditFailure,
  stateEditRequest,
  stateEditSuccess,
} from "../Redux/Action/stateAction";

export default function EditState() {
  const { loginStatus } = useSelector((state) => state.login);  
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const [countryName, setCountryName] = useState("");
  const [state, setState] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    let data = { country: countryName, stateTitle: state };
    dispatch(stateEditRequest());
    axios
      .put(`http://localhost:3001/api/state/${location.state._id}`, data, {
        headers: {
          Authorization: `Bearer ${loginStatus}`,
        },
      })
      .then((res) => {
        dispatch(stateEditSuccess(res.data.data));
        navigate("/stateList");
      })
      .catch((err) => {
        dispatch(stateEditFailure(err));
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
          style={{ border: "1px solid black" }}
        />
        <label>State Title</label>
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          style={{ border: "1px solid black" }}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
