import { Button, useMediaQuery } from '@mui/material'
import { ReactElement } from 'react'
import { BORDER } from '../constants/constants'

type Props = {
  text: string
  handle?: () => void
}

const MainButton = (props: Props): ReactElement => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Button
      sx={{
        width: lg ? '400px' : '100%',
        height: '50px',
        borderRadius: '25px',
        fontSize: '16px',
      }}
      variant='contained'
      onClick={props.handle}
    >
      {props.text}
    </Button>
  )
}

export default MainButton
