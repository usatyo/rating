import { Stack } from '@mui/material'
import { NextPage } from 'next'
import MyTable from '../components/myTable'
import ReturnButton from '../components/returnButton'
import { useUsers } from '../hooks/useUsers'
import { Users } from '../models/types'

const Ranking: NextPage = () => {
  const infos: Users[] = useUsers()

  const HEAD: string[] = ["順位", "名前", "レート"]

  const genBody = (): string[][] => {
    return infos.map((info, idx) => {
      return [
        String(idx + 1),
        info.name,
        String(info.rate)
      ]
    })
  }

  return (
    <Stack>
      <MyTable header={HEAD} body={genBody()} />
      <ReturnButton />
    </Stack>
  )
}

export default Ranking
