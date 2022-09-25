import { useRouter } from "next/router"
import { useState } from "react"
import { Datas, DEFAULT_DATA } from "../models/types"
import { setDataInfo } from "../repositories/dataRepo"

interface LocalDatas {
    change: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
    click: () => void
}

const usePostDatas = (): [Datas, LocalDatas] => {
    const [postDate, setPostDate] = useState<Datas>(DEFAULT_DATA)
    const router = useRouter()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
        const changedData: Datas = { ...postDate }
        if (event.target.name === "black") {
            changedData.black = event.target.value
        } else if (event.target.name === "white") {
            changedData.white = event.target.value
        } else if (event.target.name === "handicap") {
            changedData.handicap = Number(event.target.value)
        } else if (event.target.name === "result") {
            changedData.result = Number(event.target.value)
        }
        setPostDate(changedData)
        return
    }

    const handleClick = () => {

        // check name and number

        setDataInfo(postDate)
        router.replace("/home")
        return
    }

    return [postDate, { click: handleClick, change: handleChange }]
}

export default usePostDatas