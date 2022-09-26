import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import { ReactElement } from 'react'
import { BORDER } from '../constants/constants'

type Props = {
  text: string
  readonly children?: ReactElement
}

const TitleText = (props: Props): ReactElement => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Stack
      direction='row'
      alignItems='end'
      justifyContent='center'
      spacing='10px'
      sx={{ width: lg ? '400px' : '100%' }}
    >
      {props.children}
      <Typography variant='h5'>{props.text}</Typography>
      <Box sx={{ width: '20px' }}></Box>
    </Stack>
  )
}

export default TitleText
