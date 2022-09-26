import { Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { NextPage } from 'next'
import MyTable from '../components/myTable'
import ReturnButton from '../components/returnButton'
import { HANDICAP, RESULT } from '../constants/constants'
import { useDatas } from '../hooks/useDatas'
import { Datas } from '../models/types'

const History: NextPage = () => {
  const infos: Datas[] = useDatas()

  const HEADER = ["黒", "白", "ハンデ", "結果", "日付"]

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
    <Stack>
      <MyTable header={HEADER} body={genBody()} />
      <ReturnButton />
    </Stack>
  )
}

export default History
