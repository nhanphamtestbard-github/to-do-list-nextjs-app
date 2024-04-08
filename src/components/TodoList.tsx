import { TodoType } from "../App";
import { Todo } from "./Todo";

type Props = { todoList: TodoType[] };

export const TodoList = ({ todoList }: Props) => {
  return (
    <div>
      {todoList.map((todo) => {
        return <Todo name={todo.name} />;
      })}
    </div>
  );
};
