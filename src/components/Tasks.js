import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} onDelete={onDelete} onToggleReminder={onToggleReminder} key={task.id}></Task>
      ))}
    </>
  );
};

export default Tasks;
