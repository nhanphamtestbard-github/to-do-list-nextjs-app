import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  newTodoString: string;
  onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleClickAddTodo: () => void;
  updateCompleted: (todoId: string) => void;
};

export const CreateNewTodo = ({
  newTodoString,
  onNewTodoChange,
  handleClickAddTodo,
}: Props) => {
  return (
    <div>
      <TextField
        size="small"
        value={newTodoString}
        onChange={onNewTodoChange}
      />
      <Button variant="contained" onClick={handleClickAddTodo}>
        Thêm
      </Button>
    </div>
  );
};
