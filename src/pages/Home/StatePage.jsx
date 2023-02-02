import React from "react";
import { useLocation } from "react-router-dom";
const StatePage = () => {
  const location = useLocation();

  console.log("Location State:", location.state.online); // State sent
  console.log("Query Params:", location.search); // Query params sent

  return (
    <div>
      <h1>
        State: 
            {location.state.online ? "The user is online" : "The user is offline"}
      </h1>
    </div>
  );
};

export default StatePage;
