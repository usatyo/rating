import { useEffect, useState } from 'react'
import { HANDICAP, RESULT } from '../constants/constants'
import { Datas } from '../models/types'
import { getDataInfo } from '../repositories/dataRepo'

export const useDatas = (): [string[][], string, (name: string, value: string) => void] => {
  const empty = [['', '', '', '', '']]
  const [original, setOriginal] = useState<string[][]>(empty)
  const [output, setOutput] = useState<string[][]>(empty)
  const [prefix, setPrefix] = useState<string>('')

  useEffect(() => {
    void (async () => {
      const infos: Datas[] = await getDataInfo()
      setOriginal(
        infos.map((info) => {
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
        }),
      )
    })()
  }, [])

  useEffect(() => {
    setOutput(
      original
        .map((info) => {
          if (!info[0].includes(prefix) && !info[1].includes(prefix)) {
            return []
          }
          return info
        })
        .filter((e) => e),
    )
  }, [original, prefix])

  const handleChange = (name: string, value: string): void => {
    setPrefix(value)
    return
  }

  return [output, prefix, handleChange]
}
