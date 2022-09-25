import { NextPage } from "next";
import { Datas } from "../models/types";
import { useDatas } from "../services/useDatas";


const History: NextPage = () => {
    const infos: Datas[] = useDatas()

    return (
        <table>
            <thead>
                <tr>
                    <th>black</th>
                    <th>white</th>
                    <th>handicap</th>
                    <th>result</th>
                    <th>date</th>
                </tr>
            </thead>
            <tbody>
                {infos.map((info) => (
                    <tr>
                        <td>{info.black}</td>
                        <td>{info.white}</td>
                        <td>{info.handicap}</td>
                        <td>{info.result}</td>
                        <td>{(info.date).toDate().toDateString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default History
