import { Button } from "@mui/material";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const DefaultSignupButton = ({ href,text }: Props) => {
  return (
    <Link href={href} passHref>
      <Button
        variant="contained"
        component="span"
        sx={{ borderRadius: "1rem" }}
      >
        {text}
      </Button>
    </Link>
  );
};
export default DefaultSignupButton;
