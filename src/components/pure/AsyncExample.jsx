import React from "react";

const AsyncExample = () => {
  async function generalNumber() {
    return 1;
  }

  async function generalPromiseNumber() {
    return Promise.resolve(2);
  }

  function obtainNumber() {
    generalNumber()
      .then((response) => alert(`Response ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  function obtainPromiseNumber() {
    generalPromiseNumber()
      .then((response) => alert(`Response ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`));
  }

  async function saveSessionStorage(key, value) {
    sessionStorage.setItem(key, value);
    return Promise.resolve(sessionStorage.getItem(key));
  }

  function showStorage() {
    saveSessionStorage("name", "Martin")
      .then((response) => {
        let value = response;
        alert(`Saved Name: ${value}`);
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      })
      .finally(() => console.log("SUCCESS: Name saved and retreived"));
  }

  async function obtainMessage() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Hello World!!"), 2000);
    });

    let message = await promise;

    await alert(`Messaje received: ${message}`);
  }

  const returnError = async () => {
    await Promise.reject(new Error("Oooops!"));
  };

  const consumeError = () => {
    returnError()
      .then((response) => alert(`Everithing is Ok: ${response}`))
      .catch((error) => alert(`Something went wrong: ${error}`))
      .finally(() => alert("Finally executed"));
  };

  const urlNotFound = async () => {
    try {
      let response = await fetch("https:://invalidurl.com");
      alert(`Response: ${JSON.stringify(response)}`);
    } catch (error) {
      alert(
        `Something went wrong with your URL: ${error} (check your console)`
      );
    }
  };

  const multiplePromises = async () => {
    let results = await Promise.all([
      fetch("https://regres.in/api/users"),
      fetch("https://regres.in/api/users?page=2"),
    ]).catch((error) =>
      alert(
        `Something went wrong with your URLs: ${error} (check your console)`
      )
    );
  };

  return (
    <div>
      <button onClick={obtainNumber}>Obtain Number</button>
      <button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
      <button onClick={showStorage}>Save Name and Show</button>
      <button onClick={obtainMessage}>Send message in 2 seconds</button>
      <button onClick={consumeError}>Obtain Error</button>
      <button onClick={urlNotFound}>Request to Unknown URL</button>
      <button onClick={multiplePromises}>Multiple Promises</button>
    </div>
  );
};

export default AsyncExample;
