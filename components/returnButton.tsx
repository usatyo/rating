import { NextPage } from "next";
import Link from "next/link";

const ReturnButton: NextPage = () => {
    return (
        <Link href="/home">
            <button>return</button>
        </Link>
    )
}

export default ReturnButton