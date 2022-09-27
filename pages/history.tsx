import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined'
import { Stack } from '@mui/material'
import { NextPage } from 'next'
import InputField from '../components/inputField'
import MyTable from '../components/myTable'
import ReturnButton from '../components/returnButton'
import TitleText from '../components/titleText'
import { DATA_HEADER } from '../constants/constants'
import { useDatas } from '../hooks/useDatas'

const History: NextPage = () => {
  const [infos, prefix, handleChange]: [string[][], string, (name: string, value: string) => void] = useDatas()

  return (
    <Stack alignItems='center' spacing='40px'>
      <TitleText text='対局履歴'>
        <HistoryOutlinedIcon sx={{ width: '40px', height: '40px' }} />
      </TitleText>
      <InputField label='名前で検索' value={prefix} name='' handle={handleChange} />
      <MyTable header={DATA_HEADER} body={infos} />
      <ReturnButton />
    </Stack>
  )
}

export default History
