import { useDispatch } from "react-redux";
import { Formik,Form,Field } from 'formik';
import Button from 'react-bootstrap/Button';
import { addTask } from "../../redux/tasksSlice";
import css from "./TaskForm.module.css";

const initialValues ={
  title:'',
  text:'',
}

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values,{resetForm}) => {
   console.log(values)
   
   resetForm()
  };

  return (
    <>
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    <Form className={css.form} >
      <Field
        className={css.field}
        type="text"
        name="title"
        placeholder="Enter task title..."
      />
      <Field
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button variant="primary" type="submit">
        create Task
      </Button>
    </Form>
    </Formik>
    
    </>
  );
};
