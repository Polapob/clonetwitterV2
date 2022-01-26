import { TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";

const EmailForm = () => {
  const { setEmail } = useContext(SignUpFormContext);
  console.log("email form re-render!")
  const classes = useStyles();
  const [errorData, setErrorData] = useState<{
    isError: boolean;
    errorText: string;
  }>({ isError: false, errorText: "" });
  const [emailQuery, setEmailQuery] = useState<string>();

  const checkEmailFormat = (checkEmail: string) => {
    var validRegex =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
    if (checkEmail.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  };
  const handleEmailQuery = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    setEmailQuery(event.target.value);
  };

  useEffect(() => {
    const handleEmailChange = (email: string | undefined) => {
      if (!email || checkEmailFormat(email)) {
        setErrorData({ isError: false, errorText: "" });
        if (email) {
          setEmail(email);
        } else {
          setEmail("");
        }
      } else {
        setErrorData({ isError: true, errorText: "โปรดป้อนอีเมลที่ถูกต้อง" });
        setEmail(email);
      }
    };
    const timer = setTimeout(() => {
      handleEmailChange(emailQuery);
    }, 500);
    return () => clearTimeout(timer);
  }, [emailQuery, setEmail]);

  return (
    <TextField
      error={errorData.isError}
      id="outlined-basic"
      label="อีเมล"
      type="search"
      variant="outlined"
      helperText={errorData.errorText}
      className={classes.inputText}
      onChange={handleEmailQuery}
      sx={{
        focus: {
          border: "2px solid black",
        },
        color: "white",
        input: { color: "white" },
        label: {
          color: "rgb(133, 133, 133)",
        },
      }}
    />
  );
};
export default EmailForm;

const useStyles = makeStyles({
  inputText: {
    borderColor: "1px solid blue",
    input: {
      border: "0px solid gray",
    },
  },
});
