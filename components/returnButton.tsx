import { Button } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'

const ReturnButton: NextPage = () => {
  return (
    <Link href='/home'>
      <Button variant='outlined'>もどる</Button>
    </Link>
  )
}

export default ReturnButton
