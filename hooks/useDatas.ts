import { useEffect, useState } from 'react'
import { HANDICAP, RESULT } from '../constants/constants'
import { Datas } from '../models/types'
import { getDataInfo } from '../repositories/dataRepo'

export const useDatas = (): [string[][], string, (name: string, value: string) => void] => {
  const [output, setOutput] = useState<string[][]>([[]])
  const [prefix, setPrefix] = useState<string>("")

  useEffect(() => {
    void (async () => {
      const infos: Datas[] = await getDataInfo()
      setOutput(
        infos.map((info) => {
          if (!info.black.includes(prefix) && !info.white.includes(prefix)) {
            return []
          }
          return [
            info.black,
            info.white,
            HANDICAP[info.handicap],
            RESULT[info.result + 1],
            String(info.date.toDate().getFullYear()) +
            ' / ' +
            String(info.date.toDate().getMonth() + 1) +
            ' / ' +
            String(info.date.toDate().getDate()),
          ]
        }).filter(info => info),
      )
    })()
  }, [prefix])

  const handleChange = (name: string, value: string): void => {
    setPrefix(value)
    return
  }

  return [output, prefix, handleChange]
}
