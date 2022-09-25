import { useEffect, useState } from 'react'
import { Datas, DEFAULT_DATA } from '../models/types'
import { getDataInfo } from '../repositories/dataRepo'

export const useDatas = (): Datas[] => {
  const [output, setOutput] = useState<Datas[]>([DEFAULT_DATA])

  useEffect(() => {
    void (async () => {
      const infos = await getDataInfo()
      setOutput(infos)
    })()
  }, [])
  return output
}
