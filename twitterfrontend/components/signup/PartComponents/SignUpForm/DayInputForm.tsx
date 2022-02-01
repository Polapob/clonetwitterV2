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
      className={classes.form}
      sx={{
        width: "125px",
        marginBottom: "45px",
        label: {
          color: "white",
        },
      }}
    >
      <InputLabel
        className={classes.label}
        variant="outlined"
        id="demo-controlled-open-select-label"
        sx={{
          backgroundColor: "black",
          paddingLeft: "4px",
          paddingRight: "4px",
        }}
      >
        Day
      </InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={day}
        label="Day"
        className={classes.select}
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
  form: {
    "& .root": {
      border: "2px solid black",
    },
  },
  label: {
    "& .MuiOutlinedInput-root":{
      border: "2px solid blue"
    }
  },
  select: {
    "& .MuiSelect-select": {
      border: "1px solid rgb(47, 51, 54)",
    },
    "& .Mui-focused": {
      border: "0px solid gray",
    },
    "& .MuiSelect-select-focused": {
      border: "0px solid black",
    },
    "& .MuiSvgIcon-root": {
      color: "gray",
      fontSize: "32px",
    },
    // "& .Mui"
    color: "white",
    // border: "2px solid gray",
  },
});
