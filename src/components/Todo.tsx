import { CheckBoxOutlineBlank } from "@mui/icons-material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { Button } from "@mui/material";

const Icon = ({
  isCompeleted,
  updateCompleted,
  todoId,
}: {
  isCompeleted: boolean;
  updateCompleted: (todoId: string) => void;
  todoId: string;
}) => {
  return (
    <div onClick={() => updateCompleted(todoId)}>
      {isCompeleted ? <CheckBoxIcon /> : <CheckBoxOutlineBlank />}
    </div>
  );
};

export const Todo = ({
  name,
  isCompeleted,
  updateCompleted,
  todoId,
}: {
  name: string;
  isCompeleted: boolean;
  updateCompleted: (todoId: string) => void;
  todoId: string;
}) => {
  return (
    <Button
      style={{ justifyContent: "space-between" }}
      fullWidth={true}
      endIcon={
        <Icon
          isCompeleted={isCompeleted}
          updateCompleted={updateCompleted}
          todoId={todoId}
        />
      }
    >
      {name}
    </Button>
  );
};
