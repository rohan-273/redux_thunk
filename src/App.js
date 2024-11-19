import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import State from "./State_API/State";
import AddState from "./State_API/AddState";
import EditState from "./State_API/EditState";
import { useSelector } from "react-redux";
import Loginpage from "./LoginPage";
import Layout from "./Layout";

function App() {
  // The useSelector hook allows access to the state stored in a Redux store
  const { loginStatus } = useSelector((state) => state.login);
  return (
    <div className="App">
      <Routes>
        <Route element={loginStatus ? <Layout /> : <Navigate to={"/login"} />}>
          <Route path="/" />
          <Route exact path="/stateList" element={<State />} />
          <Route exact path="/addState" element={<AddState />} />
          <Route exact path="/editState" element={<EditState />} />
        </Route>
        <Route path="/login" exact element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
