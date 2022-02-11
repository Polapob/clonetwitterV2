import { Button, styled, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import HomeIcon from "@mui/icons-material/Home";

interface Props {
  buttonName: string;
  Icon: typeof HomeIcon;
  buttonIndex: number;
  handleCurrentButtonIdxChange: Function;
  currentButtonIdx: number;
  // buttonIcon: any;
}
const ResponsiveTypography = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    //  maxWidth: "500px",
    display: "none",
  },
  [theme.breakpoints.up("sm")]: {
    //  maxWidth: "700px",
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    // maxWidth: "1000px",
    display: "none",
  },
  [theme.breakpoints.up("lg")]: {
    //maxWidth: "1200px",
    display: "flex",
  },
}));

const NavbarButton = ({
  buttonName,
  Icon,
  buttonIndex,
  handleCurrentButtonIdxChange,
  currentButtonIdx,
}: Props) => {
  const isClick = buttonIndex === currentButtonIdx ? true : false;
  return (
    <Stack spacing={0}>
      <Stack
        spacing={{ xs: 0, lg: 1.5 }}
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "start",
          width: "fit-content",
          justifyItems: "start",
          border: "0px solid white",
          alignItems: "center",
          paddingRight: { xs: "12px", lg: "32px" },
          paddingTop: { xs: "12px", lg: "8px" },
          paddingBottom: { xs: "12px", lg: "8px" },
          paddingLeft: { xs: "12px", lg: "12px" },
          borderRadius: "2rem",
          ":hover": {
            backgroundColor: "rgba(217,217,217,0.1)",
          },
        }}
        onClick={() => {
          handleCurrentButtonIdxChange(buttonIndex);
        }}
      >
        <Icon
          sx={{
            color: "rgb(217, 217, 217)",
            fontSize: isClick ? "30px" : "28px",
          }}
        />
        <ResponsiveTypography
          sx={{
            color: "rgb(217, 217, 217)",
            fontWeight: isClick ? 700 : 500,
            textTransform: "capitalize",
            fontSize: "20px",
          }}
        >
          {buttonName}
        </ResponsiveTypography>
      </Stack>
    </Stack>
  );
};
export default NavbarButton;
