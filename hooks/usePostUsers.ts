import { useRouter } from "next/router"
import { useState } from "react"
import { DEFAULT_USER, Users } from "../models/types"
import { setUserInfo } from "../repositories/userRepo"

interface LocalUsers {
    change: (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => void,
    click: () => void
}

const usePostUsers = (): [Users, LocalUsers] => {
    const [postUser, setPostUser] = useState<Users>(DEFAULT_USER)
    const router = useRouter()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
        const changedUser: Users = { ...postUser }
        if (event.target.name === "name") {
            changedUser.name = event.target.value
        } else if (event.target.name === "rate") {
            changedUser.rate = Number(event.target.value)
        }
        setPostUser(changedUser)
        return
    }

    const handleClick = () => {

        // check name and number

        setUserInfo(postUser)
        router.replace("/home")
        return
    }

    return [postUser, { click: handleClick, change: handleChange }]
}

export default usePostUsers