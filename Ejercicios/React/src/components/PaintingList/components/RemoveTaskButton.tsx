interface RemoveTaskButtonProps {
  onClick: () => void;
}

const RemoveTaskButton: React.FC<RemoveTaskButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Borrar</button>;
};

export default RemoveTaskButton;
