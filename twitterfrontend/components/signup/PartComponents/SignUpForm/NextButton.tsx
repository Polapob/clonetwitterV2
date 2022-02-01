import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext, useEffect, useState, MouseEventHandler } from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";
import { checkEmailFormat } from "../../../../utils/emailUtils";

interface Props {
  addIncrement: MouseEventHandler<HTMLButtonElement>;
}
const NextButton = ({ addIncrement }: Props) => {
  const { name, email, day, month, year } = useContext(SignUpFormContext);
  const [disable, setDisable] = useState<boolean>(true);
  const classes = useStyles();
  useEffect(() => {
    if (
      name === "" ||
      email === "" ||
      day === "" ||
      month.month === "" ||
      year === ""
    ) {
      setDisable(true);
    } else if (!checkEmailFormat(email)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [name, email, day, month, year]);
  return (
    <Button
      className={classes.button}
      disabled={disable}
      onClick={addIncrement}
      sx={{
        ":hover": {
          backgroundColor: "rgb(215, 219, 220)",
        },
        marginBottom: "3rem",
        borderRadius: "1.5rem",
        paddingTop: "0.65rem",
        paddingBottom: "0.65rem",
        backgroundColor: "rgb(239, 243, 244)",
        color: "black",
        fontWeight: "bold",
        fontSize: "15px",
        ":disabled": {
          // backgroundColor: "rgb(215, 219, 220)",
          color: "black",
          backgroundColor: "rgb(119, 121, 122)",
        },
      }}
    >
      ถัดไป
    </Button>
  );
};

const useStyles = makeStyles({
  button: {
    "& .MuiButton-root": {
      backgroundColor: "red",
      border: "2px solid blue",
      color: "green",
    },
    "& .Mui-disabled": {
      color: "black",
      backgroundColor: "blue",
    },
  },
});

export default NextButton;
