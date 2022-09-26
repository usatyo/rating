import { Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { NextPage } from 'next'
import ReturnButton from '../components/returnButton'
import { HANDICAP, RESULT } from '../constants/constants'
import { useDatas } from '../hooks/useDatas'
import { Datas } from '../models/types'

const History: NextPage = () => {
  const infos: Datas[] = useDatas()

  return (
    <Stack>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>黒</TableCell>
              <TableCell>白</TableCell>
              <TableCell>ハンデ</TableCell>
              <TableCell>結果</TableCell>
              <TableCell>日付</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {infos.map((info, idx) => (
              <TableRow key={idx}>
                <TableCell>{info.black}</TableCell>
                <TableCell>{info.white}</TableCell>
                <TableCell>{HANDICAP[info.handicap]}</TableCell>
                <TableCell>{RESULT[info.result + 1]}</TableCell>
                <TableCell>
                  {String(info.date.toDate().getFullYear()) +
                    ' / ' +
                    String(info.date.toDate().getMonth() + 1) +
                    ' / ' +
                    String(info.date.toDate().getDate())}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ReturnButton />
    </Stack>
  )
}

export default History
