import { ChangeEvent, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { CreateNewTodo } from "./components/CreateNewTodo";
import { TodoList } from "./components/TodoList";

export type TodoType = { id: string; name: string };

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>([
    { id: "1", name: "Item #1" },
    { id: "2", name: "Item #2" },
    { id: "3", name: "Item #3" },
    { id: "4", name: "Item #4" },
  ]);

  const [newTodoString, setNewTodoString] = useState("");

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const handleClickAddTodo = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
    };
    setTodoList([...todoList, newTodoItem]);
    setNewTodoString("");
  };

  return (
    <>
      <p>This is to do app</p>
      <CreateNewTodo
        newTodoString={newTodoString}
        onNewTodoChange={onNewTodoChange}
        handleClickAddTodo={handleClickAddTodo}
      />
      <TodoList todoList={todoList} />
    </>
  );
}

export default App;
