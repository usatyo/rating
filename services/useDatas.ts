import { useEffect, useState } from "react"
import { Datas, DEFAULT_DATA } from "../models/types"
import { getDataInfo } from "../repositories/datas"


export const useDatas = (): Datas[] => {
    const [output, setOutput] = useState([DEFAULT_DATA])

    useEffect(() => {
        void (async () => {
            const infos = await getDataInfo()
            setOutput(infos)
        })()
    }, [])
    return output
}