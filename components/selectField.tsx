import { Box, InputLabel, MenuItem, Select, Stack, useMediaQuery } from "@mui/material"
import { BORDER, HANDICAP } from "../constants/constants"

type Props = {
  value: number
  handle: (
    name: string,
    value: string
  ) => void
}

const SelectField = (props: Props) => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Stack sx={{ width: "100%" }}>
      <InputLabel>手合い</InputLabel>
      <Select
        sx={{
          width: lg ? "400px" : "100%",
        }}
        value={props.value}
        onChange={(e) => props.handle("handicap", String(e.target.value))}
      >
        {HANDICAP.map((val, idx) => (
          <MenuItem value={idx} key={idx}>{val}</MenuItem>
        ))}
      </Select>
    </Stack>
  )
}

export default SelectField