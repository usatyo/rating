import { Box, Button, FormControlLabel, FormLabel, MenuItem, Radio, RadioGroup, Select, Stack, TextField } from '@mui/material'
import { NextPage } from 'next'
import InputField from '../../components/inputField'
import MainButton from '../../components/mainButton'
import RadioField from '../../components/radioField'
import ReturnButton from '../../components/returnButton'
import SelectField from '../../components/selectField'
import usePostDatas from '../../hooks/usePostDatas'

const PostResult: NextPage = () => {
  const [data, { change: handleChange, click: handleClick }] = usePostDatas()

  return (
    <Stack>
      <InputField label='黒番' value={data.black} name="black" handle={handleChange} />
      <InputField label='白番' value={data.white} name="white" handle={handleChange} />
      <SelectField value={data.handicap} handle={handleChange} />
      <RadioField value={data.result} handle={handleChange} />
      <MainButton text='送信' handle={handleClick} />
      <ReturnButton />
    </Stack>
  )
}

export default PostResult
