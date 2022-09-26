import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { Alert, Backdrop, Button, CircularProgress, Snackbar, Stack, TextField } from '@mui/material'
import { NextPage } from 'next'
import { useState } from 'react'
import InputField from '../../components/inputField'
import MainButton from '../../components/mainButton'
import ReturnButton from '../../components/returnButton'
import TitleText from '../../components/titleText'
import usePostUsers from '../../hooks/usePostUsers'

const PostUser: NextPage = () => {
  const [
    data,
    open,
    errMes,
    loading,
    setOpen,
    handleClick,
    handleChange,
  ] = usePostUsers()

  return (<>
    <Stack alignItems='center' spacing='40px'>
      <TitleText text='部員登録'>
        <PersonOutlineOutlinedIcon sx={{ width: '40px', height: '40px' }} />
      </TitleText>
      <InputField label='名前' value={data.name} name='name' handle={handleChange} />
      <InputField
        label='初期レート'
        value={String(data.rate ? data.rate : undefined)}
        name='rate'
        handle={handleChange}
        type='number'
      />
      <MainButton text='登録' handle={handleClick} />
      <ReturnButton />
    </Stack>
    <Snackbar open={open} autoHideDuration={4000} onClose={() => setOpen(false)}>
      <Alert severity='error' sx={{ backgroundColor: "#FFCCCC" }}>{errMes}</Alert>
    </Snackbar>
    <Backdrop open={loading} >
      <CircularProgress color='warning' />
    </Backdrop>
  </>)
}

export default PostUser
