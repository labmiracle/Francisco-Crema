import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
}

const UseApi = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    consumeApi();
  }, []);

  const consumeApi = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h3>Ejercicio 4</h3>
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default UseApi;
