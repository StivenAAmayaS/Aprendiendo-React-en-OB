import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  login,
  getAllUsers,
  getAllPagedUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from "../../services/axiosCRUDService";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const AxiosCRUDExample = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const authUser = (values) => {
    // login("eve.holt@reqres.in", "cityslicka")
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token) {
          alert(JSON.stringify(response.data.token));
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failure!!");
        }
      })
      .catch((error) => {
        console.log(`Something went wrong: ${error}`);
        sessionStorage.removeItem("token");
      })
      .finally(() => {
        console.log("Login done!!");
      });
  };

  //   CRUD Examples
  const obtainAllUsers = () => {
    getAllUsers()
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error("No users found");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

  const obtainAllPagedUsers = (page) => {
    getAllPagedUsers(page)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error(`No users found in page ${page}`);
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          alert(JSON.stringify(response.data.data));
        } else {
          throw new Error("User not found");
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  const createNewUser = (name, job) => {
    createUser(name, job)
      .then((response) => {
        if (response.data && response.status === 201) {
          alert(JSON.stringify(response.data));
        } else {
          throw new Error("User not created");
        }
      })
      .catch((error) => {
        alert(`Something went wrong: ${error}`);
      });
  };

  const updateUser = (id, name, job) => {
    updateUserById(id, name, job)
      .then((response) => {
        if (response.data && response.status === 200) {
          alert(JSON.stringify(response.data));
        } else {
          throw new Error("User not found & no update done");
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  const deleteUser = (id) => {
    deleteUserById(id)
      .then((response) => {
        if (response.status === 204) {
          alert(`User with id: ${id} successfully deleted`);
        } else {
          throw new Error("User not found & no update done");
        }
      })
      .catch((error) => {
        alert(`Something went wrong ${error}`);
      });
  };

  return (
    <div className="card d-flex flex-column gap-2" style={{ width: "400px" }}>
      <div className="card-header">
        <h4>Login Form</h4>
      </div>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          authUser(values);
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form className="card-body d-flex flex-column align-items-start">
            <label htmlFor="email">Email:</label>

            <Field
              id="email"
              name="email"
              placeholder="example@email.com"
              type="email"
              className="w-100"
            />

            {/* email errors */}
            {errors.email && touched.email && (
              <ErrorMessage
                component="div"
                name="email"
                style={{ color: "red", fontSize: "14px" }}
              ></ErrorMessage>
            )}

            <label htmlFor="password">Password:</label>

            <Field
              id="password"
              name="password"
              placeholder="YourPassword123"
              type="password"
              className="w-100"
            />

            {/* password errors */}

            {errors.password && touched.password && (
              <ErrorMessage
                component="div"
                name="password"
                style={{ color: "red", fontSize: "14px" }}
              ></ErrorMessage>
            )}

            <button type="submit" className="btn btn-success w-100 mt-3">
              Login
            </button>

            {isSubmitting ? <p>Login your credentials...</p> : null}
          </Form>
        )}
      </Formik>
      {/* Example buttons to test API responses */}
      <div className="card-footer">
        <button onClick={obtainAllUsers} className="btn btn-info m-1">
          Get All Users with Axios
        </button>
        <button
          onClick={() => obtainAllPagedUsers(1)}
          className="btn btn-primary m-1"
        >
          Get All User (Page 1) with Axios
        </button>
        <button onClick={() => obtainUserById(1)} className="btn btn-secondary m-1">
          Get User 1
        </button>
        <button
          onClick={() => createNewUser("morpheus", "leader")}
          className="btn btn-success m-1"
        >
          Create User
        </button>
        <button
          onClick={() => updateUser(1, "morpheus", "developer")}
          className="btn btn-warning m-1"
        >
          Update User
        </button>
        <button onClick={() => deleteUser(1)} className="btn btn-danger m-1">Delete User</button>
      </div>
    </div>
  );
};

export default AxiosCRUDExample;
