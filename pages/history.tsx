import { Stack } from '@mui/material'
import { NextPage } from 'next'
import MyTable from '../components/myTable'
import ReturnButton from '../components/returnButton'
import { HANDICAP, RESULT } from '../constants/constants'
import { useDatas } from '../hooks/useDatas'
import { Datas } from '../models/types'
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import TitleText from '../components/titleText'

const History: NextPage = () => {
  const infos: Datas[] = useDatas()

  const HEADER = ["黒", "白", "手合い", "結果", "日付"]

  const genBody = (): string[][] => {
    return infos.map((info) => {
      return [
        info.black,
        info.white,
        HANDICAP[info.handicap],
        RESULT[info.result],
        String(info.date.toDate().getFullYear()) + ' / ' +
        String(info.date.toDate().getMonth() + 1) + ' / ' +
        String(info.date.toDate().getDate())
      ]
    })
  }

  return (
    <Stack alignItems="center" spacing="40px">
      <TitleText text='対局履歴'>
        <HistoryOutlinedIcon sx={{ width: "40px", height: "40px" }} />
      </TitleText>
      <MyTable header={HEADER} body={genBody()} />
      <ReturnButton />
    </Stack>
  )
}

export default History
