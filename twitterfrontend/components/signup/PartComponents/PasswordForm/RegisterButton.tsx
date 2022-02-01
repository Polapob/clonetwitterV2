import Button from "@mui/material/Button";
import { useContext, MouseEvent, MouseEventHandler } from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";
import apiClient from "../../../../utils/axiosClient";

interface Props {
  passwordVerify: { passwordVerify: boolean; errorText: string };
}
const RegisterButton = ({ passwordVerify }: Props) => {
  const { password } = useContext(SignUpFormContext);
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = (
    event: MouseEvent<HTMLButtonElement>
  ) => {};
  return (
    <Button
      onClick={handleOnClick}
      disabled={!passwordVerify.passwordVerify || !password}
      sx={{
        backgroundColor: "white",
        borderRadius: "24px",
        color: "black",
        paddingTop: "8px",
        fontWeight: "bold",
        fontSize: "16px",
        marginTop: "21rem",
        marginBottom: "3rem",
        paddingBottom: "8px",
        ":hover": {
          backgroundColor: "rgb(217,221,222)",
          color: "black",
        },
        ":disabled": {
          color: "black",
          backgroundColor: "rgb(119, 121, 122)",
        },
      }}
      fullWidth
    >
      สมัคร
    </Button>
  );
};
export default RegisterButton;
