import axios from "axios";

/**
 * Login Method to Reqres endpoint
 * @param {string} email
 * @param {string} password
 */

export const login = (email, password) => {
  let body = {
    email,
    password,
  };

  // Return the response with a Promise
  return axios.post("https://reqres.in/api/login", body);
};

// Obtain all Users
export const getAllUsers = () => {
  return axios.get("https://reqres.in/api/users");
};

// Obtain All paged users
export const getAllPagedUsers = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};

// Obtain User by ID
export const getUserById = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
};

// Create User
export const createUser = (name, job) => {
  let body = {
    name,
    job,
  };
  return axios.post("https://reqres.in/api/users", body);
};

// Update User
export const updateUserById = (id, name, job) => {
  let body = {
    name,
    job,
  };
  return axios.put(`https://reqres.in/api/users/${id}`, body);
};

// Delete User
export const deleteUserById = (id) => {
  return axios.delete(`https://reqres.in/api/users/${id}`);
};