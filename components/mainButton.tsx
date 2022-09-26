import { Button } from "@mui/material";
import Link from "next/link";

type Props = {
  text: string
  href: string
  handle?: () => void
}

const MainButton = (props: Props) => {
  return (
    <Link href={props.href}>
      <Button
        sx={{
          width: "300px",
          height: "50px",
          borderRadius: "25px",
          marginX: "auto",
          marginY: "20px"
        }}
        variant="contained"
        onClick={props.handle}
      >
        {props.text}
      </Button>
    </Link>
  )
}

export default MainButton