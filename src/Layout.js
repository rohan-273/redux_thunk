import React from "react";
import HomePage from "./HomePage";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div>
        <HomePage />
        <Outlet />
    </div>
  );
}
