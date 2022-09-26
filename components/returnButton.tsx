import { Button, useMediaQuery } from '@mui/material'
import Link from 'next/link'
import { BORDER } from '../constants/constants'

const ReturnButton = () => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Link href='/home'>
      <Button
        sx={{
          width: lg ? "400px" : "80%",
          height: "50px",
          marginX: "auto",
          marginTop: "40px",
          borderRadius: "25px",
          fontSize: "16px",
        }}
        variant='outlined'
      >もどる</Button>
    </Link>
  )
}

export default ReturnButton
