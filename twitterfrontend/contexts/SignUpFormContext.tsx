import React, { Dispatch, SetStateAction } from "react";
import { monthData } from "../pages/i/flow/signup";

interface signUpUser {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  month: monthData;
  setMonth: Dispatch<SetStateAction<monthData>>;
  day: string;
  setDay: Dispatch<SetStateAction<string>>;
  year: string;
  setYear: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}
export const SignUpFormContext = React.createContext({} as signUpUser);
