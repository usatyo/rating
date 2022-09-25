import { addDoc, getFirestore, Timestamp } from "firebase/firestore"
import { app } from "../libs/firebase"
import { collection, getDocs } from "firebase/firestore"
import { Datas } from "../models/types"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export const getDataInfo = async (): Promise<Datas[]> => {
    const querySnapshot = await getDocs(collection(db, "datas"))
    let ret = new Array<Datas>()
    querySnapshot.forEach((doc) => {
        const user = doc.data() as Datas
        ret.push({ ...user })
    })
    return ret
}

export const setDataInfo = async (data: Datas): Promise<void> => {
    const colRef = collection(db, "datas")
    await addDoc(colRef,
        {
            black: data.black,
            white: data.white,
            handicap: data.handicap,
            result: data.result,
            date: Timestamp.now(),
        }
    )
    return
}