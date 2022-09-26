import { Button, Stack, TextField } from '@mui/material'
import { NextPage } from 'next'
import InputField from '../../components/inputField'
import MainButton from '../../components/mainButton'
import ReturnButton from '../../components/returnButton'
import usePostUsers from '../../hooks/usePostUsers'

const PostUser: NextPage = () => {
  const [data, { change: handleChange, click: handleClick }] = usePostUsers()

  return (
    <Stack>
      <InputField label='名前' value={data.name} name="name" handle={handleChange} />
      <InputField
        label='初期レート'
        value={String(data.rate ? data.rate : undefined)}
        name="rate"
        handle={handleChange}
        type="number"
      />
      <MainButton text='登録' href='' handle={handleClick} />
      <ReturnButton />
    </Stack>
  )
}

export default PostUser
