import { useDispatch } from "react-redux";

import { MdClose } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { deleteTask, changeTask, toggleCompleted } from "../../redux/actions";

import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleChange = () => {
    dispatch(changeTask(task.id));
  };

  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button onClick={handleChange} className={css.btn}>
        <BsPencil size={20} />
      </button>
      <button onClick={handleDelete} className={css.btn}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
