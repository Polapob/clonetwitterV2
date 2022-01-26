import {
  Button,
  Container,
  Stack,
  Typography,
  Grid,
  SelectChangeEvent,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import LoginLayout from "../../../../components/login/LoginLayout";
import { ReactElement, useState, ChangeEvent } from "react";
import {
  listGenerator,
  Yearlists,
  maxDateObject,
} from "../../../../utils/dateUtils";
import SignUpForm from "../../../../components/signup/FlowComponents/SignUpForm";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    flex: 1,
    width: "full",
  },
  modal: {
    width: "full",
    height: "full",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    border: "4px solid blue",
    background: "rgba(91, 112, 131, 0.4)",
    position: "fixed",
    inset: 0,
  },
  inputText: {
    borderColor: "1px solid blue",
    input: {
      border: "0px solid gray",
    },
  },
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
  selected: {},
});

export interface monthData {
  month: string;
  Dates: number[];
}
const SignUp = () => {
  // const classes = useStyles();
  const [month, setMonth] = useState<monthData>({
    month: "",
    Dates: listGenerator(1, 31),
  });
  const [day, setDay] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <SignUpFormContext.Provider
        value={{
          month,
          setMonth,
          day,
          setDay,
          year,
          setYear,
          name,
          setName,
          email,
          setEmail,
        }}
      >
        <SignUpForm />
      </SignUpFormContext.Provider>
      <div>
        {console.log("Newcomponents is re-render!")}
        Newcomponents
      </div>
    </div>
  );
};

SignUp.getLayout = function getLayout(page: ReactElement) {
  return <LoginLayout>{page}</LoginLayout>;
};

export default SignUp;
