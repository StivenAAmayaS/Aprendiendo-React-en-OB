export const getAllUsers = async () => {
  let response = await fetch("https://reqres.in/api/users");
  // return response;

  console.log("Response:", response);
  console.log("Status:", response.status);
  console.log("OK?:", response.ok);
  // We pass the json
  return response.json();
};

export const getAllPageUsers = async (page) => {
  let response = await fetch(`https://reqres.in/api/users?page=${page}`);
  console.log("Response:", response);
  console.log("Status:", response.status);
  console.log("OK?:", response.ok);
  return response.json();
};

export const getUserDetails = async (id) => {
  let response = await fetch(`https://reqres.in/api/users/${id}`);
  console.log("Response:", response);
  console.log("Status:", response.status);
  console.log("OK?:", response.ok);
  return response.json();
};
