import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import makeStyles from "@mui/styles/makeStyles";
import Box from "@mui/system/Box";
import { MouseEventHandler,useState } from "react";
import StepNavbar from "../PartComponents/Common/StepNavbar";
import PasswordBox from "../PartComponents/PasswordForm/PasswordBox";
import RegisterButton from "../PartComponents/PasswordForm/RegisterButton";
interface Props {
  decreaseIncrement: MouseEventHandler<
    HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement
  >;
}
const PasswordForm = ({ decreaseIncrement }: Props) => {
  const [passwordVerify, setPasswordVerify] = useState<{
    passwordVerify: boolean;
    errorText: string;
  }>({ passwordVerify: true, errorText: "" });
  return (
    <Box
      sx={{
        width: "full",
        height: "full",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        border: "4px solid blue",
        background: "rgba(91, 112, 131, 0.4)",
        position: "fixed",
        inset: 0,
      }}
    >
      <Stack
        sx={{
          width: "600px",
          backgroundColor: "black",
          borderRadius: "1rem",
          position: "relative",
        }}
      >
        <StepNavbar numberState={3} decreaseIncrement={decreaseIncrement} />
        <Stack
          sx={{
            paddingLeft: "2rem",
            paddingTop: "0.5rem",
            paddingRight: "2rem",
          }}
        >
          <Typography
            sx={{
              color: "rgb(217, 217, 217)",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            คุณต้องมีรหัสผ่าน
          </Typography>
          <Typography
            sx={{
              color: "rgb(110, 118, 125)",
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            ตรวจดูให้ดีว่ามีอย่างน้อย 8 ตัวอักษร
          </Typography>
          <PasswordBox passwordVerify={passwordVerify} setPasswordVerify={setPasswordVerify} />
          <RegisterButton passwordVerify={passwordVerify} />
        </Stack>
      </Stack>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    width: "full",
    height: "full",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    border: "4px solid blue",
    background: "rgba(91, 112, 131, 0.4)",
    position: "fixed",
    inset: 0,
  },
  modal: {
    width: "600px",
    height: "650px",
    backgroundColor: "black",
    borderRadius: "16px",
  },
});

export default PasswordForm;
