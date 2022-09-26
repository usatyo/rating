import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import { Alert, Backdrop, CircularProgress, Snackbar, Stack } from '@mui/material'
import { NextPage } from 'next'
import InputField from '../../components/inputField'
import MainButton from '../../components/mainButton'
import RadioField from '../../components/radioField'
import ReturnButton from '../../components/returnButton'
import SelectField from '../../components/selectField'
import TitleText from '../../components/titleText'
import usePostDatas from '../../hooks/usePostDatas'

const PostResult: NextPage = () => {
  const [data, open, errMes, loading, setOpen, handleChange, handleClick] = usePostDatas()

  return (
    <>
      <Stack alignItems='center' spacing='40px'>
        <TitleText text='結果入力'>
          <ModeEditOutlinedIcon sx={{ width: '40px', height: '40px' }} />
        </TitleText>
        <InputField label='黒番' value={data.black} name='black' handle={handleChange} />
        <InputField label='白番' value={data.white} name='white' handle={handleChange} />
        <SelectField value={data.handicap} handle={handleChange} />
        <RadioField value={data.result} handle={handleChange} />
        <MainButton text='送信' handle={handleClick} />
        <ReturnButton />
      </Stack>
      <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
        <Alert severity='error' sx={{ backgroundColor: '#FFCCCC' }}>
          {errMes}
        </Alert>
      </Snackbar>
      <Backdrop open={loading}>
        <CircularProgress color='warning' />
      </Backdrop>
    </>
  )
}

export default PostResult
