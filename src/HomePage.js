import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginRequestFail } from "./Redux/Action/authAction";

export default function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout() {
    navigate("/login");    
    dispatch(loginRequestFail());
  }
  return (
    <div>            
      <Link
        className="navbar-brand "
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </Link>
    </div>
  );
}
