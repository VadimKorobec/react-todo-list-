import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import { addTask } from "../../redux/tasksSlice";
import css from "./TaskForm.module.css";

let schema = yup.object().shape({
  title: yup.string().required(),
  text: yup.string().required(),
});

const initialValues = {
  title: "",
  text: "",
};

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <Field
            className={css.field}
            type="text"
            name="title"
            placeholder="Enter task title..."
          />
          <ErrorMessage name="title" component="div" />
          <Field
            className={css.field}
            type="text"
            name="text"
            placeholder="Enter task text..."
          />
          <ErrorMessage name="text" component="div" />
          <Button variant="primary" type="submit">
            create Task
          </Button>
        </Form>
      </Formik>
    </>
  );
};
