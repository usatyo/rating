import { NextPage } from "next";
import { Users } from "../models/types";
import { useUsers } from "../hooks/useUsers";

const Ranking: NextPage = () => {
    const infos: Users[] = useUsers()

    return (
        <table>
            <thead>
                <tr>
                    <th>rank</th>
                    <th>name</th>
                    <th>rate</th>
                </tr>
            </thead>
            <tbody>
                {infos.map((info, idx) => (
                    <tr>
                        <td>{idx + 1}</td>
                        <td>{info.name}</td>
                        <td>{info.rate}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Ranking