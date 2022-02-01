import { IconButton, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { MouseEventHandler } from "react";
interface Props {
  numberState: number;
  decreaseIncrement: MouseEventHandler<HTMLButtonElement | HTMLInputElement | HTMLTextAreaElement>;
}
const StepNavbar = ({ numberState, decreaseIncrement }: Props) => {
  return (
    <Stack
      direction="row"
      spacing={3}
      sx={{
        paddingLeft: "0px",
        paddingTop: "8px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {/*<ChevronLeftIcon
        sx={{
          color: "rgb(217, 217, 217)",
          display: "flex",
          // justifyContent: "center",
          borderRadius: "2rem",
          padding: "3px",
          marginLeft: "2px",
          fontSize: "40px",
          ":hover": {
            backgroundColor: "rgb(47, 51, 54)",
          },
        }} 
        // onClick = {decreaseIncrement} 
    /> */}
      <IconButton onClick={decreaseIncrement}>
        <ChevronLeftIcon
          sx={{
            color: "rgb(217, 217, 217)",
            display: "flex",
            // justifyContent: "center",
            borderRadius: "2rem",
            padding: "3px",
            marginLeft: "2px",
            fontSize: "40px",
            ":hover": {
              backgroundColor: "rgb(47, 51, 54)",
            },
          }}
          // onClick = {decreaseIncrement}
        />
      </IconButton>

      <Typography
        sx={{
          color: "rgb(217, 217, 217)",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        ขั้นตอนที่ {numberState} จาก 3
      </Typography>
    </Stack>
  );
};
export default StepNavbar;
