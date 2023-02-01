import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Models:
import { ROLES } from "../../../models/roles_enum";
import { User } from "../../../models/user_class";

const RegisterFormik = () => {
  let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "",
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username too short")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password too short")
      .required("Password is required"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "¡Passwords must match!"
        ),
      })
      .required("You must confirm the password"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "Your must select a Role: User / Admin")
      .required("Role is Required"),
  });

  const submit = (value) => {
    alert("Register user");
  };
  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
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
          <Form>
            <label htmlFor="username">Username:</label>
            <Field
              id="username"
              type="text"
              name="username"
              placeholder="Your username"
            />
            {errors.username && touched.username && (
              <ErrorMessage name="username" component="div"></ErrorMessage>
            )}

            <label htmlFor="email">Email:</label>
            <Field
              id="email"
              type="email"
              name="email"
              placeholder="youremail@example.com"
            />
            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">Password:</label>
            <Field
              id="password"
              type="password"
              name="password"
              placeholder="yourpassword***"
            />
            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            <label htmlFor="confirm">Confirm:</label>
            <Field
              id="confirm"
              type="password"
              name="confirm"
              placeholder="yourpassword***"
            />
            {errors.confirm && touched.confirm && (
              <ErrorMessage name="confirm" component="div"></ErrorMessage>
            )}

            <button type="submit">Register Account</button>
            {isSubmitting ? <p>Sending your credentials...</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterFormik;
