import { getFirestore, addDoc, doc, where, query, updateDoc } from 'firebase/firestore'
import { app } from '../libs/firebase'
import { collection, getDocs } from 'firebase/firestore'
import { Users } from '../models/types'

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export const getUserInfo = async (): Promise<Users[]> => {
  const querySnapshot = await getDocs(collection(db, 'users'))
  let ret = new Array<Users>()
  querySnapshot.forEach((doc) => {
    const user: Users = doc.data() as Users
    ret.push({ ...user })
  })
  ret.sort((a, b) => b.rate - a.rate)
  return ret
}

export const getRateFromName = async (name: string): Promise<number> => {
  const colRef = collection(db, 'users')
  const q = query(colRef, where('name', '==', name))
  return getDocs(q).then((snap) => {
    let rate: number = 0
    snap.forEach((d) => {
      rate = d.data().rate
    })
    return rate
  })
}

export const setUserInfo = async (user: Users): Promise<void> => {
  const colRef = collection(db, 'users')
  await addDoc(colRef, { ...user })
  return
}

export const updateUserRate = async (new_info: Users): Promise<void> => {
  const colRef = collection(db, 'users')
  const q = query(colRef, where('name', '==', new_info.name))
  const snap = await getDocs(q)
  snap.forEach((d) => {
    updateDoc(doc(db, 'users', d.id), { rate: new_info.rate })
  })
  return
}
