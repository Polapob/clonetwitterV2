import { Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import DefaultSignupButton from "../../components/login/DefaultSignupButton";
import DefaultSignInButton from "../../components/login/DefaultSignInButton";
import LoginWithOAuthButton from "../../components/login/LoginWithOAuthButton";
import { ReactElement } from "react";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "full",
  },
  leftContainer: {
    border: "4px solid blue",
    width: "full",
  },
  rightContainer: {
    border: "2px solid green",
    width: "85%",
    paddingTop: "5rem",
    paddingBottom: "7rem",
    background: "black",
  },
});

const LoginLayout: React.FC<{}> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.leftContainer} />
      <Container className={classes.rightContainer}>
        <Stack
          spacing={5}
          sx={{ justifyContent: "center", paddingLeft: ".5rem" }}
        >
          <TwitterIcon
            sx={{
              fontSize: 48,
              color: "rgb(217, 217, 217)",
              marginBottom: "1rem",
            }}
          />
          <Typography
            sx={{
              color: "rgb(217, 217, 217)",
              fontWeight: "bold",
              fontSize: 64,
            }}
          >
            กำลังเกิดขึ้นตอนนี้
          </Typography>
          <Stack spacing={4} sx={{ width: 300 }}>
            <Typography
              sx={{
                color: "rgb(217, 217, 217)",
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              เข้าร่วมทวิตเตอร์วันนี้
            </Typography>
            <Stack spacing={1}>
              <LoginWithOAuthButton
                OAuthType="Google"
                text="ลงชื่อเข้าใช้ด้วย Google"
              />
              <LoginWithOAuthButton
                OAuthType="Twitter"
                text="ลงชื่อเข้าใช้ด้วย Twitter"
              />

              <div
                style={{
                  width: "100%",
                  textAlign: "center",
                  borderBottom: "1px solid rgb(217, 217, 217)",
                  lineHeight: "0.1em",
                  margin: "20px 0px 20px",
                }}
              >
                <span
                  style={{
                    color: "rgb(217, 217, 217)",
                    background: "black",
                    padding: "0 10px",
                  }}
                >
                  หรือ
                </span>
              </div>
              <DefaultSignupButton
                href="/i/flow/signup"
                text="ลงทะเบียนด้วยอีเมล"
              />

              <Typography
                sx={{ color: "rgb(110, 118, 125)", fontSize: "11px" }}
              >
                การสมัครนี้จะถือว่าคุณยอมรับ ข้อตกลงการใช้งาน และ
                นโยบายความเป็นส่วนตัว รวมถึง การใช้คุกกี้
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={2.4} sx={{ width: 300 }}>
            <Typography
              sx={{
                color: "rgb(217, 217, 217)",
                fontSize: "1rem",
                paddingTop: ".6rem",
                fontWeight: "bold",
              }}
            >
              มีบัญชีผู้ใช้อยู่แล้วใช่ไหม
            </Typography>
            <DefaultSignInButton
              text="เข้าสู่ระบบ"
              href="/i/flow/login"
            ></DefaultSignInButton>
          </Stack>
        </Stack>
      </Container>
      {children}
    </div>
  );
};
export default LoginLayout;
