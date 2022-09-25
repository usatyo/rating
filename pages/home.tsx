import { NextPage } from "next"
import Link from "next/link"


const Home: NextPage = () => {
    return (
        <div>
            <Link href="/ranking">
                <h1>ranking</h1>
            </Link>
            <Link href="/history">
                <h1>history</h1>
            </Link>
            <Link href="/post/result">
                <h1>post result</h1>
            </Link>
            <Link href="/post/user">
                <h1>register user</h1>
            </Link>
        </div>
    )
}

export default Home