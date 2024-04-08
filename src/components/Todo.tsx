import { Button } from "@mui/material";

export const Todo = ({ name }: { name: string }) => {
  return (
    <Button style={{ justifyContent: "start" }} fullWidth={true}>
      {name}
    </Button>
  );
};
