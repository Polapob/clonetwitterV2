import {
  Button,
  SxProps,
  Theme,
} from "@mui/material";
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
