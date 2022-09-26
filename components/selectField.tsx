import { Box, InputLabel, MenuItem, Select, useMediaQuery } from "@mui/material"
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
    <Box
      sx={{
        width: lg ? "400px" : "80%",
        marginX: "auto",
        marginTop: "40px",
      }}
    >
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
    </Box>
  )
}

export default SelectField