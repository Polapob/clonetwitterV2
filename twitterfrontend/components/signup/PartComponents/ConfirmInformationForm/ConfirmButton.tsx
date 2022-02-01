import { Button } from "@mui/material";
import { MouseEventHandler } from "react";

interface Props {
  addIncrement: MouseEventHandler<HTMLButtonElement>;
}

const ConfirmButton = ({addIncrement}:Props) => {
  return (
    <Button
      onClick={addIncrement}
      fullWidth
      sx={{
        ":hover": {
          backgroundColor: "rgb(215, 219, 220)",
        },
        
        marginBottom: "3rem",
        borderRadius: "1.8rem",
        marginTop: "0.75rem",
        paddingTop: "0.73rem",
        paddingBottom: "0.73rem",
        backgroundColor: "rgb(239, 243, 244)",
        color: "black",
        fontWeight: "bold",
        fontSize: "17px",
        ":disabled": {
          // backgroundColor: "rgb(215, 219, 220)",
          color: "black",
          backgroundColor: "rgb(119, 121, 122)",
        },
      }}
    >
      สมัคร
    </Button>
  );
};

export default ConfirmButton;
