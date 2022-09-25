import { NextPage } from "next";
import { useEffect } from "react";
import { setUserInfo } from "../repositories/users";

const Test: NextPage = () => {
    useEffect(() => {
        // void (async () => {
            // await setUserInfo({name: "akiko", rate:1600})
        // })()
    })
    return <div></div>
}

export default Test