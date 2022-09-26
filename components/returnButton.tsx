import { Box, Button, useMediaQuery } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'

const ReturnButton = () => {
  const lg: boolean = useMediaQuery("(min-width:577px)")
  
  return (
    <Box
      sx={{
        marginX: "auto",
        marginTop: "40px",
        paddingX: lg ? "0" : "30px"
      }}
    >
      <Link href='/home'>
        <Button
          sx={{
            width: "400px",
            height: "50px",
            borderRadius: "25px",
            fontSize: "16px",
          }}
          variant='outlined'
        >もどる</Button>
      </Link>
    </Box>
  )
}

export default ReturnButton
