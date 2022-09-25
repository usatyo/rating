import { useNames } from "../services/useNames"


export default function FirstPost() {
    const names = useNames()

    return (
        <div>
            <h3>rating system</h3>
            <form>
                <div>
                    <label>black</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>white</label>
                    <input type="text"></input>
                </div>
                <div>
                    {names.map((val) => (
                        <div>
                            <label>{val.name}{"  "}{val.rate}</label>
                        </div>
                    ))}
                    <input type="radio"></input>
                    <label>black</label>
                    <input type="radio"></input>
                    <label>white</label>
                </div>
                <input type="submit"></input>
            </form>
        </div>
    )
}