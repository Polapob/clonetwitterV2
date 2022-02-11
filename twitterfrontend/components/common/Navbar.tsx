import { Button, IconButton, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import TwitterIcon from "@mui/icons-material/Twitter";
import NavbarButton from "./NavbarButton";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { navbarIcons } from "./NavbarIcons";
import { setButtonIdxStart } from "../../utils/setButtonIdxStart";
import AddIcon from "@mui/icons-material/Add";

const TweetLargeScreenButton = styled(Button)(({ theme }) => ({
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
    // display:"",
    display: "flex",
  },
}));

const Navbar = () => {
  const router = useRouter();
  const [currentButtonIdx, setCurrentButtonIdx] = useState<number>(
    setButtonIdxStart(router.asPath)
  );
  const handleCurrentButtonIdxChange = (idx: number): void => {
    setCurrentButtonIdx(idx);
  };
  console.log(currentButtonIdx);
  return (
    <Stack
      sx={{
        border: "1px solid rgb(47, 51, 54)",
        display: "flex",
        justifyContent: "start",
        alignItems: { xs: "center", lg: "start" },
        width: { xs: "65px", lg: "250px" },
        height: "800px",
        padding: 0,
        margin: 0,
      }}
    >
      <TwitterIcon
        sx={{
          color: "rgb(217, 217, 217)",
          fontSize: "32px",
          marginTop: "8px",
          marginBottom: "1rem",
          marginLeft: {xs: "0px",lg: "8px"},
        }}
      />
      <Stack
        spacing={{ xs: 0.4, lg: 1.2 }}
        sx={{ display: "flex", justifyContent: "start" }}
      >
        {navbarIcons.map((iconData, idx) => {
          return (
            <Fragment key={idx}>
              <NavbarButton
                buttonName={iconData.TextDescription}
                Icon={iconData.Icon}
                buttonIndex={idx}
                handleCurrentButtonIdxChange={handleCurrentButtonIdxChange}
                currentButtonIdx={currentButtonIdx}
              />
            </Fragment>
          );
        })}
      </Stack>
      <TweetLargeScreenButton
        sx={{
          textTransform: "capitalize",
          backgroundColor: "rgb(29, 155, 240)",
          marginLeft: "0px",
          width: "226px",
          paddingTop: "10px",
          paddingBottom: "10px",
          color: "white",
          fontSize: "16px",
          borderRadius: "2rem",
          marginTop: "2rem",
          fontWeight: 700,
          ":hover": {
            backgroundColor: "rgb(26, 140, 216)",
          },
        }}
      >
        Tweet
      </TweetLargeScreenButton>
      <IconButton
        sx={{
          display: "flex",
          justifyContent: "start",
          justifyItems: "center",
          padding: 0,
          marginTop: "1.25rem",
        }}
      >
        <AddIcon
          sx={{
            color: "white",
            padding: "8px",
            border: "0px solid white",
            backgroundColor: "rgb(29, 155, 240)",
            fontSize: "52px",
            borderRadius: "2rem",
            display: {
              xs: "flex",
              lg: "none",
            },
            ":hover": {
              backgroundColor: "rgb(26, 140, 216)",
            },
          }}
        ></AddIcon>
      </IconButton>
    </Stack>
  );
};
export default Navbar;
