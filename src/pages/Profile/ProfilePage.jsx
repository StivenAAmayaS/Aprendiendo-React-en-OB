import React from "react";
import { useHistory } from "react-router-dom";

const ProfilePage = ({ user }) => {
  const history = useHistory();

  const navigate = (path) => {
    history.push(path);
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Your Porfile</h1>
      <button onClick={goBack}>Go Back</button>
      <button onClick={() => navigate("/tasks")}></button>
    </div>
  );
};

export default ProfilePage;
