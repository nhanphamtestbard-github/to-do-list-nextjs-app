import { TodoType } from "../App";
import { Todo } from "./Todo";

type Props = {
  todoList: TodoType[];
  updateCompleted: (todoId: string) => void;
};

export const TodoList = ({ todoList, updateCompleted }: Props) => {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <Todo
            key={todo.id}
            name={todo.name}
            isCompeleted={todo.isCompeleted}
            updateCompleted={updateCompleted}
            todoId={todo.id}
          />
        );
      })}
    </div>
  );
};
