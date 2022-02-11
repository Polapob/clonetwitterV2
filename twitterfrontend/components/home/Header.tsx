import { Typography } from "@mui/material";

const Header = () => {
  return <Typography sx = {{color:"#D9D9D9",fontSize:"20px",fontWeight:"bold",border:"2px solid white",padding:"12px", backdropFilter: "blur(4px)",position:"fixed",width:"600px"}}>Home</Typography>;
};
export default Header;
