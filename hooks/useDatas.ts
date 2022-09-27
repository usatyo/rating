import { useEffect, useState } from 'react'
import { HANDICAP, RESULT } from '../constants/constants'
import { Datas } from '../models/types'
import { getDataInfo } from '../repositories/dataRepo'

export const useDatas = (): string[][] => {
  const [output, setOutput] = useState<string[][]>([[]])

  useEffect(() => {
    void (async () => {
      const infos: Datas[] = await getDataInfo()
      setOutput(
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

  return output
}
