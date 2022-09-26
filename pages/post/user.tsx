import { Button, Stack, TextField } from '@mui/material'
import { NextPage } from 'next'
import InputField from '../../components/inputField'
import MainButton from '../../components/mainButton'
import ReturnButton from '../../components/returnButton'
import usePostUsers from '../../hooks/usePostUsers'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import TitleText from '../../components/titleText'

const PostUser: NextPage = () => {
  const [data, { change: handleChange, click: handleClick }] = usePostUsers()

  return (
    <Stack alignItems="center" spacing="40px">
      <TitleText text='部員登録'>
        <PersonOutlineOutlinedIcon sx={{ width: "40px", height: "40px" }} />
      </TitleText>
      <InputField label='名前' value={data.name} name="name" handle={handleChange} />
      <InputField
        label='初期レート'
        value={String(data.rate ? data.rate : undefined)}
        name="rate"
        handle={handleChange}
        type="number"
      />
      <MainButton text='登録' handle={handleClick} />
      <ReturnButton />
    </Stack>
  )
}

export default PostUser
