import { NextPage } from "next"
import Link from "next/link"
import { useDatas } from "../services/useDatas"
import { useUsers } from "../services/useUsers"


const Home:NextPage = () => {
    // const names = useDatas()
    // console.log(names)

    return (
        <div>
            <Link href="/ranking">
                <h1>go home</h1>
            </Link>
            <Link href="/history">
                <h1>go home</h1>
            </Link>
            <Link href="/post/result">
                <h1>go home</h1>
            </Link>
            <Link href="/post/user">
                <h1>go home</h1>
            </Link>
        </div>
    )
}

export default Home