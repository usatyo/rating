import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import {
  Alert,
  Backdrop,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { NextPage } from 'next'
import InputField from '../../components/inputField'
import MainButton from '../../components/mainButton'
import ReturnButton from '../../components/returnButton'
import TitleText from '../../components/titleText'
import { BORDER } from '../../constants/constants'
import usePostUsers from '../../hooks/usePostUsers'

const PostUser: NextPage = () => {
  const [data, open, errMes, loading, setOpen, handleClick, handleChange] = usePostUsers()
  const lg: boolean = useMediaQuery(BORDER)

  return (
    <>
      <Stack alignItems='center' spacing='40px'>
        <TitleText text='部員登録'>
          <PersonOutlineOutlinedIcon sx={{ width: '40px', height: '40px' }} />
        </TitleText>
        <InputField label='名前' value={data.name} name='name' handle={handleChange} />
        <Stack
          sx={{ width: lg ? '400px' : '100%', color: "#777" }}
          alignItems="end"
        >
          <InputField
            label='初期レート'
            value={String(data.rate ? data.rate : undefined)}
            name='rate'
            handle={handleChange}
            type='number'
          />
          <Typography>1級と初段の境界が1500の設定です</Typography>
          <Typography>1段級の差は50です</Typography>
          <Typography>3段&rarr;1600~1649</Typography>
          <Typography>3級&rarr;1350~1399</Typography>
        </Stack>
        <MainButton text='登録' handle={handleClick} />
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

export default PostUser
