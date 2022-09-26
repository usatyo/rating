import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import MainButton from '../components/mainButton'
import TitleText from '../components/titleText'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <Stack alignItems='center' spacing='40px'>
      <TitleText text='ホーム'>
        <HomeOutlinedIcon sx={{ width: '40px', height: '40px' }} />
      </TitleText>
      <MainButton text='レートランキング' handle={() => router.replace('/ranking')} />
      <MainButton text='対局履歴' handle={() => router.replace('/history')} />
      <MainButton text='結果入力' handle={() => router.replace('/post/result')} />
      <MainButton text='部員登録' handle={() => router.replace('/post/user')} />
    </Stack>
  )
}

export default Home
