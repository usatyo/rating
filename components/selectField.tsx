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
        marginX: "auto",
        marginTop: "40px",
        paddingX: lg ? "0" : "30px",
      }}
    >
      <InputLabel>ハンデ</InputLabel>
      <Select
        sx={{
          width: "400px",
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