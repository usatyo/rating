import { useRouter } from 'next/router'
import { useState } from 'react'
import { DEFAULT_USER, Users } from '../models/types'
import { getUserInfo, setUserInfo } from '../repositories/userRepo'

const usePostUsers = (): [
  Users,
  boolean,
  string,
  boolean,
  (state: boolean) => void,
  () => void,
  (formName: string, formValue: string) => void,
] => {
  const [postUser, setPostUser] = useState<Users>(DEFAULT_USER)
  const [open, setOpen] = useState(false)
  const [errMes, setErrMes] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleChange = (formName: string, formValue: string): void => {
    const changedUser: Users = { ...postUser }
    if (formName === 'name') {
      changedUser.name = String(formValue)
    } else if (formName === 'rate') {
      changedUser.rate = Number(formValue)
    }
    setPostUser(changedUser)
    return
  }

  const handleClick = async () => {
    setLoading(true)
    const currentUser = await getUserInfo()
    if (postUser.name === '') {
      setErrMes('名前が空です')
      setLoading(false)
      setOpen(true)
      return
    }
    if (currentUser.some((info) => info.name === postUser.name)) {
      setErrMes('すでに同じ名前が存在します')
      setLoading(false)
      setOpen(true)
      return
    }
    if (typeof postUser.rate !== 'number') {
      setErrMes('数字を入力してください')
      setLoading(false)
      setOpen(true)
      return
    }
    if (!Number.isInteger(postUser.rate)) {
      setErrMes('整数を入力してください')
      setLoading(false)
      setOpen(true)
      return
    }
    setUserInfo(postUser)
    setLoading(false)
    router.replace('/home')
    return
  }

  return [postUser, open, errMes, loading, setOpen, handleClick, handleChange]
}

export default usePostUsers
