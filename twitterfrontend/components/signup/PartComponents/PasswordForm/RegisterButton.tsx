import Button from "@mui/material/Button";
import { useContext, MouseEvent, MouseEventHandler } from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";
import apiClient from "../../../../utils/axiosClient";
import Moment from "react-moment";
import "moment-timezone";
import moment from "moment";
import { monthToIndex } from "../../../../utils/dateUtils";
import { useRouter } from 'next/router'

interface Props {
  passwordVerify: { passwordVerify: boolean; errorText: string };
}
const RegisterButton = ({ passwordVerify }: Props) => {
  const router = useRouter();
  const { password, email, day, month, year, name } =
    useContext(SignUpFormContext);
  const handleOnClick: MouseEventHandler<HTMLButtonElement> = async (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const birthDate = new Date(
      parseInt(year),
      monthToIndex[month.month] - 1,
      parseInt(day)
    );
    // console.log(moment(birthDate).format());
    const userData = {
      email,
      username: name,
      password,
      dayBirth: birthDate,
    };

    const response = await apiClient.post("/register/newuser", userData, {
      withCredentials: true,
    });
    if (response.status === 201){
      router.push('/home')
    }
  };
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
