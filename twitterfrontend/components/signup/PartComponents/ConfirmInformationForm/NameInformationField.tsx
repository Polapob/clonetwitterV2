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
const NameInformationField = ({ handleOnClick }: Props) => {
  const { name } = useContext(SignUpFormContext);

  return (
    <ValidationTextField
      label="ชื่อ"
      value={name}
      id="validation-outlined-input"
      sx={{ label: { color: "rgb(133, 133, 133)" }, input: { color: "white" } }}
      inputProps={{ onClick: handleOnClick }}
    />
  );
};
export default NameInformationField;
