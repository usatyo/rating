import { Box, InputLabel, TextField } from "@mui/material"

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
  return (
    <Box
      sx={{
        marginX: "auto",
        marginTop: "40px",
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