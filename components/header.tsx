import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import { BORDER } from '../constants/constants'

const Header = (): ReactElement => {
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <Stack
      sx={{
        position: 'fixed',
        left: '0',
        top: '0',
        width: '100vw',
        zIndex: '1',
        padding: lg ? '15px 40px' : '10px 20px',
        backgroundColor: 'white',
        boxShadow: '0 3px 5px #CCC',
      }}
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      <Stack direction='row' alignItems='center' spacing='20px'>
        <Image src='/assets/logo.png' layout='fixed' width={70} height={70} alt='icon' />
        {lg ? (
          <Typography variant='h4' sx={{ fontFamily: 'serif' }}>
            北大囲碁部レーティング
          </Typography>
        ) : (
          <></>
        )}
      </Stack>
      <Link href='/home'>
        <HomeOutlinedIcon
          sx={{
            width: '40px',
            height: '40px',
            '&:hover': {
              color: '#666',
            },
          }}
        />
      </Link>
    </Stack>
  )
}

export default Header
