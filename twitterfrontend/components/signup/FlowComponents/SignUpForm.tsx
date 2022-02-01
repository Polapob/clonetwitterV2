import { Container, Stack, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import React, { MouseEventHandler } from "react";
import MonthInputForm from "../../../components/signup/PartComponents/SignUpForm/MonthInputForm";
import EmailForm from "../../../components/signup/PartComponents/SignUpForm/EmailForm";
import NameForm from "../../../components/signup/PartComponents/SignUpForm/NameForm";
import DayInputForm from "../PartComponents/SignUpForm/DayInputForm";
import YearInputForm from "../PartComponents/SignUpForm/YearInputForm";
import NextButton from "../PartComponents/SignUpForm/NextButton";

interface Props {
  addIncrement: MouseEventHandler<HTMLButtonElement>;
}
const SignUpForm = ({ addIncrement }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.modal}>
      <Container
        disableGutters={false}
        sx={{
          width: "600px",
          justifyContent: "",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "black",
          paddingTop: "12px",
          borderRadius: "1rem",
        }}
      >
        <Grid
          container
          spacing={0}
          sx={{ marginTop: "0px", marginBottom: "1.5rem" }}
        >
          <Link href="/login" passHref>
            <Grid
              item
              xs={5}
              sx={{
                color: "rgb(217, 217, 217)",
                fontSize: "20px",
                border: "0px solid white",
                display: "flex",
                alignItems: "center",
              }}
            >
              X
            </Grid>
          </Link>

          <Grid
            item
            xs={2}
            sx={{
              border: "0px solid blue",
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <TwitterIcon
              sx={{
                color: "rgb(217, 217, 217)",
                fontSize: "34px",
                border: "",
              }}
            />
          </Grid>
        </Grid>
        <Stack
          spacing={3.5}
          sx={{ marginBottom: "45px", position: "relative" }}
        >
          <Typography
            sx={{ color: "white", fontSize: "22px", fontWeight: "bold" }}
          >
            สร้างบัญชีของคุณ
          </Typography>

          <NameForm />
          <EmailForm />
        </Stack>
        <Typography sx={{ color: "white", fontWeight: "bold" }}>
          วันเกิด
        </Typography>
        <Typography
          sx={{
            color: "rgb(133, 133, 133)",
            fontSize: "16px",
            paddingBottom: "12px",
          }}
        >
          ข้อมูลนี้จะไม่แสดงเป็นสาธารณะ โปรดยืนยันอายุ ของคุณ
          แม้ว่าบัญชีนี้จะเป็นบัญชีเกี่ยวกับธุรกิจ สัตว์เลี้ยง หรืออื่นๆ
        </Typography>
        <Stack direction="row" spacing={1} sx={{ marginBottom: "3rem" }}>
          <MonthInputForm />
          <DayInputForm />
          <YearInputForm />
        </Stack>

        <NextButton addIncrement={addIncrement} />
      </Container>
    </div>
  );
};

export default SignUpForm;

const useStyles = makeStyles({
  modal: {
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
});
