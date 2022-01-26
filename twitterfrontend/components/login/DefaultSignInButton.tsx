import { Button } from "@mui/material";
import Link from "next/link";

interface Props {
  href: string;
  text: string;
}
const DefaultSignInButton = ({ href, text }: Props) => {
  return (
    <Link href={href} passHref>
      <Button
        variant="contained"
        component="span"
        sx={{
          borderRadius: "1rem",
          backgroundColor: "black",
          fontWeight: "bold",
          color: "rgb(29, 155, 240)",
          border: "1px solid rgb(83, 100, 113)",
          ":hover": {
            backgroundColor: "rgba(29,155,240,0.1)",
          },
        }}
      >
        {text}
      </Button>
    </Link>
  );
};
export default DefaultSignInButton;
