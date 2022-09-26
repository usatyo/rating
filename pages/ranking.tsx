import { Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { NextPage } from 'next'
import ReturnButton from '../components/returnButton'
import { useUsers } from '../hooks/useUsers'
import { Users } from '../models/types'

const Ranking: NextPage = () => {
  const infos: Users[] = useUsers()

  return (
    <Stack>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>順位</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>レート</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {infos.map((info, idx) => (
              <TableRow>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{info.name}</TableCell>
                <TableCell>{info.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ReturnButton />
    </Stack>
  )
}

export default Ranking
