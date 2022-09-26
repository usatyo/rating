import { useRouter } from 'next/router'
import { useState } from 'react'
import { Datas, DEFAULT_DATA } from '../models/types'
import { setDataInfo } from '../repositories/dataRepo'
import { getUserInfo, updateUserRate } from '../repositories/userRepo'
import { calc_rate } from '../utils/util'

interface LocalDatas {
}

const usePostDatas = (): [
  Datas,
  boolean,
  string,
  (state: boolean) => void,
  (formName: string, formValue: string) => void,
  () => void,
] => {
  const [postDate, setPostDate] = useState<Datas>(DEFAULT_DATA)
  const [open, setOpen] = useState(false)
  const [errMes, setErrMes] = useState('')
  const router = useRouter()

  const handleChange = (formName: string, formValue: string): void => {
    const changedData: Datas = { ...postDate }
    if (formName === 'black') {
      changedData.black = formValue
    } else if (formName === 'white') {
      changedData.white = formValue
    } else if (formName === 'handicap') {
      changedData.handicap = Number(formValue)
    } else if (formName === 'result') {
      changedData.result = Number(formValue)
    }
    setPostDate(changedData)
    return
  }

  const handleClick = async (): Promise<void> => {
    const currentUser = await getUserInfo()
    if (
      !currentUser.some((info) => info.name === postDate.black) ||
      !currentUser.some((info) => info.name === postDate.white)
    ) {
      setErrMes('存在しない名前です')
      setOpen(true)
      return
    }
    if (postDate.black === postDate.white) {
      setErrMes('同一人物との対局はできません')
      setOpen(true)
      return
    }
    if (!Number.isInteger(postDate.handicap) || !Number.isInteger(postDate.result)) {
      setErrMes('不正な入力です')
      setOpen(true)
      return
    }
    if (postDate.handicap < 0 || 9 < postDate.handicap) {
      setErrMes('不正な入力です')
      setOpen(true)
      return
    }
    if (postDate.result < -1 || 1 < postDate.result) {
      setErrMes('不正な入力です')
      setOpen(true)
      return
    }
    setDataInfo(postDate)
    const [new_b, new_w]: number[] = await calc_rate(
      postDate.black,
      postDate.white,
      postDate.handicap,
      postDate.result,
    )
    updateUserRate({ name: postDate.black, rate: new_b })
    updateUserRate({ name: postDate.white, rate: new_w })
    router.replace('/home')
    return
  }

  return [postDate, open, errMes, setOpen, handleChange, handleClick]
}

export default usePostDatas
