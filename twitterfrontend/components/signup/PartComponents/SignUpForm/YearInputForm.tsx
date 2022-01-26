import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useContext } from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";
import { Yearlists } from "../../../../utils/dateUtils";

const YearInputForm = () => {
  const classes = useStyles();
  const { year, setYear } = useContext(SignUpFormContext);
  const handleOnYearChange = (event: SelectChangeEvent<string>) => {
    if (event && event.target) {
      setYear(event.target.value);
    }
  };
  return (
    <FormControl
      sx={{
        border: "0px solid gray",
        width: "150px",
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
        Year
      </InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        value={year}
        label="Year"
        className={classes.select}
        sx={{
          ":focus": {
            backgroundColor: "yellow",
          },
        }}
        onChange={handleOnYearChange}
      >
        {Yearlists.map((val, idx) => {
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
export default YearInputForm;
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
