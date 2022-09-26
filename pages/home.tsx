import { Button, Stack } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <Stack>
      <Link href='/ranking'>
        <Button variant='contained'>レートランキング</Button>
      </Link>
      <Link href='/history'>
        <Button variant='contained'>対局履歴</Button>
      </Link>
      <Link href='/post/result'>
        <Button variant='contained'>結果入力</Button>
      </Link>
      <Link href='/post/user'>
        <Button variant='contained'>部員登録</Button>
      </Link>
    </Stack>
  )
}

export default Home
