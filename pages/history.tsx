import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import MyTable from '../components/myTable'
import ReturnButton from '../components/returnButton'
import TitleText from '../components/titleText'
import { DATA_HEADER } from '../constants/constants'
import { useDatas } from '../hooks/useDatas'

const History: NextPage = () => {
  const infos: string[][] = useDatas()

  return (
    <Stack alignItems='center' spacing='40px'>
      <TitleText text='対局履歴'>
        <HistoryOutlinedIcon sx={{ width: '40px', height: '40px' }} />
      </TitleText>
      <MyTable header={DATA_HEADER} body={infos} />
      <ReturnButton />
    </Stack>
  )
}

export default History
