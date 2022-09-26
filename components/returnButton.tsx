import { Button } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'

const ReturnButton = () => {
  return (
    <Link href='/home'>
      <Button
        sx={{
          width: "300px",
          height: "50px",
          borderRadius: "25px",
          marginX: "auto",
          marginTop: "40px",
          fontSize: "16px",
        }}
        variant='outlined'
      >もどる</Button>
    </Link>
  )
}

export default ReturnButton
