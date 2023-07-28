import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
}

const UseTodoApi = () => {
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

  return todos;
};

export default UseTodoApi;
