import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";

const DayInputForm = () => {
  const { day, month, setDay } = useContext(SignUpFormContext);
  const classes = useStyles();
  const handleOnDayChange = (event: SelectChangeEvent<string>) => {
    if (event && event.target) {
      setDay(event.target.value);
    }
  };
  return (
    <FormControl
      sx={{
        border: "0px solid gray",
        width: "125px",
        marginBottom: "45px",
        label: {
          color: "white",
        },
      }}
    >
      <InputLabel
        variant="outlined"
        id="demo-controlled-open-select-label"
        sx={{ backgroundColor: "black" }}
      >
        Day
      </InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={day}
        label={month.Dates}
        className={classes.select}
        sx={{
          ":focus": {
            backgroundColor: "yellow",
          },
        }}
        onChange={handleOnDayChange}
      >
        {month.Dates.map((val, idx) => {
          return (
            <MenuItem key={idx} value={val}>
              {val}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default DayInputForm;

const useStyles = makeStyles({
  select: {
    "&select": {
      backgroundColor: "red",
      "&:hover": {},
    },
    "&:hover": {},
    "&:focus": {
      backgroundColor: "yellow",
    },
    color: "white",
    border: "2px solid gray",
  },
});
