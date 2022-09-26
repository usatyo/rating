import { Button, Stack } from '@mui/material'
import { NextPage } from 'next'
import Link from 'next/link'
import MainButton from '../components/mainButton'

const Home: NextPage = () => {
  return (
    <Stack>
      <MainButton text='レートランキング' href='/ranking' />
      <MainButton text='対局履歴' href='/history' />
      <MainButton text='結果入力' href='/post/result' />
      <MainButton text='部員登録' href='/post/user' />
    </Stack>
  )
}

export default Home
