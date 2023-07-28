import { useState } from "react";
import RemoveTaskButton from "./RemoveTaskButton.tsx";

interface ListItemProps {
  task: string;
  onRemove: () => void;
  onEdit: (newTask: string) => void;
}

const ListItem: React.FC<ListItemProps> = ({ task, onRemove, onEdit }) => {
  const [editing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    if (editing) {
      onEdit(editedTask);
    }
    setEditing(!editing);
  };

  return (
    <div>
      {editing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <div>{task}</div>
      )}
      <button onClick={handleEdit}>{editing ? "Guardar" : "Editar"}</button>
      <RemoveTaskButton onClick={onRemove} />
    </div>
  );
};

export default ListItem;
