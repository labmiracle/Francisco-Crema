import ListItem from "./ListItem";

interface ListProps {
  tasks: string[];
  removeTask: (index: number) => void;
  editTask: (index: number, newTask: string) => void;
}

const List: React.FC<ListProps> = ({ tasks, removeTask, editTask }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <ListItem
          key={index}
          task={task}
          onRemove={() => removeTask(index)}
          onEdit={(newTask) => editTask(index, newTask)}
        />
      ))}
    </div>
  );
};

export default List;
