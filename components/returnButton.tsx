import { Button, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import { ReactElement } from 'react'
import { BORDER } from '../constants/constants'

const ReturnButton = (): ReactElement => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Link href='/home'>
      <Button
        sx={{
          width: lg ? '400px' : '100%',
          height: '50px',
          borderRadius: '25px',
          fontSize: '16px',
        }}
        variant='outlined'
      >
        もどる
      </Button>
    </Link>
  )
}

export default ReturnButton
