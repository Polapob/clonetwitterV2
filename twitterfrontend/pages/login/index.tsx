import { Box, Container, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Divider from "@mui/material/Divider";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const Login = () => {


  return (
    <div>
      <div
        style={{
          width: "75vw",
          margin: "auto",
          paddingTop: "2.5rem",
          paddingBottom: "2.5rem",
        }}
      >
        <Stack spacing={4}>
          <Image
            src="/images/icons/twitter_black.svg"
            alt="twitter"
            width={160}
            height={160}
          />
          <Typography variant="h2" gutterBottom component="div" align="center">
            กำลังเกิดขึ้นตอนนี้
          </Typography>
          <Typography variant="h4" gutterBottom component="div" align="center">
            เข้าร่วมทวิตเตอร์วันนี้
          </Typography>
          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
           
            <Button
              sx={{
                borderRadius: 32,
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
                border: "1px solid #2196f3",
                textTransform: "capitalize",
              }}
              startIcon={<GoogleIcon />}
            >
              ลงชื่อสมัครใช้ด้วย Google
            </Button>
            <Button
              sx={{
                borderRadius: 32,
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
                border: "1px solid #2196f3",
                textTransform: "capitalize",
              }}
              startIcon={<AppleIcon />}
            >
              ลงชื่อสมัครใช้ด้วย Apple
            </Button>
            <Typography>หรือ</Typography>
            <Button
              sx={{
                borderRadius: 32,
                paddingLeft: "1rem",
                paddingRight: "1rem",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
                border: "1px solid #2196f3",
              }}
            >
              สมัครด้วยหมายเลขโทรศัพท์มือถือหรืออีเมล
            </Button>
            <Typography sx={{ fontSize: "14px" }}>
              การสมัครนี้จะถือว่าคุณยอมรับ ข้อตกลงการใช้งาน และ
              นโยบายความเป็นส่วนตัว รวมถึง การใช้คุกกี้
            </Typography>
          </Stack>

          <Stack
            spacing={2}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Typography>มีบัญชีผู้ใช้อยู่แล้วใช่ไหม</Typography>

            <Button
              sx={{
                borderRadius: 32,
                width: "17rem",
                paddingLeft: "2.5rem",
                paddingRight: "2.5rem",
                paddingTop: ".5rem",
                paddingBottom: ".5rem",
                border: "1px solid #2196f3",
                textTransform: "capitalize",
              }}
            >
              เข้าสู่ระบบ
            </Button>
          </Stack>
        </Stack>
      </div>
    </div>
  );
};
export default Login;
