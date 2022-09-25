import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Root: NextPage = () => {
    const router = useRouter()

    useEffect(() => {
        router.replace("/home")
    }, [])

    return null
}

export default Root