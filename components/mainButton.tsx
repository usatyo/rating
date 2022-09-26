import { Button, useMediaQuery } from "@mui/material";
import { BORDER } from "../constants/constants";

type Props = {
  text: string
  handle?: () => void
}

const MainButton = (props: Props) => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Button
      sx={{
        width: lg ? "400px" : "80%",
        height: "50px",
        marginX: "auto",
        marginTop: "40px",
        borderRadius: "25px",
        fontSize: "16px",
      }}
      variant="contained"
      onClick={props.handle}
    >
      {props.text}
    </Button>
  )
}

export default MainButton