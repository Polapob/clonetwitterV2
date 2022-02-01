import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MouseEventHandler, useContext } from "react";
import { SignUpFormContext } from "../../../contexts/SignUpFormContext";
import StepNavbar from "../PartComponents/Common/StepNavbar";
import { Typography } from "@mui/material";
import NameInformationField from "../PartComponents/ConfirmInformationForm/NameInformationField";
import EmailInformationField from "../PartComponents/ConfirmInformationForm/EmailInformationField";
import BirthInformationField from "../PartComponents/ConfirmInformationForm/BirthInformationFiled";
import ConfirmButton from "../PartComponents/ConfirmInformationForm/ConfirmButton";

interface Props {
  decreaseIncrement: MouseEventHandler<
    HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement
  >;
  addIncrement: MouseEventHandler<HTMLButtonElement>
}

const ConfirmData = ({ decreaseIncrement, addIncrement }: Props) => {
  const classes = useStyles();
  const { day, month, year, name, email } = useContext(SignUpFormContext);
  console.log(day, month, year, name, email);
  return (
    <div className={classes.root}>
      <div className={classes.modal}>
        <StepNavbar numberState={2} decreaseIncrement={decreaseIncrement} />
        <div className={classes.container}>
          <Typography
            sx={{
              fontSize: "23px",
              fontWeight: "bold",
              color: "rgb(217, 217, 217)",
            }}
          >
            สร้างบัญชีของคุณ
          </Typography>
          <Stack
            direction="column"
            spacing={4}
            sx={{
              paddingTop: "1rem",
              marginBottom: "4.5rem",
            }}
          >
            <NameInformationField handleOnClick={decreaseIncrement} />
            <EmailInformationField handleOnClick={decreaseIncrement} />
            <BirthInformationField handleOnClick={decreaseIncrement} />
          </Stack>
          <Typography sx={{ color: "rgb(217, 217, 217)" , marginBottom:"4px" ,lineHeight:"20px",fontSize:"15px" }}>
            การสมัครนี้จะถือว่าคุณยอมรับ ข้อตกลงการให้บริการ และ
            นโยบายความเป็นส่วนตัว รวมถึง การใช้คุ้กกี้
            ผู้อื่นจะสามารถค้นหาคุณได้จากอีเมลหรือหมายเลขโทรศัพท์ หากมีการระบุ ·
            ตัวเลือกความเป็นส่วนตัว
          </Typography>
          <ConfirmButton addIncrement={ addIncrement} />
        
        </div>
      </div>
    </div>
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
    backgroundColor: "black",
    height: "650px",
    borderRadius:"16px"
  },
  container: {
    paddingTop: "0.5rem",
    paddingRight: "2rem",
    paddingLeft: "2rem",
  },
});
export default ConfirmData;
