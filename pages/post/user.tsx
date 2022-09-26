import { Button, Stack, TextField } from '@mui/material'
import { NextPage } from 'next'
import MainButton from '../../components/mainButton'
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
      <MainButton text='登録' href='' handle={handleClick} />
      <ReturnButton />
    </Stack>
  )
}

export default PostUser
