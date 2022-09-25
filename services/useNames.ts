import { useEffect, useState } from "react"
import { Users } from "../models/types"
import { getNames } from "../repositories/users"


export const useNames = (): Users[] => {
    const [output, setOutput] = useState([{name: "", rate: 1500, id:""}])

    useEffect(() => {
        void (async () => {
            const names = await getNames()
            setOutput(names)
        })()
    }, [])
    return output
}