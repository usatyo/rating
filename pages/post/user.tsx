import { NextPage } from "next";
import ReturnButton from "../../components/returnButton";
import usePostUsers from "../../hooks/usePostUsers";

const PostUser: NextPage = () => {
    const [data, { change: handleChange, click: handleClick }] = usePostUsers()

    return (
        <div>
            <form>
                <div>
                    <label>name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>first rate</label>
                    <input
                        type="number"
                        name="rate"
                        placeholder="1500"
                        value={data.rate}
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={handleClick}>submit</button>
            </form>
            <ReturnButton />
        </div>
    )
}

export default PostUser