import { getFirestore, addDoc } from "firebase/firestore"
import { app } from "../libs/firebase"
import { collection, getDocs } from "firebase/firestore"
import { Users } from "../models/types"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export const getUserInfo = async (): Promise<Users[]> => {
    const querySnapshot = await getDocs(collection(db, "users"))
    let ret = new Array<Users>()
    querySnapshot.forEach((doc) => {
        const user = doc.data() as Users
        ret.push({ ...user })
    })
    return ret
}

export const setUserInfo = async (user: Users): Promise<void> => {
    const colRef = collection(db, "users")
    await addDoc(colRef,
        { name: user.name, rate: user.rate }
    )
    return
}