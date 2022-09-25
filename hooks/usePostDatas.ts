import { useRouter } from "next/router"
import { useState } from "react"
import { Datas, DEFAULT_DATA } from "../models/types"
import { getDataInfo, setDataInfo } from "../repositories/dataRepo"

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

    const handleClick = async () => {
        const currentUser = await getDataInfo()
        if (!currentUser.some(info => info.black === postDate.black)
            || !currentUser.some(info => info.white === postDate.white)) {
            // error handling
            console.info("non-exist name")
            alert("non-exist name error")
            return
        }
        if (postDate.black === postDate.white) {
            console.info("same player")
            alert("same player error")
            return
        }
        if (!Number.isInteger(postDate.handicap) || !Number.isInteger(postDate.result)) {
            console.info("not integer")
            alert("not integer error")
            return
        }
        if (postDate.handicap < 0 || 9 < postDate.handicap) {
            console.info("invalid handicap")
            alert("invalid handicap error")
            return
        }
        if (postDate.result < -1 || 1 < postDate.result) {
            console.info("invalid result")
            alert("invalid result error")
            return
        }
        setDataInfo(postDate)
        router.replace("/home")
        return
    }

    return [postDate, { click: handleClick, change: handleChange }]
}

export default usePostDatas