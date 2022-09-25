import { useEffect, useState } from "react"
import { DEFAULT_USER, Users } from "../models/types"
import { getUserInfo } from "../repositories/users"


export const useUsers = (): Users[] => {
    const [output, setOutput] = useState([DEFAULT_USER])

    useEffect(() => {
        void (async () => {
            const infos = await getUserInfo()
            setOutput(infos)
        })()
    }, [])

    output.sort((a, b) => b.rate - a.rate)
    return output
}