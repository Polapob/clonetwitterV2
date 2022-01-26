import { Stack, TextField, Typography } from "@mui/material";
import {
  ChangeEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";

const NameForm = () => {
  const {name,setName} = useContext(SignUpFormContext);
  const [queryName, setQueryName] = useState<string | undefined>("");
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
          },
        }}
      ></TextField>
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
