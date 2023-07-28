import UseTodoApi from "./UseTodoApi";

const TodoList = () => {
  const todos = UseTodoApi();

  return (
    <div>
      <h3>Ejercicio 5</h3>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default TodoList;
