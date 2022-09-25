import { useEffect, useState } from 'react'
import { DEFAULT_USER, Users } from '../models/types'
import { getUserInfo } from '../repositories/userRepo'

export const useUsers = (): Users[] => {
  const [output, setOutput] = useState<Users[]>([DEFAULT_USER])

  useEffect(() => {
    void (async () => {
      const infos = await getUserInfo()
      setOutput(infos)
    })()
  }, [])

  return output
}
