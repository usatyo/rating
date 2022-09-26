import { Box, InputLabel, TextField, useMediaQuery } from "@mui/material"
import { BORDER } from "../constants/constants"

type Props = {
  label: string
  value: string
  name: string
  handle: (
    name: string,
    value: string
  ) => void
  type?: string
}

const InputField = (props: Props) => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Box
      sx={{
        marginX: "auto",
        marginTop: "40px",
        paddingX: lg ? "0" : "30px",
      }}
    >
      <InputLabel>{props.label}</InputLabel>
      <TextField
        sx={{
          width: "400px",
        }}
        variant="outlined"
        size="medium"
        type={props.type}
        value={props.value}
        onChange={(e) => props.handle(props.name, e.target.value)}
      />
    </Box>
  )
}

export default InputField