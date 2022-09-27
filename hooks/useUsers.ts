import { useEffect, useState } from 'react'
import { Users } from '../models/types'
import { getUserInfo } from '../repositories/userRepo'
import { rate_to_rank } from '../utils/util'

export const useUsers = (): string[][] => {
  const [output, setOutput] = useState<string[][]>([[]])

  useEffect(() => {
    void (async () => {
      const infos: Users[] = await getUserInfo()
      setOutput(
        infos.map((info, idx) => {
          return [
            String(idx + 1),
            info.name,
            String(info.rate) + " (" + rate_to_rank(info.rate) + ")"
          ]
        }),
      )
    })()
  }, [])

  return output
}
