import { Box, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/system";
import Navbar from "../../components/common/Navbar";
import Home from "../../components/home/Home";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 980,
      lg: 1080,
      xl: 1536,
    },
  },
});

const ResponsiveContainer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    maxWidth: "500px",
  },
  [theme.breakpoints.up("sm")]: {
    maxWidth: "700px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "1000px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "1200px",
  },
}));

const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "black",
          width: "100%",
          height: "800px",
          border: "0px solid red",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ResponsiveContainer
          sx={{
            border: "2px solid white",
            width: "100%",
            height: "800px",
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
          }}
        >
          <Navbar />
          <Home />
        </ResponsiveContainer>
      </Box>
    </ThemeProvider>
  );
};
export default HomePage;
