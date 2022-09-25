import { NextPage } from "next";
import { useEffect } from "react";
import usePostDatas from "../hooks/usePostDatas";
import { setUserInfo } from "../repositories/userRepo";

const Test: NextPage = () => {
    const [data, { change: handleChange, click: handleClick }] = usePostDatas()
    const ud: undefined = undefined
    
    useEffect(() => {
        handleChange(ud, ud, 1, 0)
    })
    return <div></div>
}

export default Test