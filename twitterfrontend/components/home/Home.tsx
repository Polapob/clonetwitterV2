import { Box } from "@mui/material";
import AddTweet from "./AddTweet";
import Header from "./Header";
const Home = () => {
  return (
    <Box sx={{width:"600px"}}>
      <Header />
      <AddTweet />
    </Box>
  );
};
export default Home;
