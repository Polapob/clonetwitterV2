import { Container, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import DefaultSignupButton from "../../components/login/DefaultSignupButton";
import DefaultSignInButton from "../../components/login/DefaultSignInButton";
import LoginWithOAuthButton from "../../components/login/LoginWithOAuthButton";
import LoginLayout from "../../components/login/LoginLayout";
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

const Login = () => {
  const classes = useStyles();
  return (
    <div></div>
  );
};

Login.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};

export default Login;