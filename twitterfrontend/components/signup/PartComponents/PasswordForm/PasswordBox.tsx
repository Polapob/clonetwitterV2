import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import { Icon, IconButton, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import {
  MouseEventHandler,
  useContext,
  useState,
  useEffect,
  ChangeEvent,
  ChangeEventHandler,
  SetStateAction,
  Dispatch,
} from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";

const CustomizedTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border: 1px solid rgb(133, 133, 133);
  }
  & .Mui-error {
    border: 0px;
  }
  & .Mui-focused {
    border: 0px solid white;
  }
  & .MuiOutlinedInput-input {
    width: 88%;
  }
`;
interface Props {
  passwordVerify: { passwordVerify: boolean; errorText: string };
  setPasswordVerify: Dispatch<SetStateAction<{ passwordVerify: boolean; errorText: string }>>;
}
const PasswordBox = ({passwordVerify,setPasswordVerify}:Props) => {
  const { setPassword } = useContext(SignUpFormContext);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [passwordType, setPasswordType] = useState<string>("");

  const handleVisibleChange: MouseEventHandler<HTMLButtonElement> = () => {
    setVisible(!isVisible);
  };

  const handlePasswordChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event && event.target && event.target.value) {
      setPasswordType(event.target.value);
    } else {
      setPasswordType("");
    }
  };
  useEffect(() => {
    const verifyPassword = (text: string) => {
      const passwordRegex =
        /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,32}$/;
      if (text.length <= 8) {
        setPasswordVerify({
          passwordVerify: false,
          errorText:
            "รหัสผ่านของคุณต้องมีความยาวอย่างน้อย 8 ตัวอักษร โปรดป้อนรหัสผ่านที่ยาวกว่านี้",
        });
      } else if (!text.match(passwordRegex)) {
        setPasswordVerify({
          passwordVerify: false,
          errorText: "โปรดป้อนรหัสผ่านที่คาดเดาได้ยากกว่านี้",
        });
      } else {
        setPasswordVerify({ passwordVerify: true, errorText: "" });
      }
    };
    const lazyPassword = setTimeout(() => {
      if (passwordType) {
        setPassword(passwordType);
        verifyPassword(passwordType);
      }
    }, 500);
    return () => {
      clearTimeout(lazyPassword);
    };
  }, [setPassword, passwordType,setPasswordVerify]);

  return (
    <Stack
      spacing={2}
      sx={{
        width: "full",
        display: "flex",
        flexDirection: "row",
        alignItems: "end",
        position: "relative",
      }}
    >
      <CustomizedTextField
        type={isVisible ? "search" : "password"}
        label="รหัสผ่าน"
        variant="outlined"
        id="validation-outlined-input"
        fullWidth
        error={!passwordVerify.passwordVerify}
        helperText={passwordVerify.errorText}
        onChange={handlePasswordChange}
        sx={{
          label: {
            color: "rgb(133, 133, 133)",
            backgroundColor: "black",
          },
          input: {
            color: "white",
            // maxWidth:"95%",
            //border:"2px solid white"
          },
          marginTop: "1rem",
        }}
      />
      <IconButton
        sx={{
          position: "absolute",
          right: "4px",
          bottom: passwordVerify.passwordVerify ? "4px" : "28px",
        }}
        onClick={handleVisibleChange}
      >
        {isVisible ? (
          <VisibilityOffIcon
            sx={{
              color: "white",
              border: "0px solid gray",
              fontSize: "24px",
            }}
          />
        ) : (
          <VisibilityIcon
            sx={{
              color: "white",
              border: "0px solid gray",
              fontSize: "24px",
            }}
          />
        )}
      </IconButton>
    </Stack>
  );
};
export default PasswordBox;
