import { useState } from "react";
import List from "./List";
import InputText from "./InputText";

const ListContainer: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (remove: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== remove);
    setTasks(updatedTasks);
  };

  const editTask = (edit: number, newTask: string) => {
    const updatedTasks = [...tasks];
    updatedTasks[edit] = newTask;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h3>Agregar Tarea:</h3>
      <List tasks={tasks} removeTask={removeTask} editTask={editTask} />
      <InputText onSubmit={addTask} />
    </div>
  );
};

export default ListContainer;
