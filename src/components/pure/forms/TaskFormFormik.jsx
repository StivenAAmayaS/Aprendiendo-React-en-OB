import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { LEVELS } from "../../../models/levels_enum";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .max(100, "Nombre de tarea no debe ser superior a 100 caracteres")
    .required("El Nombre de tarea es requerido"),
  description: Yup.string().required(
    "Se debe agregar al menos una breve descripción"
  ),
});

const TaskFormFormik = () => {
  const initialVal = {
    name: "",
    description: "",
    level: LEVELS.NORMAL,
  };

  const styleErors = {
    color: "red",
    fontSize: "14px",
    marginBottom: "5px",
  };

  return (
    <div className="card" style={{ width: "400px" }}>
      <div className="card-header d-flex">
        <h4 className="mb-0">Create Task:</h4>
      </div>
      <Formik
        initialValues={initialVal}
        validationSchema={formSchema}
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
          <Form className="card-body d-flex flex-column align-items-start">
            <label htmlFor="task-name">Name:</label>
            <Field
              id="task-name"
              name="name"
              placeholder="'Nombre de tarea'"
              type="text"
              className="w-100"
            />
            {errors.name && touched.name && (
              <ErrorMessage
                component="div"
                name="name"
                style={styleErors}
              ></ErrorMessage>
            )}

            <label htmlFor="description">Description:</label>
            <Field
              id="description"
              name="description"
              placeholder="Aqui tu descripción"
              component="textarea"
              className="w-100"
            />
            {errors.description && touched.description && (
              <ErrorMessage
                component="div"
                name="description"
                style={styleErors}
              ></ErrorMessage>
            )}

            <div className="d-flex mt-2">
              <label htmlFor="level">Priority:</label>
              <Field id="level" name="level" component="select" className="ms-3">
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.URGENTE}>Urgent</option>
                <option value={LEVELS.BLOCKING}>Blocking</option>
              </Field>
            </div>

            <button type="submit" className="btn btn-success w-100 mt-3">
              Create New Task
            </button>

            {isSubmitting ? <p>Creating Taks</p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskFormFormik;
