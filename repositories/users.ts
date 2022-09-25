import { getFirestore } from "firebase/firestore"
import { app } from "../libs/firebase"
import { collection, getDocs } from "firebase/firestore"
import { Users } from "../models/types"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

// export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
export const getNames = async (): Promise<Users[]> => {
    const querySnapshot = await getDocs(collection(db, "users"))
    let ret = new Array<Users>()
    querySnapshot.forEach((doc) => {
        const user = doc.data() as Users
        ret.push({ ...user, id:doc.id })
    })
    return ret
}

