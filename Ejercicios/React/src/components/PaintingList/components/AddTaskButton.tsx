interface AddTaskButtonProps {
  onClick: () => void;
}

const AddTaskButton: React.FC<AddTaskButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Agregar</button>;
};

export default AddTaskButton;
