import { NextPage } from "next";
import { Datas } from "../models/types";
import { useDatas } from "../hooks/useDatas";
import { HANDICAP, RESULT } from "../constants/constants";


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
                        <td>{HANDICAP[info.handicap]}</td>
                        <td>{RESULT[info.result + 1]}</td>
                        <td>{
                            String((info.date).toDate().getFullYear()) + "-" +
                            String((info.date).toDate().getMonth()) + "-" +
                            String((info.date).toDate().getDate())
                        }</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default History
