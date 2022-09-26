import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import MyTable from '../components/myTable'
import ReturnButton from '../components/returnButton'
import TitleText from '../components/titleText'
import { USER_HEADER } from '../constants/constants'
import { useUsers } from '../hooks/useUsers'

const Ranking: NextPage = () => {
  const infos: string[][] = useUsers()

  return (
    <Stack alignItems='center' spacing='40px'>
      <TitleText text='ランキング'>
        <EmojiEventsOutlinedIcon sx={{ width: '40px', height: '40px' }} />
      </TitleText>
      <MyTable header={USER_HEADER} body={infos} />
      <ReturnButton />
    </Stack>
  )
}

export default Ranking
