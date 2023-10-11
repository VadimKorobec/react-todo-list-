import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import { BsPencil } from "react-icons/bs";
import { deleteTask, toggleCompleted } from "../../redux/tasksSlice";
import css from "./Task.module.css";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteTask(task.id));

  const handleToggle = () => dispatch(toggleCompleted(task.id));

  const handleChange = () => dispatch()

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleChange} >
        <BsPencil size={20} />
      </button>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
