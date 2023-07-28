import ABchange from "./ABchange";
import Actualizar from "./Actualizar";
import Desmontar from "./Desmontar";
import TodoList from "./TodoList";
import UseApi from "./UseApi";

function Hooks() {
  return (
    <>
      <ABchange />
      <Desmontar />
      <Actualizar />
      <UseApi />
      <TodoList />
    </>
  );
}

export default Hooks;
