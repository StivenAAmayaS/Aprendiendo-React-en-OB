import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };
  return (
    <div className="card d-flex flex-column gap-2" style={{ width: "400px" }}>
      <div className="card-header">
        <h4>Login Form</h4>
      </div>
      <Formik
        // *** Initial values that the form will take *** //
        initialValues={initialCredentials}
        //
        // *** Yup validation Schema *** //
        validationSchema={loginSchema}
        //
        // *** onSubmit Event *** //
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          localStorage.setItem("credentials", values);
        }}
      >
        {/* We obtain props from Formik */}

        {/* ------------------------------------------------------- */}

        {({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
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

            {isSubmitting ? <p>Login yout credentials...</p> : null}
          </Form>
        )}

        {/* ------------------------------------------------------- */}

        {/* 
        {(props) => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
          } = props;

          return (
            <Form className="card-body d-flex flex-column align-items-start">
              <label htmlFor="email">Email:</label>
              <Field
                id="email"
                name="email"
                placeholder="example@email.com"
                type="email"
                className="w-100"
              />

              // email errors
              {errors.email && touched.email && (
                <div
                  className="error"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  <p>{errors.email}</p>
                </div>
              )}
              <label htmlFor="password">Password:</label>
              <Field
                id="password"
                name="password"
                placeholder="YourPassword123"
                type="password"
                className="w-100"
              />

              // password errors
              
              {errors.password && touched.password && (
                <div
                  className="error"
                  style={{ color: "red", fontSize: "14px" }}
                >
                  <p>{errors.password}</p>
                </div>
              )}

              <button type="submit" className="btn btn-success w-100 mt-3">
                Login
              </button>
              {isSubmitting ? <p>Login yout credentials...</p> : null}
            </Form>
          );
        }}*/}
      </Formik>
    </div>
  );
};

export default LoginFormik;
