import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const history = useHistory();

  console.log("We are in Route", location.pathname); // "home"

  const navigate = (path) => {
    history.push(path);
  };

  const navigateProps = (path) => {
    history.push({
      pathname: path,
      search: "?online=true", // Query Params
      state: {
        online: true,
      },
    });
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigateProps("/online-state")}>Go to Page with State / Query Params</button>
      <button onClick={() => navigate("/profile")}>Go to Profile</button>
    </div>
  );
};

export default HomePage;
