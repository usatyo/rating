import { Button, Stack, TextField } from '@mui/material'
import { NextPage } from 'next'
import ReturnButton from '../../components/returnButton'
import usePostUsers from '../../hooks/usePostUsers'

const PostUser: NextPage = () => {
  const [data, { change: handleChange, click: handleClick }] = usePostUsers()

  return (
    <Stack>
      <Stack>
        <TextField
          variant='outlined'
          label='名前'
          value={data.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
      </Stack>
      <Stack>
        <TextField
          variant='outlined'
          label='初期レート'
          type='number'
          value={data.rate ? data.rate : undefined}
          onChange={(e) => handleChange("rate", e.target.value)}
        />
      </Stack>
      <Button variant='contained' onClick={handleClick}>
        登録
      </Button>
      <ReturnButton />
    </Stack>
  )
}

export default PostUser
