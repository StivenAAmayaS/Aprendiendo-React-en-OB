import React, { useState } from "react";
import axios from "axios";

const baseAPI = axios.create({
  baseURL: "https://api.chucknorris.io",
  responseType: "json",
  timeout: 6000,
});

const getRandomJokes = () => {
  return baseAPI.get(`/jokes/random`);
};

const Exercise21 = () => {
  const [randomJokes, setRandomJokes] = useState();

  const obtainJokes = () => {
    getRandomJokes()
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          setRandomJokes(response.data.value);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };
  return (
    <div>
      <button onClick={obtainJokes} className="btn btn-success">Get Random Jokes</button>
      {randomJokes != null && (
        <div className="card mt-2 p-3" style={{ width: "350px" }}>
          <p className="m-0">{randomJokes}</p>
        </div>
      )}
    </div>
  );
};

export default Exercise21;
