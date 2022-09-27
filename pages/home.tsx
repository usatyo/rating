import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { Stack, useMediaQuery } from '@mui/material'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import MainButton from '../components/mainButton'
import MyTable from '../components/myTable'
import TitleText from '../components/titleText'
import { BORDER, DATA_HEADER, USER_HEADER } from '../constants/constants'
import { useDatas } from '../hooks/useDatas'
import { useUsers } from '../hooks/useUsers'

const Home: NextPage = () => {
  const lg: boolean = useMediaQuery(BORDER)
  const [topDatas, ,]: [string[][], string, (name: string, value: string) => void] = useDatas()
  const topUsers: string[][] = useUsers()
  const router = useRouter()

  return (
    <Stack alignItems='center' spacing='40px' sx={{ width: '100%' }}>
      <TitleText text='ホーム'>
        <HomeOutlinedIcon sx={{ width: '40px', height: '40px' }} />
      </TitleText>
      <MainButton text='レートランキング' handle={() => router.replace('/ranking')} />
      <MainButton text='対局履歴' handle={() => router.replace('/history')} />
      <MainButton text='結果入力' handle={() => router.replace('/post/result')} />
      <MainButton text='部員登録' handle={() => router.replace('/post/user')} />
      <div></div>
      <TitleText text='レート上位'>
        <TrendingUpIcon sx={{ width: '40px', height: '40px' }} />
      </TitleText>
      <MyTable header={USER_HEADER} body={topUsers.slice(0, lg ? 5 : 3)} />
      <div></div>
      <TitleText text='最近の対局'>
        <HourglassEmptyIcon sx={{ width: '40px', height: '40px' }} />
      </TitleText>
      <MyTable header={DATA_HEADER} body={topDatas.slice(0, lg ? 5 : 3)} />
    </Stack>
  )
}

export default Home
