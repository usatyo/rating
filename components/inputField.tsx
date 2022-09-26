import { TextField } from "@mui/material"

type Props = {
  label: string
  value: string
  name: string
  handle: (
    name: string,
    value: string
  ) => void
}

const InputField = (props: Props) => {
  return (
    <TextField
      sx={{
        width: "400px",
        marginX: "auto",
        marginY: "20px",
        padding: "0"
      }}
      variant="outlined"
      size="medium"
      label={props.label}
      value={props.value}
      onChange={(e) => props.handle(props.name, e.target.value)}
    />
  )
}

export default InputField