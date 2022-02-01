import { styled, TextField } from "@mui/material";
import { MouseEventHandler, useContext } from "react";
import { SignUpFormContext } from "../../../../contexts/SignUpFormContext";

const ValidationTextField = styled(TextField)({
  "& input:valid + fieldset": {
    borderColor: "rgb(133, 133, 133)",
    borderWidth: 1,
  },
  "& input:valid:hover + fieldset": {
    borderColor: "rgb(133, 133, 133)",
    borderWidth: 1,
  },
  "& input:invalid + fieldset": {
    borderColor: "red",
    borderWidth: 2,
  },
  "& input:valid:focus + fieldset": {
    borderLeftWidth: 2,
    padding: "4px !important", // override inline-style
  },
});
interface Props {
  handleOnClick: MouseEventHandler<
    HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
  >;
}
const BirthInformationField = ({ handleOnClick }: Props) => {
  const { day,year,month } = useContext(SignUpFormContext);
  const dateFormat = `${day} ${month.month} ${year}`
  return (
    <ValidationTextField
      label="วันเดือนปีเกิด"
      value={dateFormat}
      id="validation-outlined-input"
      sx={{ label: { color: "rgb(133, 133, 133)" }, input: { color: "white" } }}
      inputProps={{ onClick: handleOnClick }}
    />
  );
};
export default BirthInformationField;