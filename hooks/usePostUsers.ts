import { useRouter } from 'next/router'
import { useState } from 'react'
import { DEFAULT_USER, Users } from '../models/types'
import { getUserInfo, setUserInfo } from '../repositories/userRepo'

interface LocalUsers {
  change: (formName: string, formValue: string) => void
  click: () => void
}

const usePostUsers = (): [Users, LocalUsers] => {
  const [postUser, setPostUser] = useState<Users>(DEFAULT_USER)
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
    const currentUser = await getUserInfo()
    if (postUser.name === "") {
      console.info('empty name')
      alert('empty name error')
      return
    }
    if (currentUser.some((info) => info.name === postUser.name)) {
      console.info('exist same name')
      alert('same name error')
      return
    }
    if (typeof postUser.rate !== 'number') {
      console.info('not number')
      alert('not number error')
      return
    }
    if (!Number.isInteger(postUser.rate)) {
      console.info('rate not integer')
      alert('not integer error')
      return
    }
    setUserInfo(postUser)
    router.replace('/home')
    return
  }

  return [postUser, { click: handleClick, change: handleChange }]
}

export default usePostUsers
