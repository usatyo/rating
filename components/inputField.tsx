import { InputLabel, Stack, TextField, useMediaQuery } from '@mui/material'
import { ReactElement } from 'react'
import { BORDER } from '../constants/constants'

type Props = {
  label: string
  value: string
  name: string
  handle: (name: string, value: string) => void
  type?: string
}

const InputField = (props: Props): ReactElement => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Stack sx={{ width: lg ? '400px' : '100%' }}>
      <InputLabel>{props.label}</InputLabel>
      <TextField
        sx={{
          width: lg ? '400px' : '100%',
          backgroundColor: 'white',
        }}
        variant='outlined'
        size='medium'
        type={props.type}
        value={props.value}
        onChange={(e) => props.handle(props.name, e.target.value)}
      />
    </Stack>
  )
}

export default InputField
