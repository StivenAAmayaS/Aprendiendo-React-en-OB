import React from "react";
import {useHistory} from "react-router-dom"
import Button from "@mui/material/Button";
import Copyright from "../../components/pure/Copyright";

const Dashboard = () => {
  const history = useHistory()
  const logout = () => {
    history.push("/login");
  }

  return (
  <div>
    <h1>DashBoard</h1>
    <Button variant="contained" onClick={logout}>Logout</Button>
    <Copyright></Copyright>
  </div>
  );
};

export default Dashboard;
