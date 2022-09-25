import { useRouter } from "next/router"
import { useState } from "react"
import { Datas, DEFAULT_DATA } from "../models/types"
import { getDataInfo, setDataInfo } from "../repositories/dataRepo"
import { getUserInfo, updateUserRate } from "../repositories/userRepo"
import { calc_rate } from "../utils/util"

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
        const currentUser = await getUserInfo()
        if (!currentUser.some(info => info.name === postDate.black)
            || !currentUser.some(info => info.name === postDate.white)) {
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
        const [new_b, new_w]: number[] = await calc_rate(
            postDate.black,
            postDate.white,
            postDate.handicap,
            postDate.result,
        )
        updateUserRate({ name: postDate.black, rate: new_b })
        updateUserRate({ name: postDate.white, rate: new_w })
        router.replace("/home")
        return
    }

    return [postDate, { click: handleClick, change: handleChange }]
}

export default usePostDatas