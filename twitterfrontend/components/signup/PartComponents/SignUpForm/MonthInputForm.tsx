import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext} from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";
import {
  listGenerator,
  MonthLists,
  maxDateObject,
} from "../../../../utils/dateUtils";

const MonthInputForm = () => {
  const classes = useStyles();
  const { month, setMonth } = useContext(SignUpFormContext);
  const handleOnMonthChange = (event: SelectChangeEvent<string>) => {
    if (event && event.target) {
      const month = event.target.value;
      const getMaxDate = maxDateObject[month];
      const dateLists = listGenerator(1, getMaxDate);
      setMonth({ month: month, Dates: dateLists });
    }
  };

  return (
    <FormControl
      sx={{
        border: "0px solid gray",
        width: "250px",
        marginBottom: "45px",
        label: {
          color: "white",
        },
      }}
    >
      <InputLabel
        variant="outlined"
        id="demo-controlled-open-select-label"
        sx={{ color: "blue", backgroundColor: "black" }}
      >
        Month
      </InputLabel>

      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={month.month}
        label="Month"
        className={classes.select}
        onChange={(event) => {
          handleOnMonthChange(event);
        }}
      >
        {MonthLists.map((val, idx) => {
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

const useStyles = makeStyles({
  form: {
    "& .root": {
      border: "2px solid black",
    },
  },
  label: {},
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

    color: "white",
  },
});


export default MonthInputForm;

