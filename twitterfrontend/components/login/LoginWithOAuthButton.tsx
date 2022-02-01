import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

interface Props {
  text: string;
  OAuthType: string;
}

const LoginWithOAuthButton = ({ text, OAuthType }: Props) => {
  if (OAuthType === "Google") {
    return (
      <Button
        startIcon={<GoogleIcon />}
        sx={{
          borderRadius: "1rem",
          color: "black",
          fontWeight: "bold",
          backgroundColor: "white",
          ":hover": {
            backgroundColor: "rgb(230,230,230)",
          },
        }}
      >
        {text}
      </Button>
    );
  } else if (OAuthType === "Twitter") {
    return (
      <Button
        startIcon={<TwitterIcon />}
        sx={{
          borderRadius: "1rem",
          color: "black",
          fontWeight: "bold",
          backgroundColor: "white",
          ":hover": {
            backgroundColor: "rgb(230,230,230)",
          },
        }}
      >
        {text}
      </Button>
    );
  } else {
    return <Button>{text}</Button>;
  }
};
export default LoginWithOAuthButton;
