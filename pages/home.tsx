import getData from "../repositories/users"

export default function FirstPost() {
    getData()
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