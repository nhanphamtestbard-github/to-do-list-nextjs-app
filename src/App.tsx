import { ChangeEvent, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { CreateNewTodo } from "./components/CreateNewTodo";
import { TodoList } from "./components/TodoList";

export type TodoType = { id: string; name: string; isCompeleted: boolean };

function App() {
  const [todoList, setTodoList] = useState<TodoType[]>(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todoList") ?? "[]");
    if (savedTodoList?.length) {
      return savedTodoList;
    }
    return [];
  });

  const [newTodoString, setNewTodoString] = useState("");
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onNewTodoChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodoString(e.target.value);
  };

  const handleClickAddTodo = () => {
    const newTodoItem: TodoType = {
      id: uuidv4(),
      name: newTodoString,
      isCompeleted: false,
    };
    setTodoList([newTodoItem, ...todoList]);
    setNewTodoString("");
  };

  const updateCompleted = (todoId: string) => {
    setTodoList((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, isCompeleted: !todo.isCompeleted };
        }
        return todo;
      });
    });
  };

  return (
    <>
      <p>This is to do app</p>
      <CreateNewTodo
        newTodoString={newTodoString}
        onNewTodoChange={onNewTodoChange}
        handleClickAddTodo={handleClickAddTodo}
        updateCompleted={updateCompleted}
      />
      <TodoList todoList={todoList} updateCompleted={updateCompleted} />
    </>
  );
}

export default App;
