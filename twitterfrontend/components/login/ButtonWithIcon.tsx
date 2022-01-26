import {
  Button,
  SvgIcon,
  SvgIconProps,
  SvgIconTypeMap,
  SxProps,
  Theme,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ReactElement, ReactNode } from "react";

interface Props {
  style: SxProps<Theme>;
  Icon: any;
  text: string;
}
const ButtonWithIcon = ({ Icon, style, text }: Props) => {
  return (
    <Button variant="contained" component="span" startIcon={Icon} sx={style}>
      {text}
    </Button>
  );
};
export default ButtonWithIcon;
