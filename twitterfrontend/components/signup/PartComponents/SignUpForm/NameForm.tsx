import { Stack, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";

const NameForm = () => {
  const classes = useStyles();
  const { name, setName } = useContext(SignUpFormContext);
  const [queryName, setQueryName] = useState<string>(name);
  const [errorData, setErrorData] = useState<{
    isError: boolean;
    errorText: string;
  }>({ isError: false, errorText: "" });
  const handleQueryChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    if (event.target.value.length <= 50) {
      setQueryName(event.target.value);
    }
    if (event.target.value) {
      setErrorData({ isError: false, errorText: "" });
    } else {
      setErrorData({ isError: true, errorText: "คุณชื่ออะไร" });
    }
  };

  useEffect(() => {
    const handleNameChange = (name: string | undefined) => {
      if (name) {
        setName(name);
      } else {
        setName("");
      }
    };
    const timer = setTimeout(() => {
      handleNameChange(queryName);
    }, 500);
    return () => clearTimeout(timer);
  }, [queryName, setName]);
  
  // console.log(queryName?.length);
  return (
    <Stack>
      <TextField
        className={classes.textField}
        error={errorData.isError}
        id="outlined-basic"
        label="ชื่อ"
        type="search"
        value={queryName}
        variant="outlined"
        helperText={errorData.errorText}
        onChange={handleQueryChange}
        sx={{
          input: { color: "white" },
          label: {
            color: "rgb(133, 133, 133)",
            backgroundColor: "black",
            paddingLeft:"4px",
            paddingRight:"4px"
          },
          ":focus": {
            border: "2px solid blue",
          },
        }}
      />
      <Typography
        sx={{
          color: "rgb(133, 133, 133)",
          position: "absolute",
          right: 10,
          top: 65,
          fontSize: "14px",
        }}
      >
        {queryName?.length} / 50
      </Typography>
    </Stack>
  );
};
export default NameForm;

const useStyles = makeStyles({
  textField: {
    "& .MuiInputBase-root": {
      border: "1px solid rgb(47, 51, 54)",
    },
    "& .Mui-focused": {
      border: "0px solid gray",
    },
    "& .Mui-error":{
      border: "0px solid black"
    },
    "":{
      color:"black"
    }
  },
});
