import { Box, Button, useMediaQuery } from "@mui/material";

type Props = {
  text: string
  handle?: () => void
}

const MainButton = (props: Props) => {
  const lg: boolean = useMediaQuery("(min-width:577px)")

  return (
    <Box
      sx={{
        marginX: "auto",
        marginTop: "40px",
        paddingX: lg ? "0" : "30px"
      }}
    >
      <Button
        sx={{
          width: "400px",
          height: "50px",
          borderRadius: "25px",
          fontSize: "16px",
        }}
        variant="contained"
        onClick={props.handle}
      >
        {props.text}
      </Button>
    </Box>
  )
}

export default MainButton