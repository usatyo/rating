import { Box, FormControlLabel, InputLabel, Radio, RadioGroup, Stack, useMediaQuery } from "@mui/material"
import { BORDER, RESULT } from "../constants/constants"

type Props = {
  value: number
  handle: (
    name: string,
    value: string
  ) => void
}

const RadioField = (props: Props) => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Box
      sx={{
        width: lg ? "400px" : "80%",
        marginX: "auto",
        marginTop: "40px",
      }}
    >
      <InputLabel>結果</InputLabel>
      <RadioGroup
        onChange={(e) => props.handle("result", String(e.target.value))}
        value={props.value}
      >
        <Stack 
          sx={{
            width: lg ? "400px" : "100%",
          }}
          direction="row"
          justifyContent="space-between"
        >
          {RESULT.map((val, idx) => (
            <FormControlLabel value={idx - 1} control={<Radio />} label={val} key={idx} />
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  )
}

export default RadioField